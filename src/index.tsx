import React from 'react';
import ReactDOM from 'react-dom';
import {Wrapper} from './index.s';

const App = () => {
  return (
    <Wrapper>
      <h1>Hello</h1>
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
