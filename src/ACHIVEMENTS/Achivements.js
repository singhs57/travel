import React from 'react'
import './Achivements.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faSmileWink, faPlaneDeparture, faTree, faTaxi } from '@fortawesome/free-solid-svg-icons';

const Achivements = () => {

  return (
    <div>
      <div className='middle'>
        <h1>Our Achivements</h1>
        <p>Happiness is that state of consciousness which proceeds from the achievement of one's values...!</p>
        <div className='counting-sec'>
          <div className='inner-width'>
            <div className='col1'>
              <i><FontAwesomeIcon icon={faTree} /></i>
              <div><CountUp start={0} end={125} duration={10} className='countup' /></div>
              <h3>DESTINATIONS</h3>
            </div>

            <div className='col1'>
              <i><FontAwesomeIcon icon={faSmileWink} /></i>
              <div><CountUp start={0} end={4215} duration={5} className='countup' /></div>
              <h3>CUSTOMERS</h3>
            </div>

            <div className='col1'>
              <i><FontAwesomeIcon icon={faPlaneDeparture} /></i>
              <div><CountUp start={0} end={215} duration={5} className='countup' /></div>
              <h3>TOURS</h3>
            </div>

            <div className='col1'>
              <i><FontAwesomeIcon icon={faTaxi} /></i>
              <div><CountUp start={0} end={17} duration={5} className='countup' /></div>
              <h3>TOUR TYPES</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achivements;