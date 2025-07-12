function HeroStartButton({ onClick = null }) {
  return (
    <button
      type="button"
      className={`
        flex items-center justify-center
        text-xs sm:text-sm md:text-base
        h-8 sm:h-11 w-auto
        px-2 sm:px-3 md:px-4
        rounded-full cursor-pointer bg-[#192DB7] border-0
        transition-all duration-200
        hover:scale-105 hover:shadow-md focus:outline-none
      `}
      onClick={onClick}
    >
      Mulai
    </button>
  );
}

export default HeroStartButton;