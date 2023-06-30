(function () {
  console.log("modern.js loded");

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function waitForElm(selector) {
    return new Promise(async (resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      } else {
        while (document.querySelector(selector) === null) {
          // wait for 100ms
          await delay(100);
          console.log("waiting for " + selector)
        }
        return resolve(document.querySelector(selector));
      }
    });
  }

  function waitUntilLoaded(callback) {
    // need to wait until gradio loads everything in the DOM
    waitForElm("#quicksettings").then(() => {
      console.log("quicksettings loaded");
      // do an animation frame just to make sure
      window.requestAnimationFrame(() => {
        callback();
      });
    });
  }

  const emojiList = [
    ["♻️", "fa-recycle"],
    ["🎲️", "fa-random"],
    ["📂", "fa-folder-open"],
    ["↙️", "fa-arrow-circle-down"],
    ["🗑️", "fa-trash"],
    ["🎴", "fa-list-alt"],
    ["🔄", "fa-refresh"],
    ["📋", "fa-clipboard"],
    ["💾", "fa-save"],
    ["📁", "fa-folder"],
    ["📄", "fa-file"],
    ["📊", "fa-bar-chart"],
    ["📈", "fa-line-chart"],
    ["📉", "fa-area-chart"],
    ["📝", "fa-pencil"],
    ["📌", "fa-thumb-tack"],
    ["📎", "fa-paperclip"],
    ["📏", "fa-ruler"],
    ["📐", "fa-scissors"],
    ["📑", "fa-bookmark"],
  ];

  function tagEmojis() {
   // eventually fix, but for now, we cannot replace all emojis one by one as it is too taxing on the browser
  }

  // when document is fully loaded and ready
  waitUntilLoaded(() => {
    tagEmojis();
  });
})();
