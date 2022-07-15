import Login from './pages/Login/LoginForm';
import CaNhan from './pages/decentralizations/admin/pages/CaNhan/CaNhan';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import _ from "lodash";
import NavCaNhan from './pages/decentralizations/employee/layouts/Layout';
// import ForgotPasswordInFo from './pages/Login/ForgotPassword';
// import ChangePassword from './pages/Login/ResetPassword';
import LayoutAdmin from './pages/decentralizations/admin/layouts/Layout';
// import TongQuan from './pages/decentralizations/admin/pages/TongQuan/TongQuan';
// import LayoutEmployee from './pages/decentralizations/employee/layouts/Layout';
import "./styles.css";
import { ToastContainer } from 'react-toastify';

export default function App() {

  const [account, setAccount] = useState({});

  useEffect(() => {
      let session = sessionStorage.getItem('account');
      if (session) {
          setAccount(JSON.parse(session));
      }
  }, []);

  return (
    <div className='App' style={{ position: 'relative' }}>
          {/* {
              account && !_.isEmpty(account) && account.isAuthenticated && <CaNhan />
          } */}
          {/* <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/user" element={<NavCaNhan />}></Route>
              <Route path="/admin" element={<LayoutAdmin />}></Route>
          </Routes> */}

          {/* <Routes>
                  <Route path='/' element={<Login />}></Route>
                  <Route path='/forgotPassword_info' element={<ForgotPasswordInFo />}> </Route>
                  <Route path='/changePassword' element={<ChangePassword />}></Route>
                  <Route path='/tongquan' element={<TongQuan />}></Route>
              </Routes> */}
          <LayoutAdmin />
          {/* <LayoutEmployee /> */}
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
            />
            {/* Same as */}
            <ToastContainer />
    </div>

  );
}
