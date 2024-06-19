import { useState } from "react";
import { ResetPassForm } from "./ResetPassForm";
import { LoginForm } from "./LoginForm";

export const AuthPage = () => {
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  return (
    <div className="wrapper flex flex-col justify-center items-center h-screen bg-slate-300 text-2xl">
      <img src="/logo.png" alt="" className="logo p-4 rounded-2xl w-80" />
      {isResettingPassword ? (
        <ResetPassForm
          backButtonHandler={() => {
            setIsResettingPassword(false);
          }}
        />
      ) : (
        <LoginForm
          forgotPassButtonHandler={() => {
            setIsResettingPassword(true);
          }}
        />
      )}
    </div>
  );
};
