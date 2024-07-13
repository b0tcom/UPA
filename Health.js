import React, { useState, useEffect } from 'react';

function Health() {
    const [healthData, setHealthData] = useState({});

    useEffect(() => {
        fetch('/api/health')
            .then(response => response.json())
            .then(data => setHealthData(data));
    }, []);

    return (
        <div>
            <h2>Health Monitoring</h2>
            <pre>{JSON.stringify(healthData, null, 2)}</pre>
        </div>
    );
}

export default Health;
