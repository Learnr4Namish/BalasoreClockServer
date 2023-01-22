const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors({
    origin:"*"
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen(process.env.PORT, () => {
   console.log("BalasoreClockServer successfully started on the environment port"); 
});
app.get("/", function(req, res) {
    const date = new Date();
    const fullYear = date.getFullYear();
    const month = date.getMonth();
    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const thisMonth = monthsList[month];
    const day = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[day];
    const dateToday = date.getDate();
    const fullDate = String(dateToday) + "/" + String((month + 1)) + "/" + String(fullYear);
    const getHours = date.getHours();
  const getMinutes = date.getMinutes();
  const getSeconds = date.getSeconds();
  const time24 = `${getHours}:${getMinutes}`;
  const result12 = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
   });
  const time12 = result12;
  // Send the response to the client
    res.json({fullYear:fullYear, month:month, thisMonth:thisMonth, day:day, dayName:dayName, fullDate:fullDate, time24: time24, time12:time12, seconds:getSeconds});
}); 