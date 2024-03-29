import styles from './NhapHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import BarcodeScanner from '../../../../components/barcode/BarcodeScanner';
import { fetchDataSelectLoaiSP, fetchDataSelectSP, addDataKhoHang } from '../../../../services/khoHangServices';
import { toast } from 'react-toastify';
import { UserContext } from "../../../../context/userContext";
import React from "react";
import { style } from '../../../../components/chatbox/client/styles';


function NhapHang() {
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

    // Get data from input
    const [valueObj, setValueObj] = useState({
        'LoaiSanPhamId': '',
        'SanPhamId': '',
        'SoLuong': '',
        'NSX': '',
        'ViTri': '',
        'GhiChu': '',
        'NhanVienId': '',
    });

    // Open and close
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // add value from arr
    const [listValue, setListValue] = useState([]);

    const addValue = () => {
        if (valueObj.LoaiSanPhamId === "" || valueObj.SanPhamId === "" || valueObj.SoLuong === ""
            || valueObj.NSX === "") {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return false;
        } else {
            valueObj.NhanVienId = user.account.id;
            listValue.push(valueObj);

            $(`.${styles.exportGoodsInputItems2}`).append(
                ` 
                <div class=${styles.exportGoodsInputItems2Wrapper}>
                    <div style='width: 15%'>${valueObj.LoaiSanPhamId}</div>
                    <div style='width: 20%'>${valueObj.SanPhamId}</div>
                    <div style='width: 10%'>${valueObj.NSX}</div>
                    <div style='width: 20%'>${valueObj.ViTri}</div>
                    <div style='width: 20%'>${valueObj.GhiChu}</div>
                    <div style='width: 10%'>${valueObj.SoLuong}</div>
                    <div style='width: 5%' class=${styles.delButton}><i class="fas fa-trash"></i></div>
                </div>               
                `)

            setValueObj({
                'LoaiSanPhamId': '',
                'SanPhamId': '',
                'SoLuong': '',
                'NSX': '',
                'ViTri': '',
                'GhiChu': '',
                'NhanVienId': ''
            });
        }

        $(`.${styles.delButton}`).on('click', function () {
            $(this).parent().remove();
        })

    }

    // import data from database
    const addKhoHang = async (listdata) => {
        let response = await addDataKhoHang(listdata);
        if (response && response.EC === 0) {
            toast.success(response.EM);
        } else { toast.error(response.EM) }

    }

    // Keypress function
    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            addValue();
        }
    }

    const handlePressTap = (event) => {
        if (event.charCode === 0 && event.code === "Tab") {
            addValue();
        }
    }

    const clickAdd = (event) => {
        addValue();
    }

    const clickCapNhat = (event) => {
        addKhoHang(listValue);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Nhập hàng </p>
                        <div className={styles.scanWrapper}>
                            <p>Quét mã sản phẩm</p>
                            <button className={styles.scanButton}><FontAwesomeIcon icon={faBarcode} onClick={handleClickOpen} /></button>
                        </div>
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.addButtonWrapperWrapper}>
                            <div className={styles.addButtonWrapper}>
                                <button className={styles.addButton} onClick={(event) => clickAdd(event)} ><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                        <div className={styles.addGoods}>
                            <div className={styles.exportGoodsInputItems1}>
                                <div className={styles.exportGoodsInputItem} style={{ width: '15%' }}>
                                    <span>Tên loại</span>
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
                                </div>
                                <div className={styles.exportGoodsInputItem} style={{ width: '20%' }}>
                                    <span>Tên sản phẩm</span>
                                    <select className={styles.exportGoodsInput} name='goodId' style={{ width: '100%' }}
                                        onChange={e => { setValueObj({ ...valueObj, 'SanPhamId': e.target.value }) }} >
                                        <option value="">Chọn sản phẩm</option>
                                        {valueObj.LoaiSanPhamId !== '' ?
                                            showGoodSelect.map((item, index) => (
                                                <option key={index} value={item.id}>{item.TenSanPham}</option>
                                            ))
                                            :
                                            <></>
                                        }
                                    </select>
                                </div>
                                <div className={styles.exportGoodsInputItem} style={{ width: '10%' }}>
                                    <span>Ngày sản xuất</span>
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
                                </div>
                                <div className={styles.exportGoodsInputItem} style={{ width: '20%' }}>
                                    <span>Vị trí</span>
                                    {valueObj.LoaiSanPhamId === '' ?
                                        <>
                                            <input type="text" className={styles.exportGoodsInput} name='location' style={{ width: '100%' }} value=''
                                                onChange={e => { setValueObj({ ...valueObj, 'ViTri': e.target.value }) }} />
                                        </>
                                        :
                                        <>
                                            <input type="text" className={styles.exportGoodsInput} name='location' style={{ width: '100%' }}
                                                onChange={e => { setValueObj({ ...valueObj, 'ViTri': e.target.value }) }} />
                                        </>
                                    }
                                </div>
                                <div className={styles.exportGoodsInputItem} style={{ width: '20%' }}>
                                    <span>Ghi chú</span>
                                    {valueObj.LoaiSanPhamId === '' ?
                                        <>
                                            <input type="text" className={styles.exportGoodsInput} name='note' style={{ width: '100%' }} value=''
                                                onChange={e => { setValueObj({ ...valueObj, 'GhiChu': e.target.value }); }} />
                                        </>
                                        :
                                        <>
                                            <input type="text" className={styles.exportGoodsInput} name='note' style={{ width: '100%' }}
                                                onChange={e => { setValueObj({ ...valueObj, 'GhiChu': e.target.value }); }} />
                                        </>
                                    }
                                </div>
                                <div className={styles.exportGoodsInputItem} style={{ width: '10%' }}>
                                    <span>Số lượng</span>
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
                                    }
                                </div>
                            </div>
                            <div className={styles.exportGoodsInputItems2}>
                            </div>
                        </div>

                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton} onClick={(event) => clickCapNhat(event)} >Cập nhật</button>
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