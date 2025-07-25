import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import SignUp from './components/SignUp.jsx';
import  { appStore } from './utils/appStore.js';
import { Provider } from 'react-redux';
import Feed from './components/Feed.jsx';

function App() {
  return (
    <Provider store={ appStore } > 
    <BrowserRouter basename='/'> 

      <Routes>
        {/* Routes that include NavBar and Footer via Body */}
        <Route path='/' element={<Body />}>
          <Route path="profile" element={<Profile />} />
          <Route path="feed" element={<Feed />} />
        </Route>
        {/*Independent and diect routes which do not need header and footer*/ }
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
