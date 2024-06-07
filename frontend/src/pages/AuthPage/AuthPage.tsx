import { ShineButton } from "src/shared/ShineButton";

export const AuthPage = () => {
  return (
    <>
      <div className="wrapper flex flex-col justify-center items-center h-screen bg-slate-300">
        <img
          src="/logo.png"
          alt=""
          className="logo mb-20 p-4 rounded-2xl scale-150"
        />
        <form
          action=""
          className=" flex flex-col items-center justify-center  p-4 scale-150"
        >
          <input
            type="text"
            name="login"
            id="1"
            placeholder="admin"
            required
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
            className="m-4 p-2 border rounded-xl border-solid border-gray-200  focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <ShineButton text="Login" />
        </form>
      </div>
    </>
  );
};
