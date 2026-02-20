# Personal Assignment 1 Report Template

## 1. Project Overview
Project Name: Orbital Guard: NeuralX ROI Engine

What does your calculator do? This calculator estimates the financial savings achieved by the NeuralX AI system by preventing unnecessary satellite maneuvers (false positives). It calculates the preserved asset value based on the satellite's replacement cost and the number of maneuvers avoided through AI precision.
---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
| Operator Name | Text | The name of the person using the system |
| Satellite Cost | Million $ | The total insurance or replacement value of the spacecraft |
| Canceled Maneuvers | Integer | The number of maneuvers marked as "unnecessary" by the AI |

Explain in words: I chose these inputs because they represent the core business metrics for satellite fleet operators. Satellite cost is the primary asset value, and maneuvers are the primary "fuel-consuming" events that shorten a satellite's mission life.

---

## 3. Process (Calculation Logic)

Formula or Calculation Used: Savings = (Maneuvers * 0.005) * Satellite Cost

Steps:
Retrieve the operator's name and numerical values from the HTML input fields.
Store the values in constants (name, cost, maneuvers).
Perform the calculation: we assume each prevented maneuver saves 0.5% (0.005) of the total mission value by preserving propellant.
Round the result to two decimal places for financial clarity.

---

## 4. Conditional Logic (if / else)

Explain how your program interprets the result.
If savings <= 0 → "No savings. NeuralX optimization required."
If savings < 5 million → "Low Efficiency: Minor funds preserved."
If savings 5 – 50 million → "Medium Efficiency: Significant mission extension."
If savings ≥ 50 million → "High Efficiency: Market leader in asset preservation."

Explain why you chose these ranges: These ranges are realistic for the NewSpace industry. A saving of over $50 million represents a major success (effectively saving a quarter of a satellite's lifespan), whereas savings under $5 million are considered operational noise.

---

## 5. Output

What does your program show to the user?

Personalized message: A greeting addressed to the Operator (e.g., "Hello, [Name]!").
Calculated value: Total savings displayed in millions of US Dollars ($).
Category: A qualitative interpretation of the efficiency (Low, Medium, or High).

---

## 6. Edge Cases / Unusual Inputs

What happens if:

User enters zero? The program calculates $0.00 savings and displays the "No savings" status.
User enters negative number? The logic treats it as zero or negative profit, resulting in an "Optimization required" message.
User leaves input empty? The JavaScript if (!name || isNaN(cost) ...) check triggers a validation message: "Please fill all fields correctly."

---

## 7. Optional Features (If You Added Any)

Custom Space Theme: I implemented a specialized CSS layout with a dark "Space" color palette to match the Orbital Guard brand.
Dynamic UI feedback: The result box changes its appearance based on the calculation result.
Input Validation: Prevents the script from running with empty or non-numeric data.
---

## 8. How to Run the Project

Download or clone the repository to your local machine.
Open index.html in any modern web browser (Chrome, Firefox, or Edge).
Enter your name, the satellite's cost, and the number of prevented maneuvers.
Click the "Calculate Profit" button to see the results.  

---

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes

If yes, explain briefly:
I asked the AI for help with the CSS "Space Theme" syntax and the structure of the if/else logic.
I modified the calculation formula myself to reflect the specific ROI metrics of the satellite industry.
I now fully understand how document.getElementById links HTML to JavaScript and how variables store user data.  

---

## 10. Reflection

What did you learn from this assignment?

From this assignment, I learned the fundamental flow of Input → Process → Output in web development. I understood how to use conditional logic to turn raw numbers into meaningful business interpretations. Most importantly, I realized how simple code can be applied to solve complex problems in the space industry, such as calculating the ROI of satellite mission extensions.
