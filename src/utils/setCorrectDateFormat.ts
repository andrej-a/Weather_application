const setCorrectDateFormat = (date: string) => {
    if (date) {
        return date.split('-').reverse().join('.');
    }
    return date;
};

export default setCorrectDateFormat;
