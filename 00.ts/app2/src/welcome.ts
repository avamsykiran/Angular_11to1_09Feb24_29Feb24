const greet = function(userName:string,salutation?:string) : string {
    return `Hello ${(salutation ?? '')} ${userName} `;
}

export default greet;