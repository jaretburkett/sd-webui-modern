(function () {
  console.log("modern.js loded");

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
    console.log("tagEmojis() called");
    // Get all elements in the document body:
    let all = document.body.getElementsByTagName("*");

    // Go through every element:
    for (let i = 0, max = all.length; i < max; i++) {
      let htmlContent = all[i].innerHTML;

      // If the innerHTML contains one of your emojis, wrap it in a <span> with a class:
      for (let e = 0; e < emojiList.length; e++) {
        if (htmlContent.includes(emojiList[e][0])) {
          all[i].innerHTML = htmlContent.replace(
            new RegExp(emojiList[e][0], "g"),
            '<i class="fa ' + emojiList[e][1] + '"></i>'
          );
        }
      }
    }
  }

  console.log('setting up listners')
  // when document is fully loaded and ready
  document.addEventListener("DOMContentLoaded", () => {
    tagEmojis();
  });
  // if it is already loaded, tag emojis
  if (document.readyState === "complete") {
    tagEmojis();
  }
})();
