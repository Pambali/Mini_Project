
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
       
               <Route path ="/signup" element={Signup()}/> 
               <Route path ="/login" element={Login()}/>
           
         </Routes>
    </div>
  );
}

export default App;
