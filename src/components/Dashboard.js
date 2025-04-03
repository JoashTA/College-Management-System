/*import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import StatCard from './StatCard';

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    activeEnrollments: 0
  });
  const [recentActivity, setRecentActivity] = useState("");

  const activities = [
    "Technical Workshop on AI and Machine Learning",
    "Annual Cultural Fest with Music & Dance Competitions",
    "Hackathon – 24-Hour Coding Challenge",
    "Seminar on Sustainable Energy Solutions",
    "Sports Meet 2024 – Inter-department Tournaments",
    "Guest Lecture by an Industry Expert",
    "Robotics Competition – Innovation in Automation",
    "Career Guidance Session by Alumni",
    "Blood Donation Camp Organized by the College",
    "Startup Pitch Event – Encouraging Young Entrepreneurs"
  ];
  
  useEffect(() => {
 
    setTimeout(() => {
      setStats({
        totalStudents: 120,
        totalCourses: 15,
        activeEnrollments: 350
      });
    }, 1000);
    
    setRecentActivity(activities[Math.floor(Math.random() * activities.length)]);
   
    return () => {

      console.log('Dashboard component unmounted');
    };
  }, []);
  
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.statsContainer}>
        <StatCard title="Total Students" count={stats.totalStudents} color="blue" />
        <StatCard title="Total Courses" count={stats.totalCourses} color="green" />
        <StatCard title="Active Enrollments" count={stats.activeEnrollments} color="orange" />
      </div>
      
      <div className={styles.recentActivity}>
        <h3>Recent Activity</h3>
        <p>{recentActivity}</p>
        
        
      </div>
    </div>
  );
}

export default Dashboard;
*/
import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import StatCard from './StatCard';

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 15,
    activeEnrollments: 350
  });
  const [recentActivity, setRecentActivity] = useState("");
  const [recentActivity1, setRecentActivity1] = useState("");
  const [recentActivity2, setRecentActivity2] = useState("");

  const activities = [
    "Technical Workshop on AI and Machine Learning",
    "Annual Cultural Fest with Music & Dance Competitions",
    "Hackathon – 24-Hour Coding Challenge",
    "Seminar on Sustainable Energy Solutions",
    "Sports Meet 2024 – Inter-department Tournaments",
    "Guest Lecture by an Industry Expert",
    "Robotics Competition – Innovation in Automation",
    "Career Guidance Session by Alumni",
    "Blood Donation Camp Organized by the College",
    "Startup Pitch Event – Encouraging Young Entrepreneurs"
  ];
  const activities1 = [
    "Cybersecurity Awareness Workshop",  
    "Coding Bootcamp & Competitive Programming Challenge",  
    "Entrepreneurship & Startup Incubation Program",  
    "AI & Data Science Hackathon",  
    "Cultural Night & Talent Showcase",  
    "Innovative Project Expo & Science Fair",  
    "Mental Health Awareness & Stress Management Workshop",  
    "Eco-Friendly Campus Drive & Tree Plantation Event"
  ];
  const activities2 = [
    "Virtual Reality & Augmented Reality Development Workshop",  
    "Inter-College Debate Competition",  
    "Blockchain and Cryptocurrency Seminar",  
    "Photography & Short Film Making Contest",  
    "Mathematics & Puzzle Solving Olympiad",  
    "Industry Networking & Internship Fair",  
    "Artificial Intelligence in Healthcare Symposium",  
    "Fitness & Yoga Awareness Camp",
  ];
  
  useEffect(() => {
    // Get the most recent student data from localStorage
    const updateStudentCount = () => {
      const savedStudents = localStorage.getItem('students');
      if (savedStudents) {
        const studentArray = JSON.parse(savedStudents);
        setStats(prevStats => ({
          ...prevStats,
          totalStudents: studentArray.length
        }));
      }
    };
    
    // Initial update
    updateStudentCount();
    
    // Set up listener for storage changes
    const handleStorageChange = () => {
      updateStudentCount();
      // Add a recent activity notification about student data changes
      setRecentActivity("Student records were updated");
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // For changes within the same tab, we need a polling mechanism
    // since the storage event doesn't fire for the same tab that made the change
    const intervalId = setInterval(updateStudentCount, 2000);
    
    setRecentActivity(activities[Math.floor(Math.random() * activities.length)]);
    setRecentActivity1(activities1[Math.floor(Math.random() * activities1.length)]);
    setRecentActivity2(activities2[Math.floor(Math.random() * activities2.length)]);
   
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
      console.log('Dashboard component unmounted');
    };
  }, []);
  
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.statsContainer}>
        <StatCard title="Total Students" count={stats.totalStudents} color="blue" />
        <StatCard title="Total Courses" count={stats.totalCourses} color="green" />
        <StatCard title="Active Enrollments" count={stats.activeEnrollments} color="orange" />
      </div>
      
      <div className={styles.recentActivity}>
        <h3>Recent Activity</h3>
        <p>{recentActivity}</p>
        <p>{recentActivity1}</p>
        <p>{recentActivity2}</p>
      </div>
    </div>
  );
}

export default Dashboard;