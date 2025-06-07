import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SubmittedData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) return <p>No data submitted.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>✅ Submission Successful</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(formData).map(([key, value]) => (
          key !== 'showPassword' && (
            <li key={key}><strong>{key}:</strong> {value}</li>
          )
        ))}
      </ul>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>🔄 Register Another</button>
    </div>
  );
};

export default SubmittedData;