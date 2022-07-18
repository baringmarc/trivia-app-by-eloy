import './App.css';
import Footer from './Footer';
import QuizPage from './QuizPage';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        
      <Navbar />

        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/QuizPage/:category' element = {<QuizPage />}></Route>
        </Routes>

      <Footer />
      
      </div>
      </Router>
    
            
  );
}

export default App;
