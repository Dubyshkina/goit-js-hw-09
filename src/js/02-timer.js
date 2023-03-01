import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputText = document.querySelector('input#datetime-picker');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // if(selectedDates < this.defaultDate) {
        //     window.alert("Please choose a date in the future");
        // }
      console.log(selectedDates[0]);

    },
  };

  flatpickr(inputText, options);
  

