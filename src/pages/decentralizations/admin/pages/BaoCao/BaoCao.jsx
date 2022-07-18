import styles from './BaoCao.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useState } from 'react';
import Select from 'react-select';
import BaoCaoNgay from './BaoCaoNgay/BaoCaoNgay';

function BaoCao() {
    
    const options = [
        {value: 'Báo cáo hàng ngày', label: 'Báo cáo hàng ngày'},
        {value: 'Báo cáo tháng', label: 'Báo cáo tháng'}
    ]

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Báo cáo</p>
                        <select className={styles.reportSelection}>
                            <option value='Báo cáo hàng ngày'>Báo cáo hàng ngày</option>
                            <option value='Báo cáo tháng'>Báo cáo tháng</option>
                        </select> 
                        {/* <Select className={styles.reportSelection} options={options} /> */}
                    </div>

                  
                    <div className={styles.employeeListWrapper}>
                      {/* -----------------BE--------------------- */}
                        <BaoCaoNgay />
                      {/* ---------------------------------------- */}
                    </div>
                </div>         
            </div>
        </>
    );
}

export default BaoCao;
