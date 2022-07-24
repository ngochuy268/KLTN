import styles from './DanhSachSanPham.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import img from '../../../../../../assets/layoutImg/logo.png';
import clsx from 'clsx';
import { Dialog, DialogTitle } from '@mui/material';
import { useState } from 'react';

function DanhSachSanPham() {

    // Open and close
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

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
                                    <b>Bánh Flan 100g</b>
                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                   <div className={styles.listGoodInfoWrapper}>
                                        <img src={require('../../../../../../assets/layoutImg/sanpham/sp1.jpg').default} alt="banh Flan" className={styles.listGoodsImg} />
                                        <div className={styles.listGoodInfoItem}>
                                            <div className={styles.listGoodInfo}>
                                                <span>Mã sản phẩm: </span> <p>F100</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Hạn sử dụng: </span> <p>26 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Báo trước ngày hết hạn: </span> <p>5 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối thiểu: </span> <p>1500</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối đa: </span> <p>10000</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Quy cách kho</h3>
                                       <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Lóc: </span><p>6</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Thùng: </span><p>24 lóc</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Khay: </span><p>48 lóc</p>
                                            </div>
                                       </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Giá sản phẩm</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá bán: </span> <p>3300 đ</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá mua: </span> <p>4300 đ</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Mô tả</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <p style={{margin: 0}}></p>
                                        </div>
                                   </div>
                                </div>

                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton} onClick={handleClickOpen}><FontAwesomeIcon icon={faEdit} /></button>
                                </div>
                            </div>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <b>Bánh Flan trân châu 100g</b>

                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                   <div className={styles.listGoodInfoWrapper}>
                                        <img src={require('../../../../../../assets/layoutImg/sanpham/sp3.jpg').default} alt="banh Flan" className={styles.listGoodsImg} />
                                        <div className={styles.listGoodInfoItem}>
                                            <div className={styles.listGoodInfo}>
                                                <span>Mã sản phẩm: </span> <p>F103</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Hạn sử dụng: </span> <p>26 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Báo trước ngày hết hạn: </span> <p>5 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối thiểu: </span> <p>1500</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối đa: </span> <p>10000</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Quy cách kho</h3>
                                       <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Lóc: </span><p>6</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Thùng: </span><p>24 lóc</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Khay: </span><p>48 lóc</p>
                                            </div>
                                       </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Giá sản phẩm</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá bán: </span> <p>5000 đ</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá mua: </span> <p>3200 đ</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Mô tả</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <p style={{margin: 0}}></p>
                                        </div>
                                   </div>
                                </div>

                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton} onClick={handleClickOpen}><FontAwesomeIcon icon={faEdit} /></button>
                                </div>
                            </div>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <b>Bánh Flan 35g</b>

                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                   <div className={styles.listGoodInfoWrapper}>
                                        <img src={require('../../../../../../assets/layoutImg/sanpham/sp2.jpg').default} alt="banh Flan" className={styles.listGoodsImg} />
                                        <div className={styles.listGoodInfoItem}>
                                            <div className={styles.listGoodInfo}>
                                                <span>Mã sản phẩm: </span> <p>F35</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Hạn sử dụng: </span> <p>26 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Báo trước ngày hết hạn: </span> <p>7 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối thiểu: </span> <p>2000</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối đa: </span> <p>10000</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Quy cách kho</h3>
                                       <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Lóc: </span><p>8</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Thùng: </span><p>30 lóc</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Khay: </span><p>24 lóc</p>
                                            </div>
                                       </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Giá sản phẩm</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá bán: </span> <p>3100 đ</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá mua: </span> <p>2200 đ</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Mô tả</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <p style={{margin: 0}}></p>
                                        </div>
                                   </div>
                                </div>

                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton} onClick={handleClickOpen}><FontAwesomeIcon icon={faEdit} /></button>
                                </div>
                            </div>
                            <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <b>Bánh Flan matcha 35g</b>

                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                   <div className={styles.listGoodInfoWrapper}>
                                        <img src={require('../../../../../../assets/layoutImg/sanpham/sp4.jpg').default} alt="banh Flan" className={styles.listGoodsImg} />
                                        <div className={styles.listGoodInfoItem}>
                                            <div className={styles.listGoodInfo}>
                                                <span>Mã sản phẩm: </span> <p>F351</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Hạn sử dụng: </span> <p>26 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Báo trước ngày hết hạn: </span> <p>5 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối thiểu: </span> <p>1500</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối đa: </span> <p>10000</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Quy cách kho</h3>
                                       <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Lóc: </span><p>6</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Thùng: </span><p>24 lóc</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Khay: </span><p>48 lóc</p>
                                            </div>
                                       </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Giá sản phẩm</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá bán: </span> <p>5000 đ</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá mua: </span> <p>3200 đ</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Mô tả</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <p style={{margin: 0}}></p>
                                        </div>
                                   </div>
                                </div>

                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton} onClick={handleClickOpen}><FontAwesomeIcon icon={faEdit} /></button>
                                </div>
                            </div>
                             <div className={styles.listGoodsWrapper}>
                                <div className={styles.listGoodsHeader}>
                                    <b>Bánh Flan vị dâu 35g</b>

                                    <div className={styles.ribbonWrapper}>
                                        <div className={clsx(styles.ribbon, styles.on)}>
                                            Đang sản xuất
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.listGoodsBody}>
                                   <div className={styles.listGoodInfoWrapper}>
                                        <img src={require('../../../../../../assets/layoutImg/sanpham/sp5.jpg').default} alt="banh Flan" className={styles.listGoodsImg} />
                                        <div className={styles.listGoodInfoItem}>
                                            <div className={styles.listGoodInfo}>
                                                <span>Mã sản phẩm: </span> <p>F352</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Hạn sử dụng: </span> <p>26 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Báo trước ngày hết hạn: </span> <p>5 ngày</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối thiểu: </span> <p>500</p>
                                            </div>
                                            <div className={styles.listGoodInfo}>
                                                <span>Tồn tối đa: </span> <p>5000</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Quy cách kho</h3>
                                       <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Lóc: </span><p>8</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Thùng: </span><p>30 lóc</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Khay: </span><p>24 lóc</p>
                                            </div>
                                       </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Giá sản phẩm</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá bán: </span> <p>3100 đ</p>
                                            </div>
                                            <div className={styles.listGoodSpecification}>
                                                <span>Giá mua: </span> <p>2200 đ</p>
                                            </div>
                                        </div>
                                   </div>
                                   <div className={styles.listGoodSpecificationWrapper}>
                                        <h3>Mô tả</h3>
                                        <div className={styles.listGoodSpecificationItem}>
                                            <p style={{margin: 0}}></p>
                                        </div>
                                   </div>
                                </div>

                                <div className={styles.listGoodsFunctionButton}>
                                    <button className={styles.listGoodsEditButton} onClick={handleClickOpen}><FontAwesomeIcon icon={faEdit} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------ */}


                </div>

            
            </div>
            <Dialog open={open} onClose={handleClose} className={styles.dialogWrapper} maxWidth='xl' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={handleClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle align='center' sx={{fontWeight: 600, fontSize: 30}}>
                     Chỉnh sửa thông tin sản phẩm
                </DialogTitle>
                <div className={styles.goodEditContainer}>
                    <div className={styles.goodEditWrapper}>
                        <h3>Loại sản phẩm</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>Tên loại</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Hạn sử dụng</p>
                                <input type="date" className={styles.goodEditInput} />         
                            </div> 
                            <div className={styles.goodEditInputItem}>
                                <p>Báo trước khi hết hạn</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div> 
                            <div className={styles.goodEditInputItem}>
                                <p>Trạng thái</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div>            
                        </div>                           
                    </div>
                    <div className={styles.goodEditWrapper}>
                        <h3>Sản phẩm</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>Tên sản phẩm</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Giá mua</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div> 
                            <div className={styles.goodEditInputItem}>
                                <p>Giá bán</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div> 
                        </div>
                    </div>
                    <div className={styles.goodEditWrapper}>
                        <h3>Quy cách sản phẩm</h3>
                        <div className={styles.goodEditInputWrapper}>
                            <div className={styles.goodEditInputItem}>
                                <p>Quy cách lóc</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div>
                            <div className={styles.goodEditInputItem}>
                                <p>Quy cách thùng</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div> 
                            <div className={styles.goodEditInputItem}>
                                <p>Quy cách khay</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div> 
                            <div className={styles.goodEditInputItem}>
                                <p>Tồn tối đa</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div> 
                            <div className={styles.goodEditInputItem}>
                                <p>Tồn tối thiểu</p>
                                <input type="text" className={styles.goodEditInput} />         
                            </div>           
                        </div>
                    </div>
                    <div className={styles.goodEditWrapper}>
                        <h3>Mô tả</h3>
                        <textarea className={styles.goodEditDesc} />
                    </div>
                    <div className={styles.saveButtonWrapper}>
                        <button className={styles.saveButton}>Cập nhật</button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default DanhSachSanPham;