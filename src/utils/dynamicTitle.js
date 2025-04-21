const setDynamicTitle = () => {
    let isActive = true; // eslint-disable-line no-unused-vars
    const originalTitle = 'Quyết Thành | Welcome';
    const alternateTitle = 'Quyết Thành | Portfolio';
  
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isActive = false;
        document.title = alternateTitle;
      } else {
        isActive = true;  // eslint-disable-line no-unused-vars
        document.title = originalTitle;
      }
    });
  };
  
  export default setDynamicTitle;