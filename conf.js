exports.hubURL = "https://hub.browserstack.com/wd/hub"

exports.singleTestCapabilities = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Sierra",
    "buildName": "browserstack-build-1",
    "sessionName": "Selenium-4 Nodejs snippet test",
    "local": "false",
    "seleniumVersion": "4.0.0",
    "userName": process.env["BROWSERSTACK_USER_NAME"] || "YOUR_USER_NAME",
    "accessKey": process.env["BROWSERSTACK_ACCESS_KEY"] || "YOUR_ACCESS_KEY",
  },
  "browserName": "Chrome",
  "browserVersion": "latest",
}

exports.localTestCapabilities = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Sierra",
    "buildName": "browserstack-build-1",
    "sessionName": "Selenium-4 Nodejs snippet test",
    "local": "true",
    "seleniumVersion": "4.0.0",
    "userName": process.env["BROWSERSTACK_USER_NAME"] || "YOUR_USER_NAME",
    "accessKey": process.env["BROWSERSTACK_ACCESS_KEY"] || "YOUR_ACCESS_KEY",
  },
  "browserName": "Chrome",
  "browserVersion": "latest",
}

const parallelTestBaseCapability = {
  "buildName": "browserstack-build-1",
  "local": "false",
  "seleniumVersion": "4.0.0",
  "userName": process.env["BROWSERSTACK_USER_NAME"] || "YOUR_USER_NAME",
  "accessKey": process.env["BROWSERSTACK_ACCESS_KEY"] || "YOUR_ACCESS_KEY",
};

exports.parallelTestCapabilities = [
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Sierra",
      "sessionName": "Selenium-4 Nodejs snippet test",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Sierra",
      "sessionName": "Selenium-4 Nodejs snippet test",
      ...parallelTestBaseCapability
    },
    "browserName": "Safari",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "windows",
      "osVersion": "11",
      "sessionName": "Selenium-4 Nodejs snippet test",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
];
