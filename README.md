# TypeScript 

Typescript is a **superset of JavaScript** which is developed and maintain by Microsoft. It adds **static typing** to JavaScript, meaning you can define types for variables, function parameters, return values, and more. TypeScript code compiles down to plain JavaScript that can run in any browser or JavaScript environment.

## Benefits of TypeScript
 - **Error Detection**: Error detect at compile time, not runtime. 

# TypeScript Compilation Pipeline

![Typescript Compilation Pipeline](/assets/typescript-to-js.jpg)

## 1. TS Code (Input)
- **Description:** The raw source files written by developers (e.g., `.ts`, `.tsx`).
- **State:** At this stage, the code is simply a stream of characters. The compiler has no understanding of structure or meaning yet.

## 2. Lexer (Scanner / Tokenizer)
- **Function:** Reads the raw character stream and groups them into meaningful units called **Tokens**.
- **Key Action:** Strips whitespace and comments; identifies keywords, identifiers, operators, and literals.
- **Example:** `let x = 10;` becomes `[Keyword(let), Identifier(x), Operator(=), Number(10), Punctuation(;) ]`.
- **Output:** A linear stream of tokens ready for structural analysis.

## 3. Parser
- **Function:** Consumes the token stream and constructs an **Abstract Syntax Tree (AST)**. You can learn more about **[AST Explorer](https://astexplorer.net/)**
- **Key Action:** Validates syntax grammar (e.g., matching brackets, correct statement structure). It understands *how* the code is structured but not *what* the types are.
- **Output:** A hierarchical tree representation of the code's syntactic structure.
- **Note:** Syntax errors are caught here. Type errors are **NOT** caught here.

## 4. Binder
- **Function:** Analyzes the AST to create **Symbols** and resolve scope.
- **Key Action:** Connects identifier references to their declarations. It builds the symbol table that tracks variables, functions, and types across different scopes.
- **Why it matters:** Enables the Checker to efficiently look up type information without re-traversing the entire tree.
- **Output:** An enriched AST with semantic links (symbols) attached to nodes.

## 5. Checker (Type Checker)
- **Function:** Performs static type analysis on the bound AST.
- **Key Action:** Verifies type compatibility, checks function signatures, validates interface implementations, and infers types where annotations are missing.
- **Output:** A list of type errors/warnings. Crucially, the Checker does not modify the code; it only reports issues.
- **Behavior:** If `noEmitOnError` is true in `tsconfig.json`, emission stops if errors are found.

## 6. Emitter (Transformer)
- **Function:** Transforms the AST into valid JavaScript output.
- **Key Actions:**
  - **Type Erasure:** Removes all TypeScript-specific syntax (interfaces, type annotations, generics).
  - **Downleveling:** Converts modern JS/TS features to older ECMAScript versions based on the `target` config.
  - **Module Transformation:** Converts ES modules to CommonJS/AMD/UMD if configured.
- **Output:** Clean, runnable JavaScript code.

## 7. Output Files (.js, .map)
- **.js File:** The final executable JavaScript bundle. Contains zero TypeScript syntax.
- **.map File (Source Map):** A mapping file that correlates lines/columns in the generated JS back to the original TS source.
- **Purpose:** Enables debugging in browser DevTools using original TypeScript source code and variable names.

## How to install Typescript 
Follow below instructions step by step: 
 - ``npm init -y``
 - ``npm i -D typescript``
 - ``npx tsc --init``
 - ``go to tsconfig.json file and uncomment file layout``
 - ``make src and dist folder``
 - ``for create dist index.ts file npx tsc``
 -- ``now run node dist/index.js``

----

 ## Type Annotations 
Type annotations are a way to **explicitly tell TypeScript what type of value** a variable, function parameter, or return value should have.

 ```
const personName: string = "Ravi Verma";

let age: number = 56;

const isAdult: boolean = true;

const userList: string[] = ["Ravi", "Mukesh", "Alok"];

const ageList: number[] = [23, 34, 56];

let anything: any = "Ravi Verma";
anything = 56;

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log(`Hello, ${name}`);
}
 ```
 ----

 ## Union 
 ```
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
 ```

 ## Type Narrowing
 ```
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
 ```