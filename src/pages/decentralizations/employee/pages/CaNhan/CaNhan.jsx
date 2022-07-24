import React from "react";
import styles from './CaNhan.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faVenusMars, faPhone, faEnvelope, faLocationDot, faCalendarDays, faWindowRestore, faNoteSticky, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../../assets/layoutImg/avatar.png';
import { Link } from "react-router-dom";

function CaNhan() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>Trang chủ</p>
                </div>

                <div className={styles.employeeWrapper}>
                    <div className={styles.employeeInfoWrapper}>
                        <div className={styles.backgroundImg}>
                            <div className={styles.employeeBasicInfoWrapper}>
                                <img src={avatar} alt='avatar' className={styles.employeeAvatar} />
                                <div className={styles.employeeBasic} style={{textAlign:'center', marginTop: '20px'}}> 
                                    <span style={{fontWeight: '700'}}>Mã nhân viên: </span>
                                    <p className={styles.employeeInfoParagraph}>NV002</p>
                                </div>
                                <button className={styles.signOutButton}><Link to='/'>Đăng xuất</Link></button>
                            </div>
                        </div>
                        <div className={styles.employeeInfoContentWrapper}>
                            <div className={styles.employeeContentWrapper}>
                                <h3 className={styles.employeeContentTitle}>Thông tin cá nhân</h3>
                                <div className={styles.employeeContentInfoWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faFileSignature}/> Họ và tên: </span>
                                            <p className={styles.employeeInfoParagraph}>Nguyễn Ngọc Huy</p>
                                        </div>
                                    <div className={styles.employeeContentInfoExpandWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faCakeCandles}/> Ngày sinh: </span>
                                            <p className={styles.employeeInfoParagraph}>30/01/2000</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faVenusMars}/> Giới tính: </span>
                                            <p className={styles.employeeInfoParagraph}>Nam</p>
                                        </div>
                                    </div>
                                    <div className={styles.employeeContentInfoExpandWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faPhone}/> Số điện thoại: </span>
                                            <p className={styles.employeeInfoParagraph}>097859634</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Zalo: </span>
                                            <p className={styles.employeeInfoParagraph}>0784439929</p>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook: </span>
                                       <p className={styles.employeeInfoParagraph}>https://www.facebook.com/</p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faEnvelope}/> Email: </span>
                                        <p className={styles.employeeInfoParagraph}>18520873@gm.uit.edu.vn</p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faLocationDot}/> Địa chỉ: </span>
                                        <p className={styles.employeeInfoParagraph}>An Thới - An Tịnh - Trảng Bàng - Tây Ninh</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.employeeContentWrapper} style={{marginTop: '20x'}}>
                                <h3 className={styles.employeeContentTitle}>Thông tin công việc</h3>
                                <div className={styles.employeeContentInfoWrapper}>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faCalendarDays}/> Ngày vào làm: </span>
                                        <p className={styles.employeeInfoParagraph}>19/10/2018</p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faWindowRestore}/> Chức vụ: </span>
                                        <p className={styles.employeeInfoParagraph}>Nhân viên</p>
                                    </div>
                                    <div className={styles.employeeNoteWrapper}>
                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faNoteSticky}/> Ghi chú: </span>
                                        <p>ahihi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    </>
    )
}

export default CaNhan;