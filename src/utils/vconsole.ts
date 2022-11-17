export const vConsole = () => {
  if (window.location.href.includes('debug=1')) {
    new window.VConsole();
  }
};
