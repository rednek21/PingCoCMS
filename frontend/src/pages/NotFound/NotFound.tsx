import { Link } from "react-router-dom";
import { ShineButton } from "src/shared/ShineButton";

export const NotFound = () => {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center bg-slate-300">
      <h1 className=" text-pink-600 text-xl text-center text-wrap p-4">
        Такой страницы не существует!
      </h1>
      <Link to="/admin/">
        <ShineButton
          text="Вернуться на страницу Администрирования"
          handleClick={() => {}}
        />
      </Link>
    </div>
  );
};
