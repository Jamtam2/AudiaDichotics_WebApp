document.addEventListener('turbolinks:load', (***REMOVED*** => {
    const copyButton = document.getElementById('copy-button'***REMOVED***;
    const copyTarget = document.getElementById('copy-target'***REMOVED***;

    if (copyButton && copyTarget***REMOVED*** {
        copyButton.addEventListener('click', (***REMOVED*** => {
            // Copy text to clipboard
            navigator.clipboard.writeText(copyTarget.value***REMOVED***.then((***REMOVED*** => {
                // Provide feedback to user
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                setTimeout((***REMOVED*** => {
                    copyButton.textContent = originalText;
                ***REMOVED***, 2000***REMOVED***;
            ***REMOVED******REMOVED***.catch(err => {
                console.error('Error copying text: ', err***REMOVED***;
            ***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
    ***REMOVED***
***REMOVED******REMOVED***;