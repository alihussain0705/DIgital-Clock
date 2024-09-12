const time = document.querySelector("#time");
const timeformat = document.querySelector("#time-format");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showtime, 1000);
});

const showtime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (hr > 12) {
    hr = hr - 12;
  }
  hr = hr < 10 ? `0${hr}` : hr;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  time.innerText = `${hr}:${min}:${sec}`;

  if (hr < 12) {
    timeformat.innerText = "AM";
  } else {
    timeformat.innerText = "PM";
  }
  //   console.log("hours", hr, "min", min, "sec", sec);
};

