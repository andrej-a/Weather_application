import toast from 'react-hot-toast';

const showAlert = (error: string): void => {
    toast.error(`${error}`);
};

export default showAlert;
