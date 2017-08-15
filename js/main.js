// GLOBAL VARIABLES:

var _0x717f = ["\x23\x6F\x70\x74\x69\x6F\x6E\x73\x2D\x64\x69\x73\x70\x6C\x61\x79", "\x63\x61\x64\x65\x6E\x7A\x61", "\x66\x6F\x72\x74\x65", "\x6F\x70\x74\x69\x6D\x61", "\x73\x65\x64\x6F\x6E\x61", "\x73\x6F\x75\x6C", "\x62\x6C\x61\x63\x6B", "\x77\x68\x69\x74\x65", "\x73\x69\x6C\x76\x65\x72", "\x52\x65\x61\x72\x20\x43\x61\x6D\x65\x72\x61", "\x4C\x45\x44\x20\x50\x6F\x73\x69\x74\x69\x6F\x6E\x69\x6E\x67\x20\x4C\x69\x67\x68\x74", "\x52\x65\x61\x72\x20\x43\x61\x6D\x65\x72\x61\x20\x61\x6E\x64\x20\x4C\x45\x44\x20\x50\x6F\x73\x69\x74\x69\x6F\x6E\x69\x6E\x67\x20\x4C\x69\x67\x68\x74", "\x4E\x6F\x74\x20\x53\x65\x6C\x65\x63\x74\x65\x64", "\x63\x6C\x69\x63\x6B", "\x61\x63\x74\x69\x76\x65", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x6C\x69", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x74\x61\x62", "\x64\x61\x74\x61", "\x65\x6D\x70\x74\x79", "\x6F\x6E", "\x68\x74\x6D\x6C", "\x23", "\x2D\x6F\x70\x74\x69\x6F\x6E\x73\x2D\x74\x65\x6D\x70\x6C\x61\x74\x65", "\x63\x6F\x6D\x70\x69\x6C\x65", "\x76\x65\x68\x69\x63\x6C\x65", "\x63\x6F\x6C\x6F\x72", "\x70\x61\x63\x6B\x61\x67\x65", "\x73\x75\x6D\x6D\x61\x72\x79", "\x61\x70\x70\x65\x6E\x64", "\x6C\x65\x6E\x67\x74\x68", "\x64\x69\x76\x5B\x63\x6C\x61\x73\x73\x2A\x3D\x22\x6F\x70\x74\x69\x6F\x6E\x22\x5D", "\x70\x61\x6E\x65\x6C", "\x63\x68\x6F\x69\x63\x65", "\x6F\x70\x74\x69\x6F\x6E", "\x70\x72\x69\x63\x65", "\x73\x72\x63", "\x61\x73\x73\x65\x74\x73\x2F", "\x2D", "\x2E\x6A\x70\x67", "\x61\x74\x74\x72", "\x2E\x76\x65\x68\x69\x63\x6C\x65\x2D\x64\x69\x73\x70\x6C\x61\x79", "\x2E\x6F\x70\x74\x69\x6F\x6E\x73\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x24", "\x74\x65\x78\x74", "\x2E\x63\x6F\x73\x74\x2D\x64\x69\x73\x70\x6C\x61\x79", "\x2C", "\x72\x65\x70\x6C\x61\x63\x65"];


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

    // 4.4: If the user clicked the vehicle, color, or package tab, iterate through the related array and use Handlebars to render a template for each item in that array. 

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

// 4.5. If the user clicked the summary tab, pass the data from the ‘carSelection’ object (containing the vehicle, color, and package the user has selected, along with the price) to Handlebars.

function renderOptions(content, template, tabDisplay) {
    if (tabDisplay === 'summary') {
        var optionsContent = template(content);
        $optionContainer.append(optionsContent)
    } else {
        for (var i = 0; i < content.length; i++) {
            var optionsContent = template(content[i]);
            $optionContainer.append(optionsContent)
        }
    }
}




// STEP 5: Update 'carSelection' object
    // When the user clicks on an option (a vehicle, a color, or a package), update the ‘carSelection’ object to reflect the choice the user made.
    // Use the data attributes provided in the HTML along with jQuery's data() method to find out information about the option the user has selected.

$('.options-container').on('click', 'div[class*="option"]', function() {
    var step = $(this).data('panel');
    carSelection[step].choice = $(this).data('option');
    carSelection[step].price = $(this).data('price');
    if (carSelection.color.choice  !== 'Not Selected' && carSelection.vehicle.choice !== 'Not Selected') {
        $('.vehicle-display').attr('src', 'assets/' + carSelection.vehicle.choice + '-' + carSelection.color.choice + '.jpg')
    } else {
        if (carSelection.vehicle.choice !== 'Not Selected') {
            $('.vehicle-display').attr('src', 'assets/' + carSelection.vehicle.choice + '.jpg')
        }
    };
    updateCost()
});


// STEP 6: Update 'vehicle-display' element
    // When a user selects (clicks on) a vehicle, the vehicle the user has selected should display in the ‘.vehicle-display’ element. 
    // When the user selects (clicks on) a color, the ‘.vehicle-display’ element should be updated to show the vehicle the user chose in that color.

// STEP 7: Price calculator
    // keep track of the price of the vehicle being built, a price determined by the different options selected. 
    // As a vehicle is built, the ‘Cost: footer’ should be updated appropriately. 
    // The cost should include the price for the vehicle, color, and package the user has selected.
        // Format the number to include a comma. 

function updateCost() {
    console.log('hello');
    var _0x6975x11 = carSelection[_0x717f[27]][_0x717f[36]] + carSelection[_0x717f[26]][_0x717f[36]] + carSelection[_0x717f[28]][_0x717f[36]];
    _0x6975x11 = moneyFormat(_0x6975x11);
    $(_0x717f[46])[_0x717f[45]](_0x717f[44] + _0x6975x11)
}

function moneyFormat(_0x6975x13) {
    return _0x6975x13.toString()[_0x717f[48]](/\B(?=(\d{3})+(?!\d))/g, _0x717f[47])
}
displayPanelContent(_0x717f[26])

// Bonus 1: Utilize Firebase to create a database to store which vehicle, color, and package the user has selected.

// Bonus 2: Utilize Google Maps to show the user the nearest dealers according to the user’s current location.

// Bonus 3: Create a “Directions” feature that helps users find directions to specified dealers based off their current and/or given locations.