import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Request from './components/Request/Request';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { loadUser } from './redux/Actions/user';
import { ProtectedRoute } from 'protected-route-react';
function App() {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault()
  });

  const { isAuthenticated, user, message, error } = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        {/* *************** User Routes  ***************************/}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={'/profile'}><Login /></ProtectedRoute>} />
        <Route path='/register' element={<ProtectedRoute isAuthenticated={!isAuthenticated}><Register /></ProtectedRoute>} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/request' element={<Request />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursePage />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />

        <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><UpdateProfile /></ProtectedRoute>} />

        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />

        {/* ****************Admin Routes ************************* */}
        <Route path='/admin/dashboard' element={<ProtectedRoute adminRoute={isAuthenticated}><Dashboard /></ProtectedRoute>} />
        <Route path='/admin/createcourse' element={<CreateCourse />} />
        <Route path='/admin/courses' element={<AdminCourses />} />
        <Route path='/admin/users' element={<Users />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}
export default App;
