import clsx from "clsx";
import icon from "../../assets/images/icons/check-icon.svg";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function CheckButton({
  checkId = () => Promise.resolve(false),
  idToggleHandler,
  movieId,
  movieTitle,
}) {
  const [isChecked, setIsChecked] = useState(false);

  // Handle async isChecked function
  useEffect(() => {
    async function fetchCheckedStatus() {
      const checked = await checkId(movieId);
      setIsChecked(checked);
    }

    fetchCheckedStatus();

  }, [movieId, checkId]);

  const handleClick = async (movieId) => {
    await idToggleHandler(movieId);
    const newCheckedStatus = await checkId(movieId);
    setIsChecked(newCheckedStatus);
    toast(
      `${movieTitle} berhasil ${
        newCheckedStatus ? "dihapus dari" : "ditambahkan ke"
      } Daftar Saya`
    );
  };

  const baseStyle = `flex items-center justify-center 
    h-8 sm:h-11 w-8 sm:w-11
    px-1 sm:px-2
    rounded-full cursor-pointer
    border box-border focus:outline-none
    hover:scale-105 hover:shadow-md
    hover:border hover:border-yellow-500
    transition-all duration-200
  `;

  const checkedClass = isChecked
    ? "bg-yellow-500 border-yellow-500"
    : "border-white/60";

  return (
    <button
      type="button"
      className={clsx(baseStyle, checkedClass)}
      onClick={() => handleClick(movieId)}
    >
      <img
        src={icon}
        alt="Mute on"
        loading="lazy"
        className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6"
      />
    </button>
  );
}

export default CheckButton;
