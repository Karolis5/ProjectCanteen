import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import RegistrationForm from './components/RegistrationForm';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
