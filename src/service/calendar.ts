import ApiCalendar from 'react-google-calendar-api';

const config = {
    clientId:
        '160951993346-412roeq2pf49i3fmtro4an3ada16pd64.apps.googleusercontent.com',
    apiKey: 'AIzaSyAnkQ9JeJ00BiprZe2LuU25JybnZ-8oedw',
    scope: 'https://www.googleapis.com/auth/calendar',
    discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ],
};
const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
