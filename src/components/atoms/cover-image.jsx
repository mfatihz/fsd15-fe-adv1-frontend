import clsx from 'clsx'

const CoverImage = ({src, className=""}) => { // className="w-full h-full"
    const baseStyle = "object-cover"

    return (
        <img
            src={src}
            alt="Poster"
            className={clsx(baseStyle, className)}
        />
    );
};

export default CoverImage
