import Header from "../organisms/home-header"
import Hero from "../organisms/hero"
import Footer from "../organisms/home-footer"
import Galleries from "../organisms/galleries"
import { useEffect, useRef } from 'react';
import { usePopupDetail } from "../../stores/use-popup-detail";
import PopupDetailCard from "../organisms/popup-detail-card";
import { Toaster } from "sonner";

function HomeTemplate({ header, footer, hero, galleries, idToggleHandler, isInMyListHandler }) {
    const topRef = useRef(null);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const { isOpen } = usePopupDetail();

    useEffect(() => {
        if (isOpen) {
            // Menambahkan style overflow='hidden' ke html dan body
            // untuk memastikan scrollbar hilang di semua browser
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
  
    return (
        <div className="min-h-screen flex flex-col">
            <Toaster position='top-center'/>
            <Header
                navData={header.navData}
                menuData={header.menuData}
                paddingClass="
                    px-4 sm:px-10 md:px-20
                    py-2 sm:py-4 md:py-6
                "
                ref={ topRef }
            />

            <main>
                { hero &&
                    <Hero
                        movies={hero}
                        paddingClass="
                            px-4 sm:px-10 md:px-20
                            pb-4 sm:pb-10 md:pb-20
                        "
                    />
                }
            { isOpen && 
                <PopupDetailCard
                    insetClass='inset-6 sm:inset-10 md:inset-20'
                    paddingClass="
                        px-4 sm:px-10 md:px-20
                        my-2 sm:my-10
                    "
                    idToggleHandler={idToggleHandler}
                    isInMyListHandler={isInMyListHandler}
                />
            }

                <Galleries
                    galleries={galleries}
                    paddingClass="
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
                paddingClass="
                    px-4 sm:px-10 md:px-20
                    py-10 md:py-20
                "
                onClick={scrollToTop}
            />
        </div>
    )
}

export default HomeTemplate