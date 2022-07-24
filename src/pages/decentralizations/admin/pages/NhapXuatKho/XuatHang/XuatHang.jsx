import styles from './XuatHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faTriangleExclamation, faXmark, faBarcode } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import BarcodeScanner from '../../../../../../components/barcode/BarcodeScanner';



function XuatHang() {

    const [openBarcode, setOpenBarcode] = useState(false);
    const [open, setOpen] = useState(false);
    const [openPrint, setOpenPrint] = useState(false);
    const [value, setValue] = useState('');
    let componentRef = useRef();

    // Get current date
    var showDate = new Date();
    var displayCurrentDate = `${showDate.getDate()}/${showDate.getMonth() + 1}/${showDate.getFullYear()}`;


    // Open and close
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleClickOpenPrint = () => {
        setOpenPrint(true);
    };

    const handleClosePrint = () => {
        setOpenPrint(false);

    };
    const closeAllDialog  = () => {
        handleClosePrint();
        handleClose();
    }
    
    const handleClickOpenBarCode = () => {
        setOpenBarcode(true);
    };
    const handleCloseBarCode = () => {
        setOpenBarcode(false);

    };


    // Print
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Biên lai xuất kho',
        onAfterPrint : () => closeAllDialog()
    })
    console.log(componentRef.current)


    // Get value from input
    const onChangeFunction = (e) => {
        setValue(e.target.value)
    }

    // Keypress function
    const handlePressEnter = (event) => {
        if (event.charCode === 0 && event.code === 'Tab') {
            $(`.${styles.exportGoodsInputBillTable}`).append(
                `<tr>
                    <td>F55</td> 
                    <td>Bánh rau cau</td>
                    <td>${value}</td>
                    <td>23/5/2022</td>
                    <td>23/7/2022</td>
                    <td>wsasas</td>
                </tr>`
            )
        }
    }

    // Remove and append
    useEffect(() => {
        $(`.${styles.delButton}`).on('click', function() {
            $(this).parent().parent().remove();
        })

        $(`.${styles.addButton}`).on('click', function() {
            $(`.${styles.exportGoodsInputItems}`).append( 
                `<tr>
                    <td>   
                        <select class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='goodInput1'>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </td>
                    <td><input type="text" class=${styles.exportGoodsInput} /></td>
                    <td><input type="text" class=${styles.exportGoodsInput} onkeydown=${(event) => handlePressEnter(event)} onchange=${onChangeFunction} /></td>
                    <td><button class=${styles.delButton}><i class="fas fa-trash"></i></button></td>
                </tr>`)
                
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
                            <p>Quét mã sản phẩm</p>
                            <button className={styles.scanButton}><FontAwesomeIcon icon={faBarcode} onClick={handleClickOpenBarCode}/></button>
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
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodName' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='count' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>

                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodName' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='count' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>

                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodName' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='count' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>

                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodName' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='count' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                             
                            </table>  
                       </div>
                        <div className={styles.billWrapper}>
                            <div className={styles.exportGoodsInputBillWrapper} ref={componentRef}>
                                <p className={styles.exportGoodsInputBillTitle}>Biên lai xuất kho</p>
                                <p className={styles.exportGoodsInputBillDate}>Thời gian: <span>{displayCurrentDate}</span> </p>
                                <div className={styles.exportGoodsInputBillItems}>
                                    <div className={styles.exportGoodsInputBillItem}>
                                        <p className={styles.exportGoodsInputBillItemTitle}>
                                            Nhân viên
                                        </p>
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='employee' />
                                    </div>
                                    <div className={styles.exportGoodsInputBillItem}>
                                        <p className={styles.exportGoodsInputBillItemTitle}>
                                            Giao hàng
                                        </p>
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='deliver' />
                                    </div>
                                    <div className={styles.exportGoodsInputBillItem}>
                                        <p className={styles.exportGoodsInputBillItemTitle}>
                                            Bên nhận
                                        </p>
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='receiver' />
                                    </div>
                                </div>
                                <div className={styles.exportGoodsInputBillItem}>
                                    <p className={styles.exportGoodsInputBillItemTitle}>
                                        Đơn hàng
                                    </p>
                                    <input type="text" className={styles.exportGoodsInputBillItemInput} name='order' />
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
                                    <textarea rows={4} style={{height: 'auto'}} className={styles.exportGoodsInputBillItemInput} name='note' />
                                </div>
                                <div className={styles.signatureWrapper}>
                                    <div className={styles.signature}>
                                        <p>Quản lý kho</p>
                                        <p>(ký và ghi rõ họ tên)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.saveButtonWrapper}>
                                <button className={styles.saveButton} onClick={handleClickOpen}>Xuất phiếu</button>
                            </div>
                        </div>
                    </div>
                 
                </div>      
                 
            </div>
            <Dialog open={open} onClose={handleClose} className={styles.dialogWrapper}>
                <DialogTitle>
                    <FontAwesomeIcon style={{color: '#ebca69', fontSize: '22px', marginRight: '7px'}} icon={faTriangleExclamation}/> Xác nhận xuất kho ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} sx={{fontWeight: '700'}}>Không</Button>
                    <Button onClick={handleClickOpenPrint} autoFocus sx={{fontWeight: '700'}}>
                       Có
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openPrint} onClose={closeAllDialog} className={styles.dialogWrapper}>
                <DialogTitle>
                    <FontAwesomeIcon style={{color: '#ebca69', fontSize: '22px', marginRight: '7px'}} icon={faTriangleExclamation}/> Xác nhận in ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={closeAllDialog} sx={{fontWeight: '700'}}>Không</Button>
                    <Button onClick={handlePrint} autoFocus sx={{fontWeight: '700'}}>
                       Có
                    </Button>
                </DialogActions>
            </Dialog>

            {/* BarcodeScanner */}
            <Dialog open={openBarcode} onClose={handleCloseBarCode}>
                <div className={styles.closeButtonWrapper} onClick={handleClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle id="alert-dialog-title" style={{textAlign: 'center', fontWeight: '700', fontSize: '30px'}}>
                    {"Đưa mã vạch vào khung hình"}
                </DialogTitle>
                <BarcodeScanner />
            </Dialog>
        </>
    );
}

export default XuatHang;