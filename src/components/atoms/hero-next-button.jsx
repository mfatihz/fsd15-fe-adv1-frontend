import ImportantIcon from './important-icon'

function HeroNextButton({ onClick = null}) {
  return (
    <button
      type="button"
      className={`
        flex items-center justify-center gap-2
        text-xs sm:text-sm md:text-base
        h-8 sm:h-11 w-auto
        px-2 sm:px-3 md:px-4
        rounded-full bg-[#333] border-0 cursor-pointer
        transition-all duration-200
        hover:scale-105 hover:shadow-md focus:outline-none
      `}
      onClick={onClick}
    >
      <ImportantIcon />
      Selanjutnya
    </button>
  );
}

export default HeroNextButton;