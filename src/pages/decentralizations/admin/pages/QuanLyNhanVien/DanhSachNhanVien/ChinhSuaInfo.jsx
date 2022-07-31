import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './ChinhSuaInfo.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { handleClose } from './DanhSachNhanVien';
import axios from 'axios';
import {Image} from 'cloudinary-react';


function  ChinhSuaInfo() {


    //   Get value from input
    const [valueObj, setValueObj] = useState({
        ID: '',
        HoTen: '',
        GioiTinh: null,
        NgaySinh: '',
        CCCD: '',
        Tel: '',
        Email: '',
        Facebook: '',
        Zalo: '',
        NgayVaoLam: '',
        DiaChi: '',
        GhiChu: '',
        Level: '',
        Avata: ''
    });

    const onSubmit = () => {

    }


    return(
        <>
             <div className={styles.wrapper}>
                  {/* -----------------BE------------------------------- */}
                    <div className={styles.addEmployeesWrapper}>
                        <div className={styles.addEmployees}>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem} style={{width: '65%'}}>
                                    <p>ID nhân viên</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, ID: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Họ và tên</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, HoTen: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Giới tính</p>
                                    <div className={styles.addEmployeesInputRadioWrapper}>
                                       <div className={styles.addEmployeesInputRadio}>
                                            <input type="radio" value='1' className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, GioiTinh: e.target.value })}/>
                                            <label htmlFor="">Nam</label>
                                       </div>
                                       <div className={styles.addEmployeesInputRadio}>
                                            <input type="radio" value='0' className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, GioiTinh: e.target.value })}/>
                                            <label htmlFor="">Nữ</label>
                                       </div>
                                    </div>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ngày sinh</p>
                                    <input type="date" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, NgaySinh: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Căn cước công dân</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, CCCD: e.target.value })}/>
                                </div>
                               
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem} style={{width: '65%'}}>
                                    <p>Số điện thoại</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, Tel: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Zalo</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, Zalo: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Email</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, Email: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ngày vào làm</p>
                                    <input type="date" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, NgayVaoLam: e.target.value })}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                <p> Chức vụ </p>
                                <select className={styles.addEmployeesInput}
                                    onChange={e => setValueObj({ ...valueObj, Level: e.target.value })} >
                                    <option value="0">Chọn chức vụ</option>
                                    <option value="1">Nhân viên</option>
                                    <option value="2">Quản lý</option>
                                </select>
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Facebook</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, Facebook: e.target.value })}/>
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Địa chỉ</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({ ...valueObj, DiaChi: e.target.value })}/>
                                </div>
                            </div>                         
                           
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ghi chú</p>
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            setValueObj({ ...valueObj, GhiChu: data });
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ảnh chân dung</p>
                                    <input type="file" className={styles.addEmployeesInput}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.saveButtonWrapper}>
                                <button className={styles.saveButton} onClick={onSubmit}>Lưu lại</button>
                        </div>
                    </div>


                    {/* ----------------------------------------------- */}
                </div> 
        </>
    );
}

export default ChinhSuaInfo;