import React, { useState, useEffect } from 'react';

function Finance() {
    const [financeData, setFinanceData] = useState({});

    useEffect(() => {
        fetch('/api/finance')
            .then(response => response.json())
            .then(data => setFinanceData(data));
    }, []);

    return (
        <div>
            <h2>Financial Management</h2>
            <pre>{JSON.stringify(financeData, null, 2)}</pre>
        </div>
    );
}

export default Finance;
