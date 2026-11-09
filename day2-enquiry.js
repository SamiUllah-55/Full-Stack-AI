// Customer information

const customerName = "Ali Ahmed";

const customerEmail = "ali@gmail.com";

const enquirySubject = "Website Development";

const enquiryMessage = "I want to develop a business website.";

let enquiryStatus = "Pending";

const estimatedBudget = 50000;

// Calculate enquiry information

const messageLength = enquiryMessage.length;
enquiryStatus = "Reviewed";

console.log(`Updated Status: ${enquiryStatus}`);


// Display enquiry summary

console.log("----- ENQUIRY SUMMARY -----");

console.log(`Customer: ${customerName}`);

console.log(`Email: ${customerEmail}`);

console.log(`Subject: ${enquirySubject}`);

console.log(`Message: ${enquiryMessage}`);

console.log(`Status: ${enquiryStatus}`);

console.log(`Budget: ${estimatedBudget}`);

console.log(`Message Characters: ${messageLength}`);