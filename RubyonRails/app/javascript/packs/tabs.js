document.addEventListener('DOMContentLoaded', (***REMOVED*** => {
  const tabs = document.querySelectorAll('.tab'***REMOVED***;
  const contents = document.querySelectorAll('.tab-content'***REMOVED***;

  tabs.forEach(tab => {
    tab.addEventListener('click', (***REMOVED*** => {
      // Remove 'active' class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'***REMOVED******REMOVED***;
      contents.forEach(c => c.classList.remove('active'***REMOVED******REMOVED***;

      // Add 'active' class to the clicked tab and its corresponding content
      tab.classList.add('active'***REMOVED***;
      const contentId = tab.id.replace('-tab', '-content'***REMOVED***;
      document.getElementById(contentId***REMOVED***.classList.add('active'***REMOVED***;
    ***REMOVED******REMOVED***;
  ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
