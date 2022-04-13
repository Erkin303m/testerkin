import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./home"
import Login from "./login"
import Profile from "./profile"
import { Provider } from 'react-redux'
import store from './redux/state'

// let pathNames=[
//   {pathname:"/" , element: <Home/>},
//   { pathname: "/login", element: <Login /> },
//   { pathname: "/profile", element: <Profile /> },
// ];

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* {pathNames.map((v,i)=>{
            return <Route path={v.pathname}  element={v.element} key={i} />
          })} */}

          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
