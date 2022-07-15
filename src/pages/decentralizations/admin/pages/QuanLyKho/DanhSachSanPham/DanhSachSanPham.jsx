import styles from './DanhSachSanPham.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import img from '../../../../../../assets/layoutImg/logo.png';
import clsx from 'clsx';

function DanhSachSanPham() {
    return (
        <>
             <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Thông tin kho hàng</p> 
                    </div>

                    {/* Chỗ này cần làm BE để load dữ liệu từ DB */}
                    <div className={styles.listGoodsInfoWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Bánh flan</span>
                        </div>
                        <div className={styles.listGoods}>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <p>Bánh Flan 55g</p>

                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                    <img src={img} alt="banh Flan" className={styles.listGoodsImg} />
                                    <span>Mã sản phẩm : F55</span>
                                </div>
                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton}><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className={styles.listGoodsDelButton}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <p>Bánh Flan 55g</p>
                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                    <img src={img} alt="banh Flan" className={styles.listGoodsImg} />
                                    <span>Mã sản phẩm : F55</span>
                                </div>
                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton}><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className={styles.listGoodsDelButton}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <p>Bánh Flan 55g</p>
                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                    <img src={img} alt="banh Flan" className={styles.listGoodsImg} />
                                    <span>Mã sản phẩm : F55</span>
                                </div>
                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton}><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className={styles.listGoodsDelButton}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <p>Bánh Flan 55g</p>
                                    <div className={styles.ribbonWrapper}>
                                        <div className={styles.ribbon}>
                                            Tạm ngưng
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                    <img src={img} alt="banh Flan" className={styles.listGoodsImg} />
                                    <span>Mã sản phẩm : F55</span>
                                </div>
                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton}><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className={styles.listGoodsDelButton}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------ */}


                </div>

            
            </div>
        </>
    )
}

export default DanhSachSanPham;