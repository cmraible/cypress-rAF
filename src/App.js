import React, { useState, useEffect } from 'react';
import { Box, Button, Layer } from 'grommet';

function Modal({close}) {
  return (
    <Layer animation="fadeIn">
      <Box animation={{type: "fadeIn", duration: 1000}}>
        Hello
      </Box>
      <Button onClick={() => close()} label="Close" />
    </Layer>
  )
}

function App() {
  const [open, setOpen] = useState(false);

  let lastTimestamp

  useEffect(() => {
    window.addEventListener('blur', () => {
      console.groupEnd();
      console.group('blurred');
    });
    window.addEventListener('focus', () => {
      console.groupEnd()
      console.group('focused');
    });
  }, []);

  const step = (timestamp) => {

    const elapsed = timestamp - lastTimestamp;
    if (elapsed > 17) {
      console.log(`Timestamp: ${timestamp} -> Elapsed: ${elapsed}`);
    }
    lastTimestamp = timestamp;
    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)



  return (
    <>
    <Box>
      <Button onClick={() => setOpen(true)} label="Open" />
    </Box>

    {(open && <Modal close={() => setOpen(false)} />)}
    </>
  );
}

export default App;
