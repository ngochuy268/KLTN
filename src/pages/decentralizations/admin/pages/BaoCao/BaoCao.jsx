import styles from './BaoCao.module.scss';
import { useState } from 'react';
import BaoCaoNgay from './BaoCaoNgay/BaoCaoNgay';
import BaoCaoThang from './BaoCaoThang/BaoCaoThang';

function BaoCao() {

  
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Báo cáo</p>
                        </div>

                  
                    <div className={styles.dailyReport}>
                         <BaoCaoNgay /> 
                    </div>
                </div>         
            </div>
        </>
    );
}

export default BaoCao;
