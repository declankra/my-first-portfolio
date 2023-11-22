import React, { useState, useEffect } from 'react';
import './runStrava.css';
import axios from 'axios';

function RunStrava() {
  const [runData, setRunData] = useState(null);

  useEffect(() => {
    const fetchRunData = async () => {
      try {
        const response = await axios.get('/strava/runs');
        const runs = response.data.filter(activity => activity.type === 'Run');
        if (runs.length > 0) {
          // Assuming the first one is the most recent run and converting distance from meters to miles
          const recentRun = {
            ...runs[0],
            distance: (runs[0].distance / 1609.34).toFixed(2) // Convert meters to miles
          };
          setRunData(recentRun);
        }
      } catch (error) {
        console.error('Error fetching run data:', error);
      }
    };

    fetchRunData();
  }, []);

  if (!runData) {
    return <div>Loading recent run...</div>;
  }

  return (
    <div className="runStrava">
      <h2>My Most Recent Run</h2>
      <p>Distance: {runData.distance} miles</p>
      <p>Duration: {new Date(runData.moving_time * 1000).toISOString().substr(11, 8)} (hh:mm:ss)</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default RunStrava;
