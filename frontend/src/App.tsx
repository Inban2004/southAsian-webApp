import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Screens/Home/HomeView';
import LoginView from './Screens/Login/LoginView';
import SignupView from './Screens/Signup/SignupView';
import RequireAuth from './Components/RequireAuth/RequireAuth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomeView />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
      </Routes>
    </BrowserRouter>
  );
}
