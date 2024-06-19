export const AuthInput: React.FC<{
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}> = ({ type, name, placeholder, required, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className=" p-2 border rounded-xl border-solid border-gray-200 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />
  );
};
