### GPA Calculator
This is a GPA Calculator built using React. It enables users to input their courses, select between letter or percentage grade formats, and calculate their GPA based on the credits and grades for each course.

## Features
• Dynamic course addition/removal: Add multiple courses that include a name (optional), how many credits it's worth, and final grade. Courses can be removed individually.
• Letter and percentage grades: Supports switching between letter grades (A+, A, B+, etc...) and percentage grades (e.g., 85%).
• GPA calculation: Automatically computes GPA when the 'Calculate GPA' button is clicked. This button is also triggered by the 'Enter' key.
• Error handling: If any required fields are left empty, an error message prompts the user to fill out all required fields.

## How it Works
1. Course Input
Users can input their course details, including:

• Course Name (optional): A text field where users can name the course (e.g., "Math").
• Credits: A numeric input for the number of credits each course is worth.
• Grade: Depending on the selected format (letter or percentage), the grade is either a drop-down list (for letter grades) or a number input (for percentage grades).

2. Grade Format
There are two grading formats available:

• Letter Grades: Includes standard letter grades (A+, A, A-, B+, B, etc.) with their respective grade point values.
• Percentage Grades: Users can enter a percentage score (e.g., 90%), and the calculator automatically converts it to a grade point using a predefined scale.

# Grade Point Conversion Scale
Percentage scores are converted to grade points according to this scale:

97-100 → 4.3 (A+)
93-96 → 4.0 (A)
90-92 → 3.7 (A-)
87-89 → 3.3 (B+)
83-86 → 3.0 (B)
80-82 → 2.7 (B-)
77-79 → 2.3 (C+)
73-76 → 2.0 (C)
70-72 → 1.7 (C-)
67-69 → 1.3 (D+)
63-66 → 1.0 (D)
60-62 → 0.7 (D-)
Below 60 → 0.0 (F)

3. GPA Calculation
The GPA is calculated using the following formula:

GPA = (Sum of (Credits * Grade Points)) / Total Credits

The total credits and grade points for each course are summed, and the GPA is calculated by dividing the total grade points by the total credits. If any course is missing a required field (credits or grade), an error message is displayed prompting the user to complete the fields.

4. Key Functionality
• Add Course: Adds a new course input row, allowing the user to enter additional course details.
• Remove Course: Allows users to remove courses by clicking the 'X' button next to each course.
• Calculate GPA: Calculates and displays the GPA based on the entered course data. If there are missing fields, it shows an error message. Users may also press the 'Enter' key to calculate the GPA.

5. Error Handling
If any fields (credits or grade) are left empty, the app displays an error message asking the user to complete all required fields.

6. State Management
courses: An array of course objects, each containing name, credits, and grade.
gpa: The calculated GPA, which is displayed after calculation.
error: Holds any error messages for missing fields.
gradeFormat: Tracks whether the user is using letter grades or percentage grades.

## How to Run the App

# Prerequisites
Ensure that you have Node.js and npm installed on your machine.

# Installation
Clone the repository:
git clone https://github.com/your-username/gpa-calculator.git
cd gpa-calculator

Install the dependencies:
npm install

Start the application:
npm start

The app will now be running locally on http://localhost:3000.

# Future Enhancements
• Ability to save or export GPA calculations.
• Additional grade formats (e.g., pass/fail).

# Link to Project
gpacalculator-dc.netlify.app