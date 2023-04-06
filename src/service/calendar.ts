import envData from '@/constants/envData';

import ApiCalendar from './googleCalendarApi/ApiCalendar';

const {
    CLIEND_ID,
    GOOGLE_API_KEY,
    GOOGLE_CONFIG_SCOPE,
    GOOGLE_CONFIG_DISCOVERY_DOCS,
} = envData;

const config = {
    clientId: CLIEND_ID!,
    apiKey: GOOGLE_API_KEY!,
    scope: GOOGLE_CONFIG_SCOPE!,
    discoveryDocs: [GOOGLE_CONFIG_DISCOVERY_DOCS!],
};
const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
