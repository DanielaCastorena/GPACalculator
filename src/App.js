//Daniela Castorena 2024
//GPA Calculator - App.js

import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  //manage courses, GPA, errors, and grade format
  const [courses, setCourses] = useState([{ name: '', credits: '', grade: '' }]);
  const [gpa, setGpa] = useState(null);
  const [error, setError] = useState('');
  const [gradeFormat, setGradeFormat] = useState('letter');

  //convert percentage grades to grade points
  const convertPercentageToGradePoint = (percentage) => {
    if (percentage >= 97) return 4.0;
    if (percentage >= 93) return 4.0;
    if (percentage >= 90) return 3.7;
    if (percentage >= 87) return 3.3;
    if (percentage >= 83) return 3.0;
    if (percentage >= 80) return 2.7;
    if (percentage >= 77) return 2.3;
    if (percentage >= 73) return 2.0;
    if (percentage >= 70) return 1.7;
    if (percentage >= 67) return 1.3;
    if (percentage >= 63) return 1.0;
    if (percentage >= 60) return 0.7;
    return 0.0;
  };

  //add a new course to list
  const addCourse = () => {
    setCourses([...courses, { name: '', credits: '', grade: '' }]);
  };

  //handle grade format change (letter or percentage)
  const handleGradeFormatChange = (format) => {
    setGradeFormat(format);
    //reset grades when format changes
    const updatedCourses = courses.map(course => ({ ...course, grade: '' }));
    setCourses(updatedCourses);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newCourses = [...courses];
    newCourses[index][name] = value;
    setCourses(newCourses);
  };

  //remove a course from list
  const removeCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const calculateGPA = useCallback(() => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let isValid = true;
  
    courses.forEach(course => {
      if (course.credits === '' || course.grade === '') {
        setError('Please fill out all required fields.');
        isValid = false;
        return;
      }
  
      const credits = parseFloat(course.credits);
      let grade = parseFloat(course.grade);
  
      //convert percentage to grade point if needed
      if (gradeFormat === 'percentage') {
        grade = convertPercentageToGradePoint(grade);
      }
  
      totalCredits += credits;
      totalGradePoints += credits * grade;
    });
  
    if (isValid) {
      const gpa = totalGradePoints / totalCredits;
      setGpa(gpa.toFixed(2));
      setError('');
    }
  }, [courses, gradeFormat]); 

  //calculate GPA button trggered by enter
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        calculateGPA();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [calculateGPA]); 
  
  return (
    <div className="App">
      <h1>GPA Calculator</h1>

      {/* grade format selection */}
      <div className="grade-format-selector">
        <label>
          <input
            type="radio"
            name="gradeFormat"
            value="letter"
            checked={gradeFormat === 'letter'}
            onChange={() => handleGradeFormatChange('letter')}
          />
          Letter Grades
        </label>
        <label>
          <input
            type="radio"
            name="gradeFormat"
            value="percentage"
            checked={gradeFormat === 'percentage'}
            onChange={() => handleGradeFormatChange('percentage')}
          />
          Percentage Grades
        </label>
      </div>

      {/* course input fields */}
      <div className="container">
        <div id="courses">
          {courses.map((course, index) => (
            <div key={index} className="course">
              {index > 0 && (
                <button
                  className="remove-course"
                  onClick={() => removeCourse(index)}
                  title="Remove course"
                >
                  &times;
                </button>
              )}
              <label>Course Name:</label>
              <input
                type="text"
                name="name"
                value={course.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="e.g. Math"
              />
              <label>Credits:</label>
              <input
                type="number"
                name="credits"
                value={course.credits}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
              <label>
                Grade: {gradeFormat === 'percentage' ? '(%):' : ''}
              </label>
              {gradeFormat === 'letter' ? (
                <select
                  className="grade-select"
                  name="grade"
                  value={course.grade}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                >
                  <option value="" disabled>Select...</option>
                  <option value="4.0">A+</option>
                  <option value="4.0">A</option>
                  <option value="3.7">A-</option>
                  <option value="3.3">B+</option>
                  <option value="3.0">B</option>
                  <option value="2.7">B-</option>
                  <option value="2.3">C+</option>
                  <option value="2.0">C</option>
                  <option value="1.7">C-</option>
                  <option value="1.3">D+</option>
                  <option value="1.0">D</option>
                  <option value="0.7">D-</option>
                  <option value="0.0">F</option>
                </select>
              ) : (
                <input
                  type="number"
                  name="grade"
                  value={course.grade}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="e.g. 85"
                  required
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* add course and calculate GPA buttons */}
      <div className="buttons">
        <button className="btn add-course" title="Add course" onClick={addCourse}>+</button>
        <button className="btn" onClick={calculateGPA}>Calculate GPA</button>
      </div>

      {/* display results */}
      {gpa && <div className="result">Your GPA is: {gpa}</div>}
      {error && <div className="error">{error}</div>}

      <footer>
        <p>Created by Daniela Castorena</p>
      </footer>
    </div>
  );
}

export default App;
