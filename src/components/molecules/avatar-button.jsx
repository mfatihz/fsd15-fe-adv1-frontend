import AvatarImage from '../atoms/avatar-image'
import ChevronDownImage from '../atoms/chevron-down-icon'

function AvatarButton({onClick}) {
  return (
    <button
      type="button"
      className="
        bg-transparent border-none cursor-pointer
        flex items-center gap-2
        p-0 rounded
        transition-colors duration-200 ease-in-out
        focus:outline-none
      "
      onClick={onClick}
    >
      <AvatarImage />
      <ChevronDownImage />
    </button>
  )
}

export default AvatarButton