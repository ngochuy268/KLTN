import styles from './ThemSanPham.module.scss';
import { useEffect, useState } from 'react';
import $ from 'jquery';

function ThemSanPham() {

   useEffect(() => {
        const $ = document.querySelector.bind(document);
        $(`.${styles.addButton}`).onclick = function() {
            $(`.${styles.addGoodsA}`).classList.toggle(`${styles.active}`);
        }     
   })
   
    //   Get value from input
    const [valueObj, setValueObj] = useState({
        HoTen: '',
        NVGiaoHang: '',
        BenNhan:  '',
        SanPham: {
            TenSanPham: ''
        },
        SoLuong: '',
        HSD: '',
        ThanhTien: '',
        GhiChu: ''
    });
    const handleUpdate = () => {
        if (valueObj.HoTen === "" || valueObj.NVGiaoHang === "" 
            || valueObj.BenNhan === "" || valueObj.SanPham.TenSanPham === "" 
            || valueObj.SoLuong === "" || valueObj.HSD === "" || valueObj.ThanhTien === "" ) {
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
        
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Thêm sản phẩm</p> 
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Thêm sản phẩm mới</span>
                            <button className={styles.addButton}>Thêm loại</button>
                        </div>

                       <div className={styles.addGoodsA}>
                            <div className={styles.addGoodsItems}>
                                <span>Mã loại mới</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập mã loại' />
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tên loại mới</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập tên mới'/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Min Date</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Số ngày có thể bảo quản'/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Hạn sử dụng</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Số ngày có thể bảo quản'/>
                            </div>
                       </div>

                        <div className={styles.addGoods}>
                            <div className={styles.addGoodsItems}>
                                <span>Mã sản phẩm</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập mã mới'/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tên sản phẩm</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập tên mới'/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Mô tả </span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập mô tả'/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tồn kho nhiều nhất</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số lượng'/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tồn kho ít nhất</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số lượng'/>
                            </div>
                        </div>
                        <div className={styles.addGoodsImgWrapper}>
                            <span>Ảnh sản phẩm</span>
                            <input type="file" name="upload" className={styles.addGoodsInput} />
                        </div>
                        <div className={styles.saveButtonWrapper}>
                                <button className={styles.saveButton}>Cập nhật</button>
                        </div>
                    </div>  
                </div>         
            </div>
        </>
    )
}

export default ThemSanPham;