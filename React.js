import React from 'react';
import Health from './components/Health';
import Finance from './components/Finance';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Universal AI-Powered Personal Assistant</h1>
            </header>
            <main>
                <Health />
                <Finance />
                {/* Add other components here */}
            </main>
        </div>
    );
}

export default App;
