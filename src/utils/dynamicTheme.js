const setDynamicTheme = () => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    window.addEventListener('scroll', () => {
      const arduinoSection = document.querySelector('#arduino');
      if (arduinoSection && arduinoSection.getBoundingClientRect().top < window.innerHeight) {
        metaTheme.setAttribute('content', '#00979D'); // Màu Arduino
      } else {
        metaTheme.setAttribute('content', '#61dafb'); // Màu React
      }
    });
  };

  export default setDynamicTheme;