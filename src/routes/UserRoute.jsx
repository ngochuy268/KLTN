import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from '../pages/decentralizations/employee/layouts/css/Content.module.scss';

import CongViec from "../pages/decentralizations/employee/pages/CongViec/CongViec";


function ContentEmployee() {
    return (
        <div className={styles.content}>
            {/* <BrowserRouter>
                <Routes>
                  
                    <Route path='/congviec' element={<CongViec />} />
                    <Route path="*"> 404 not found !</Route>
                </Routes>
            </BrowserRouter> */}
        </div>
    );
}

export default ContentEmployee;