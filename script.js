const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;


    console.log('Patient name is '+ name);
    console.log('patient email is' + email);
    console.log('Service chosen by customer ' + service);
    console.log('Message by patient ' + message)


})