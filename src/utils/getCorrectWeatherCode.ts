const getCorrectWeatherCode = (code: number) => {
    switch (code) {
        case 0:
            return 2;
        case 1:
            return 3;
        case 2:
            return 4;
        case 3:
            return 7;
        case 45:
            return 9;
        case 48:
            return 9;
        case 51:
            return 10;
        case 53:
            return 11;
        case 55:
            return 11;
        case 56:
            return 23;
        case 57:
            return 23;
        case 61:
            return 10;
        case 63:
            return 11;
        case 65:
            return 11;
        case 66:
            return 23;
        case 67:
            return 23;
        case 71:
            return 16;
        case 73:
            return 17;
        case 75:
            return 17;
        case 77:
            return 25;
        case 80:
            return 13;
        case 81:
            return 13;
        case 82:
            return 13;
        case 85:
            return 19;
        case 86:
            return 19;
        case 95:
            return 14;
        case 96:
            return 14;
        case 99:
            return 14;

        default:
            return 1;
    }
};

export default getCorrectWeatherCode;
