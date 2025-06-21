import clsx from 'clsx'

const GalleryTitle = ({children, position="absolute -top-2 left-0"}) => {
    const baseStyle = "text-xl md:text-3xl font-medium"

    return (
        <div className={clsx(baseStyle, position)}>
            {children}
        </div>
    );
};

export default GalleryTitle