# Elvis's Counter Project 3000





## Step 5: Add an onClick handler to the button

**Brief:**

Use JavaScript to add an onClick handler to your "Add one more". To start with,
make the handler display an alert of some sort.

**Acceptance Criteria:**

- ✅ The button, when clicked, shows an alert.
- ✅ The button, when clicked again, shows an alert again.

<details>
  <summary>Hints</summary>
  - Use `document.getElementById()` to get a reference to your button in
    JavaScript.
  - Use `addEventListener()` to add an onClick handler to your button.
  - Use `alert()` to display an alert to the user.
</details>

---

## Step 6: Change the onClick handler to change the counter text

**Brief:**

When the user clicks on "Add one more", the counter text should change from
"clicked 0 times" to "clicked 1 times", to "clicked 2 times", etc. Don't worry
about the grammar for now.

**Acceptance Criteria:**

- ✅ When the user clicks on "Add one more", the counter text should change to
  reflect how many times the user has clicked.

<details>
  <summary>Hints</summary>
  - In your onClick handler, get a reference to the counter text using e.g.
    `let label = document.getElementById(...)`.
  - **Outside** your onClick handler, define a variable to hold the number of
    times the button has been clicked.
  - Use a template string literal (backticks) to compose the counter text using
    the variable holding the number of times the button has been clicked.
</details>

---

## Step 7: Fix the grammar

**Brief:**

The correct text after one click should be "clicked 1 time", not "1 times".

**Acceptance Criteria:**

- ✅ The grammatically correct text is shown after one click of the button.

<details>
  <summary>Hints</summary>
  - `if ....`
</details>

---

## Step 8: Refactor and Comment Your Code

**Brief:**

Clean up your code for readability and maintainability.

**Acceptance Criteria:**

- ✅ JavaScript functions are properly named and scoped.
- ✅ Comments are added to explain complex code sections.
- ✅ Unused code and console logs are removed.

---

## Step 9: Deploy the App on Netlify

**Brief:**

Make your application accessible online via [surge.sh](https://surge.sh).

**Acceptance Criteria:**

- ✅ The app is live and accessible through a URL.
- ✅ A link to your deployed app is included in your `README.md`

**Congratulations!** You've built and deployed a functional counter application
using HTML and JavaScript.

---

# Grading

For every completed step you can get 1 point (9 total). You can get partial
points if your solution does not pass all the acceptance criteria.
