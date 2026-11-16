class DatePickerPage {
  visit() {
    cy.visit('https://demoqa.com/date-picker');
  }

  clickDateAndTimeInput() {
    cy.get('#dateAndTimePickerInput').click();
  }

  selectYear(year) {
    cy.get('.react-datepicker__year-read-view').click();

    function findYear() {
      cy.get('body').then(($body) => {
        if ($body.find('.react-datepicker__year-option:contains("' + year + '")').length > 0) {
          cy.get('.react-datepicker__year-option').contains(year).click();
        } else {
          cy.get('.react-datepicker__navigation--years-previous').click();
          findYear(); // Keep pressing until shows up
        }
      });
    }

    findYear();
  }

  selectMonth(month) {
    cy.get('.react-datepicker__month-read-view').click();
    cy.get('.react-datepicker__month-option').contains(month).click();
  }

  selectDay(day) {
    cy.get('.react-datepicker__day--0' + day + ':not(.react-datepicker__day--outside-month)').click();
  }

  selectTime(time) {
    cy.get('.react-datepicker__time-list-item').contains(time).click();
  }

  verifyInputValue(expectedValue) {
    cy.get('#dateAndTimePickerInput').should('have.value', expectedValue);
  }
}
export default new DatePickerPage();

