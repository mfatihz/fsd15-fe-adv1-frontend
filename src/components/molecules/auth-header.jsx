import Logo from "../atoms/chill-logo-full";

const AuthHeader = ({title, message}) => {
  return (
    <header className="flex flex-col gap-3">
      <Logo />
      <div className="flex flex-col text-center">
          <h1 className="tracking-widest text-2xl text-white font-bold max-sm:text-xl">{ title }</h1>
          <p className="tracking-wide text-gray-400 text-base max-sm:text-xs">{ message }</p>
      </div>
    </header>
  );
};

export default AuthHeader;
