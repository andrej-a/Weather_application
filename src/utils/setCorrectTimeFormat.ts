const setCorrectTimeFormat = (time: string): string => {
    return time.split('T')[1];
};
export default setCorrectTimeFormat;
