/*
  scripts.js
  Author: Eric Liang
  Author URI: https://www.eric-liang.com
  Repository: https://github.com/ewliang/WSJ-Web-Scraper
  Desc: Contains the core logic to scrape the WSJ website data.
  License: GPLv3.0
*/

var req = new XMLHttpRequest();

req.open('GET', 'http://www.wsj.com/mdc/public/page/2_3024-UpgradesDowngrades.html', true);
req.onload = function() {
  if(req.readyState == XMLHttpRequest.DONE) {
    var htmlString = req.responseText;
    var parser = new DOMParser();
    var html = parser.parseFromString(htmlString, 'text/html'); // Convert HTML String to DOM Object

    // Begin Actual Scraping/Parsing
    var tables = html.getElementsByTagName('table');
    // Scrape Update Timestamp
    var regex = /(Updated: )([\w\s,:.])+(ET)/ig;
    var timestamp = '';
    var data = [];
    for(let i = 0; i < tables.length; i++) {
      if(tables[i].innerText.match(regex) !== null) {
        timestamp = tables[i].innerText.match(regex);
      }
      for(let j = 0; j < tables[i].children[0].children.length - 3; j++) { // -3 to remove junk from the end
        var dataRow = [];
        for(let k = 0; k < tables[i].children[0].children[j].children.length; k++) {
          dataRow.push(tables[i].children[0].children[j].children[k].innerText);
        }
        data.push(dataRow);
      }
    }
    console.table(data);
  }
}
req.send(null);
