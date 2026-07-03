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
- **Function:** Consumes the token stream and constructs an **Abstract Syntax Tree (AST)**.
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