const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-full border border-white/20 bg-transparent text-sm focus:outline-none focus:border-blue-500 ${className}`}
    />
  );
};

export default Input;