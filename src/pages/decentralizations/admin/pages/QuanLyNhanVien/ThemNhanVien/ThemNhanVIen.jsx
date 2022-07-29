import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHookStatePassword } from '../../../../../../hooks/loginHooks';
import styles from './ThemNhanVien.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios, { post }from 'axios';
import $ from 'jquery';
import clsx from 'clsx';

function  ThemNhanVien() {

    const [password, setPassword] = useHookStatePassword();
    const [retypePassword, setRetypePassword] = useState('');
    const [email, setEmail] = useState('');

    // Validate form
    const validateAll = () => {
        
        // check email form
        if(isEmpty(email)){
            toast.error('Vui lòng nhập thông tin!')
            return false;
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(email.match(emailRegex))) {
            toast.error('Định dạng email sai!')
            return false;
        }

        // Check password empty
        if (isEmpty(password)) {
            toast.error('Mật khẩu không được để trống!')
            return false;
        }
        var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!(password.match(decimal))) {
            toast.error('Mật khẩu phải bao gồm chữ thường, chữ in hoa và ít nhất một chữ số')
            return false;
        }

        // Check retype password       
        if(retypePassword === ''){
            toast.error('Vui lòng nhập mật khẩu nhập lại!');
            return false
        }
        else {
            if (retypePassword !== password) {
                toast.error('Mật khẩu nhập lại không khớp!');
                return false
            }
        }
        return true;

    }

    
    //   Get value from input
    const [valueObj, setValueObj] = useState({
        HoTen: '',
        GioiTinh: null,
        NgaySinh: '',
        Tel: '',
        Email: '',
        NgayVaoLam: '',
        DiaChi: '',
        GhiChu: '',
        Level: '',
        Password: '',
    });
   
    const handleSubmit = () => {
        const isValid = validateAll();
        if (isValid){
            if(valueObj.HoTen === "" || valueObj.GioiTinh === "" 
            || valueObj.NgaySinh === "" || valueObj.Tel === ""
            || valueObj.Email === "" || valueObj.NgayVaoLam === ""
            || valueObj.DiaChi === "" || valueObj.Level === ""
            || valueObj.Password === ""){
                toast.error("Vui lòng điền đầy đủ thông tin!");
                return false;
            }
            else {
                const newArr=[]; 
                newArr.push(valueObj); 
                console.log(newArr);
                /* 
                    Code update lên db
                */
            }
            toast.success('Cập nhật thông tin thành công!');
        }
       

    }

    return(
        <>
             <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Thêm nhân viên mới</p>
                    </div>

                  {/* -----------------BE------------------------------- */}
                    <div className={styles.addEmployeesWrapper}>
                        <div className={styles.addEmployees}>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Họ và tên</p>
                                    <input type="text" className={styles.addEmployeesInput} onChange={e => setValueObj({...valueObj, HoTen: e.target.value})}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Giới tính</p>
                                    <div className={styles.addEmployeesInputRadioWrapper}>
                                       <div className={styles.addEmployeesInputRadio}>
                                            <input type="radio" value='1' name='sex' className={clsx(styles.addEmployeesInput,styles.radioButton)}
                                                    onChange={e => setValueObj({...valueObj, GioiTinh: e.target.value})} />

                                            <label htmlFor="">Nam</label>
                                       </div>
                                       <div className={styles.addEmployeesInputRadio}>
                                            <input type="radio" value='0' name='sex' className={styles.addEmployeesInput} 
                                                    onChange={e => setValueObj({...valueObj, GioiTinh: e.target.value})}/>
                                            <label htmlFor="">Nữ</label>
                                       </div>
                                    </div>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ngày sinh</p>
                                    <input type="date" className={styles.addEmployeesInput} 
                                            onChange={e => setValueObj({...valueObj, NgaySinh: e.target.value})}/>
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Số điện thoại</p>
                                    <input type="text" className={styles.addEmployeesInput} 
                                            onChange={e => setValueObj({...valueObj, Tel: e.target.value})}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Email</p>
                                    <input type="text" className={styles.addEmployeesInput} 
                                            onChange={e => {setValueObj({...valueObj, Email: e.target.value}); setEmail(e.target.value)}}/>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ngày vào làm</p>
                                    <input type="date" className={styles.addEmployeesInput} 
                                            onChange={e => setValueObj({...valueObj, NgayVaoLam: e.target.value})}/>
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Địa chỉ</p>
                                    <input type="text" className={styles.addEmployeesInput} 
                                            onChange={e => setValueObj({...valueObj, DiaChi: e.target.value})}/>
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
                                            setValueObj({...valueObj, GhiChu: data})
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
                                    <p>Chức vụ</p>
                                    <select className={styles.addEmployeesInput}
                                           onChange={e => setValueObj({...valueObj, Level: e.target.value})} >
                                        <option value="0">Chọn chức vụ</option>
                                        <option value="1">Nhân viên</option>
                                        <option value="2">Quản lý</option>
                                    </select>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Mật khẩu</p>
                                    <input  type="password"  
                                            value={password}
                                            onChange={e => {setPassword(e.target.value); setValueObj({...valueObj, Password: e.target.value})}} 
                                            className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Nhập lại mật khẩu</p>
                                    <input  type="password" 
                                            value={retypePassword}
                                            onChange={e => {setRetypePassword(e.target.value)}} 
                                            className={styles.addEmployeesInput} />
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ảnh chân dung</p>
                                    <input type="file" name='file' onChange={e => uploadImg(e.target.files)} className={styles.addEmployeesInput} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.saveButtonWrapper}>
                                <button className={styles.saveButton} onClick={handleSubmit}>Thêm mới</button>
                        </div>
                    </div>


                    {/* ----------------------------------------------- */}
                </div> 
        </>
    );
}

export default ThemNhanVien;