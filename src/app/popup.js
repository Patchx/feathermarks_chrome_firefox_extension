const fetch_button = document.getElementById('bookmark-action');

fetch_button.addEventListener('click', () => {
  chrome.tabs.query({
    active: true, 
    currentWindow: true,
  }, (tabs) => {
    const current_tab = tabs[0];
    let redirect_url =  'https://feathermarks.com/home';

    if (current_tab && current_tab.title && current_tab.url) {
      const encoded_title = encodeURIComponent(current_tab.title);
      const encoded_url = encodeURIComponent(current_tab.url);
      redirect_url += '?new_title=' + encoded_title + '&new_url=' + encoded_url;
    }

    chrome.tabs.create({url: redirect_url});
  });
});