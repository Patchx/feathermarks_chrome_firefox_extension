document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const current_tab = tabs[0];
    const tab_title_element = document.getElementById('tab_title');
    let new_text = '';
    
    if (current_tab && current_tab.title) {
      new_text = current_tab.title;
    } else {
      new_text = 'Could not get tab title.';
    }

    if (current_tab && current_tab.url) {
      new_text += ' and url = ' + current_tab.url;
    }

    tab_title_element.textContent = new_text;
  });
});