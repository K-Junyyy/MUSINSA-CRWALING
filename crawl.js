const scheduler = require("node-schedule");
const cheerio = require("cheerio");
const request = require("request");
const kakaoTalk = require("./kakaoTalk.js");

function restock(itemNum, size) {
  const schedule = scheduler.scheduleJob("*/2 * * * * *", function () {
    let url = "https://store.musinsa.com/app/goods/" + itemNum;
    request(url, function (error, response, html) {
      if (error) {
        throw error;
      }
      const $ = cheerio.load(html);
      const productTitle = $(".product_title em").text();
      const option = $(".option1 option");
      let map = new Map();
      console.log(productTitle);
      for (let i = 1; i < option.length; i++) {
        // console.log(option[i].attribs.value + " " + option[i].attribs.jaego_yn);
        map.set(option[i].attribs.value, option[i].attribs.jaego_yn);
      }

      console.log("사이즈: " + size);
      console.log("재고: " + map.get(size));

      if (map.get(size) === "Y") {
        const msg = productTitle + " " + size + " 재고있음";
        console.log(msg);
        kakaoTalk.sendMessage(msg);
        schedule.cancel();
      } else {
      }
    });
  });
}

module.exports = {
  restock: restock,
};
