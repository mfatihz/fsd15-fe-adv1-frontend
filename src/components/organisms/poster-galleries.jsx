import clsx from "clsx";
import PosterGallery from "./poster-gallery";
import NoContent from "../atoms/no-content";

function PosterGalleries({
    galleries,
    paddingClass,
    idToggleHandler,
    checkId,
}) {
    const baseStyle = `
        flex-1
        flex flex-col
        overflow-x-hidden
        w-full
    `;
    
    return (
        <main className={clsx(baseStyle, paddingClass)}>
            {galleries?.length > 0 ? (
                galleries?.map((gallery, index) => (
                    gallery?.movies?.length > 0
                        && <div key={index} className="w-full overflow-visible">
                            <PosterGallery
                                title={gallery.title}
                                movies={gallery.movies}
                                galleryType={gallery.gallery_type}
                                idToggleHandler={idToggleHandler}
                                checkId={checkId}
                                isWrapped={gallery.isWrapped}
                            />
                        </div>
                ))
            ) : (
                <NoContent color="text-yellow-500">Galeri belum tersedia</NoContent>
            )}
        </main>
    );
}

export default PosterGalleries;
