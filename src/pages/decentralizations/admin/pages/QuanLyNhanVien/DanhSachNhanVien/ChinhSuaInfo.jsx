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

    const onSubmit = async () => {

        const isValid = validateAll();
        if (isValid) {
           toast.success('Thêm thành công!')
        }
    }

    // ----------------------------

    const [fileInput, setFileInput] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const handleFileChange = e => {
        const file = e.target.files[0];
        previewFile(file)
    }

    const previewFile = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile = e => {
        e.preventDefault();
        if(!previewSource) return;
        uploadImg(previewSource);
    }   

    const uploadImg = async (base64EncodeImg) => {
        console.log(base64EncodeImg);
        try {
           await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodeImg }),
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <>
             <div className={styles.wrapper}>
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
                                    <input type="text" className={styles.addEmployeesInput}  />
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Ảnh chân dung</p>
                                   <form>
                                        <input type="file" className={styles.addEmployeesInput} onChange={handleFileChange} value={fileInput}/>
                                        {previewSource && (
                                            <img src={previewSource} style={{width:'50%'}}/>
                                        )}
                                   </form>
                                    <button onClick={handleSubmitFile}>Upload img</button>
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