var _ = require('lodash')
module.exports = {
  'screencap site': function (browser) {
    var mergedUrl = 'https://merged.artsy.net'
    var microgravityUrl = 'https://m.artsy.net'
    var screenshotPath = './screenshots/'

    var pages = {
      home: '/',
      auctions: '/auctions',
      artists: '/artists',
      collect: '/collect',
      shows: '/shows',
      galleries: '/galleries',
      institutions: '/institutions',
      // admin: '/admin',
      // search: '/admin',
      auctionItem: '/artwork/yaacov-agam-untitled-iv',
      auctionPage: '/auction/heritage-auctions-valentines-day-prints-and-multiples',
      bid: '/auction/heritage-auctions-valentines-day-prints-and-multiples/bid/yaacov-agam-untitled-iv',

    }

    _.each(pages, function (location, pageName) {
      browser
        .url(mergedUrl + location)
        .waitForElementVisible('body', 1000)
        .saveScreenshot(screenshotPath + pageName + '-merged.png')
        .url(microgravityUrl + location)
        .waitForElementVisible('body', 1000)
        .saveScreenshot(screenshotPath + pageName + '-micro.png')
    })
    browser.end()
  }
}
