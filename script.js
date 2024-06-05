const dayCont = document.querySelector(".day");
const dateCont = document.querySelector(".date");
const monthCont = document.querySelector(".month");
const yearCont = document.querySelector(".year");
const hoursCont = document.querySelector(".hour");
const minutesCont = document.querySelector(".minute");
const secondsCont = document.querySelector(".second");
const meridanCont = document.querySelector(".meridian");

setInterval(() => {
  const today = new Date();

  let dayContent = today.getDay();
  let dateContent = today.getDate();
  let monthContent = today.getMonth();
  let yearContent = today.getFullYear();
  let hoursContent = today.getHours();
  let minuteContent = today.getMinutes();
  let secondContent = today.getSeconds();

  let dayText = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  let monthText;

  switch (monthContent) {
    case 0:
      monthText = "January";
      break;
    case 1:
      monthText = "Febuary";
      break;
    case 2:
      monthText = "March";
      break;
    case 3:
      monthText = "April";
      break;
    case 4:
      monthText = "May";
      break;
    case 5:
      monthText = "June";
      break;
    case 6:
      monthText = "July";
      break;
    case 7:
      monthText = "August";
      break;
    case 8:
      monthText = "September";
      break;
    case 9:
      monthText = "October";
      break;
    case 10:
      monthText = "November";
      break;
    case 11:
      monthText = "December";
      break;
  }

  if (hoursContent >= 12) {
    meridanCont.textContent = "PM";
  } else {
    meridanCont.textContent = "AM";
  }

  if (hoursContent >= 12) {
    hoursContent = hoursContent - 12;
  } else if (hoursContent === 0 || hoursContent < 12) {
    hoursContent = 12;
  }

  //   console.log(hoursContent);
  //   console.log(today);

  dayCont.textContent = dayText[dayContent];
  dateCont.textContent = dateContent < 10 ? "0" + dateContent : dateContent;
  monthCont.textContent = monthText;
  yearCont.textContent = yearContent;
  hoursCont.textContent = hoursContent < 10 ? "0" + hoursContent : hoursContent;
  minutesCont.textContent =
    minuteContent < 10 ? "0" + minuteContent : minuteContent;
  secondsCont.textContent =
    secondContent < 10 ? "0" + secondContent : secondContent;
}, 1000);
