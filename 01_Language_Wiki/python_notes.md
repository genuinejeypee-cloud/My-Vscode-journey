```markdown
Topic: Python - While Loops, Debug Prints & Loop Control
1. Core Analogy & Frame-by-Frame Logic
* **The Bouncer:** A `while` loop acts as a bouncer checking conditions to let execution continue.
* **The Trapdoor (`if/elif/continue`):** Used inside loops to intercept specific iterations, modify accumulators, or skip steps entirely using `continue`.
* **Console Log / Debug Prints:** Placing a `print()` statement inside a loop allows you to watch variables mutate frame-by-frame while the loop spins.

2. Working Code Snippets
```python
water_level = 0
alert_log = ""

while water_level < 10:
    water_level += 2
    if water_level == 6:
        alert_log = alert_log + "ALERT!/"
        continue
    alert_log = alert_log + str(water_level) + "/"
    print(water_level)

print(alert_log)

```

3. Strict Dos and Don'ts Ledger
DO: Insert a direct debug print statement inside your loops to visually trace variable states frame-by-frame.
DON'T: Assume a loop works without manually stepping through the trace table to see how accumulators and string concatenations build up over each iteration.

---

Topic: Python - Advanced Math Operators (`//`, `%`, `**`)

1. Core Analogy & Frame-by-Frame Logic

* **Inventory Boxing (`//` - Floor Division):** Tells you how many *full boxes* you can pack, completely chopping off any decimals or leftovers. It returns the count of full groups, not the accumulated sum of those groups.
* **Leftovers (`%` - Modulo):** The remainder left sitting on the table after packing everything into full boxes.
* **Chain Links / Fencepost Error (`**` - Exponents):** An exponent of `4` (`2 ** 4`) means 4 base numbers are spawned, which requires exactly 3 multiplication "spins" (welds) to connect them (`2 * 2 * 2 * 2`).

2. Working Code Snippets

```python
crates = 26 // 8      # Returns 3 (full boxes)
leftovers = 26 % 8    # Returns 2 (remainder)
bonus = 2 ** 4        # Returns 16 (4 links, 3 operations)

```

3. Strict Dos and Don'ts Ledger
DO: Remember that Floor Division (`//`) returns the number of times a divisor fits into a number as a whole integer, dropping all fractional remainders.
DON'T: Confuse the total item count packed inside crates with the *number of crates* itself when using floor division, and avoid counting multiplication steps in exponents without accounting for the fencepost gap.

---

Topic: Python - Output Control & String Multiplication (Pyramid Logic)

1. Core Analogy & Frame-by-Frame Logic

* **String Scaling:** Python allows string multiplication (`"-" * counter`) to scale characters directly, replacing heavy nested loops for simple character rendering.
* **Priority Branching (`if / elif / else`):** Evaluates conditions sequentially. An `elif` only triggers if the preceding `if` condition fails, acting as a strict priority queue.

2. Working Code Snippets

```python
counter = 1

while counter <= 4:
    if counter == 1:
        print("X")
    elif counter == 4:
        print("XXXX")
    else:
        print("-" * counter)
    counter += 1

```

3. Strict Dos and Don'ts Ledger
DO: Leverage Python's built-in string multiplication to handle character repetition cleanly inside loops.
DON'T: Forget that `elif` blocks are completely skipped if a preceding `if` or `elif` condition evaluates to true; always trace branch priority order step-by-step.

```

```