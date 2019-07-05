import React from 'react';
import './App.css';
import { Dashboard } from './components/dashboard/dashboard';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <h1>Hive Charts</h1>
                <Dashboard/>
            </header>
        </div>
    );
}

export default App;
