
const PosterText = ({children, styleClass='text-[0.65rem] sm:text-sm'}) => {
    return (
        <div className={styleClass}>
            { children }
        </div>
    );
};

export default PosterText