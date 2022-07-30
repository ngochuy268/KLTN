import styles from './XuatHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faTriangleExclamation, faXmark, faBarcode } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import BarcodeScanner from '../../../../components/barcode/BarcodeScanner';
import { fetchDataSelectLoaiSP, fetchDataSelectSP, getDataXuatHang, xuatHang } from '../../../../services/khoHangServices';
import { UserContext } from "../../../../context/userContext";
import React from "react";
import { toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



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

    const [ttXuatHang, setttXuatHang] = useState({
        'NhanVienId': user.account.id,
        'NVGiaoHang': '',
        'BenNhan': '',
        'GhiChu': '',
    });

    const getvalue = () => {
        if (valueObj.LoaiSanPhamId === "" || valueObj.SanPhamId === "" || valueObj.SoLuong === "") {
            return false;
        } else {
            getDataXuat(valueObj);
            console.log("> ", listXuatHang)
        }

    }
    const [xuatObj, setXuatObj] = useState({
        'idKho': '',
        'LoaiSanPhamId': '',
        'SanPhanId': '',
        'SoLuong': '',
        'NSX': '',
        'HSD': '',
    })

    const [listXuatHang, setListValue] = useState([]);

    const addValue = async () => {
        if (dataXuatHang && dataXuatHang.length > 0) {

            dataXuatHang.map((item, index) => {
                setXuatObj({
                    'idKho': '',
                    'LoaiSanPhamId': '',
                    'SanPhanId': '',
                    'SoLuong': '',
                    'NSX': '',
                    'HSD': '',
                });
                console.log(">>>>>>>>>>>> ", xuatObj)
                console.log(">>>>>>>>>>>> ", item.id)
                console.log(">>>>>>>>>>>> ", listXuatHang)
                xuatObj.idKho = item.id;
                xuatObj.LoaiSanPhamId = item.LoaiSanPhamId;
                xuatObj.SanPhanId = item.SanPhamId;
                xuatObj.SoLuong = item.SoLuong;
                xuatObj.NSX = item.NSX;
                xuatObj.HSD = item.HSD;
                console.log(">>>>>..>>>>", xuatObj)
                listXuatHang.push(xuatObj);
                console.log(">>>>>.......", listXuatHang)
                $(`.${styles.exportGoodsInputBillTable} tbody`).append(
                    `<tr>
                            <td>${item.SanPham.TenSanPham}</td>
                            <td>${item.NSX} - ${item.HSD}</td>
                            <td>${item.SoLuong}</td>
                        </tr>`)


            });
            console.log("check. . . .. : ", listXuatHang)
            setValueObj({
                'SanPhamId': '',
                'SoLuong': '',
                'NSX': '',
            });
        }

    }


    const clickfind = (event) => {
        addValue();

    }

    // Keypress function
    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            getvalue();
        }
    }

    const handlePressTap = (event) => {
        if (event.charCode === 0 && event.code === "Tab") {
            getvalue();
        }
    }

    const xuatKho = async (listXuatHang, ttXuatHang) => {
        let response = await xuatHang(listXuatHang, ttXuatHang);
        if (response && response.EC === 0) {
            toast.success(response.EM);
        } else { toast.error(response.EM) }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [openBarcode, setOpenBarcode] = useState(false);
    const [open, setOpen] = useState(false);
    const [openPrint, setOpenPrint] = useState(false);
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
        xuatKho(listXuatHang, ttXuatHang);
        setListValue([]);
        console.log(">>><<<<<>>>>><<<<>>>> ", listXuatHang)
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
                                <button className={styles.addButton}><FontAwesomeIcon icon={faPlus} onClick={clickfind} /></button>
                            </div>
                            <table className={styles.exportGoodsInputItems}>
                                <tr>
                                    <th style={{ width: '20%' }}>Loại sản phẩm</th>
                                    <th style={{ width: '35%' }}>Tên sản phẩm</th>
                                    <th style={{ width: '30%' }}>Ngày sản xuất</th>
                                    <th style={{ width: '15%' }}>Số lượng</th>
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
                                                    onKeyDown={(event) => handlePressTap(event)}
                                                    onKeyPress={(event) => handlePressEnter(event)}
                                                />
                                            </>
                                            :
                                            <>
                                                <input type="text" className={styles.exportGoodsInput} name='count' style={{ width: '100%' }}
                                                    onChange={e => { setValueObj({ ...valueObj, 'SoLuong': e.target.value }) }}
                                                    onKeyDown={(event) => handlePressTap(event)}
                                                    onKeyPress={(event) => handlePressEnter(event)}
                                                />
                                            </>
                                        }</td>
                                </tr>
                            </table>
                            <table className={styles.exportGoodsInputItems1}>
                                <thead>
                                    <tr>
                                        <th style={{ height: '1px', width: '30%' }}></th>
                                        <th style={{ height: '1px', width: '20%' }}></th>
                                        <th style={{ height: '1px', width: '20%' }}></th>
                                        <th style={{ height: '1px', width: '30%' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
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
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='employee' value={user.account.username} />
                                    </div>
                                    <div className={styles.exportGoodsInputBillItem}>
                                        <p className={styles.exportGoodsInputBillItemTitle}>
                                            Giao hàng
                                        </p>
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='deliver'
                                            onChange={e => { setttXuatHang({ ...ttXuatHang, 'NVGiaoHang': e.target.value }) }}
                                        />
                                    </div>
                                    <div className={styles.exportGoodsInputBillItem}>
                                        <p className={styles.exportGoodsInputBillItemTitle}>
                                            Bên nhận
                                        </p>
                                        <input type="text" className={styles.exportGoodsInputBillItemInput} name='receiver'
                                            onChange={e => { setttXuatHang({ ...ttXuatHang, 'BenNhan': e.target.value }) }}
                                        />
                                    </div>
                                </div>

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

                                    <CKEditor
                                        editor={ClassicEditor}
                                        data=""
                                        onReady={editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log('Editor is ready to use!', editor);
                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData()
                                            setValueObj1({ ...valueObj, GhiChu: data });
                                        }}
                                        onBlur={(event, editor) => {
                                            console.log('Blur.', editor);
                                        }}
                                        onFocus={(event, editor) => {
                                            console.log('Focus.', editor);
                                        }}

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