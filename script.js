const enquiryForm = document.getElementById("enquiry-form");

function getAppointmentType(service)
{
    switch(service){
        case 'online_consultation':
            {
                console.log(`Appointment type is ${service}`)
                return 'Online Appointment';

            }
        case 'in_person': 
            {
                console.log(`Appointment type is ${service}`)
                return 'Inclinic Appointment';

            }    
        default:
            {
                
                return 'Invald type';

            }    
    }      

}

const serviceField = document.getElementById('service');
serviceField.addEventListener('change', function(){
    const selectedService = serviceField.value;
    console.log(getAppointmentType(selectedService));
})


enquiryForm.addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    //const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    const priority = document.getElementById('priority').value;

    const convertedPriority = Number(priority);

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

    if(!cleanName){
        alert('Patient name is required');
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

    const selectedService = serviceField.value;

    const appointmentType = getAppointmentType(selectedService);

    console.log(appointmentType);

// Generate dynamic enquiry summary
const enquirySummary = `
<h3>Enquiry Received</h3>
<p><strong>Name:</strong> ${cleanName}</p>
<p><strong>Email:</strong> ${cleanEmail}</p>
<p><strong>Consultation type:</strong> ${appointmentType}</p>
<p><strong>Priority:</strong> ${convertedPriority}</p>
<p><strong>Message:</strong> ${cleanMessage}</p>
<p>Status: Received</p>
`;


document.getElementById('result').innerHTML = enquirySummary;

alert('Enquiry submitted succesfully')

})