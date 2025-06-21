export const getDeviceType = () => {
    const ua = navigator.userAgent;
    const touchPoints = navigator.maxTouchPoints || 1;
    const isTouchDevice = 'ontouchstart' in window || touchPoints > 0;
    
    // Deteksi tablet
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    
    // Deteksi iPad Pro yang memiliki user agent desktop tetapi mendukung touch
    if (/Macintosh/i.test(ua) && isTouchDevice && touchPoints > 1) {
      return "tablet";
    }
    
    // Deteksi mobile
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    
    return "desktop";
};