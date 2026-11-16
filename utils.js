function getAppointmentType(service)
{
    switch(service){
        case 'Online':
            {
                console.log(`Appointment type is ${service}`)
                break;
            }
        case 'In-clinic': 
            {
                console.log(`Appointment type is ${service}`)
                break;
            }    
        default:
            {
                console.log('Invalid appointment type');
                break;
            }    
    }      

}