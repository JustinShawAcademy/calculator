# Calculator Project

A [website](https://justinshawacademy.github.io/calculator/) calculator built with HTML, CSS, and JavaScript.



## Programming Fundamentals Learned

### Core JavaScript Concepts

*   **DOM Manipulation:** The foundation of interactive web development - connecting JavaScript to HTML elements.
    *   **Element Selection:** Using `document.getElementById()` to get references to the calculator display and buttons.
    *   **Dynamic Content Updates:** Modifying `display.value` to show calculator operations and results in real-time.
    *   **Event Handling:** Making the calculator interactive by responding to button clicks.
        *   **`onclick` Attributes:** Attaching click event handlers directly in HTML for immediate function execution.
        *   **Function Calls:** Understanding how `onclick="calculate()"` connects HTML buttons to JavaScript functions.

*   **Fundamental Programming Logic:**
    *   **Variables & State Management:** Using `let` to track calculator state with `currentInput`, `previousInput`, and `operator`.
    *   **Functions:** Breaking code into reusable, single-purpose functions (`clearDisplay()`, `deleteLast()`, `calculate()`).
    *   **String Manipulation:** Using string concatenation (`+=`) and `slice()` method for input building and deletion.
    *   **Conditional Logic:** Using `if...else` statements and `switch` cases to handle different operations and edge cases.
    *   **Type Conversion:** Converting strings to numbers with `parseFloat()` for mathematical operations.
    *   **Arrays & Operators:** Using `['+', '-', '*', '/'].includes()` to check if input is an operator.

*   **Advanced JavaScript Concepts:**
    *   **Template Literals:** Using string concatenation to build display expressions (`previousInput + ' ' + operator + ' ' + currentInput`).
    *   **Error Handling:** Implementing division by zero protection with conditional checks.
    *   **Function Parameters:** Passing values to functions like `appendToDisplay(value)` for dynamic behavior.

### Advanced CSS Concepts

*   **CSS Grid for Calculator Layout:** Modern layout system for creating the calculator button grid.
    *   **`display: grid`:** Establishing a grid container for precise button positioning.
    *   **`grid-template-columns: repeat(4, 1fr)`:** Creating 4 equal-width columns for calculator buttons.
    *   **`grid-column: span 2`:** Making the zero button span two columns for traditional calculator layout.
    *   **`grid-row: span 2`:** Making the equals button span two rows for enhanced visual hierarchy.

*   **Advanced Visual Effects:**
    *   **CSS Gradients:** Creating `linear-gradient()` backgrounds for modern visual appeal.
    *   **CSS Transitions:** Using `transition: all 0.2s ease` for smooth button interactions.
    *   **Transform Effects:** Using `transform: scale()` to create button press feedback animations.
    *   **Box Shadows:** Adding depth with `box-shadow` for professional calculator appearance.

*   **The Box Model & Modern CSS:**
    *   **`box-sizing: border-box;`:** Essential for predictable layouts where padding and borders are included in element dimensions.
    *   **Border Radius:** Using `border-radius` to create modern, rounded button and display corners.
    *   **Color Management:** Organizing different button types with distinct color schemes (numbers, operators, functions).

