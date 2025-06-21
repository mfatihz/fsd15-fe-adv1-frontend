import Header from "../organisms/home-header"
import Hero from "../organisms/hero"
import Footer from "../organisms/home-footer"
import GalleriesTemplate from "./galleries-template"
import { useRef } from 'react';

function HomeTemplate({ header, footer, hero, galleries, idToggleHandler, isInMyListHandler }) {
    const topRef = useRef(null);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                navData={header.navData}
                menuData={header.menuData}
                padding="
                    px-4 sm:px-10 md:px-20
                    py-2 sm:py-4 md:py-6
                "
                ref={ topRef }
            />

            <main>
                { hero &&
                    <Hero
                        movies={hero}
                        padding="
                            px-4 sm:px-10 md:px-20
                            pb-4 sm:pb-10 md:pb-20
                        "
                    />
                }

                <GalleriesTemplate
                    galleries={galleries}
                    padding="
                        px-4 sm:px-10 md:px-20
                        py-4 sm:py-10 md:py-20
                    "
                    idToggleHandler={idToggleHandler}
                    isInMyListHandler={isInMyListHandler}
                />
            </main>

            <Footer
                genreData={footer.genreData}
                helpData={footer.helpData}
                className="
                    px-4 sm:px-10 md:px-20
                    py-10 md:py-20
                "
                onClick={scrollToTop}
            />
        </div>
    )
}

export default HomeTemplate