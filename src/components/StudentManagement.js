import React, { Component } from 'react';
import styles from './StudentManagement.module.css';
    
  class StudentManagement extends Component {
    constructor(props) {
      super(props);
      this.state = {
        students: [],
        newStudent: {
          id: '',
          name: '',
          email: '',
          course: ''
        },
        isEditing: false,
        editingIndex: -1
      };
    }
  
    componentDidMount() {
      console.log('StudentManagement component mounted');
      
      const savedStudents = localStorage.getItem('students');
      
      if (savedStudents) {
        this.setState({ students: JSON.parse(savedStudents) });
      } else {
        const sampleStudents = [
          { id: '001', name: 'John Doe', email: 'john@example.com', course: 'Computer Science' },
          { id: '002', name: 'Jane Smith', email: 'jane@example.com', course: 'Business Administration' }
        ];
        
        this.setState({ students: sampleStudents });
        localStorage.setItem('students', JSON.stringify(sampleStudents));
      }
    }
    
    componentDidUpdate(prevProps, prevState) {
      if (prevState.students.length !== this.state.students.length) {
        console.log('Students list updated!');
        localStorage.setItem('students', JSON.stringify(this.state.students));
      }
    }
    
    componentWillUnmount() {
      console.log('StudentManagement component will unmount');
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState(prevState => ({
        newStudent: {
          ...prevState.newStudent,
          [name]: value
        }
      }));
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      const { newStudent, students, isEditing, editingIndex } = this.state;
      
      if (!newStudent.id || !newStudent.name || !newStudent.email || !newStudent.course) {
        alert('All fields are required!');
        return;
      }
      
      let updatedStudents;
      
      if (isEditing) {
        updatedStudents = [...students];
        updatedStudents[editingIndex] = newStudent;
        
        this.setState({
          students: updatedStudents,
          isEditing: false,
          editingIndex: -1,
          newStudent: { id: '', name: '', email: '', course: '' }
        });
      } else {
        updatedStudents = [...students, newStudent];
        
        this.setState({
          students: updatedStudents,
          newStudent: { id: '', name: '', email: '', course: '' }
        });
      }
      
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      
      const studentUpdateEvent = new CustomEvent('studentDataChanged', {
        detail: { students: updatedStudents }
      });
      window.dispatchEvent(studentUpdateEvent);
    };
    
    handleEdit = (index) => {
      const studentToEdit = this.state.students[index];
      
      this.setState({
        newStudent: { ...studentToEdit },
        isEditing: true,
        editingIndex: index
      });
    };
    
    handleDelete = (index) => {
      if (window.confirm('Are you sure you want to delete this student?')) {
        const filteredStudents = this.state.students.filter((_, i) => i !== index);
        this.setState({ students: filteredStudents });
        

        localStorage.setItem('students', JSON.stringify(filteredStudents));
        
        const studentUpdateEvent = new CustomEvent('studentDataChanged', {
          detail: { students: filteredStudents }
        });
        window.dispatchEvent(studentUpdateEvent);
      }
    };
    
    render() {
      const { students, newStudent, isEditing } = this.state;
      
      return (
        <div className={styles.studentManagement}>
          <h2>Student Management</h2>
          
          <form onSubmit={this.handleSubmit} className={styles.studentForm}>
            <div className={styles.formGroup}>
              <label>Student ID:</label>
              <input 
                type="text" 
                name="id" 
                value={newStudent.id} 
                onChange={this.handleInputChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input 
                type="text" 
                name="name" 
                value={newStudent.name} 
                onChange={this.handleInputChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={newStudent.email} 
                onChange={this.handleInputChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Course:</label>
              <input 
                type="text" 
                name="course" 
                value={newStudent.course} 
                onChange={this.handleInputChange}
                required
              />
            </div>
            
            <button type="submit">
              {isEditing ? 'Update Student' : 'Add Student'}
            </button>
          </form>
          
          <div className={styles.studentList}>
            <h3>Students List</h3>
            {students.length === 0 ? (
              <p>No students found.</p>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.course}</td>
                      <td>
                        <button onClick={() => this.handleEdit(index)} className={styles.editBtn}>Edit</button>
                        <button onClick={() => this.handleDelete(index)} className={styles.deleteBtn}>Delete</button>
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
  }
  
  export default StudentManagement;
