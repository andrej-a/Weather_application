const setCorrectTimeFormat = (time: string): string => {
    if (time) {
        return time.split('T')[1];
    }
    return time;
};
export default setCorrectTimeFormat;
