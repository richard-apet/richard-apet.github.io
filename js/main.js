// GLOBAL VARIABLES:
// Array of indexed elements, referenced in updateCost and moneyFormat square bracket notation (can be extended throughout this file to minimise code/file size):
var compilerIndex = ["#options-display", "cadenza", "forte", "optima", "sedona", "soul", "black", "white", "silver", "Rear Camera", "LED Positioning Light", "Rear Camera and LED Positioning Light", "Not Selected", "click", "active", "removeClass", "li", "addClass", "tab", "data", "empty", "on", "html", "#", "-options-template", "compile", "vehicle", "color", "package", "summary", "append", "length", "div[class*='option']", "panel", "choice", "option", "price", "src", "assets/", "-", ".jpg", "attr", ".vehicle-display", ".options-container", "$", "text", ".cost-display", ",", "replace"];

// Variable reference to update tab container in HTML
var $optionContainer = $('#options-display');


// STEP 2: Organise data for vehicle options

// For each set of options, create an array of objects.
var vehicleOptions = [
    {choice: 'cadenza', price: 35000}, 
    {choice: 'forte', price: 20000}, 
    {choice: 'optima', price: 29050}, 
    {choice: 'sedona', price: 38650}, 
    {choice: 'soul', price: 42200}
];
var colorOptions = [
    {choice: 'black', price: 50}, 
    {choice: 'white', price: 100}, 
    {choice: 'silver', price: 250}
];
var packageOptions = [
    {choice: 'Rear Camera', price: 150}, 
    {choice: 'LED Positioning Light', price: 150}, 
    {choice: 'Rear Camera and LED Positioning Light',price: 200}
];


// STEP 3: Create object for selected user options

// Create object, which updates any time the user makes a selection.
var carSelection = {
    vehicle: {choice: 'Not Selected', price: 0},
    color: {choice: 'Not Selected', price: 0},
    package: {choice: 'Not Selected', price: 0}
};




// STEP 1: Active classes on elements

// When a user clicks on one of the steps (i.e., an ‘li’ element) a class ‘.active’ should be added to the ‘li’ the user clicked 
$('li').on('click', function() {
    // Remove ‘.active’ class on any elements that are inactive. 
    $('li').removeClass('active');
    // Ensure '.active’ adds appropriate styling.
    $(this).addClass('active');

    // Step 4: When the user clicks on one of the tab ‘lis,’ only the relevant HTML for that step will be displayed.

    // 4.2: Find out which step the user has clicked by accessing the ‘data-tab’ attribute.
    var optionsDisplayed = $(this).data('tab');

    // 4.1: Empty the ‘#options-display’ element.
    $optionContainer.empty();

    displayPanelContent(optionsDisplayed)
});


// STEP 4: 

function displayPanelContent(tabDisplay) {
    var source = $('#' + tabDisplay + '-options-template').html();
    var template = Handlebars.compile(source);

    // 4.3 Use a ‘switch’ statement to render the related template displaying appropriate options for that step using Handlebars ( Handlebars templates have been provided in the HTML for the vehicle, color, package, and summary steps).
    // By default (when the page loads), the selection of available vehicles (i.e., images of the five car choices) should display in the sidebar.

    switch (tabDisplay) {
        case 'vehicle':
            renderOptions(vehicleOptions, template, tabDisplay);
            break;
        case 'color':
            renderOptions(colorOptions, template, tabDisplay);
            break;
        case 'package':
            renderOptions(packageOptions, template, tabDisplay);
            break;
        case 'summary':
            renderOptions(carSelection, template, tabDisplay);
            break
    }
}


function renderOptions(content, template, tabDisplay) {
    // 4.5. If the user clicked the summary tab, pass the data from the ‘carSelection’ object (containing the vehicle, color, and package the user has selected, along with the price) to Handlebars.
    if (tabDisplay === 'summary') {
        var optionsContent = template(content);
        $optionContainer.append(optionsContent)
    } else {
        // 4.4: If the user clicked the vehicle, color, or package tab, iterate through the related array and use Handlebars to render a template for each item in that array. 
        for (var i = 0; i < content.length; i++) {
            var optionsContent = template(content[i]);
            $optionContainer.append(optionsContent)
        }
    }
}


// STEP 5: Update 'carSelection' object

$('.options-container').on('click', 'div[class*="option"]', function() {
    // When the user clicks on an option (a vehicle, a color, or a package), update the ‘carSelection’ object to reflect the choice the user made.
    var step = $(this).data('panel');
    // Use the data attributes provided in the HTML along with jQuery's data() method to find out information about the option the user has selected.
    carSelection[step].choice = $(this).data('option');
    carSelection[step].price = $(this).data('price');

// STEP 6: Update 'vehicle-display' element
    if (carSelection.color.choice  !== 'Not Selected' && carSelection.vehicle.choice !== 'Not Selected') {
        // When a user selects (clicks on) a vehicle, the vehicle the user has selected should display in the ‘.vehicle-display’ element. 
        // When the user selects (clicks on) a color, the ‘.vehicle-display’ element should be updated to show the vehicle the user chose in that color.
        $('.vehicle-display').attr('src', 'assets/' + carSelection.vehicle.choice + '-' + carSelection.color.choice + '.jpg')
    } else {
        if (carSelection.vehicle.choice !== 'Not Selected') {
            $('.vehicle-display').attr('src', 'assets/' + carSelection.vehicle.choice + '.jpg')
        }
    };
    // As a vehicle is built, the ‘Cost: footer’ should be updated appropriately:
    updateCost()
});


// STEP 7: Price calculator
     
function updateCost() {
    // The cost should include the price for the vehicle, color, and package the user has selected:
    // keep track of the price of the vehicle being built, a price determined by the different options selected. 
    var compiledOptionCost = carSelection[compilerIndex[27]][compilerIndex[36]] + carSelection[compilerIndex[26]][compilerIndex[36]] + carSelection[compilerIndex[28]][compilerIndex[36]];
    compiledOptionCost = moneyFormat(compiledOptionCost);
    $(compilerIndex[46])[compilerIndex[45]](compilerIndex[44] + compiledOptionCost)
}

function moneyFormat(decSeparator) {
    // Format the number to include a comma. 
    return decSeparator.toString()[compilerIndex[48]](/\B(?=(\d{3})+(?!\d))/g, compilerIndex[47])
}
// Compile displayPanelContent function:
displayPanelContent(compilerIndex[26])

// Bonus 1: Utilize Firebase to create a database to store which vehicle, color, and package the user has selected.

// Bonus 2: Utilize Google Maps to show the user the nearest dealers according to the user’s current location.
    
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.8054491, lng: -73.9654415},
      zoom: 20,
      scrollwheel: false
    });  
      
  };

initMap();

// Bonus 3: Create a “Directions” feature that helps users find directions to specified dealers based off their current and/or given locations.