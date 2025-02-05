class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // Initialize result with the given value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this; // Enables method chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this; // Enables method chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this; // Enables method chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this; // Enables method chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this; // Enables method chaining
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result; // Returns the final result
    }
}
