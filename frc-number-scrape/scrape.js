const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const url = "https://www.thebluealliance.com/teams";

async function scrapeData() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".team-name");
    const teamnumbers = [];
    listItems.each((idx, el) => {
      const teamnumber = {};
      teamnumber.number = $(el).children("a").text();
      teamnumbers.push($(el).children("a").text());
    });
    console.dir(teamnumbers);
    fs.writeFile("targets.json", JSON.stringify(teamnumbers, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Scraped Data");
    });
  } catch (err) {
    console.error(err);
  }
}
scrapeData();