import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [health, setHealth] = useState({ status: 'loading...', message: '', database: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/health');
        setHealth(response.data);
      } catch (err) {
        setError('Failed to connect to backend API');
        console.error(err);
      }
    };
    
    fetchHealth();
  }, []);

  return (
    <div className="container">
      <h1>🍔 FoodExpress (DevOps Skeleton)</h1>
      <p>This is a minimal 3-tier architecture skeleton for building CI/CD and Cloud pipelines.</p>
      
      <div className="status-card">
        <h2>System Status</h2>
        
        {error ? (
          <div className="error">❌ {error}</div>
        ) : (
          <ul className="status-list">
            <li>
              <strong>API Status:</strong> 
              <span className={health.status === 'ok' ? 'success' : 'pending'}>
                {health.status === 'ok' ? ' ✅ Online' : ' ⏳ ' + health.status}
              </span>
            </li>
            <li>
              <strong>Database:</strong> 
              <span className={health.database === 'connected' ? 'success' : 'error'}>
                {health.database === 'connected' ? ' ✅ Connected' : ' ❌ ' + health.database}
              </span>
            </li>
            {health.message && (
              <li><strong>Message:</strong> {health.message}</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
