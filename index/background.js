chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setTransparentBackground,
  });
});

function setTransparentBackground() {
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}
