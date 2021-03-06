import styles from './ThemSanPham.module.scss';
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import $ from 'jquery';
import { fetchDataSelectLoaiSP } from '../../../../../../services/khoHangServices';
import { createSP } from '../../../../../../services/userServices';

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
        id: '',
        TenSanPham: '',
        MoTa: null,
        MaxTon: '',
        MinTon: '',
        Loc: '',
        Thung: '',
        Khay: '',
        GiaBan: '',
        GiaSanPham: '',
        TrangThai: 1
        
    });

    const [valueObjLoaiSP, setValueObjLoaiSP] = useState({
        LoaiSanPhamId: '',
        TenLoai: '',
        MinDate: '',
        HSD: '',
        TrangThai: 1
    });

    useEffect(() => {
        fetchShowLoaiSPSelect();
    }, []);

    const [showGoodTypeSelect, setShowGoodTypeSelect] = useState([]);
    const fetchShowLoaiSPSelect = async () => {
        let response = await fetchDataSelectLoaiSP();
        if (response && response.EC === 0) {
            setShowGoodTypeSelect(response.DT);
        }
    }

    const pushData = async (valueObj, valueObjLoaiSP ) => {
        let response = await createSP(valueObj, valueObjLoaiSP);
        if (response && response.EC === 0) {
            toast.success(response.EM)
        } else { toast.error(response.EM) }
    }

   
    const handleUpdate = () => {
       
        if ( $(`.${styles.addGoodsA}`).css('display') === 'none') {
            if (valueObj.id === "" || valueObj.TenSanPham === "" 
                || valueObj.MaxTon === "" || valueObj.MinTon === ""
                || valueObj.Loc === "" || valueObj.Thung === ""
                || valueObj.Khay === "" || valueObj.GiaBan === ""
                || valueObj.GiaSanPham === "" ||valueObj.LoaiSanPhamId === "") {
                toast.error("Vui l??ng ??i???n ?????y ????? th??ng tin!");
                return false;
            } else {
                pushData(valueObj);              
            }
        }
        else {
            if (valueObj.id === "" || valueObj.TenSanPham === "" 
                || valueObj.MaxTon === "" || valueObj.MinTon === ""
                || valueObj.Loc === "" || valueObj.Thung === ""
                || valueObj.Khay === "" || valueObj.GiaBan === ""
                || valueObj.GiaSanPham === "" ||valueObj.LoaiSanPhamId === ""
                || valueObj.TenLoai === "" || valueObj.MinDate === ""
                || valueObj.HSD === "") {
                toast.error("Vui l??ng ??i???n ?????y ????? th??ng tin!");
                return false;
            } else {
                pushData(valueObj, valueObjLoaiSP);
            }
        }
      
        
    }
    const [img, setImg] = useState('');
    console.log(img)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Th??m s???n ph???m</p> 
                    </div>

                    <div className={styles.addGoodsWrapper}>
                        <div className={styles.goodsTitle}>
                            <span>Th??m s???n ph???m m???i</span>
                            <button className={styles.addButton}>Th??m lo???i</button>
                        </div>

                       <div className={styles.addGoodsA}>
                            <div className={styles.addGoodsItems}>
                                <span>M?? lo???i m???i</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p m?? lo???i' 
                                        onChange={e => setValueObjLoaiSP({...valueObjLoaiSP, LoaiSanPhamId: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>T??n lo???i m???i</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p t??n m???i'
                                        onChange={e => setValueObjLoaiSP({...valueObjLoaiSP, TenLoai: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Min Date</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='S??? ng??y c?? th??? b???o qu???n'
                                        onChange={e => setValueObjLoaiSP({...valueObjLoaiSP, MinDate: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>H???n s??? d???ng</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='S??? ng??y c?? th??? b???o qu???n'
                                        onChange={e => setValueObjLoaiSP({...valueObjLoaiSP, HSD: e.target.value})}/>
                            </div>
                       </div>

                        <div className={styles.addGoods}>
                            <div className={styles.addGoodsItems}>
                                <span>M?? lo???i</span>
                                {valueObjLoaiSP.LoaiSanPhamId ? 

                                <>
                                    <select className={styles.addGoodsInput} disabled>
                                        <option value="">Ch???n m?? lo???i</option>
                                    </select>   
                                </> 

                                :<>
                                     <select className={styles.addGoodsInput} onChange={e => setValueObj({...valueObj, LoaiSanPhamId: e.target.value})}>
                                    <option value="">Ch???n m?? lo???i</option>
                                    {showGoodTypeSelect && showGoodTypeSelect.length > 0 ? 
                                        <>
                                            {showGoodTypeSelect.map((item,index) => (
                                                <option value={item.id} key={index}>{item.TenLoai}</option>
                                            ))}
                                        </>
                                    : <></>}
                                    </select>   
                                </>}
                               
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>M?? s???n ph???m</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p m?? m???i'
                                        onChange={e => setValueObj({...valueObj, id: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>T??n s???n ph???m</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p t??n m???i'
                                        onChange={e => setValueObj({...valueObj, TenSanPham: e.target.value})}/>
                            </div>                        
                            <div className={styles.addGoodsItems}>
                                <span>T???n kho nhi???u nh???t</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p s??? l?????ng'
                                        onChange={e => setValueObj({...valueObj, MaxTon: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>T???n kho ??t nh???t</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p s??? l?????ng'
                                        onChange={e => setValueObj({...valueObj, MinTon: e.target.value})}/>
                            </div>
                        </div>
                        <div className={styles.addGoods}>
                            <div className={styles.addGoodsItems}>
                                <span>L??c</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p s??? l??c'
                                        onChange={e => setValueObj({...valueObj, Loc: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Th??ng</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p s??? th??ng'
                                        onChange={e => setValueObj({...valueObj, Thung: e.target.value})}/>
                            </div>                        
                            <div className={styles.addGoodsItems}>
                                <span>Khay</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p s??? khay'
                                        onChange={e => setValueObj({...valueObj, Khay: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Gi?? b??n</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p gi??'
                                        onChange={e => setValueObj({...valueObj, GiaBan: e.target.value})}/>
                            </div>
                            <div className={styles.addGoodsItems}>
                                <span>Gi?? s???n ph???m</span>
                                <input type="text" className={styles.addGoodsInput} placeholder='Nh???p gi??'
                                        onChange={e => setValueObj({...valueObj, GiaSanPham: e.target.value})}/>
                            </div>
                        </div>
                        <div className={styles.addGoodsItemsDesc}>
                            <span style={{marginBottom: '15px'}}>M?? t??? </span>
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
                            <span>???nh s???n ph???m</span>
                            <input type="file" name="upload" className={styles.addGoodsInput} onChange={e => setImg(e.target.files)} />
                        </div>
                        <div className={styles.saveButtonWrapper}>
                            <button className={styles.saveButton} onClick={handleUpdate}>Th??m m???i</button>
                        </div>
                    </div>  
                </div>         
            </div>
        </>
    )
}

export default ThemSanPham;