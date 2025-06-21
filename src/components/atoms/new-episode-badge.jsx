import clsx from "clsx"

const NewEpisodeBadge = ({className=''}) => {
    const baseStyle = `
        flex items-center justify-center
        text-white text-[0.65rem] sm:text-sm font-normal leading-none
        px-1 sm:px-2 py-1
        rounded-md
        bg-[#2196F3]
        shadow-md
    `

    return (
        <div className={clsx(baseStyle, className)}>
            Episode Baru
        </div>
    );
};

export default NewEpisodeBadge