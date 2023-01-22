const express = require("express");
const app = express();
const dayjs = require('dayjs')
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors({
    origin:"*"
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen(3000, () => {
   console.log("BalasoreClockServer successfully started on the environment port"); 
});
app.get("/", function(req, res) {
        let requestOptions = {
            method: 'GET',
          };
          fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`, requestOptions)
          .then(response => response.json())
          .then(result => showTime(result))
          .catch(error => res.send(error));
          function showTime(result) {
            /*const sample = {
              "year": 2023,
            "month": 1,
            "day": 22,
            "hour": 11,
            "minute": 15,
            "seconds": 17,
            "milliSeconds": 228,
            "dateTime": "2023-01-22T11:15:17.2283566",
            "date": "01/22/2023",
            "time": "11:15",
            "timeZone": "Asia/Kolkata",
            "dayOfWeek": "Sunday",
            "dstActive": false
            }*/
            const year = result["year"];
        const month = result["month"];
        const day = result["day"];
        const hour = result["hour"];
        const minute = result["minute"];
        const seconds = result["seconds"];
        const time = result["time"];
        const dayOfWeek = result["dayOfWeek"];
        res.json({year:year, month:month, day:day, hour:hour, minute:minute, seconds:seconds, time:time, dayOfWeek:dayOfWeek});
          }
}); 