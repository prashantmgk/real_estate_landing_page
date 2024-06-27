import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Properties/Dashboard';
import Login from './pages/Properties/Login';
import Signup from './pages/Properties/Signup';
import ProtectedRoutes from './auth/ProtectedRoutes';

function App() {
   return (
      <div className="App">
         <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/property/login" element={<Login />} />
            <Route path="/property/signup" element={<Signup />} />

            {/* private routes */}
            <ProtectedRoutes>
               <Route path="/property" element={<Dashboard />} />
            </ProtectedRoutes>
         </Routes>
      </div>
   );
}

export default App;
