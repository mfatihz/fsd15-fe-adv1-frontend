import icon from '../../assets/images/icons/google-icon.svg'

const GoogleButton = ({ children = "Masuk dengan Google" }) => {
  return (
    <button 
      type="button"
      className="
        w-full px-4 py-3 rounded-full border border-white/20 bg-white/10
        text-sm text-white focus:outline-none
        hover:bg-white/20 transition flex flex-row justify-center items-center gap-5"
      onClick={() => alert("Login Google belum dikembangkan")}
    >
      <img
          src={icon}
          alt='Google logo'
          loading="lazy"
      />
      { children }
    </button>
  );
};

export default GoogleButton;
