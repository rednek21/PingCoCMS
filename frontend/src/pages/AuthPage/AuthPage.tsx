import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "src/features/auth";
import { ShineButton } from "src/shared/ui/ShineButton";

export const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [isResetSent, setIsResetSent] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = async () => {
    const err = await auth.login(login, password);
    if (err) {
      setError(err);
      setPassword("");
    } else {
      navigate("/admin");
    }
  };
  const handleForgotPassword = () => {
    setIsResettingPassword(true);
  };

  const handleResettingSubmit = () => {
    console.log(email);
    setEmail("");
    setIsResetSent(true);
  };

  return (
    <div className="wrapper flex flex-col justify-center items-center h-screen bg-slate-300 text-2xl">
      <img src="/logo.png" alt="" className="logo p-4 rounded-2xl w-1/2" />
      {isResettingPassword ? (
        //recovery form
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleResettingSubmit();
            }}
            className=" flex flex-col items-center justify-center  p-4 gap-4"
          >
            <input
              type="email"
              name="email"
              id="1"
              placeholder="admin@gmail.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" p-2 border rounded-xl border-solid border-gray-200 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />

            <ShineButton text="Сбросить пароль" handleClick={() => {}} />
          </form>
          <ShineButton
            text="Назад"
            handleClick={() => {
              setIsResettingPassword(false);
            }}
          />
          {isResetSent ? (
            <span className=" text-green-700 text-xl text-center text-wrap p-4">
              На почту отправлено сообщение с инструкцией по сбросу пароля.
            </span>
          ) : (
            <></>
          )}
        </>
      ) : (
        //auth form
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLoginSubmit();
            }}
            className=" flex flex-col items-center justify-center  p-4 gap-4"
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
              className=" p-2 border rounded-xl border-solid border-gray-200 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
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
              className=" p-2 border rounded-xl border-solid border-gray-200  focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />

            <ShineButton text="Войти" handleClick={() => {}} />
          </form>
          <ShineButton
            text="Забыли пароль?"
            handleClick={() => {
              handleForgotPassword();
            }}
          />
          <span className=" text-pink-600 text-xl text-center text-wrap p-4">
            {error}
          </span>
        </>
      )}
    </div>
  );
};
