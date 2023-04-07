export const calculateCards = () => {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour >= 18 && currentHour <= 23) {
        return 6;
    }

    const cardsCount = 24 - currentHour;

    return Math.max(cardsCount, 6);
};
