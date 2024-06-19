import { useState } from "react";
import { users } from "src/features/users";
import { AuthInput } from "src/shared/ui/AuthInput";
import { ShineButton } from "src/shared/ui/ShineButton";

export const ResetPassForm: React.FC<{ backButtonHandler: () => void }> = ({
  backButtonHandler,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isResetSent, setIsResetSent] = useState(false);

  const handleResettingSubmit = async () => {
    const err = await users.resetPasswordByEmail(email);
    if (err) {
      setError(err);
      setIsResetSent(false);
    } else {
      setEmail("");
      setIsResetSent(true);
      setError("");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleResettingSubmit();
        }}
        className=" flex flex-col items-center justify-center  p-4 gap-4"
      >
        <AuthInput
          type="email"
          name="email"
          placeholder="admin@gmail.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <ShineButton text="Сбросить пароль" handleClick={() => {}} />
      </form>
      <ShineButton text="Назад" handleClick={backButtonHandler} />
      {isResetSent ? (
        <span className=" text-green-700 text-xl text-center text-wrap p-4">
          На почту отправлено сообщение с инструкцией по сбросу пароля.
        </span>
      ) : (
        <></>
      )}
      <span className=" text-pink-600 text-xl text-center text-wrap p-4">
        {error}
      </span>
    </>
  );
};
