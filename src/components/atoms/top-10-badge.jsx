import clsx from "clsx"

const Top10Badge = ({className=''}) => {
    const baseStyle = `
        flex flex-col items-center justify-center text-center
        text-white text-[0.65rem] sm:text-sm font-normal leading-none
        p-0.5 md:p-2
        h-10 sm:h-12
        rounded-none rounded-tr-md rounded-bl-md
        bg-[#f32121]
        shadow-md
    `

    return (
        <div className={clsx(baseStyle, className)}>
            Top<br /> 10
        </div>
    );
};

export default Top10Badge