//Type Narrowing
function printId(id: string | number){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id.toFixed(2));
    }
}

function alertsType(msg?: string){
    if(msg){
        return `Alert Msg: ${msg}`;
    }
    return `Default Alert Message`;
}

function apiStatus(status: "pending" | "success" | "error" | number){
    if(status === "pending"){
        console.log("API response on the way...");
    }
    if(status === "success"){
        console.log("Your Data");
    }
    if(status === "error"){
        console.log("Something went wrong !");
    }
    if(typeof status === "number"){
        console.log(status.toFixed(2));
    }
}

//Mentor examples
type ChaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any):obj is ChaiOrder{
 return (
    typeof obj === "object" && 
    obj !== null && 
    typeof obj.type === "string" && 
    typeof obj.sugar === "number"
 )
}

function serveOrder(item: ChaiOrder | string){
  if(isChaiOrder(item)){
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving custom chai...`
}