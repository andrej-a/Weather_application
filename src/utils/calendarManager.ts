import store from '@/store';
import { calendarSagaHandle } from '@/store/slices/calendar';

export const calendarManager = {
    startCalendareSaga() {
        store.dispatch(calendarSagaHandle());
    },
};
