import clsx from 'clsx'
import Gallery from "../organisms/gallery"
import NoContent from "../atoms/no-content"

function GalleriesTemplate({ galleries, padding, idToggleHandler, isInMyListHandler }) {
    const baseStyle = `
        flex-1
        flex flex-col
        overflow-x-hidden
        w-full
    `
    return (
        <main
            className={clsx(baseStyle, padding)}
        >
            { galleries?.length > 0
                ? galleries?.map(
                    (gallery, index) => (
                        <div key={index} className="w-full overflow-visible">
                            <Gallery
                                title={gallery.title}
                                movies={gallery.movies}
                                galleryType={gallery.galleryType}
                                idToggleHandler={idToggleHandler}
                                isInMyListHandler={isInMyListHandler}
                                isWrapped={gallery.isWrapped}
                            />
                        </div>
                    )
                )
                : <NoContent color="text-yellow-500">Galeri belum tersedia</NoContent>
            }
        </main>
    )
}

export default GalleriesTemplate