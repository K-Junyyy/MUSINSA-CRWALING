const scheduler = require("node-schedule");
var cheerio = require("cheerio");
var request = require("request");

// API url
var url = "https://store.musinsa.com/app/goods/836816";

const schedule = scheduler.scheduleJob("*/2 * * * * *", function () {
  request(url, function (error, response, html) {
    if (error) {
      throw error;
    }

    var $ = cheerio.load(html);

    var S = $(".option1 option")[1];
    var M = $(".option1 option")[2];
    var L = $(".option1 option")[3];
    var XL = $(".option1 option")[4];

    console.log("====");
    console.log(S.attribs.value + " " + S.attribs.jaego_yn);
    console.log(M.attribs.value + " " + M.attribs.jaego_yn);
    console.log(L.attribs.value + " " + L.attribs.jaego_yn);
    console.log(XL.attribs.value + " " + XL.attribs.jaego_yn);

    if (XL.attribs.jaego_yn == "Y") {
      schedule.cancel();
    }
  });
});
