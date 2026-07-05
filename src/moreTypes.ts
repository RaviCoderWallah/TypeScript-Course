//Type asseration --->  "Trust me, I know what type this value is,"

//Example: 1
const name: any = "Ravi Verma";
const nameLength: number = (name as string).length;

//Example: 2
const searchInput = document.getElementById("search-input") as HTMLInputElement;

//Types Any and Unknown

//Example 1 of Unknown
function processData(data: unknown){
   if(typeof data === "string") {
     return data.length;
   }
   return 0;
}

//Example 2 of Unknown
try {
    
} catch (error: unknown) {
    if(error instanceof Error){
        console.log(error.message);
    }
}