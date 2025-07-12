import { useRef, useState, useEffect } from 'react';
import ScrollRightButton from "../atoms/scroll-right-button";
import ScrollLeftButton from "../atoms/scroll-left-button";
import { getDeviceType } from '../../utils/get-device-type';
import WallPosters from './wall-posters';
import clsx from 'clsx'

const PosterSlider = ({ movies, galleryType, idToggleHandler, checkId, isWrapped }) => {
  const posterContainer = useRef(null)
  const scrollContainerRef = useRef(null);
  const itemRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isDesktopTypeDevice, setIsDesktopTypeDevice] = useState(true);

  const scrollButtonBaseStyle = `
    absolute z-20 bottom-1/2 translate-y-1/2
    transition-opacity duration-300
    hover:opacity-80
  `;

  // Check for mobile and content overflow
  useEffect(() => {
    const checkDeviceType = () => {
      setIsDesktopTypeDevice(getDeviceType() === 'desktop');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType)

    const checkIfMobile = () => {
      setIsMobile(
        // berdasarkan ukuran layar dan pemeriksaan type devices secara sederhana
        (window.innerWidth < 640) && (!isDesktopTypeDevice)
      );
    };

    const checkContentOverflow = () => {
      if (scrollContainerRef.current && itemRef.current) {
        const container = scrollContainerRef.current;
        const itemWidth = itemRef.current.offsetWidth;
        const gap = 16; // space-x-4 = 16px
        const totalContentWidth = movies?.length * (itemWidth + gap) - gap;

        setShowScrollButtons(
          !isWrapped && !isMobile &&
          totalContentWidth > container.offsetWidth
        );
      }
    };

    checkDeviceType();
    checkIfMobile();
    checkContentOverflow();

    const resizeObserver = new ResizeObserver(checkContentOverflow);
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    window.addEventListener('resize', getDeviceType);
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('resize', checkContentOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', getDeviceType);
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('resize', checkContentOverflow);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [movies?.length, isDesktopTypeDevice, isMobile, isWrapped]);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const smoothScroll = (distance, duration = 800) => {
    if (!scrollContainerRef.current || isScrolling) return;

    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const start = container.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      container.scrollLeft = start + distance * easedProgress;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    container.scrollLeft = start + distance * 0.05;
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  const handleScrollLeft = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = -(itemWidth + gap) * 2;
    smoothScroll(scrollAmount);
  };

  const handleScrollRight = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = (itemWidth + gap) * 2;
    smoothScroll(scrollAmount);
  };

  const [xBoundary, setXBoundary] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (posterContainer.current) {
        setXBoundary({
          left: posterContainer.current.getBoundingClientRect().left,
          right: posterContainer.current.getBoundingClientRect().right
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <div
      className="relative overflow-visible"
      ref={posterContainer}
    >
      <WallPosters
        movies={movies}
        galleryType={galleryType}
        isWrapped={isWrapped}
        xBoundary={xBoundary}
        scrollContainerRef={scrollContainerRef}
        itemRef={itemRef}
        idToggleHandler={idToggleHandler}
        checkId={checkId}
      />

      {showScrollButtons &&
        <ScrollLeftButton
          onClick={(e) => {
            e.stopPropagation();
            handleScrollLeft();
          }}
          className={clsx(scrollButtonBaseStyle, "left-0 -translate-x-1/2")}
        />
      }

      {showScrollButtons &&
        <ScrollRightButton
          onClick={(e) => {
            e.stopPropagation();
            handleScrollRight();
          }}
          className={clsx(scrollButtonBaseStyle, "right-0 translate-x-1/2")}
        />
      }
    </div>
  );
};

export default PosterSlider;