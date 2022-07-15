import styles from './NhapHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect } from 'react';

function NhapHang() {

    useEffect(() => {
        $(`.${styles.addButton}`).on('click', function() {
            $(`.${styles.addGoodsItems}`).append(`<input type="text" class=${styles.inputItems} />`);
            $(`.${styles.addGoodsDateItems}`).append(`<input type="date" class=${styles.inputItems} />`);
        })

        
    },[])

    return(
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Nhập hàng vào kho</p>
                        <div className={styles.scanWrapper}>
                            <p>Quét mã sản phẩm</p>
                            <button className={styles.scanButton}><FontAwesomeIcon icon={faBarcode} /></button>
                        </div>
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách sản phẩm</span>
                        </div>
                        <div className={styles.addGoods}>
                            <div className={styles.addGoodsItems}>
                                <span>Sản phẩm</span>
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                            </div>

                            <div className={styles.addGoodsItems}>
                                <span>Mã sản phẩm</span>                                
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                            </div>

                            <div className={styles.addGoodsItems}>
                                <span>Số lượng</span>
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                                <input type="text" className={styles.inputItems} />
                            </div>
                          
                            <div className={styles.addGoodsDateItems}>
                                <span>Ngày sản xuất</span>
                                <input type="date" className={styles.inputItems} />
                                <input type="date" className={styles.inputItems} />
                                <input type="date" className={styles.inputItems} />
                                <input type="date" className={styles.inputItems} />
                            </div>
                        </div>
                        <div className={styles.addButtonWrapper}>
                            <button className={styles.addButton}><FontAwesomeIcon icon={faPlus}/></button>
                        </div>
                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton}>Cập nhật</button>
                        </div>
                    </div>
                </div>         
            </div>
        </>
    );
}

export default NhapHang;