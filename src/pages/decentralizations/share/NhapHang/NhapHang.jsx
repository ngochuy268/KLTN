import styles from './NhapHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import BarcodeScanner from '../../../../components/barcode/BarcodeScanner';

function NhapHang() {

    useEffect(() => {
        $(`.${styles.delButton}`).on('click', function () {
            $(this).parent().parent().remove();
        })

        $(`.${styles.addButton}`).on('click', function () {
            $(`.${styles.exportGoodsInputItems}`).append(
                ` <tr>
                    <td>
                        <select class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='goodTypeId'>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </td>
                    <td>
                        <select class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='goodId'>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </td>
                    <td><input type="text" class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='goodname' /></td>
                    <td><input type="text" class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='count' /></td>
                    <td><input type="date" class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='productDate' /></td>
                    <td><input type="text" class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='location' /></td>
                    <td><input type="text" class=${styles.exportGoodsInput} onkeydown=${(event) => handlePressEnter(event)} onchange=${onChangeFunction} name='note' /></td>
                    <td><button class=${styles.delButton}><i class="fas fa-trash"></i></button></td>
                </tr>`)

            $(`.${styles.delButton}`).on('click', function () {
                $(this).parent().parent().remove();
            })
        })
    }, [])

    // Open and close
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Nhập hàng vào kho</p>
                        <div className={styles.scanWrapper}>
                            <p>Quét mã sản phẩm</p>
                            <button className={styles.scanButton}><FontAwesomeIcon icon={faBarcode} onClick={handleClickOpen} /></button>
                        </div>
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách sản phẩm</span>
                        </div>
                        <div className={styles.addGoods}>
                            <table className={styles.exportGoodsInputItems}>
                                <tr>
                                    <th style={{ width: '5%' }} >Mã loại</th>
                                    <th style={{ width: '10%' }}>Mã sản phẩm</th>
                                    <th style={{ width: '20%' }}>Tên sản phẩm</th>
                                    <th style={{ width: '10%' }}>Số lượng</th>
                                    <th style={{ width: '10%' }}>Ngày sản xuất</th>
                                    <th style={{ width: '20%' }}>Vị trí</th>
                                    <th style={{ width: '25%' }}>Ghi chú</th>
                                </tr>
                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodTypeId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodname' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='count' /></td>
                                    <td><input type="date" className={styles.exportGoodsInput} onChange={onChangeFunction} name='productDate' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='location' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='note' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodTypeId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodname' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='count' /></td>
                                    <td><input type="date" className={styles.exportGoodsInput} onChange={onChangeFunction} name='productDate' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='location' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='note' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodTypeId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodname' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='count' /></td>
                                    <td><input type="date" className={styles.exportGoodsInput} onChange={onChangeFunction} name='productDate' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='location' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='note' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodTypeId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodId'>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='goodname' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='count' /></td>
                                    <td><input type="date" className={styles.exportGoodsInput} onChange={onChangeFunction} name='productDate' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onChange={onChangeFunction} name='location' /></td>
                                    <td><input type="text" className={styles.exportGoodsInput} onKeyDown={(event) => handlePressEnter(event)} onChange={onChangeFunction} name='note' /></td>
                                    <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>

                            </table>
                        </div>
                        <div className={styles.addButtonWrapper}>
                            <button className={styles.addButton}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton}>Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* BarcodeScanner */}
            <Dialog open={open} onClose={handleClose}>
                <div className={styles.closeButtonWrapper} onClick={handleClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center', fontWeight: '700', fontSize: '30px' }}>
                    {"Đưa mã vạch vào khung hình"}
                </DialogTitle>
                <BarcodeScanner />
            </Dialog>
        </>
    );
}

export default NhapHang;