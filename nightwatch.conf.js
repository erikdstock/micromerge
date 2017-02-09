module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "./setup/globals.js",

  "selenium" : {
    "start_process" : false,
  },

  "test_settings" : {
    "default" : {
      "selenium_port"  : 9515,
      "selenium_host"  : "localhost",
      "default_path_prefix" : "",
      "screenshots" : {
        "enabled" : true,
        "path" : "./screenshots"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions" : {
          "args" : ["--no-sandbox"],
        },
        "acceptSslCerts": true
      }
    },

    "chromeMobile" : { 
      "desiredCapabilities": {
        'chromeOptions': {
          "mobileEmulation" : {
              'deviceName': 'Apple iPhone 6'
          }
        }
      }
    }
  },
}