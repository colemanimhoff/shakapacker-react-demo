import React from 'react';

import Counter from './Counter';

const App = ({ name }: { name: string }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <Counter />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
        mauris tortor. Fusce eu tellus eget neque vulputate varius. In sed nunc
        nec ex mollis dictum. Duis pretium tincidunt sem ac dictum. Etiam sed
        elit et justo dapibus aliquam ac non elit. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. In
        orci orci, mattis vitae tellus sed, commodo porttitor turpis.
      </p>
    </>
  );
};

export default App;
