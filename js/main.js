// STEP 1: Active classes on elements

// When a user clicks on one of the steps (i.e., an ‘li’ element) a class ‘.active’ should be added to the ‘li’ the user clicked 
$('li').on('click', function() {
	// Remove ‘.active’ class on any elements that are inactive. 
    $('li').removeClass('active');
	// Ensure '.active’ adds appropriate styling.
    $(this).addClass('active');
});

// STEP 2: Organise data for vehicle options
	// For each set of options, create an array of objects.

// STEP 3: Create object for selected user options
	// Create object, which updates any time the user makes a selection.

// STEP 4: When the user clicks on one of the tab ‘lis,’ only the relevant HTML for that step will be displayed.
	// By default (when the page loads), the selection of available vehicles (i.e., images of the five car choices) should display in the sidebar.
	// Use data attributes to find out information about the tab the user has clicked. These data attributes have already been added in the HTML, you’ll just need to access them using jQuery or JavaScript
	// When a user clicks on a step:
		// 1. Empty the ‘#options-display’ element.
		// 2. Find out which step the user has clicked by accessing the ‘data-tab’ attribute.
		// 3. Use a ‘switch’ statement to render the related template displaying appropriate options for that step using Handlebars ( Handlebars templates have been provided in the HTML for the vehicle, color, package, and summary steps).
		// 4. If the user clicked the vehicle, color, or package tab, iterate through the related array and use Handlebars to render a template for each item in that array. 
		// 5. If the user clicked the summary tab, pass the data from the ‘carSelection’ object (containing the vehicle, color, and package the user has selected, along with the price) to Handlebars.


// STEP 5: Update 'carSelection' object
	// When the user clicks on an option (a vehicle, a color, or a package), update the ‘carSelection’ object to reflect the choice the user made.
	// Use the data attributes provided in the HTML along with jQuery's data() method to find out information about the option the user has selected.

// STEP 6: Update 'vehicle-display' element
	// When a user selects (clicks on) a vehicle, the vehicle the user has selected should display in the ‘.vehicle-display’ element. 
	// When the user selects (clicks on) a color, the ‘.vehicle-display’ element should be updated to show the vehicle the user chose in that color.

// STEP 7: Price calculator
	// keep track of the price of the vehicle being built, a price determined by the different options selected. 
	// As a vehicle is built, the ‘Cost: footer’ should be updated appropriately. 
	// The cost should include the price for the vehicle, color, and package the user has selected.
		// Format the number to include a comma. 


// Bonus 1: Utilize Firebase to create a database to store which vehicle, color, and package the user has selected.

// Bonus 2: Utilize Google Maps to show the user the nearest dealers according to the user’s current location.

// Bonus 3: Create a “Directions” feature that helps users find directions to specified dealers based off their current and/or given locations.