```markdown
Topic: Java Fundamentals, User Input, and Python-to-Java Translation

1. Core Analogy & Frame-by-Frame Logic
* **Data Type Boxes & Blueprints:** Variables are treated like physical storage boxes. Primitive data types (`int`, `double`, `char`) are basic, lowercase boxes built for simple values[cite: 1, 2]. Class types (`String`) are complex blueprints that must always start with a capital letter[cite: 2].
* **The Scanner Engine:** Java does not feature a loose input command like Python's `input()`. Instead, you must import and construct an explicit reader tool (a `Scanner`) tied to `System.in` to intercept keyboard keystrokes.
* **The Glue Operation:** Java lacks native f-strings or comma-separated auto-spacing print arguments; text elements and variables must be explicitly concatenated using the addition (`+`) operator.
* **The Division Trap:** Dividing two integers (`int / int`) acts like a chainsaw, completely chopping off the decimal remainder without rounding (e.g., `15 / 2 = 7`)[cite: 2], unless a decimal upgrade is triggered by mixing types[cite: 2].

2. Working Code Snippets
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        
        System.out.println("Enter your first name:");
        String firstName = console.next();
        
        System.out.println("Enter your age:");
        int age = console.nextInt();
        
        System.out.println("Hello " + firstName + "! You are " + age + " years old.");
    }
}

```

3. Strict Dos and Don'ts Ledger
DO: Explicitly declare the data type for every single variable before assigning data to it (e.g., `int age = 19;`, `String name = "Patrick";`).
DO: Terminate every single instruction line with a semicolon `;`.
DO: Use double quotes `" "` for multi-character words (`String`) and single quotes `' '` strictly for a single keystroke (`char`).
DON'T: Write loose, un-typed variables like Python (e.g., writing `name = "Patrick"` without `String` will instantly crash the Java compiler).
DON'T: Expect integer division to automatically retain decimals; integer operands yield an integer result and drop the remainder.
DON'T: Forget to import the input library (`import java.util.Scanner;`) when building programs that require user input.

---------------------

# 📋 Java Survival Notes — Session 1: Input & the + Trap

## 1. Scanner & the Input Buffer

| Term | Plain-English Meaning |
| :--- | :--- |
| **Input Buffer** | The temporary waiting line in memory where typed keystrokes sit after hitting Enter, before Java reads them. |
| **Token** | A single chunk of typed text Scanner grabs from the buffer (e.g., `40.5`, `forty`). |
| **Parse** | The act of translating a token from raw text into a real data type (like `double` or `int`). |
| **nextDouble()** | Grabs the next token only if it can be shaped into a decimal number; refuses anything else. |

### 🚨 Trap: InputMismatchException
* **What happens:** If the user types non-numeric text (e.g., `"forty"`) where `nextDouble()` expects a number, Java does **not** convert it and does **not** default to `0`.
* **What Java does instead:** Throws an `InputMismatchException` (a runtime crash error) and halts execution immediately.

```java
// FAKE assumption (WRONG):
hoursWorked = console.nextDouble(); // "It'll just become 0 if input is bad"

// REALITY:
// Program throws InputMismatchException and crashes right there.

