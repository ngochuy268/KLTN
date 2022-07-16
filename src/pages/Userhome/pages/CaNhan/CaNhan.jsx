import React from "react";
import styles from './CaNhan.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../../assets/layoutImg/avatar.png';
import { Link } from "react-router-dom";

function UserHome() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>Trang chủ</p>
                </div>

                <div className={styles.employeeWrapper}>
                    <div className={styles.employeeTitle}>
                        <span>Thông tin cá nhân</span>
                    </div>
                    <div className={styles.employeeInfoWrapper}>
                        <div className={styles.employeeBasicInfoWrapper}>
                            <img src={avatar} alt='avatar' className={styles.employeeAvatar} />
                            <p className={styles.employeeInfoParagraph}>Nguyễn Văn A</p>
                            <p className={styles.employeeInfoParagraph}>21 tuổi</p>
                            <p className={styles.employeeInfoParagraph}>NV002</p>
                            <button className={styles.signOutButton}><Link to='/'>Đăng xuất</Link></button>
                        </div>
                        <div className={styles.employeeInfoContentWrapper}>
                            <h1 className={styles.employeeNameTitle}>Nguyễn Văn B</h1>
                            <div className={styles.employeeContentWrapper}>
                                <h2 className={styles.employeeContentTitle}>Thông tin cá nhân</h2>
                                <div className={styles.employeeContentInfoWrapper}>
                                    <div className={styles.employeeContentInfoExpandWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                            <p className={styles.employeeInfoParagraph}>30/01/2000</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                            <p className={styles.employeeInfoParagraph}>Nam</p>
                                        </div>
                                    </div>
                                    <div className={styles.employeeContentInfoExpandWrapper}>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                            <p className={styles.employeeInfoParagraph}>097859634</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Zalo: </span>
                                            <p className={styles.employeeInfoParagraph}>0784439929</p>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Facebook: </span>
                                       <p className={styles.employeeInfoParagraph}>https://www.facebook.com/</p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Email: </span>
                                        <p className={styles.employeeInfoParagraph}>18520873@gm.uit.edu.vn</p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                        <p className={styles.employeeInfoParagraph}>An Thới - An Tịnh - Trảng Bàng - Tây Ninh</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.employeeContentWrapper}>
                                <h2 className={styles.employeeContentTitle}>Thông tin công việc</h2>
                                <div className={styles.employeeContentInfoWrapper}>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                        <p className={styles.employeeInfoParagraph}>19/10/2018</p>
                                    </div>
                                    <div className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Chức vụ: </span>
                                        <p className={styles.employeeInfoParagraph}>Nhân viên</p>
                                    </div>
                                    <div className={styles.employeeNoteWrapper}>
                                        <span className={styles.employeeInfoTitle}>Ghi chú: </span>
                                        <textarea name="note" id={styles.employeeNote} cols="50" rows="5"></textarea>
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

export default UserHome;