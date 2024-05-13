

 export const checkValidData = (email,password,FullName) => {

     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //  const isFullNameValid = /^[a-zA-z]+([\s][a-zA-Z]+)+$/.test(FullName);

     if(!isEmailValid) return "Email ID is not valid";
     if(!isPasswordValid) return "Password is not valid";
    //  if(isFullNameValid) return "Name is not valid";

     return null;
          
 }