const setCorrectDateFormat = (date: string) => {
    const correctDateFormat = /(\d+)-(?<month>\d+)-(?<day>\d+)/;

    if (date) {
        return date.replace(correctDateFormat, '$<day>.$<month>');
    }
    return date;
};

export default setCorrectDateFormat;
