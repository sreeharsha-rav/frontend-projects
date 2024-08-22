document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('saveButton');
    const itemList = document.getElementById('itemList');
    const itemPreview = document.getElementById('itemPreview');
    
    // Display the item preview based on the current tab's title
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabTitle = tabs[0].title;
      const truncatedTitle = tabTitle.length > 50 ? tabTitle.substring(0, 50) + '...' : tabTitle;
      itemPreview.textContent = truncatedTitle;
    });
  
    // Save the current tab
    saveButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          const url = tabs[0].url;
          const tabTitle = tabs[0].title;
          const truncatedTitle = tabTitle.length > 50 ? tabTitle.substring(0, 50) + '...' : tabTitle;
    
          // Save the item to storage
          chrome.storage.sync.get('savedTabs', function (data) {
            const savedTabs = data.savedTabs || [];
            savedTabs.push({ url, title: truncatedTitle });
            chrome.storage.sync.set({ savedTabs }, function() {
              // Update the tab list
              updateTabList();
              // Clear the preview
              itemPreview.textContent = "Tab saved!";
            });
          });
        });
    });
  
    // Load and display saved tabs from storage
    function updateTabList() {
        chrome.storage.sync.get('savedTabs', function (data) {
          const savedTabs = data.savedTabs || [];
          itemList.innerHTML = ''; // Clear existing content
    
          savedTabs.forEach(tab => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <div class="item-container">
                <div class="item-info">
                  <a href="${tab.url}" target="_blank">${tab.title}</a>
                </div>
                <button class="deleteButton" data-url="${tab.url}">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>`;
            itemList.appendChild(listItem);
        });

        // Attach event listeners to delete buttons
        const deleteButtons = document.querySelectorAll('.deleteButton');
        deleteButtons.forEach(button => {
          button.addEventListener('click', function () {
            const urlToDelete = button.getAttribute('data-url');
            deleteTab(urlToDelete);
            button.parentElement.parentElement.remove(); // Remove the item from the UI
          });
        });
      });
    }
  
    // Function to delete a tab from the savedTabs array in storage
    function deleteTab(urlToDelete) {
        chrome.storage.sync.get('savedTabs', function (data) {
          const savedTabs = data.savedTabs || [];
          const updatedTabs = savedTabs.filter(tab => tab.url !== urlToDelete);
          chrome.storage.sync.set({ savedTabs: updatedTabs });
        });
    }

    // Initial load of saved tabs
    updateTabList();
    
  });