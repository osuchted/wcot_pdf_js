// 1. COPY CONTENT BETWEEN FIELDS
// A common feature in completing forms is to use already entered details in multiple places. 
//Type data into the first field then click the check box to copy it over to the second field.
//Checkbox code 
var a = this.getField('Field1');
var b = this.getField('Field2');
if (event.target.value == 'Yes') {
	b.value = a.value;
} else {
	b.value = '';
}
// 2. SHOW/HIDE OBJECTS
// This example uses a check box to show and hide a field adding some intelligence to the way a form can display based on user input.
//Checkbox code
var f = this.getField('showfield');
if (event.target.value == 'Yes') {
	f.hidden = false;
} else {
	f.hidden = true;
}
// 3. DISPLAY A POP UP ALERT MESSAGE
// This code shows how to display a pop up message to the user. Try it with your own text.
//Button code
app.alert({ cMsg: 'Error! Incorrect entry!\n\tYou may want to try again', cTitle: 'Tidalfire' });
// 4. RESET FROM FIELDS
// Need to clear the form data already entered for an entire form or maybe more interestingly to clear some data in a specific section? 
//Using an array of fields we can reset what we need. Enter data in all fields. The RESET button will clear only the first two.
//Button code 
var f = new Array(2);
f[0] = 'resetField1';
f[1] = 'resetField2';
this.resetForm(f);
// 5. CHANGE FIELD PROPERTIES
// Visual clues can be useful when completing a form. 
//This code changes various properties of a field when you type text and when you exit the field.
//Button code 
//On Blur 
var myField = this.getField('propfield');
myField.fillColor = color.red;
myField.textColor = color.black;
myField.lineWidth = 5;
myField.strokeColor = color.yellow; 
//On Focus 
var myField = this.getField("propfield") 
myField.fillColor = color.blue;
myField.textColor = color.white;
myField.lineWidth = 5;
myField.strokeColor = color.green;
// 6. DATE VALIDATION
// This code, placed behind the field’s Validate tab, checks the format of the entered date and displays an alert if incorrect. 
//If the date is entered without delimiters (in this case the / (slash) character) and is the correct format the date will be automatically formatted.
//Validate code 
if (event.value) {
	var DateOK = AFParseDateEx(event.value, 'ddmmyyyy');
	if (DateOK != null) {
		event.value = util.printd('dd/mm/yyyy', DateOK);
	} else {
		event.value = '';
		app.alert('Please enter the date in the format DD/MM/YYYY.', 3, 0, 'Date Format');
	}
}
// 7. CONVERT TEXT TO UPPERCASE AS YOU TYPE
// Simple but effective. As you type the characters are all converted to uppercase.
// Place the code in the text field behind the Format tab with the Custom option selected from the drop down.
//Format tab code 
// Custom keystroke for text field 
if (!event.willCommit) event.change = event.change.toUpperCase();