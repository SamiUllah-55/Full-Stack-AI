const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;


    // check if the fields are empty or not
    const hasName = name != '';
    const hasEmail = email != '';
    const hasService = service != '';
    const hasMessage = message != '';

    const isFormValid = hasName && hasEmail && hasService && hasMessage; 


    console.log('Patient name is '+ name);
    console.log('patient email is' + email);
    console.log('Service chosen by customer ' + service);
    console.log('Message by patient ' + message)

    console.log('Is form valid', isFormValid);

    if(isFormValid) {
        console.log('Form is valid');

    }
    else{
        console.log('Form is not valid');
    }

})