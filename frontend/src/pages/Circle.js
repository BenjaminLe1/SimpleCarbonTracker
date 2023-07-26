import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './pages.css';

function CircularProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Update the percentage state when props.percentage changes
    setPercentage(props.percentage);
  }, [props.percentage]); // Add [props.percentage] as the second argument to useEffect

  var pathColor = '';
  var trailColor = '';
  var textColor = '';
  if (percentage > 66) {
    pathColor = '#446A46';
    trailColor = '#82A284';
    textColor = '#446A46';
  }
  if (percentage > 33 && percentage <= 66) {
    pathColor = '#F1C93B';
    trailColor = '#FAE392';
    textColor = '#D49B54';
  }
  if (percentage <= 33) {
    pathColor = '#A10035';
    trailColor = '#FF869E';
    textColor = '#850000';
  }

  return (
    <div className='categoryCount'>
      <h4 style={{color: textColor}}>Your Footprint Score</h4>
      <div style={{ width: 150 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            path: {
              stroke: pathColor,
            },
            trail: {
              // Trail color
              stroke: trailColor,
            },
            text: {
              fill: textColor,
            },
          }}
        />
      </div>
    </div>
  );
}

export default CircularProgressBar;
