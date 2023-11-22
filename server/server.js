const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();

// In-memory storage for the access token
let accessToken = null;
let lastRefresh = 0; // Timestamp of the last refresh

// Refresh the access token
const refreshAccessToken = async () => {
    try {
        const response = await axios.post('https://www.strava.com/oauth/token', {
            client_id: process.env.STRAVA_CLIENT_ID,
            client_secret: process.env.STRAVA_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        });

        accessToken = response.data.access_token;
        lastRefresh = Date.now();
        console.log('Access token refreshed');
    } catch (error) {
        console.error('Error refreshing Strava token:', error);
        throw new Error('Failed to refresh token');
    }
};

// Middleware to ensure the access token is fresh before any Strava API call
const ensureFreshToken = async (req, res, next) => {
    try {
        // Refresh the token every 24 hours (24 * 60 * 60 * 1000 milliseconds)
        if (!accessToken || Date.now() - lastRefresh >= 24 * 60 * 60 * 1000) {
            await refreshAccessToken();
        }
        next();
    } catch (error) {
        res.status(500).send('Failed to refresh Strava token');
    }
};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// The "catchall" handler: for any request that doesn't match one above, send back the React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Endpoint to fetch the run activity data from strava API
app.get('/strava/runs', ensureFreshToken, async (req, res) => {
    try {
        const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        // Filter for runs and send them back to the frontend
        const runs = response.data.filter(activity => activity.type === 'Run');
        res.json(runs);
    } catch (error) {
        console.error('Failed to fetch activities:', error);
        res.status(500).json({ error: 'Failed to fetch activities' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
