/*
* Takes provided URL passed as argument and make full height screenshots of this page
* with several viewport widths using Nightwatch.js with Selenium.
*
* These viewport widths are taken from common android and iOS devices. Modify as needed.
*
* Takes an optional second argument for the path where screenshots are saved.
*
* Usage:
* $ nightwatch -t viewport-shots.js http://example.com
* $ nightwatch -t viewport-shots.js http://example.com directory/to/save
*/

module.exports = {
  'Viewport Screenshots': function (browser) {
    // Make sure a URL has been passed
    if (process.argv.length < 5) {
      console.log('No URL was specified')
      browser.end()
    }

    var url = process.argv[4]
    console.log(url)
    var saveDirectory = './screenshots'
    var viewportWidths = [240, 320, 360, 568, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920]

    // Optional argument - path to save
    if (process.argv.length >= 6) {
      saveDirectory = process.argv[5]
    }

    browser.url(url).pause(2000).waitForElementVisible('body', 1000).pause(2000)

    viewportWidths.forEach(function (width) {
      browser
        .resizeWindow(width, 700)
        .saveScreenshot(saveDirectory + '/' + width + '.png')
    })

    browser.end()
  }
}
