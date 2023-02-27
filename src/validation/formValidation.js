export const formValidation = (data, array, add=true, updateRowIndex=null) => {
    for(const value of data){
        if(value === ""){
            return false
        }
    }
    if(data[4] > Date.now()){
        return false
    }
    if(data[2].length < 11){
        return false
    }
    if(add === true){
        for(const person of array){
            if(person[2] === data[2]){
                return false
            }
    
        }
    }else{
        console.log(4)
        if(array[updateRowIndex][2] === data[2]){
            return true
        }else{
            for(const person of array){
                if(person[2] === data[2]){
                    return false
                }
        
            } 
        }
    }
    
    return true
}