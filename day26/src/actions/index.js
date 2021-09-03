const email = (value) => {
    return{
        type:"EMAIL",
        payload:value,
    }
}
const password = (value) => {
    return{
        type:"PASSWORD",
        payload:value,
    }
}
export {email , password};