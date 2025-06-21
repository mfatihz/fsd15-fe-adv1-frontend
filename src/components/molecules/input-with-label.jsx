import Label from "../atoms/auth-label";
import Input from "../atoms/auth-input";

const InputWithLabel = ({ label, ...props }) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  );
};

export default InputWithLabel;
