export type tokensData = {
  detail?: string;
  access?: string;
  refresh?: string;
};

export const useTokens = () => {
  async function createTokens(login: string, password: string) {
    let result: tokensData = await fetch(
      `${location.protocol + "//" + location.hostname}/auth/jwt/create`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: login, password: password }),
      }
    ).then((response) => {
      return response.json();
    });
    return result;
  }

  async function refreshAccessToken(refreshToken: string) {
    await fetch(
      `${location.protocol + "//" + location.hostname}/auth/jwt/refresh`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.cookie = `accessJWT=${data.access}; path=/; max-age=31536000`;
        document.cookie = `refreshJWT=${data.refresh}; path=/; max-age=31536000`;
      });
  }

  async function verifyToken(token: string) {
    let isVerifyed = false;
    await fetch(
      `${location.protocol + "//" + location.hostname}/auth/jwt/verify`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      }
    ).then(async (response) => {
      if (response.status === 200) {
        isVerifyed = true;
      }
    });
    return isVerifyed;
  }

  function removeTokens() {
    document.cookie = `accessJWT=; path=/; max-age=0`;
    document.cookie = `refreshJWT=; path=/; max-age=0`;
  }

  return {
    createTokens,
    refreshAccessToken,
    verifyToken,
    removeTokens,
  };
};
