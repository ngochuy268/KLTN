import styles from './XuatHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faTriangleExclamation, faXmark, faBarcode } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import BarcodeScanner from '../../../../components/barcode/BarcodeScanner';
import { fetchDataSelectLoaiSP, fetchDataSelectSP, getDataXuatHang } from '../../../../services/khoHangServices';
import { UserContext } from "../../../../context/userContext";
import React from "react";
import { toast } from 'react-toastify';


function XuatHang() {
    const { user } = React.useContext(UserContext);

    useEffect(() => {
        fetchShowLoaiSPSelect();
    }, []);

    // Data select good type
    const [showGoodTypeSelect, setShowGoodTypeSelect] = useState([]);
    const fetchShowLoaiSPSelect = async () => {
        let response = await fetchDataSelectLoaiSP();
        if (response && response.EC === 0) {
            setShowGoodTypeSelect(response.DT);
        }
    }

    // data select good
    const [showGoodSelect, setShowGoodSelect] = useState([]);
    const fetchShowSPSelect = async (MaLoai) => {
        let response = await fetchDataSelectSP(MaLoai);
        if (response && response.EC === 0) {
            setShowGoodSelect(response.DT);
        }
    }

    // data xuat hang
    const [dataXuatHang, setDataXuatHang] = useState([]);
    const getDataXuat = async (findValue) => {
        let response = await getDataXuatHang(findValue);
        if (response && response.EC != -1) {
            setDataXuatHang(response.DT);
            if (response.EC == 1) {
                toast.warning(response.EM)
            }
        } else { toast.error(response.EM) }
    }

    // Get data from input
    const [valueObj, setValueObj] = useState({
        'LoaiSanPhamId': '',
        'SanPhamId': '',
        'SoLuong': '',
        'NSX': '',
    });

    const [xuatObj, setXuatObj] = useState({
        'idKho': '',
        'NhanVienId': '',
        'NVGiaoHang': '',
        'BenNhan': '',
        'LoaiSanPhamId': '',
        'SanPhanId': '',
        'SoLuong': '',
        'NSX': '',
        'HSD': '',
        'GhiChu': '',
    })

    const listXuatHang = [];
    const addValue = () => {
        console.log(">>>>> check add value")
        if (valueObj.LoaiSanPhamId === "" || valueObj.SanPhamId === "" || valueObj.SoLuong === "") {
            toast.error("Loại sản phẩm - Tên sản phẩm - Số lượng không được để trống");
            return false;
        } else {
            // valueObj.NhanVienId = user.account.id;

            getDataXuat(valueObj);
            console.log(">>> check getDataXuat: ", valueObj)
            console.log(">>> check get data: ", dataXuatHang)
            if (dataXuatHang && dataXuatHang.length > 0) {
                $(`.${styles.exportGoodsInputBillTable}`).append(
                    dataXuatHang.map((item, index) => {
                        xuatObj.idKho = item.id;
                        // xuatObj.NhanVienId = user.account.id
                        xuatObj.LoaiSanPhamId = item.LoaiSanPhamId;
                        xuatObj.SanPhamId = item.SanPhamId;
                        xuatObj.SoLuong = item.SoLuong;
                        xuatObj.NSX = item.NSX;
                        xuatObj.HSD = item.HSD;
                        return (
                            `<tr>
                            <td>${item.SanPham.TenSanPham}</td>
                            <td>${item.NSX} - ${item.HSD}</td>
                            <td>${item.SoLuong}</td>
                        </tr>`
                        )
                    })
                )
                listXuatHang.push(xuatObj);
                console.log(">>> check listXuatHang: ", listXuatHang)
            }

            setXuatObj({
                'idKho': '',
                'LoaiSanPhamId': '',
                'SanPhanId': '',
                'SoLuong': '',
                'NSX': '',
                'HSD': '',
                'GhiChu': '',
            });
        }
    }

    const clickfind = (event) => {
        addValue();
    }

    const [openBarcode, setOpenBarcode] = useState(false);
    const [open, setOpen] = useState(false);
    const [openPrint, setOpenPrint] = useState(false);
    const [value, setValue] = useState('');
    let componentRef = useRef();

    // // Get current date
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
    const closeAllDialog = () => {
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
        onAfterPrint: () => closeAllDialog()
    })

    // Get value from input
    const onChangeFunction = (e) => {
        setValue(e.target.value)
    }

    // Keypress function
    // const handlePressEnter = (event) => {
    //     if (event.charCode === 0 && event.code === 'Tab') {
    //         $(`.${styles.exportGoodsInputBillTable}`).append(
    //             `<tr>
    //                 <td>F55</td> 
    //                 <td>Bánh rau cau</td>
    //                 <td>${value}</td>
    //                 <td>23/5/2022</td>
    //                 <td>23/7/2022</td>
    //                 <td>wsasas</td>
    //             </tr>`
    //         )
    //     }
    // }

    // Remove and append
    // useEffect(() => {
    //     $(`.${styles.delButton}`).on('click', function () {
    //         $(this).parent().parent().remove();
    //     })

    //     $(`.${styles.addButton}`).on('click', function () {
    //         $(`.${styles.exportGoodsInputItems}`).append(
    //             `<tr>
    //                 <td>   
    //                     <select class=${styles.exportGoodsInput} onchange=${onChangeFunction} name='goodInput1'>
    //                         <option value=""></option>
    //                         <option value="1">1</option>
    //                         <option value="2">2</option>
    //                     </select>
    //                 </td>
    //                 <td><input type="text" class=${styles.exportGoodsInput} /></td>
    //                 <td><input type="text" class=${styles.exportGoodsInput} onkeydown=${(event) => handlePressEnter(event)} onchange=${onChangeFunction} /></td>
    //                 <td><button class=${styles.delButton}><i class="fas fa-trash"></i></button></td>
    //             </tr>`)

    //         $(`.${styles.delButton}`).on('click', function () {
    //             $(this).parent().parent().remove();
    //         })
    //     })
    // }, [])



    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Xuất kho</p>
                        <div className={styles.scanWrapper}>
                            <p>Quét mã sản phẩm</p>
                            <button className={styles.scanButton}><FontAwesomeIcon icon={faBarcode} onClick={handleClickOpenBarCode} /></button>
                        </div>
                    </div>


                    <div className={styles.exportGoodsAutoWrapper}>
                        <div className={styles.exportGoodsInputBillItemsWrapper}>
                            <div className={styles.addButtonWrapper}>
                                <button className={styles.addButton}><FontAwesomeIcon icon={faPlus} onClick={(event) => clickfind(event)} /></button>
                            </div>
                            <table className={styles.exportGoodsInputItems}>
                                <tr>
                                    <th>Loại sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Ngày sản xuất</th>
                                    <th>Số lượng</th>
                                </tr>

                                <tr>
                                    <td>
                                        <select className={styles.exportGoodsInput} name='goodTypeId' style={{ width: '100%' }}
                                            onChange={(e) => {
                                                fetchShowSPSelect(e.target.value);
                                                setValueObj({ ...valueObj, 'LoaiSanPhamId': e.target.value })
                                            }}>
                                            <option value=''>Chọn loại sản phẩm</option>
                                            {showGoodTypeSelect.map((item, index) => (
                                                <option key={index} value={item.id}>{item.TenLoai}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <select className={styles.exportGoodsInput} name='goodId' style={{ width: '100%' }}
                                            onChange={e => { setValueObj({ ...valueObj, 'SanPhamId': e.target.value }) }} >
                                            <option value="">Chọn sản phẩm</option>
                                            {valueObj.LoaiSanPhamId != '' ?
                                                showGoodSelect.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.TenSanPham}</option>
                                                ))
                                                :
                                                <></>
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        {valueObj.LoaiSanPhamId === '' ?
                                            <>
                                                <input type="date" className={styles.exportGoodsInput} name='productDate' style={{ width: '100%' }} value=''
                                                    onChange={e => { setValueObj({ ...valueObj, 'NSX': e.target.value }) }} />
                                            </>
                                            :
                                            <>
                                                <input type="date" className={styles.exportGoodsInput} name='productDate' style={{ width: '100%' }}
                                                    onChange={e => { setValueObj({ ...valueObj, 'NSX': e.target.value }) }} />
                                            </>
                                        }
                                    </td>
                                    <td>
                                        {valueObj.LoaiSanPhamId === '' ?
                                            <>
                                                <input type="text" className={styles.exportGoodsInput} name='count' style={{ width: '100%' }} value=''
                                                    onChange={e => { setValueObj({ ...valueObj, 'SoLuong': e.target.value }) }}
                                                />
                                            </>
                                            :
                                            <>
                                                <input type="text" className={styles.exportGoodsInput} name='count' style={{ width: '100%' }}
                                                    onChange={e => { setValueObj({ ...valueObj, 'SoLuong': e.target.value }) }}
                                                />
                                            </>
                                        }</td>
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
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='deliver'
                                            onChange={e => { setXuatObj({ ...xuatObj, 'NVGiaoHang': e.target.value }) }}
                                        />
                                    </div>
                                    <div className={styles.exportGoodsInputBillItem}>
                                        <p className={styles.exportGoodsInputBillItemTitle}>
                                            Bên nhận
                                        </p>
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='receiver'
                                            onChange={e => { setXuatObj({ ...xuatObj, 'BenNhan': e.target.value }) }}
                                        />
                                    </div>
                                </div>
                                {/* <div className={styles.exportGoodsInputBillItem}>
                                    <p className={styles.exportGoodsInputBillItemTitle}>
                                        Đơn hàng
                                    </p>
                                    <input type="text" className={styles.exportGoodsInputBillItemInput} name='order'
                                        onChange={e => { xuatObj({ ...xuatObj, 'NVGiaoHang': e.target.value }) }}
                                    />
                                </div> */}
                                <table className={styles.exportGoodsInputBillTable}>
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Hạn sử dụng</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                                <div className={styles.exportGoodsInputBillItem}>
                                    <p className={styles.exportGoodsInputBillItemTitle}>
                                        Ghi chú
                                    </p>
                                    <textarea rows={4} style={{ height: 'auto' }} className={styles.exportGoodsInputBillItemInput} name='note'
                                        onChange={e => { setXuatObj({ ...xuatObj, 'GhiChu': e.target.value }) }}
                                    />
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
                    <FontAwesomeIcon style={{ color: '#ebca69', fontSize: '22px', marginRight: '7px' }} icon={faTriangleExclamation} /> Xác nhận xuất kho ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ fontWeight: '700' }}>Không</Button>
                    <Button onClick={handleClickOpenPrint} autoFocus sx={{ fontWeight: '700' }}>
                        Có
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openPrint} onClose={closeAllDialog} className={styles.dialogWrapper}>
                <DialogTitle>
                    <FontAwesomeIcon style={{ color: '#ebca69', fontSize: '22px', marginRight: '7px' }} icon={faTriangleExclamation} /> Xác nhận in ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={closeAllDialog} sx={{ fontWeight: '700' }}>Không</Button>
                    <Button onClick={handlePrint} autoFocus sx={{ fontWeight: '700' }}>
                        Có
                    </Button>
                </DialogActions>
            </Dialog>

            {/* BarcodeScanner */}
            <Dialog open={openBarcode} onClose={handleCloseBarCode}>
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

export default XuatHang;