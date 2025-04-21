const setDynamicFavicon = () => {
    const favicon = document.querySelector('link[rel="icon"]');
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        favicon.href = '/animated-favicon.gif';
      } else {
        favicon.href = '/favicon.ico';
      }
    });
  };

  export default setDynamicFavicon;