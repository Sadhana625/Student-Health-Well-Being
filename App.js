import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from './components/Login';  
import Dashboard from './components/Dashboard';  
import Resources from './components/Resources';  
import Appointment from './components/Appointment';  
import MoodTracker from './components/MoodTracker';  
import Forum from './components/Forum';  
import Home from './components/Home'; // Ensure this import is correct
import SignUp from './components/SignUp'; // Ensure this import is correct
import './App.css';  

const App = () => {  
    return (  
        <Router>  
            <Routes>  
                <Route path="/" element={<Home />} />  {/* Home route */}
                <Route path="/login" element={<Login />} />  
                <Route path="/dashboard" element={<Dashboard />} />  
                <Route path="/resources" element={<Resources />} />  
                <Route path="/appointment" element={<Appointment />} />  
                <Route path="/mood-tracker" element={<MoodTracker />} />  
                <Route path="/forum" element={<Forum />} />  
                <Route path="/signup" element={<SignUp />} /> {/* Ensure this matches the route */}
            </Routes>  
        </Router>  
    );  
};  

export default App;  
