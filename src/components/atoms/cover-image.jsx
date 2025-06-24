import clsx from 'clsx'

const CoverImage = ({src, className="", alt="Poster"}) => { // className="w-full h-full"
    const baseStyle = "object-cover"

    return (
        <img
            src={src}
            alt={alt}
            className={clsx(baseStyle, className)}
        />
    );
};

export default CoverImage
