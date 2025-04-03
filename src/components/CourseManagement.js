import React, { useEffect, useRef, useState } from 'react';
import styles from './CourseManagement.module.css';

function CourseManagement() {

  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseId: '',
    courseName: '',
    instructor: '',
    credits: '',
    capacity: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [filterText, setFilterText] = useState('');
  

  const courseNameInputRef = useRef(null);
  
  
  useEffect(() => {
    
    courseNameInputRef.current.focus();
    

    const sampleCourses = [
      { courseId: 'CS101', courseName: 'Introduction to Programming', instructor: 'Dr. Smith', credits: 3, capacity: 40 },
      { courseId: 'BUS201', courseName: 'Business Ethics', instructor: 'Prof. Johnson', credits: 4, capacity: 35 }
    ];
    
    setCourses(sampleCourses);
  }, []);
  
  
  useEffect(() => {
    if (isEditing) {
      courseNameInputRef.current.focus();
    }
  }, [isEditing]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    

    const credits = parseInt(formData.credits);
    const capacity = parseInt(formData.capacity);
    
    if (isNaN(credits) || isNaN(capacity) || credits <= 0 || capacity <= 0) {
      alert('Credits and Capacity must be positive numbers');
      return;
    }
    
    if (isEditing) {
      // Update existing course
      const updatedCourses = [...courses];
      updatedCourses[editingIndex] = formData;
      setCourses(updatedCourses);
      setIsEditing(false);
      setEditingIndex(-1);
    } else {
  
      setCourses([...courses, formData]);
    }
    
   
    setFormData({
      courseId: '',
      courseName: '',
      instructor: '',
      credits: '',
      capacity: ''
    });
  };
  
  const handleEdit = (index) => {
    setFormData(courses[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };
  
  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };
  
  
  const filteredCourses = courses.filter(course => 
    course.courseName.toLowerCase().includes(filterText.toLowerCase()) ||
    course.instructor.toLowerCase().includes(filterText.toLowerCase()) ||
    course.courseId.toLowerCase().includes(filterText.toLowerCase())
  );
  
  return (
    <div className={styles.courseManagement}>
      <h2>Course Management</h2>
      
      <form onSubmit={handleSubmit} className={styles.courseForm}>
        <div className={styles.formGroup}>
          <label>Course ID:</label>
          <input 
            type="text" 
            name="courseId" 
            value={formData.courseId} 
            onChange={handleInputChange}
            required/>
        </div>
        
        <div className={styles.formGroup}>
          <label>Course Name:</label>
          <input 
            type="text" 
            name="courseName" 
            value={formData.courseName} 
            onChange={handleInputChange}
            ref={courseNameInputRef}
            required/>
        </div>
        
        <div className={styles.formGroup}>
          <label>Instructor:</label>
          <input 
            type="text" 
            name="instructor" 
            value={formData.instructor} 
            onChange={handleInputChange}
            required/>
        </div>
        
        <div className={styles.formGroup}>
          <label>Credits:</label>
          <input 
            type="number" 
            name="credits" 
            value={formData.credits} 
            onChange={handleInputChange}
            min="1"
            required/>
        </div>
        
        <div className={styles.formGroup}>
          <label>Capacity:</label>
          <input 
            type="number" 
            name="capacity" 
            value={formData.capacity} 
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>
        
        <button type="submit">
          {isEditing ? 'Update Course' : 'Add Course'}
        </button>
        
        {isEditing && (
          <button 
            type="button" 
            onClick={() => {
              setIsEditing(false);
              setFormData({
                courseId: '',
                courseName: '',
                instructor: '',
                credits: '',
                capacity: ''
              });
            }}
            className={styles.cancelBtn}
          >
            Cancel
          </button>
        )}
      </form>
      
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search courses..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      
      <div className={styles.courseList}>
        <h3>Courses List</h3>
        {filteredCourses.length === 0 ? (
          <p>{courses.length === 0 ? 'No courses found.' : 'No matching courses found.'}</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Credits</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={index}>
                  <td>{course.courseId}</td>
                  <td>{course.courseName}</td>
                  <td>{course.instructor}</td>
                  <td>{course.credits}</td>
                  <td>{course.capacity}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} className={styles.editBtn}>Edit</button>
                    <button onClick={() => handleDelete(index)} className={styles.deleteBtn}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

  );
}

export default CourseManagement;