import styles from './XuatNhap.module.scss';
import { XuatKhoListData } from './xuatKhoData';
import { NhapKhoListData } from './nhapKhoData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
function XuatNhap() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Danh sách xuất nhập kho</p> 
                    </div>

                    {/* Chỗ này cần làm BE để load dữ liệu từ DB */}
                    <div className={styles.listGoodsInfoWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách xuất kho</span>
                        </div>
                            <div className={styles.listGoods}>
                                <table className={styles.goodsTable} style={{width: '100%'}}>
                                <thead>
                                        <tr>
                                            <th>Ngày</th>
                                            <th>Nhân viên</th>
                                            <th>Người nhận</th>
                                            <th>Đơn hàng</th>
                                            <th>Ghi chú</th>
                                            <th>Chỉnh sửa</th>
                                        </tr> 
                                </thead>
                                <tbody>
                                    {XuatKhoListData.map((item, index) => (
                                        <>
                                                <tr>
                                                    <td>{item.date}</td>
                                                    <td>{item.employee}</td>
                                                    <td>{item.receiver}</td>
                                                    <td>{item.delivery}</td>
                                                    <td> 
                                                        <textarea name="note" id={styles.note} cols="30" rows="2" />
                                                    </td>
                                                    <td className={styles.editIcon}>
                                                        <button className={styles.editIconButton}><FontAwesomeIcon icon={faEdit}/></button>
                                                    </td>
                                                </tr>   
                                            </>
                                    ))}
                                    
                                </tbody>
                                </table>
                            </div>
                    </div>
                    <div className={styles.listGoodsInfoWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách nhập kho</span>
                        </div>
                            <div className={styles.listGoods}>
                                <table className={styles.goodsTable} style={{width: '100%'}}>
                                <thead>
                                        <tr>
                                            <th>Ngày</th>
                                            <th>Nhân viên</th>
                                            <th>Ghi chú</th>
                                            <th>Chỉnh sửa</th>
                                        </tr> 
                                </thead>
                                <tbody>
                                    {NhapKhoListData.map((item, index) => (
                                        <>
                                                <tr>
                                                    <td>{item.date}</td>
                                                    <td>{item.employee}</td>
                                                    <td> 
                                                        <textarea name="note" id={styles.note} cols="30" rows="2" />
                                                    </td>
                                                    <td className={styles.editIcon}>
                                                        <button className={styles.editIconButton}><FontAwesomeIcon icon={faEdit}/></button>
                                                    </td>
                                                </tr>   
                                            </>
                                    ))}
                                    
                                </tbody>
                                </table>
                            </div>
                    </div>
                    {/* ------------------------------------------ */}
                </div>         
            </div>
        </>
    )
}

export default XuatNhap;