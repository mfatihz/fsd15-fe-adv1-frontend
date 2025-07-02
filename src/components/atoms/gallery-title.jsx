import clsx from 'clsx'

const GalleryTitle = ({children, positionClass}) => {
    const baseStyle = "text-xl md:text-3xl font-medium"

    return (
        <div className={clsx(baseStyle, positionClass)}>
            {children}
        </div>
    );
};

export default GalleryTitle