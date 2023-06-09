const __defProp = Object.defineProperty;
const __defProps = Object.defineProperties;
const __getOwnPropDesc = Object.getOwnPropertyDescriptor;
const __getOwnPropDescs = Object.getOwnPropertyDescriptors;
const __getOwnPropNames = Object.getOwnPropertyNames;
const __getOwnPropSymbols = Object.getOwnPropertySymbols;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __propIsEnum = Object.prototype.propertyIsEnumerable;
const __defNormalProp = (obj, key, value) =>
    key in obj
        ? __defProp(obj, key, {
              enumerable: true,
              configurable: true,
              writable: true,
              value,
          })
        : (obj[key] = value);
const __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
const __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const __export = (target, all) => {
    for (const name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
const __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === 'object') || typeof from === 'function') {
        for (const key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable:
                        !(desc = __getOwnPropDesc(from, key)) ||
                        desc.enumerable,
                });
    }
    return to;
};
const __toCommonJS = mod =>
    __copyProps(__defProp({}, '__esModule', { value: true }), mod);

const scriptSrcGoogle = 'https://accounts.google.com/gsi/client';
const scriptSrcGapi = 'https://apis.google.com/js/api.js';
const ApiCalendar = class {
    constructor(config) {
        this.config = config;
        this.tokenClient = null;
        this.onLoadCallback = null;
        this.calendar = 'primary';
        try {
            this.initGapiClient = this.initGapiClient.bind(this);
            this.handleSignoutClick = this.handleSignoutClick.bind(this);
            this.handleAuthClick = this.handleAuthClick.bind(this);
            this.createEvent = this.createEvent.bind(this);
            this.listUpcomingEvents = this.listUpcomingEvents.bind(this);
            this.listEvents = this.listEvents.bind(this);
            this.createEventFromNow = this.createEventFromNow.bind(this);
            this.onLoad = this.onLoad.bind(this);
            this.setCalendar = this.setCalendar.bind(this);
            this.updateEvent = this.updateEvent.bind(this);
            this.deleteEvent = this.deleteEvent.bind(this);
            this.getEvent = this.getEvent.bind(this);
            this.handleClientLoad();
        } catch (e) {
            console.log(e);
        }
    }

    get sign() {
        return !!this.tokenClient;
    }

    initGapiClient() {
        gapi.client
            .init({
                apiKey: this.config.apiKey,
                discoveryDocs: this.config.discoveryDocs,
                hosted_domain: this.config.hosted_domain,
            })
            .then(() => {
                if (this.onLoadCallback) {
                    this.onLoadCallback();
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleClientLoad() {
        const scriptGoogle = document.createElement('script');
        const scriptGapi = document.createElement('script');
        scriptGoogle.src = scriptSrcGoogle;
        scriptGoogle.async = true;
        scriptGoogle.defer = true;
        scriptGapi.src = scriptSrcGapi;
        scriptGapi.async = true;
        scriptGapi.defer = true;
        document.body.appendChild(scriptGapi);
        document.body.appendChild(scriptGoogle);
        scriptGapi.onload = () => {
            gapi.load('client', this.initGapiClient);
        };
        scriptGoogle.onload = async () => {
            this.tokenClient = await google.accounts.oauth2.initTokenClient({
                client_id: this.config.clientId,
                scope: this.config.scope,
                prompt: '',
                callback: () => {},
            });
        };
    }

    handleAuthClick() {
        return new Promise((resolve, _) => {
            this.tokenClient.callback = resp => {
                resolve(resp);
            };

            if (gapi && this.tokenClient) {
                if (gapi.client.getToken() === null) {
                    this.tokenClient.requestAccessToken({ prompt: 'consent' });
                } else {
                    this.tokenClient.requestAccessToken({
                        prompt: '',
                    });
                }
            } else {
                console.error('gapi not loaded');
            }
        });
    }

    setCalendar(newCalendar) {
        this.calendar = newCalendar;
    }

    onLoad(callback) {
        if (gapi) {
            callback();
        } else {
            this.onLoadCallback = callback;
        }
    }

    handleSignoutClick() {
        if (gapi) {
            const token = gapi.client.getToken();
            if (token !== null) {
                google.accounts.id.disableAutoSelect();
                google.accounts.oauth2.revoke(token.access_token, () => {});
                gapi.client.setToken(null);
            }
        } else {
            console.error('Error: this.gapi not loaded');
        }
    }

    listUpcomingEvents(maxResults, calendarId = this.calendar) {
        if (gapi) {
            return gapi.client.calendar.events.list({
                calendarId,
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults,
                orderBy: 'startTime',
            });
        }
        console.error('Error: this.gapi not loaded');
        return false;
    }

    listEvents(queryOptions, calendarId = this.calendar) {
        if (gapi) {
            return gapi.client.calendar.events.list(
                __spreadValues(
                    {
                        calendarId,
                    },
                    queryOptions,
                ),
            );
        }
        console.error('Error: gapi not loaded');
        return false;
    }

    createEventFromNow(
        { time, summary, description = '' },
        calendarId = this.calendar,
        timeZone = 'Europe/Paris',
    ) {
        const event = {
            summary,
            description,
            start: {
                dateTime: new Date().toISOString(),
                timeZone,
            },
            end: {
                dateTime: new Date(
                    new Date().getTime() + time * 6e4,
                ).toISOString(),
                timeZone,
            },
        };
        return this.createEvent(event, calendarId);
    }

    createEvent(event, calendarId = this.calendar, sendUpdates = 'none') {
        if (gapi.client.getToken()) {
            return gapi.client.calendar.events.insert({
                calendarId,
                resource: event,
                sendUpdates,
                conferenceDataVersion: 1,
            });
        }
        console.error('Error: this.gapi not loaded');
        return false;
    }

    createEventWithVideoConference(
        event,
        calendarId = this.calendar,
        sendUpdates = 'none',
    ) {
        return this.createEvent(
            __spreadProps(__spreadValues({}, event), {
                conferenceData: {
                    createRequest: {
                        requestId: crypto.randomUUID(),
                        conferenceSolutionKey: {
                            type: 'hangoutsMeet',
                        },
                    },
                },
            }),
            calendarId,
            sendUpdates,
        );
    }

    deleteEvent(eventId, calendarId = this.calendar) {
        if (gapi) {
            return gapi.client.calendar.events.delete({
                calendarId,
                eventId,
            });
        }
        console.error('Error: gapi is not loaded use onLoad before please.');
        return null;
    }

    updateEvent(
        event,
        eventId,
        calendarId = this.calendar,
        sendUpdates = 'none',
    ) {
        if (gapi) {
            return gapi.client.calendar.events.patch({
                calendarId,
                eventId,
                resource: event,
                sendUpdates,
            });
        }
        console.error('Error: gapi is not loaded use onLoad before please.');
        return null;
    }

    getEvent(eventId, calendarId = this.calendar) {
        if (gapi) {
            return gapi.client.calendar.events.get({
                calendarId,
                eventId,
            });
        }
        console.error('Error: gapi is not loaded use onLoad before please.');
        return null;
    }

    listCalendars() {
        if (gapi) {
            return gapi.client.calendar.calendarList.list();
        }
        console.error('Error: gapi is not loaded use onLoad before please.');
        return null;
    }

    createCalendar(summary) {
        if (gapi) {
            return gapi.client.calendar.calendars.insert({ summary });
        }
        console.error('Error: gapi is not loaded use onLoad before please.');
        return null;
    }
};
const ApiCalendar_default = ApiCalendar;
export default ApiCalendar;
