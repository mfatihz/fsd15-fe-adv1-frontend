import icon from '../../assets/images/icons/add-icon.svg'

function AddButton({ position = '', onClick = null }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Mute"
      className={`
        flex items-center justify-center 
        h-8 sm:h-11 w-8 sm:w-11
        px-1 sm:px-2
        rounded-full cursor-pointer bg-[#333]/20
        border border-white/60 box-border focus:outline-none
        transition-all duration-200
        hover:scale-105 hover:shadow-md
        ${position == 'right' ? 'ml-auto' : ''}
      `}
    >
      <img
        src={ icon }
        loading="lazy"
        className='h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6'
      />
    </button>
  );
}

export default AddButton;