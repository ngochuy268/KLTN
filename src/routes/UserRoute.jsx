import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from '../pages/decentralizations/employee/layouts/css/Content.module.scss';

import CongViec from "../pages/decentralizations/employee/pages/CongViec/CongViec";


function ContentEmployee() {
    return (
        <div className={styles.content}>
            {/* <BrowserRouter>
                <Routes>
                  
                    <Route path='/congviec' element={<CongViec />} />
                </Routes>
            </BrowserRouter> */}
        </div>
    );
}

export default ContentEmployee;