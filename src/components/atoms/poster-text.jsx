
const PosterText = ({children, className='text-[0.65rem] sm:text-sm '}) => {
    return (
        <div className={className}>
            { children }
        </div>
    );
};

export default PosterText