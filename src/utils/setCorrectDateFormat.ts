const setCorrectDateFormat = (date: string) => {
    return date.split('-').reverse().join('.');
};

export default setCorrectDateFormat;
