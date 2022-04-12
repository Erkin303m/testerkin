import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import Profile from "./pages/profile"
import { Provider } from 'react-redux'
import store from './redux/state'

let pathNames=[
  {pathname:"/" , element: <Home/>},
  { pathname: "/login", element: <Login /> },
  { pathname: "/profile", element: <Profile /> },
];

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {pathNames.map((v,i)=>{
            return <Route path={v.pathname}  element={v.element} key={i} />
          })}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
