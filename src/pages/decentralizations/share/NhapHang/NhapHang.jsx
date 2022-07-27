import styles from './NhapHang.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import BarcodeScanner from '../../../../components/barcode/BarcodeScanner';
import { fetchDataSelectLoaiSP, fetchDataSelectSP } from '../../../../services/khoHangServices';
import { toast } from 'react-toastify';

function NhapHang() {

    useEffect(() => {
        fetchShowLoaiSPSelect();
    },[]);
    
    
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

    // Append and delete
    useEffect(() => {
        $(`.${styles.delButton}`).on('click', function() {
            $(this).parent().parent().remove();
        })

        $(`.${styles.addButton}`).on('click', function() {
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
                
            $(`.${styles.delButton}`).on('click', function() {
                $(this).parent().parent().remove();
            })
        })
    },[])

    // Get data from input
    const [valueObj, setValueObj] = useState({
        'LoaiSanPhamId': '',
        'SanPhamId': '',
        'TenSanPham': '',
        'SoLuong': '',
        'HSD': '',
        'ViTri': '',
        'GhiChu': ''
    });

    const handleUpdate = () => {
        if (valueObj.LoaiSanPhamId === "" || valueObj.SanPhamId === "" 
            || valueObj.TenSanPham === "" || valueObj.SoLuong === "" 
            || valueObj.HSD === "" ) {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return false;
        } else {
            const newArr=[]; 
            newArr.push(valueObj); 
            console.log(newArr);
            /* 
                Code update lên db
            */
            toast.success('Cập nhật thông tin thành công!');
        }
    }

    // Open and close
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Nhập hàng vào kho</p>
                        <div className={styles.scanWrapper}>
                            <p>Quét mã sản phẩm</p>
                            <button className={styles.scanButton}><FontAwesomeIcon icon={faBarcode} onClick={handleClickOpen}/></button>
                        </div>
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Danh sách sản phẩm</span>
                        </div>
                        <div className={styles.addGoods}>
                        <table className={styles.exportGoodsInputItems}>
                               <thead>
                                    <tr>
                                        <th style={{width: '5%'}} >Mã loại</th>
                                        <th style={{width: '10%'}}>Mã sản phẩm</th>
                                        <th style={{width: '20%'}}>Tên sản phẩm</th>
                                        <th style={{width: '10%'}}>Số lượng</th>
                                        <th style={{width: '10%'}}>Ngày sản xuất</th>
                                        <th style={{width: '20%'}}>Vị trí</th>
                                        <th style={{width: '25%'}}>Ghi chú</th>
                                    </tr>
                               </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select className={styles.exportGoodsInput} name='goodTypeId'
                                                onChange={(e) => {
                                                    fetchShowSPSelect(e.target.value);
                                                    setValueObj({...valueObj, 'LoaiSanPhamId':e.target.value})
                                                }}>
                                                <option value=''>Chọn mã</option>
                                                {showGoodTypeSelect.map((item,index) => (
                                                    <option key={index} value={item.id}>{item.id}</option>
                                                ))}
                                            </select>                                                    
                                        </td>
                                        <td>
                                            {valueObj['LoaiSanPhamId'] === '' ?                                            
                                                <select className={styles.exportGoodsInput} disabled name='goodId' >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                </select>
                                            :
                                                <select className={styles.exportGoodsInput} name='goodId'
                                                    onChange={e => {
                                                        setValueObj({...valueObj, 'SanPhamId': e.target.value})
                                                    }} 
                                                    >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                    {showGoodSelect.map((item,index) => (
                                                        <option key={index} value={item.id}>{item.id}</option>
                                                    ))}
                                                </select>
                                            }
                                            
                                        </td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='goodname'  onChange={e => {setValueObj({...valueObj, 'TenSanPham': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='count'  onChange={e => {setValueObj({...valueObj, 'SoLuong': e.target.value})}}/></td>
                                        <td><input type="date" className={styles.exportGoodsInput} name='productDate'  onChange={e => {setValueObj({...valueObj, 'HSD': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='location'  onChange={e => {setValueObj({...valueObj, 'ViTri': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='note' onChange={e => {setValueObj({...valueObj, 'GhiChu': e.target.value});}} /></td>
                                        <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select className={styles.exportGoodsInput} name='goodTypeId'
                                                onChange={(e) => {
                                                    fetchShowSPSelect(e.target.value);
                                                    setValueObj({...valueObj, 'LoaiSanPhamId':e.target.value})
                                                }}>
                                                <option value=''>Chọn mã</option>
                                                {showGoodTypeSelect.map((item,index) => (
                                                    <option key={index} value={item.id}>{item.id}</option>
                                                ))}
                                            </select>                                                    
                                        </td>
                                        <td>
                                            {valueObj['LoaiSanPhamId'] === '' ?                                            
                                                <select className={styles.exportGoodsInput} disabled name='goodId' >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                </select>
                                            :
                                                <select className={styles.exportGoodsInput} name='goodId'
                                                    onChange={e => {
                                                        setValueObj({...valueObj, 'SanPhamId': e.target.value})
                                                    }} 
                                                    >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                    {showGoodSelect.map((item,index) => (
                                                        <option key={index} value={item.id}>{item.id}</option>
                                                    ))}
                                                </select>
                                            }
                                            
                                        </td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='goodname'  onChange={e => {setValueObj({...valueObj, 'TenSanPham': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='count'  onChange={e => {setValueObj({...valueObj, 'SoLuong': e.target.value})}}/></td>
                                        <td><input type="date" className={styles.exportGoodsInput} name='productDate'  onChange={e => {setValueObj({...valueObj, 'HSD': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='location'  onChange={e => {setValueObj({...valueObj, 'ViTri': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='note' onChange={e => {setValueObj({...valueObj, 'GhiChu': e.target.value});}} /></td>
                                        <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select className={styles.exportGoodsInput} name='goodTypeId'
                                                onChange={(e) => {
                                                    fetchShowSPSelect(e.target.value);
                                                    setValueObj({...valueObj, 'LoaiSanPhamId':e.target.value})
                                                }}>
                                                <option value=''>Chọn mã</option>
                                                {showGoodTypeSelect.map((item,index) => (
                                                    <option key={index} value={item.id}>{item.id}</option>
                                                ))}
                                            </select>                                                    
                                        </td>
                                        <td>
                                            {valueObj['LoaiSanPhamId'] === '' ?                                            
                                                <select className={styles.exportGoodsInput} disabled name='goodId' >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                </select>
                                            :
                                                <select className={styles.exportGoodsInput} name='goodId'
                                                    onChange={e => {
                                                        setValueObj({...valueObj, 'SanPhamId': e.target.value})
                                                    }} 
                                                    >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                    {showGoodSelect.map((item,index) => (
                                                        <option key={index} value={item.id}>{item.id}</option>
                                                    ))}
                                                </select>
                                            }
                                            
                                        </td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='goodname'  onChange={e => {setValueObj({...valueObj, 'TenSanPham': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='count'  onChange={e => {setValueObj({...valueObj, 'SoLuong': e.target.value})}}/></td>
                                        <td><input type="date" className={styles.exportGoodsInput} name='productDate'  onChange={e => {setValueObj({...valueObj, 'HSD': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='location'  onChange={e => {setValueObj({...valueObj, 'ViTri': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='note' onChange={e => {setValueObj({...valueObj, 'GhiChu': e.target.value});}} /></td>
                                        <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select className={styles.exportGoodsInput} name='goodTypeId'
                                                onChange={(e) => {
                                                    fetchShowSPSelect(e.target.value);
                                                    setValueObj({...valueObj, 'LoaiSanPhamId':e.target.value})
                                                }}>
                                                <option value=''>Chọn mã</option>
                                                {showGoodTypeSelect.map((item,index) => (
                                                    <option key={index} value={item.id}>{item.id}</option>
                                                ))}
                                            </select>                                                    
                                        </td>
                                        <td>
                                            {valueObj['LoaiSanPhamId'] === '' ?                                            
                                                <select className={styles.exportGoodsInput} disabled name='goodId' >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                </select>
                                            :
                                                <select className={styles.exportGoodsInput} name='goodId'
                                                    onChange={e => {
                                                        setValueObj({...valueObj, 'SanPhamId': e.target.value})
                                                    }} 
                                                    >
                                                    <option value="">Chọn mã sản phẩm</option>
                                                    {showGoodSelect.map((item,index) => (
                                                        <option key={index} value={item.id}>{item.id}</option>
                                                    ))}
                                                </select>
                                            }
                                            
                                        </td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='goodname'  onChange={e => {setValueObj({...valueObj, 'TenSanPham': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='count'  onChange={e => {setValueObj({...valueObj, 'SoLuong': e.target.value})}}/></td>
                                        <td><input type="date" className={styles.exportGoodsInput} name='productDate'  onChange={e => {setValueObj({...valueObj, 'HSD': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='location'  onChange={e => {setValueObj({...valueObj, 'ViTri': e.target.value})}}/></td>
                                        <td><input type="text" className={styles.exportGoodsInput} name='note' onChange={e => {setValueObj({...valueObj, 'GhiChu': e.target.value});}} /></td>
                                        <td><button className={styles.delButton}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                                    
                                </tbody>
                            </table> 
                        </div>
                        <div className={styles.addButtonWrapper}>
                            <button className={styles.addButton}><FontAwesomeIcon icon={faPlus}/></button>
                        </div>
                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton} onClick={handleUpdate}>Cập nhật</button>
                        </div>
                    </div>
                </div>         
            </div>
              {/* BarcodeScanner */}
              <Dialog open={open} onClose={handleClose}>
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

export default NhapHang;