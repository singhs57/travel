import React from 'react'
import './Achivements.css';
import { useCountUp } from 'react-countup';
import Header from '../Header/Header';

const Achivements = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div>
      <div>{countUp}</div>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
};
export default Achivements;