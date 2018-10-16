import React, { Component } from 'react';
import './App.css';

import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';

const popover = (
  <Popover id="test-popover-2" title="This is the title 2">
    Hello!
  </Popover>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={(
            <Popover id="test-popover-1" title="This is the title 1">
              Hello!
            </Popover>
          )}
        >
          <Button>Push Me</Button>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={popover}
        >
          <Button>Push Me</Button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default App;
