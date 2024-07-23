import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Properties/Dashboard';
import Login from './pages/Properties/Login';
import Signup from './pages/Properties/Signup';
import ProtectedRoutes from './auth/ProtectedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Create from './pages/Properties/Create';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/property/signup" element={<Signup />} />
            <Route path="/property/login" element={<Login />} />

            {/* private routes */}
            <Route element={<ProtectedRoutes />}>
               <Route path="/property" element={<Dashboard />} />
               <Route path="/property/create" element={<Create />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
