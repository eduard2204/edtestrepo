"use strict";
exports.__esModule = true;
exports.config = void 0;
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome"
    },
    specs: [
        "Tests/*Test.js",
    ]
};
