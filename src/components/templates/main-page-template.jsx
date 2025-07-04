import Header from "../organisms/home-header"
import Hero from "../organisms/hero"
import Footer from "../organisms/home-footer"
import PosterGalleries from "../organisms/poster-galleries"
import { useEffect, useRef } from 'react';
import { usePopupDetailStore } from "../../stores/use-popup-detail";
import PopupDetailCard from "../organisms/popup-detail-card";
import { Toaster } from "sonner";
import { navData, menuData, genreData, helpData } from "../../utils/app/home-utils"
import useLocalStorage from "../../hooks/use-local-storage"

function MainPageTemplate({ hero, galleries }) {
    const header = { navData:navData, menuData:menuData }
    const footer = { genreData:genreData, helpData:helpData }
    const { toggleId: idToggleHandler, hasId: isInMyListHandler } = useLocalStorage('my-lists', new Set());

    const topRef = useRef(null);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const { isOpen } = usePopupDetailStore();

    useEffect(() => {
        if (isOpen) {
            // Menambahkan style overflow='hidden' ke html dan body
            // untuk memastikan scrollbar hilang di semua browser
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
            document.body.style.overflowY = 'auto';
        }
        
        return () => {
            document.documentElement.style.overflowY = 'auto';
            document.body.style.overflowY = 'auto';
        };
    }, [isOpen]);
  
    return (
        <div className="min-h-screen w-dvw flex flex-col mx-auto">
            <Toaster position='top-center'/>

            <Header
                navData={header.navData}
                menuData={header.menuData}
                paddingClass="
                    px-6 sm:px-10 md:px-20
                    py-3 sm:py-4 md:py-6
                "
                ref={ topRef }
            />

            <main>
                { hero &&
                    <Hero
                        movies={hero}
                        paddingClass="
                            px-6 sm:px-10 md:px-20
                            pb-4 sm:pb-10 md:pb-20
                        "
                    />
                }
            { isOpen && 
                <PopupDetailCard
                    heroPaddingClass='p-4 sm:p-8 md:p-16'
                    paddingClass="
                        px-6 sm:px-8 md:px-16
                        my-2 sm:my-8
                    "
                    idToggleHandler={idToggleHandler}
                    isInMyListHandler={isInMyListHandler}
                />
            }

                <PosterGalleries
                    galleries={galleries}
                    paddingClass="
                        px-6 sm:px-10 md:px-20
                        py-4 sm:py-10 md:py-20
                    "
                    idToggleHandler={idToggleHandler}
                    isInMyListHandler={isInMyListHandler}
                />
            </main>

            <Footer
                genreData={footer.genreData}
                helpData={footer.helpData}
                paddingClass="
                    px-6 sm:px-10 md:px-20
                    py-10 md:py-20
                "
                componentGapClass="gap-4 sm:gap-8 md:gap-12"
                contentGap='gap-2 sm:gap-4 md:gap-6'
                onClick={scrollToTop}
            />
        </div>
    )
}

export default MainPageTemplate