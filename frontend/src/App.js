import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser} from './actions/user';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adminpanel from './components/Admin/Adminpanel';
import TimeLine from './components/Admin/EditTimeline';
import EditProject from './components/Admin/EditProject';
import Loader from './components/Loader/Loader';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
    dispatch(loadUser())
  }, [dispatch])
  const { isAuthenticated } = useSelector(state => state.login)
  console.log(isAuthenticated)
  const { loading, user } = useSelector(state => state.user)
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {
        loading ?
          <Loader/>
          :
          (<>
            <Header />
            <Routes>
              <Route path='/' element={<Home timelines={user.timeline} skills={user.skills} />} />
              <Route path='/about' element={<About aboutdata={user.about}/>} />
              <Route path='/projects' element={<Project projects={user.projects} />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={isAuthenticated ? <Adminpanel /> : <Login />} />
              <Route path='/admin/timeline' element={isAuthenticated ? <TimeLine /> : <Login />} />
              <Route path='/admin/project' element={isAuthenticated ? <EditProject /> : <Login />} />
            </Routes>
            <Footer />
          </>)
      }
    </Router>
  );
}

export default App;
