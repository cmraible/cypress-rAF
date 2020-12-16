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
    // Create new console group each time window is blurred (backgrounded) or focused
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
    // Calculate elapsed time since last animationFrame was rendered
    // If more than 17 ms, log the current timestamp and elapsed time since last animationFrame
    const elapsed = timestamp - lastTimestamp;
    if (elapsed > 17) {
      console.log(`Timestamp: ${timestamp} -> Elapsed: ${elapsed}`);
    }
    lastTimestamp = timestamp;

    // as soon as we're done with this frame, request another
    window.requestAnimationFrame(step)
  }

  // Request an animation frame
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
