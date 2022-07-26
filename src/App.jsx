import { useEffect, useState } from 'react';
import _ from "lodash";
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoute';

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

      <AppRoutes />

      <ToastContainer
        position="top-center"
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
    </div>

  );
}
