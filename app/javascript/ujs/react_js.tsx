import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';

const container = document.getElementById('root');
const root = createRoot(container);

const ReactUJS = {
  mountComponents() {
    root.render(<App name="Shakapacker" />);
  },
};

export default ReactUJS;
