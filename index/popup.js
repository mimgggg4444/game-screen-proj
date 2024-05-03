document
  .getElementById("transparency-slider")
  .addEventListener("input", function () {
    const transparency = this.value;
    const alpha = transparency / 100;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setTransparentBackground,
        args: [alpha],
      });
    });
  });

function setTransparentBackground(alpha) {
  document.body.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
}
