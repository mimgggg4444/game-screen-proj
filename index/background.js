chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "makeTransparent") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.windows.getCurrent({ populate: true }, (currentWindow) => {
        const windowId = currentWindow.id;
        chrome.windows.update(windowId, { state: "minimized" }, () => {
          chrome.tabs.insertCSS(tabId, {
            code: "html, body { background: transparent !important; }",
          });
        });
      });
    });
  }
});
