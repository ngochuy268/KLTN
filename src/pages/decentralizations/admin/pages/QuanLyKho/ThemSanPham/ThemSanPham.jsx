import styles from './ThemSanPham.module.scss';
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
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
        LoaiSanPhamId: '',
        TenLoai: '',
        MinDate: '',
        HSD: '',
        SanPhamId: '',
        SanPham: {
            TenSanPham: ''
        },
        MoTa: '',
        MaxTon: '',
        MinTon: '',
        Loc: '',
        Thung: '',
        Khay: '',
        GiaBan: '',
        GiaSanPham: ''

    });
   
    const handleUpdate = () => {
       
        if ( $(`.${styles.addGoodsA}`).css('display') === 'none') {
            if (valueObj.SanPhamId === "" || valueObj.SanPham.TenSanPham === "" 
                || valueObj.MaxTon === "" || valueObj.MinTon === ""
                || valueObj.Loc === "" || valueObj.Thung === ""
                || valueObj.Thay === "" || valueObj.GiaBan === ""
                || valueObj.GiaSanPham === "") {
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
        else {
            if (valueObj.SanPhamId === "" || valueObj.SanPham.TenSanPham === "" 
                || valueObj.MaxTon === "" || valueObj.MinTon === "" 
                || valueObj.LoaiSanPhamId === "" || valueObj.TenLoai === ""
                || valueObj.MinDate === "" || valueObj.HSD === "") {
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
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập mã loại' 
                                        onChange={e => setValueObj({...valueObj, LoaiSanPhamId: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tên loại mới</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập tên mới'
                                        onChange={e => setValueObj({...valueObj, TenLoai: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Min Date</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Số ngày có thể bảo quản'
                                        onChange={e => setValueObj({...valueObj, MinDate: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Hạn sử dụng</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Số ngày có thể bảo quản'
                                        onChange={e => setValueObj({...valueObj, HSD: e.target.value})}/>
                            </div>
                       </div>

                        <div className={styles.addGoods}>
                            <div className={styles.addGoodsItems}>
                                <span>Mã sản phẩm</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập mã mới'
                                        onChange={e => setValueObj({...valueObj, SanPhamId: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tên sản phẩm</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập tên mới'
                                        onChange={e => setValueObj({...valueObj, SanPham: {TenSanPham: e.target.value}})}/>
                            </div>                        
                            <div className={styles.addGoodsItems}>
                                <span>Tồn kho nhiều nhất</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số lượng'
                                        onChange={e => setValueObj({...valueObj, MaxTon: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Tồn kho ít nhất</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số lượng'
                                        onChange={e => setValueObj({...valueObj, MinTon: e.target.value})}/>
                            </div>
                        </div>
                        <div className={styles.addGoods}>
                            <div className={styles.addGoodsItems}>
                                <span>Lóc</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số lóc'
                                        onChange={e => setValueObj({...valueObj, Loc: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Thùng</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số thùng'
                                        onChange={e => setValueObj({...valueObj, Thung: e.target.value})}/>
                            </div>                        
                            <div className={styles.addGoodsItems}>
                                <span>Khay</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập số khay'
                                        onChange={e => setValueObj({...valueObj, Khay: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Giá bán</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập giá'
                                        onChange={e => setValueObj({...valueObj, GiaBan: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Giá sản phẩm</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nhập giá'
                                        onChange={e => setValueObj({...valueObj, GiaSanPham: e.target.value})}/>
                            </div>
                        </div>
                        <div className={styles.addGoodsItemsDesc}>
                            <span style={{marginBottom: '15px'}}>Mô tả </span>
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setValueObj({...valueObj, MoTa: data})
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>
                        <div className={styles.addGoodsImgWrapper}>
                            <span>Ảnh sản phẩm</span>
                            <input type="file" name="upload" className={styles.addGoodsInput} />
                        </div>
                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton} onClick={handleUpdate}>Cập nhật</button>
                        </div>
                    </div>  
                </div>         
            </div>
        </>
    )
}

export default ThemSanPham;