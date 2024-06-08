import { useOutletContext } from "react-router-dom";

type adminContext = {
  authorized: boolean;
};

export const Admin = () => {
  const context = useOutletContext() as adminContext;
  return (
    <div>
      {context.authorized ? <p>You are authorized</p> : <p>IDI NAHUI!</p>}
    </div>
  );
};
