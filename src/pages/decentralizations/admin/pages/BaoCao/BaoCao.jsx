// import styles from './BaoCao.module.scss';
// import { useState } from 'react';
// import BaoCaoNgay from './BaoCaoNgay/BaoCaoNgay';
// import BaoCaoThang from './BaoCaoThang/BaoCaoThang';

// function BaoCao() {
    
//     const [value, setValue] = useState('Báo cáo hàng ngày');
//     return (
//         <>
//             <div className={styles.container}>
//                 <div className={styles.wrapper}>
//                     <div className={styles.wrapperTitle}>
//                         <p>Báo cáo</p>
//                         <select className={styles.reportSelection} value={value} onChange={e => setValue(e.target.value)}>
//                             <option value='Báo cáo hàng ngày'>Báo cáo hàng ngày</option>
//                             <option value='Báo cáo tháng'>Báo cáo tháng</option>
//                         </select> 
//                         {/* <Select className={styles.reportSelection} options={options} /> */}
//                     </div>

                  
//                     <div className={styles.dailyReport}>
//                         {value === 'Báo cáo hàng ngày' ? <BaoCaoNgay /> : <BaoCaoThang />}
//                     </div>
//                 </div>         
//             </div>
//         </>
//     );
// }

// export default BaoCao;
