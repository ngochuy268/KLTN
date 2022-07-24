import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHookStatePassword } from '../../../../../../hooks/loginHooks';
import styles from './ThemNhanVien.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios, { post }from 'axios';

function  ThemNhanVien() {

    const [password, setPassword] = useHookStatePassword();
    const [retypePassword, setRetypePassword] = useState('');

    // Validate form
    const validateAll = () => {

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
        if (retypePassword !== password) {
            toast.error('Mật khẩu nhập lại không khớp!');
            return false
        }
        return true;

    }

    // Submit 
    const onSubmit = async () => {

        const isValid = validateAll();
        if (isValid) {
           toast.success('Thêm thành công!')
        }
    }

   
    const uploadImg = (files) => {
        console.log(files[0])
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
                                    <input type="text" className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Giới tính</p>
                                    <div className={styles.addEmployeesInputRadioWrapper}>
                                       <div className={styles.addEmployeesInputRadio}>
                                            <input type="radio" value='Nam' name='sex' className={styles.addEmployeesInput} />
                                            <label htmlFor="">Nam</label>
                                       </div>
                                       <div className={styles.addEmployeesInputRadio}>
                                            <input type="radio" value='Nữ' name='sex' className={styles.addEmployeesInput} />
                                            <label htmlFor="">Nữ</label>
                                       </div>
                                    </div>
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ngày sinh</p>
                                    <input type="date" className={styles.addEmployeesInput} />
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Số điện thoại</p>
                                    <input type="text" className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Email</p>
                                    <input type="text" className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ngày vào làm</p>
                                    <input type="date" className={styles.addEmployeesInput} />
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Địa chỉ</p>
                                    <input type="text" className={styles.addEmployeesInput} />
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
                                            console.log( { event, editor, data } );
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
                                    <input type="text" className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Mật khẩu</p>
                                    <input  type="password"  
                                            value={password}
                                            onChange={e => setPassword(e.target.value)} 
                                            className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Nhập lại mật khẩu</p>
                                    <input  type="password" 
                                            value={retypePassword}
                                            onChange={e => setRetypePassword(e.target.value)} 
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
                                <button className={styles.saveButton} onClick={onSubmit}>Thêm mới</button>
                        </div>
                    </div>


                    {/* ----------------------------------------------- */}
                </div> 
        </>
    );
}

export default ThemNhanVien;