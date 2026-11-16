let isLoggedIn =  true;
let role = 'admin';

if(isLoggedIn)
{
  if(role === 'admin'){
    console.log('Welcome to admin dashboard');
    return;
  }
  else if(role === 'user') {
    console.log('Welcome to user dashboard');
    return;
  }
  else 
  {
    console.log('Logged in as guest');
    return;
  } 


}
else
{
  console.log('Please logged in');
}
