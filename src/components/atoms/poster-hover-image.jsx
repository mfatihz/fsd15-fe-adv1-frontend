const PosterHoverImage = ({ src }) => {
    return (
        <div className={'w-full h-[254px] overflow-hidden'}>
            <img
                src={src}
                alt="Poster"
                className="w-full h-full object-cover" 
            />
        </div>
    );
};

export default PosterHoverImage