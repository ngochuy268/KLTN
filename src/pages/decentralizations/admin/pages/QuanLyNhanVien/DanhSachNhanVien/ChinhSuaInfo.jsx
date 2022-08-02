import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './ChinhSuaInfo.module.scss';
import isEmpty from 'validator/lib/isEmpty';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { handleClose } from './DanhSachNhanVien';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import _ from "lodash";
import { updateUser } from "../../../../../../services/userServices";


const ChinhSuaInfo = (user) => {

    //   Get value from input
    const [userData, setUserData] = useState({
        id: '',
        HoTen: '',
        GioiTinh: '',
        NgaySinh: '',
        CCCD: '',
        Tel: '',
        Email: '',
        Facebook: '',
        Zalo: '',
        NgayVaoLam: '',
        Address: '',
        DanhGia: '',
        Group: '',
        Avata: ''
    });

    useEffect(() => {
        setUserData(user);
    }, [user])

    // const [userData, setUserData] = useState(userDData);
    // setUserData(user);
    // console.log(">>> check userData: ", userData)
    // const [userData, setUserData] = useState(userData)
    const editUser = async (userData) => {
        let response = await updateUser(userData);
        if (response && response.EC === 0) {
            toast.success(response.EM)
        } else {
            toast.error(response.EM)
        }
    }
    const onSubmit = () => {
        console.log(">>> check userData: ", userData)
        editUser(userData);
    }

    const onChangeInput = (value, name) => {
        console.log('>>> check user onchange name: ', name)
        console.log('>>> check user onchange value: ', value)
        let _userData = _.cloneDeep(userData);
        _userData[name] = value;
        setUserData(_userData);
    }


    return (
        <>
            <div className={styles.wrapper}>
                {/* -----------------BE------------------------------- */}
                <div className={styles.addEmployeesWrapper}>
                    <div className={styles.addEmployees}>
                        <div className={styles.addEmployeesItems}>
                            <div className={styles.addEmployeesItem} style={{ width: '65%' }}>
                                <p>ID nhân viên</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.id}
                                    // onClick={(event) => value = ''}
                                    onChange={(event) => onChangeInput(event.target.value, "id")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Họ và tên</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.HoTen}
                                    onChange={(event) => onChangeInput(event.target.value, "HoTen")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Giới tính</p>
                                <div className={styles.addEmployeesInputRadioWrapper}>
                                    <div className={styles.addEmployeesInputRadio}>
                                        {userData.GioiTinh == 1 ?
                                            <>
                                                <input type="radio" value='1' checked className={styles.addEmployeesInput}
                                                    onChange={(event) => onChangeInput(event.target.value, "GioiTinh")} />
                                            </>
                                            :
                                            <>
                                                <input type="radio" value='1' className={styles.addEmployeesInput}
                                                    onChange={(event) => onChangeInput(event.target.value, "GioiTinh")} />
                                            </>
                                        }
                                        <label htmlFor="">Nam</label>
                                    </div>
                                    <div className={styles.addEmployeesInputRadio}>
                                        {userData.GioiTinh == 0 ?
                                            <>
                                                <input type="radio" value='0' className={styles.addEmployeesInput} checked
                                                    onChange={(event) => onChangeInput(event.target.value, "GioiTinh")} />
                                            </>
                                            :
                                            <>
                                                <input type="radio" value='0' className={styles.addEmployeesInput}
                                                    onChange={(event) => onChangeInput(event.target.value, "GioiTinh")} />
                                            </>
                                        }
                                        <label htmlFor="">Nữ</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Ngày sinh</p>
                                <input type="date" className={styles.addEmployeesInput} value={userData.NgaySinh}
                                    onChange={(event) => onChangeInput(event.target.value, "NgaySinh")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Căn cước công dân</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.CCCD}
                                    onChange={(event) => onChangeInput(event.target.value, "CCCD")} />
                            </div>

                        </div>
                        <div className={styles.addEmployeesItems}>
                            <div className={styles.addEmployeesItem} style={{ width: '65%' }}>
                                <p>Số điện thoại</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.Tel}
                                    onChange={(event) => onChangeInput(event.target.value, "Tel")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Zalo</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.Zalo}
                                    onChange={(event) => onChangeInput(event.target.value, "Zalo")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Email</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.Email}
                                    onChange={(event) => onChangeInput(event.target.value, "Email")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p>Ngày vào làm</p>
                                <input type="date" className={styles.addEmployeesInput} value={userData.NgayVaoLam}
                                    onChange={(event) => onChangeInput(event.target.value, "NgayVaoLam")} />
                            </div>
                            <div className={styles.addEmployeesItem}>
                                <p> Chức vụ </p>
                                <select className={styles.addEmployeesInput} value={userData.GroupId}
                                    onChange={(event) => onChangeInput(event.target.value, "GroupId")} >
                                    <option value="0">Chọn chức vụ</option>
                                    <option value="1">Nhân viên</option>
                                    <option value="2">Quản lý</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.addEmployeesItems}>
                            <div className={styles.addEmployeesItem}>
                                <p>Facebook</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.Facebook}
                                    onChange={(event) => onChangeInput(event.target.value, "Facebook")} />
                            </div>
                        </div>
                        <div className={styles.addEmployeesItems}>
                            <div className={styles.addEmployeesItem}>
                                <p>Địa chỉ</p>
                                <input type="text" className={styles.addEmployeesInput} value={userData.Address}
                                    onChange={(event) => onChangeInput(event.target.value, "Address")} />
                            </div>
                        </div>

                        <div className={styles.addEmployeesItems}>
                            <div className={styles.addEmployeesItem}>
                                <p>Ghi chú</p>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data=""
                                    value={userData.DanhGia}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                    }}
                                    onChange={(event) => onChangeInput(event.target.value, "DanhGia")}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.addEmployeesItems}>
                            <div className={styles.addEmployeesItem}>
                                <p>Ảnh chân dung</p>
                                <input type="file" className={styles.addEmployeesInput} />
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