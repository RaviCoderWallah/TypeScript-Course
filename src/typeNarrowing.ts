//Type Narrowing
function printId(id: string | number){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id.toFixed(2));
    }
}

printId(123);