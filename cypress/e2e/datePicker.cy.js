import datePickerPage from '../pageObjects/DatePickerPage';

describe('Date Picker Test', () => {
  it('Set date to 28th February 2013 12:00 PM', () => {
    datePickerPage.visit();
    datePickerPage.clickDateAndTimeInput();
    datePickerPage.selectYear('2013');
    datePickerPage.selectMonth('February');
    datePickerPage.selectDay('28');
    datePickerPage.selectTime('12:00');
    datePickerPage.verifyInputValue('February 28, 2013 12:00 PM');
  });
});
