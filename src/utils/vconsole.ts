export const vConsole = () => {
  if (window.location.href.includes('debug=1')) {
    let scriptToAdd = document.createElement('script');
    scriptToAdd.src = '/vconsole.js';
    // document.head.appendChild(scriptToAdd);
    document.querySelector('head')?.appendChild(scriptToAdd);
  }
};
