import './App.css';
import { GlobalStyle } from './components/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './hoc/RequireAuth';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Page404 from './pages/Page404';
import Workouts from './pages/Workouts';
import Nutrition from './pages/Nutrition';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/workouts/:workout'
            element={<RequireAuth component={<Workouts />}/>}
          />
          <Route
            path='/nutrition/:nutrition'
            element={<RequireAuth component={<Nutrition />}/>}
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;