//Union Examples ===============================================

//Example: 1
let id: string | number;
id = "123"; //Ok, beacuse its string
id = 123; //Ok, because its number
//id = true //Error, because its neither string nor number


//Example: 2
let apiStatus: "pending" | "fulfilled" | "error";
apiStatus = "pending"; //Ok, its possible pending
apiStatus = "fulfilled"; //Ok, its possible fulfilled
//apiStatus = "reject"; //Error, because its not exists in apiStatus 

