import styles from './DanhSachNhanVien.module.scss';
import avatar from '../../../../../../assets/layoutImg/employee_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import ChinhSuaInfo from './ChinhSuaInfo';
import { fetchDataShowNV } from '../../../../../../services/khoHangServices';
import { style } from '../../../../../../components/chatbox/client/styles';
import { getUser, updateVang } from "../../../../../../services/userServices";



function DanhSachNhanVien() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = async (id) => {
        await fetchUserData(id)
        console.log(">>> check user: ", id)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Data employee show

    useEffect(() => {
        fetchShowEm();
    }, [flat]);

    const [showEm, setShowEm] = useState([]);
    const fetchShowEm = async () => {
        let response = await fetchDataShowNV();
        if (response && response.EC === 0) {
            setShowEm(response.DT);
        }
    }

    const [user, setUser] = useState([]);
    const fetchUserData = async (id) => {
        console.log(">>> check fetch: ", id)
        let response = await getUser(id);
        if (response && response.EC === 0) {
            setUser(response.DT);
        }
    }

    const [flat, setflat] = useState(false);
    const setVang = async (id) => {
        console.log(">>> check")
        let response = await updateVang(id);
        if (response && response.EC === 0) {
            setflat(true);
        }
    }

    // console.log(Array.from("2017-12-15"))
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Quản lý nhân viên - Danh sách nhân viên</p>
                    </div>


                    <div className={styles.employeeListWrapper}>
                        {/* -----------------BE--------------------- */}
                        {showEm.map(item => (
                            <div className={styles.employeeListItem} >
                                <div className={styles.backGround}>
                                    <div className={styles.employeeContent}>
                                        <div className={styles.employeeBasicInfo}>
                                            <div className={styles.employeeImgWrapper}>
                                                <img src={item.Avata ? require(`../../../../../../assets/layoutImg/Avatar/${item.Avata}`).default : avatar}
                                                    alt="employee-avatar" className={styles.employeeImg} />
                                                <b><p>{item.id}</p></b>
                                                <p><button
                                                    style={
                                                        item.Vang == 0 ? { backgroundColor: 'red', border: 'none', color: 'white', padding: '5px 10px' }
                                                            : { backgroundColor: 'green', border: 'none', color: 'white', padding: '5px 10px' }} onClick={() => setVang(item.id)}>Vắng</button></p>
                                            </div>

                                            <div className={styles.employeeInfoWrapper}>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                    <p>{item.HoTen}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                    <p>{item.NgaySinh}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                    <p>{item.GioiTinh === 1 ? 'Nam' : 'Nữ'}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                    <p>{item.Tel}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}>CCCD: </span>
                                                    <p>{item.CCCD}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.employeeInfo}>
                                            <div className={styles.employeeInfoContent} style={{ marginTop: '18px' }}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>{item.NgayVaoLam}</p>
                                            </div>
                                            <div className={styles.employeeInfoContent} >
                                                <span className={styles.employeeInfoTitle} >Email: </span>
                                                <p>{item.Email}</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                                <p>{item.Address}</p>
                                            </div>
                                        </div>
                                        <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                {<li>{item.DanhGia}</li>}
                                            </ul>
                                        </div>
                                        <div className={styles.employeeStatusWrapper}>
                                            <button className={styles.employeeStatusEditIcon} onClick={() => handleClickOpen(item.id)}>
                                                <FontAwesomeIcon icon={faEdit} style={{ fontSize: '18px' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        {/* ---------------------------------------- */}
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} maxWidth='xl' fullWidth={true}>
                <div className={styles.closeButtonWrapper}>
                    <button className={styles.closeButton} onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center', fontWeight: '700', fontSize: '30px' }}>
                    {"Chỉnh sửa thông tin"}
                </DialogTitle>
                {ChinhSuaInfo(user)}
            </Dialog>

        </>
    );
}

export default DanhSachNhanVien;
