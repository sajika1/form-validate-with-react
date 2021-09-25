
export const validation = (state) =>{

    let validate = {}
    const checkEmailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!state.name.trim()) {
        validate.name = "UserName Required";
    }else{
        delete validate.name;
    }

    if (!checkEmailValidate.test( state.email.toLowerCase() )) {
        validate.email = "Email Address Required";
    }else{
        delete validate.email;
    }

    if (!state.password) {
        validate.password = "Password Required";
    }else if(state.password.length < 6){
        validate.password = "Password Need to be 6 Character or more";
    }else{
        delete validate.password;
    }

    if (!state.confirmPassword) {
        validate.confirmPassword = "please confirm Password";
    } else if( state.password !== state.confirmPassword ){
        validate.confirmPassword = "Passwords do not matched";
    } else {
        delete validate.confirmPassword;
    }

    if (!state.isAccepted) {
        validate.isAccepted = "please Accepte Terms";
    }else{
        delete validate.isAccepted;
    }

    return validate;

}