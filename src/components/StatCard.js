import PropTypes from 'prop-types';
import React from 'react';

function StatCard({ title, count, color }) {

  const cardStyle = {
    backgroundColor: color === 'blue' ? '#e3f2fd' : 
                     color === 'green' ? '#e8f5e9' : 
                     color === 'orange' ? '#fff3e0' : '#ffffff',
    borderLeft: `4px solid ${color === 'blue' ? '#2196f3' : 
                            color === 'green' ? '#4caf50' : 
                            color === 'orange' ? '#ff9800' : '#cccccc'}`,
    padding: '15px',
    margin: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };
  
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p className="count">{count}</p>
    </div>
  );
}


StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'orange', 'gray'])
};


StatCard.defaultProps = {
  color: 'gray'
};

export default StatCard;