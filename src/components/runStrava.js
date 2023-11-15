import React from 'react';
import './runStrava.css';


import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*

const runStrava = () => {
  const [runData, setRunData] = useState(null);

  useEffect(() => {
    const fetchStravaData = async () => {
      try {
        // Replace with your token and endpoint
        const token = 'YOUR_ACCESS_TOKEN';
        const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const runs = response.data.filter(activity => activity.type === 'Run');
        if (runs.length > 0) {
          setRunData(runs[0]); // Assuming the first one is the most recent
        }
      } catch (error) {
        console.error('Error fetching data from Strava:', error);
      }
    };

    fetchStravaData();
  }, []);

  if (!runData) {
    return <div>Loading recent run...</div>;
  }

  return (
    <div>
      <h2>My Most Recent Run</h2>
      <p>Distance: {runData.distance} meters</p>
      <p>Duration: {runData.moving_time} seconds</p>
      {add more details as needed}
    </div>
  );
};

export default runStrava;

*/