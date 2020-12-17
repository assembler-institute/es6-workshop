// import a named export
import { add } from "./utils";

// import a default export
import BASE_VALUE from "./utils";

const result1 = add(1, BASE_VALUE);

// Result is: 21
console.log(`Result is: ${result1}`);
