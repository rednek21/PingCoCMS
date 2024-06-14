import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShineButton } from "src/shared/ShineButton";
import { useTokens } from "src/entities/useTokens";

export const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { createTokens } = useTokens();

  // if (context.authorized) navigate("/admin/");

  const handleSubmit = async () => {
    let data = await createTokens(login, password);
    if (data.detail) {
      setError(data.detail);
    } else {
      setError("");
    }
    if (data.access) {
      document.cookie = `accessJWT=${data.access}; path=/; max-age=31536000`;
      document.cookie = `refreshJWT=${data.refresh}; path=/; max-age=31536000`;
      // context.setAuthorized(true);
      navigate("/admin/");
    }
  };

  return (
    <>
      <div className="wrapper flex flex-col justify-center items-center h-screen bg-slate-300">
        <img
          src="/logo.png"
          alt=""
          className="logo mb-20 p-4 rounded-2xl scale-150"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className=" flex flex-col items-center justify-center  p-4 scale-150"
        >
          <input
            type="text"
            name="login"
            id="1"
            placeholder="admin"
            required
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            className="m-4 p-2 border rounded-xl border-solid border-gray-200 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            type="password"
            name="pass"
            id="2"
            placeholder="*****"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="m-4 p-2 border rounded-xl border-solid border-gray-200  focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />

          <ShineButton text="Login" handleClick={() => {}} />
        </form>
        <span className=" text-pink-600 mt-8 text-xl text-center text-wrap p-4">
          {error}
        </span>
      </div>
    </>
  );
};
