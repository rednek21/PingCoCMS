import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "src/features/auth";
import { AuthInput } from "src/shared/ui/AuthInput";
import { ShineButton } from "src/shared/ui/ShineButton";

export const LoginForm: React.FC<{ forgotPassButtonHandler: () => void }> = ({
  forgotPassButtonHandler,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginSubmit();
        }}
        className=" flex flex-col items-center justify-center  p-4 gap-4"
      >
        <AuthInput
          type="text"
          name="login"
          placeholder="admin"
          required
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <AuthInput
          type="password"
          name="pass"
          placeholder="*****"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <ShineButton text="Войти" handleClick={() => {}} />
      </form>
      <ShineButton
        text="Забыли пароль?"
        handleClick={forgotPassButtonHandler}
      />
      <span className=" text-pink-600 text-xl text-center text-wrap p-4">
        {error}
      </span>
    </>
  );
};
