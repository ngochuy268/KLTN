import styles from './XuatHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




function XuatHang() {
    return(
        <>
          <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Xuất kho</p> 
                        <div className={styles.scanWrapper}>
                            <p>Nhập mã đơn hàng</p>
                            <input type="text" />
                        </div>
                    </div>

                  
                    <div className={styles.exportGoodsAutoWrapper}>
                        <table className={styles.exportGoodsInputItems}>
                           <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Mã sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th></th>
                                </tr>
                           </thead>
                           <tbody>
                                <tr>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                <tr>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                           </tbody>
                        </table>  
                        <div className={styles.exportGoodsInputBillWrapper}>
                            <p className={styles.exportGoodsInputBillTitle}>Biên lai xuất kho</p>
                            <p className={styles.exportGoodsInputBillDate}>Thời gian: <span>6/6/2022</span></p>
                            <div className={styles.exportGoodsInputBillItems}>
                                <div className={styles.exportGoodsInputBillItem}>
                                    <p className={styles.exportGoodsInputBillItemTitle}>
                                        Nhân viên
                                    </p>
                                    <input type="text" className={styles.exportGoodsInputBillItemInput} />
                                </div>
                                <div className={styles.exportGoodsInputBillItem}>
                                    <p className={styles.exportGoodsInputBillItemTitle}>
                                        Người nhận
                                    </p>
                                    <input type="text" className={styles.exportGoodsInputBillItemInput} />
                                </div>
                            </div>
                            <div className={styles.exportGoodsInputBillItem}>
                                <p className={styles.exportGoodsInputBillItemTitle}>
                                    Đơn hàng
                                </p>
                                <input type="text" className={styles.exportGoodsInputBillItemInput} />
                            </div>
                            <table className={styles.exportGoodsInputBillTable}>
                               <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Mã sản phẩm</th>
                                    <th>Số lượng</th>
                                </tr>
                               </thead>
                               <tbody>
                                    <tr>
                                        <td>Bánh Flan</td>
                                        <td>F55</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td>Bánh Flan</td>
                                        <td>F100</td>
                                        <td>500</td>
                                    </tr>
                               </tbody>
                            </table>
                            <div className={styles.exportGoodsInputBillItem}>
                                <p className={styles.exportGoodsInputBillItemTitle}>
                                    Ghi chú
                                </p>
                                <input type="text" className={styles.exportGoodsInputBillItemInput} />
                            </div>
                            <div className={styles.saveButtonWrapper}>
                                <button className={styles.saveButton}>Xuất phiếu</button>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </>
    );
}

export default XuatHang;