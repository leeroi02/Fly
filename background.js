let firstTabOpened = false;

chrome.runtime.onStartup.addListener(() => {
    firstTabOpened = false; 
});

chrome.tabs.onCreated.addListener((tab) => {
    if (!firstTabOpened) {
        firstTabOpened = true;
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            width: 300,
            height: 200
        });
    }
});
