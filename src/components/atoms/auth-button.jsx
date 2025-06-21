const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-400 hover:bg-gray-500 text-white",
  };

  return (
    <button
      {...props}
      className={`w-full px-4 py-3 rounded-full text-sm transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
