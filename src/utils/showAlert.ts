import { alertService } from 'alertor-library';

import alertDescription from '@/constants/alertDescription';

const showAlert = (error: string): void => {
    alertService.addAlert({
        ...alertDescription,
        type: 'error',
        title: error,
    });
};

export default showAlert;
