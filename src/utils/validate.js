export const validate = (email,password)=>{

    const emailValidation = (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email)
    const pwdValidation = (/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/).test(password)

    if(!emailValidation) return "Invalid Email!"
    if(!pwdValidation) return "Invalid Password!"

    return null;

}