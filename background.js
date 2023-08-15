const copyToClipboard = (tab, text) => {
  function injectedFunction(text) {
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
    }
  }
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: injectedFunction,
    args: [text]
  });
};

const updateContextMenus = async () => {
  await chrome.contextMenus.removeAll();

  chrome.contextMenus.create({
      id: "context-hugoshortcoder-copy",
      title: "HugoShortcoder",
      contexts: ["page"]
  });
};

function generateShortcode(url, title) {
  if (url.includes("gist.github.com")) {
    const parts = url.split('/');
    return `{{< gist ${parts[3]} ${parts[4]} >}}`;
  } else if (url.includes("www.instagram.com")) {
    const parts = url.split('/');
    return `{{< instagram ${parts[4]} >}}`;
  } else if (url.includes("twitter.com")) {
    const parts = url.split('/');
    return `{{< tweet user="${parts[3]}" id="${parts[5]}" >}}`;
  } else if (url.includes("vimeo.com")) {
    const parts = url.split('/');
    return `{{< vimeo ${parts[parts.length-1]} >}}`;
  } else if (url.includes("www.youtube.com")) {
    const params = new URLSearchParams(url.split('?')[1]);
    return `{{< youtube ${params.get('v')} >}}`;
  } else {
    return `[${title}](${url})`; 
  }
}

chrome.runtime.onInstalled.addListener(updateContextMenus);
chrome.runtime.onStartup.addListener(updateContextMenus);

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
  case "context-hugoshortcoder-copy":
    const shortcode = generateShortcode(tab.url, tab.title);
    copyToClipboard(tab, shortcode);
    break;
  }
});
