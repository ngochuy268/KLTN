import styles from './DanhSachNhanVien.module.scss';
import avatar from '../../../../../../assets/layoutImg/employee_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import ChinhSuaInfo from './ChinhSuaInfo';
import { fetchDataShowNV } from '../../../../../../services/khoHangServices';



function DanhSachNhanVien() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
    };

    // Data employee show

    useEffect(() => {
        fetchShowEm();
    },[]);
    
    const [showEm, setShowEm] = useState([]);
    const fetchShowEm = async () => {
        let response = await fetchDataShowNV();
        if (response && response.EC === 0) {
            setShowEm(response.DT);
        }
    }

    console.log(Array.from("2017-12-15"))
    return(
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Danh sách nhân viên</p> 
                    </div>

                  
                    <div className={styles.employeeListWrapper}>
                      {/* -----------------BE--------------------- */}
                        {showEm.map(item => (
                            <div className={styles.employeeListItem} >
                                <div className={styles.backGround}>
                                    <div className={styles.employeeContent}>
                                        <div className={styles.employeeBasicInfo}>
                                            <img src={require(`../../../../../../assets/layoutImg/Avatar/${item.Avata}`).default} 
                                                alt="employee-avatar" className={styles.employeeImg} />
    
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
                                                    <p>0{item.Tel}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                    <p>{item.NgayVaoLam}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.employeeInfo}>
                                            <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
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
                                            <button className={styles.employeeStatusEditIcon} onClick={handleClickOpen}>
                                                <FontAwesomeIcon icon={faEdit} style={{fontSize: '18px'}} />
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
            <Dialog  open={open} onClose={handleClose} maxWidth='xl' fullWidth={true}>
                <div className={styles.closeButtonWrapper}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <DialogTitle id="alert-dialog-title" style={{textAlign: 'center', fontWeight: '700', fontSize: '30px'}}>
                    {"Chỉnh sửa thông tin"}
                </DialogTitle>
                <ChinhSuaInfo />
            </Dialog>

        </>
    );
}

export default DanhSachNhanVien;
