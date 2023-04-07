import { myMockFunc } from './helpers';

/* describe('Houme page', () => {
    it('visit application', () => {
        cy.visit('http://localhost:3030/');
    });

    it('switch to hourly mode', () => {
        cy.get(`[data-test="hourlyButton"]`).click();
        cy.get(`[data-test="hourlyWeatherCard"]`).should(
            'have.length',
            calculateCards(),
        );
    });
    it('switch to daily mode', () => {
        cy.get(`[data-test="dailyButton"]`).click();
        cy.get(`[data-test="dailyWeatherCard"]`).should('have.length', 7);
    });
    it('check input value', () => {
        cy.get(`[data-test="searchInput"]`).should('have.value', 'Minsk-BY');
    });
    it('type value to input', () => {
        cy.get(`[data-test="searchInput"]`).focus();
        cy.get(`[data-test="searchInput"]`).clear();
        cy.get(`[data-test="searchInput"]`).type('London');
        cy.get(`[data-test="searchInput"]`).should('have.value', 'London');
    });
    it('select found item', () => {
        cy.get(`[data-test="searchInput"]`).focus();
        cy.get(`[data-test="searchInput"]`).clear();
        cy.get(`[data-test="searchInput"]`).type('London');
        cy.wait(2000);
        cy.get(`[data-test="elastickItem"]`)
            .first()
            .should('have.text', 'London, GB England');
        cy.get(`[data-test="elastickItem"]`).first().click();
        cy.get(`[data-test="searchInput"]`).should('have.value', 'London-GB');
    });
    it('submit with new value', () => {
        cy.get(`[data-test="dailyWeatherCard"]`).should('have.length', 7);
        cy.get(`[data-test="hourlyButton"]`).click();
        cy.get(`[data-test="hourlyWeatherCard"]`).should(
            'have.length',
            calculateCards(),
        );
    });
    it('correct clock and calendar value', () => {
        const { hours, minutes, month, day, year, date } = getCurrentDate();
        const currentTime = `${hours}:${minutes}`;
        const currentDate = `${day}, ${date} ${month} ${year}`;
        cy.get(`[data-test="timeItem"]`).should('have.text', currentTime);
        cy.get(`[data-test="dateItem"]`).should('have.text', currentDate);
    });
});
 */
describe('calendar test', () => {
    it('visit page', () => {
        cy.visit('http://localhost:3030/', {
            onBeforeLoad() {
                myMockFunc();
            },
        });
    });
    it('should have correct number of calendar items', () => {
        cy.wait(1000);
        -cy
            .get('[data-test="calendar_login_button"]')
            .should('have.text', 'Sign Out');
        cy.get('[data-test="calendar_items"]').should('have.length', 3);
        cy.get('[data-test="calendar_login_button"]').click();
        cy.wait(2000);
        -cy
            .get('[data-test="calendar_login_button"]')
            .should('have.text', 'Sign In');
        cy.get('[data-test="calendar_items"]').should('have.length', 0);
    });
});
