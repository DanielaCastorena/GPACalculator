//Daniela Castorena 2024
//GPA Calculator - GPAForm.js

import React from 'react';

function GPAForm({ course, handleInputChange }) {
  return (
    <div className="course">
      <label>Course Name:</label>
      <input
        type="text"
        name="name"
        value={course.name}
        onChange={handleInputChange}
        required
      />
      <label>Credits:</label>
      <input
        type="number"
        name="credits"
        value={course.credits}
        onChange={handleInputChange}
        required
      />
      <label>Grade:</label>
      <select
        name="grade"
        value={course.grade}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>select...</option>
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
        <option value="0.0">F</option>
      </select>
    </div>
  );
}

export default GPAForm;
