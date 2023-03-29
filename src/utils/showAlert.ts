import { toast } from 'react-toastify';

const showAlert = (error: string): void => {
    toast.error(error, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
};

export default showAlert;
