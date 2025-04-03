import React, { Component } from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import '../styles/StudentPage.css';

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "John Doe", age: 21, course: "Computer Science" },
        { id: 2, name: "Jane Smith", age: 22, course: "Business" }
      ],
      showForm: false
    };
  }
  
  componentDidMount() {
    console.log("StudentPage mounted");
  }
  
  componentWillUnmount() {
    console.log("StudentPage unmounting");
  }

  addStudent = (student) => {
    const newId = this.state.students.length + 1;
    this.setState({
      students: [...this.state.students, { ...student, id: newId }],
      showForm: false
    });
  }

  deleteStudent = (id) => {
    this.setState({
      students: this.state.students.filter(student => student.id !== id)
    });
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  render() {
    return (
      <div className="student-page">
        <h2>Student Management</h2>
        <button onClick={this.toggleForm}>
          {this.state.showForm ? 'Cancel' : 'Add Student'}
        </button>
        
        {this.state.showForm && <StudentForm onSubmit={this.addStudent} />}
        
        <StudentList 
          students={this.state.students} 
          onDelete={this.deleteStudent} 
        />
      </div>
    );
  }
}

export default StudentPage;