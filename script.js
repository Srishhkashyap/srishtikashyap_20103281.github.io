function displayFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileNameDisplay.textContent = fileName;
    } else {
        fileNameDisplay.textContent = 'No file chosen';
    }
}

function moveFields(sourceId, destinationId) {
    const sourceSelect = document.getElementById(sourceId);
    const destinationSelect = document.getElementById(destinationId);

    // Move selected options from source to destination
    for (let i = 0; i < sourceSelect.options.length; i++) {
        const option = sourceSelect.options[i];
        if (option.selected) {
            destinationSelect.add(new Option(option.text, option.value));
            option.remove();
            i--; // Adjust the loop index after removing an option
        }
    }
}

// You can call this function to populate the available fields initially
function initializeAvailableFields() {
    const availableFieldsSelect = document.getElementById('availableFields');
    const displayedFieldsSelect = document.getElementById('displayedFields');

    // Check if the elements are present before manipulating them
    if (availableFieldsSelect && displayedFieldsSelect) {
        // Add all options to the available fields select initially
        for (let i = 0; i < availableFieldsSelect.options.length; i++) {
            const option = availableFieldsSelect.options[i];
            displayedFieldsSelect.add(new Option(option.text, option.value));
        }
    }
}

function initializeDisplayedFields() {
    const displayedFieldsSelect = document.getElementById('displayedFields');

    // Check if the element is present before manipulating it
    if (displayedFieldsSelect) {
        displayedFieldsSelect.innerHTML = ''; // Empty the select element
    }
}

// Use DOMContentLoaded event to ensure the script runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeAvailableFields();
    initializeDisplayedFields();
});


// Add these functions to your script.js file
function next() {
    // Add logic for the "Next" button
    window.location.href = 'table.html'; // Navigate to the table.html page
}

function cancel() {
    const confirmReset = confirm('Do you want to reset settings to default?');

    if (confirmReset) {

        document.getElementById('fileInput').value = ''; // Clear file input
        document.getElementById('fileNameDisplay').textContent = 'No file chosen'; // Reset file name display

        // Reset settings for Step 2 (Specify Format)
        document.getElementById('fileType').value = 'csv'; // Reset file type select
        document.getElementById('charEncoding').value = 'utf-8'; // Reset character encoding select
        document.getElementById('delimiter').value = 'comma'; // Reset delimiter select
        document.getElementById('hasHeader').checked = false; // Uncheck hasHeader checkbox
        // Add logic to reset settings to default
        initializeAvailableFields(); // Reset available fields as an example
        initializeDisplayedFields(); // Reset displayed fields as an example
        alert('Settings reset to default.');
    } else {
        alert('Operation canceled.');
    }
};
