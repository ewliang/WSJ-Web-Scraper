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
    var tables = document.getElementsByTagName('table');

  }
}
req.send(null);
