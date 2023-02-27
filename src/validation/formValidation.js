export const formValidation = (data, array) => {
    console.log(array)
    for(const value of data){
        if(value === ""){
            return false
        }
    }
    if(data[4] > Date.now()){
        return false
    }
    for(const person of array){
        if(person[2] === data[2]){
            return false
        }

    }
    return true
}