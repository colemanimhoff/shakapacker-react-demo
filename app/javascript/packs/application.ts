import ReactUJS from 'ujs/react_js';
import App from 'components/App';

declare global {
  interface Window {
    ReactUJS: typeof ReactUJS;
    App: typeof App;
  }
}

window.ReactUJS = ReactUJS;
window.App = App;

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  window.ReactUJS.mountComponents();
});
