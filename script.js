const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;


    // check if the fields are empty or not
    // const hasName = name != '';
    // const hasEmail = email != '';
    // const hasService = service != '';
    // const hasMessage = message != '';

    // const isFormValid = hasName && hasEmail && hasService && hasMessage; 



    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    //validate information
    if(!cleanEmail || !cleanName || !cleanMessage){
        alert('All fields are required');
        return;
    }

    if(!cleanEmail.includes('@') || !cleanEmail.includes('.')){
        alert('Please provide a valid email address');
        return;
    }

    if(cleanMessage.length > 200){
        alert('Message is too long');
        return;

    }

// Generate dynamic enquiry summary
const enquirySummary = `
<h3>Enquiry Received</h3>
<p><strong>Name:</strong> ${cleanName}</p>
<p><strong>Email:</strong> ${cleanEmail}</p>
<p><strong>Consultation type:</strong> ${service}</p>
<p><strong>Message:</strong> ${cleanMessage}</p>
<p>Status: Received</p>
`;


document.getElementById('result').innerHTML = enquirySummary;

alert('Enquiry submitted succesfully')

})