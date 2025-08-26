// popup.js

document.addEventListener('DOMContentLoaded', () => {
  // Query for the current active tab.
  // The 'activeTab' permission allows us to do this.
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // We expect the query to return an array with a single tab.
    const current_tab = tabs[0];
    const tab_title_element = document.getElementById('tab_title');
    
    if (current_tab && current_tab.title) {
      tab_title_element.textContent = current_tab.title;
    } else {
      tab_title_element.textContent = 'Could not get tab title.';
    }
  });
});