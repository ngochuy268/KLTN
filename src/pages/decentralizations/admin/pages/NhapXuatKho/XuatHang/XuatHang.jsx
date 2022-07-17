import styles from './XuatHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import ReactToPrint, { useReactToPrint } from 'react-to-print';



function XuatHang() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    let componentRef = useRef();


        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);

        };

        const handlePrint = useReactToPrint({
            content: () => componentRef.current,
            documentTitle: 'Biên lai xuất kho',
            onAfterPrint : () => handleClose()
        })

        const onChangeFunction = (e) => {
            setValue(e.target.value)
        }
    
        const handlePressEnter = (event) => {
            if (event.charCode === 0 && event.code === 'Tab') {
                $(`.${styles.exportGoodsInputBillTable}`).append(
                    `<tr>
                        <td>F55</td> 
                        <td>Bánh rau cau</td>
                        <td>200</td>
                        <td>23/5/2022</td>
                        <td>23/7/2022</td>
                        <td>wsasas</td>
                    </tr>`
                )
            }
        }
        useEffect(() => {
            $(`.${styles.delButton}`).on('click', function() {
                $(this).parent().parent().remove();
            })

            $(`.${styles.addButton}`).on('click', function() {
                $(`.${styles.exportGoodsInputItems}`).append( 
                    `<tr>
                        <td><input type="text" class=${styles.exportGoodsInput} /></td>
                        <td><input type="text" class=${styles.exportGoodsInput} /></td>
                        <td><input type="text" class=${styles.exportGoodsInput} /></td>
                        <td><button class=${styles.delButton}><i class="fas fa-trash"></i></button></td>
                    </tr>`)
                console.log(value)
                $(`.${styles.delButton}`).on('click', function() {
                    $(this).parent().parent().remove();
                })
            })
        },[]) 
   
 
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Xuất kho</p> 
                        <div className={styles.scanWrapper}>
                            <p>Nhập mã đơn hàng</p>
                            <input type="text" className={styles.goodCodeInput}/>
                        </div>
                    </div>

                  
                    <div className={styles.exportGoodsAutoWrapper}>
                       <div className={styles.exportGoodsInputBillItemsWrapper}>
                            <div className={styles.addButtonWrapper}>
                                <button className={styles.addButton}><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <table className={styles.exportGoodsInputItems}>
                            
                                <tr>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                </tr>
                          
                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodInput1'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='goodInput2' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='goodInput3' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                          
                            </table>  
                       </div>
                        <div className={styles.exportGoodsInputBillWrapper} ref={componentRef}>
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
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Ngày sản xuất</th>
                                        <th>Hạn sử dụng</th>
                                        <th>Giá</th>
                                    </tr>
                               </thead>
                               <tbody>

                               </tbody>
                            </table>
                            <div className={styles.exportGoodsInputBillItem}>
                                <p className={styles.exportGoodsInputBillItemTitle}>
                                    Ghi chú
                                </p>
                                <textarea rows={4} style={{height: 'auto'}} className={styles.exportGoodsInputBillItemInput} />
                            </div>
                            <div className={styles.saveButtonWrapper}>
                                <button className={styles.saveButton} onClick={handleClickOpen}>Xuất phiếu</button>
                            </div>
                        </div>
                    </div>
                </div>      
                 
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {"Xác nhận xuất kho ?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} sx={{fontWeight: '700'}}>Không</Button>
                    <Button onClick={handlePrint} autoFocus sx={{fontWeight: '700'}}>
                       Có
                    </Button>
                </DialogActions>
            </Dialog>

          
        </>
    );
}

export default XuatHang;