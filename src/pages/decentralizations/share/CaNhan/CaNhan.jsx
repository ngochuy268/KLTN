import React from "react";
import styles from './CaNhan.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faVenusMars, faPhone, faEnvelope, faLocationDot, faCalendarDays, faWindowRestore, faNoteSticky, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../assets/layoutImg/avatar.png';
import { Link } from "react-router-dom";

import { UserContext } from "../../../../context/userContext";
import { getUser } from "../../../../services/userServices";
import { useState, useEffect } from 'react';


function CaNhan() {

    // get user data from database
    const { user } = React.useContext(UserContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchUserData(user.account.id);
    }, [])

    // console.log(">>> checdk: ", userData.Group.Name)

    const fetchUserData = async (id) => {
        let response = await getUser(id);
        if (response && response.EC === 0) {
            setUserData(response.DT);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Thông tin cá nhân</p>
                    </div>

                    <div className={styles.employeeWrapper}>
                        <div className={styles.employeeInfoWrapper}>

                            {userData ?
                                <>
                                    <div className={styles.backgroundImg}>
                                        <div className={styles.employeeBasicInfoWrapper}>
                                            <img src={avatar} alt='avatar' className={styles.employeeAvatar} />
                                            <div className={styles.employeeBasic} style={{ textAlign: 'center', marginTop: '20px' }}>
                                                <span style={{ fontWeight: '700' }}>Mã nhân viên: {userData.id}</span>
                                                <p className={styles.employeeInfoParagraph}></p>
                                            </div>
                                            <button className={styles.signOutButton}><Link to='/login'>Đăng xuất</Link></button>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoContentWrapper}>
                                        <div className={styles.employeeContentWrapper}>
                                            <h3 className={styles.employeeContentTitle}>Thông tin cá nhân</h3>
                                            <div className={styles.employeeContentInfoWrapper}>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faFileSignature} /> Họ và tên: </span>
                                                    <p className={styles.employeeInfoParagraph}>{userData.HoTen}</p>
                                                </div>
                                                <div className={styles.employeeContentInfoExpandWrapper}>
                                                    <div className={styles.employeeInfoContent}>
                                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faCakeCandles} /> Ngày sinh: </span>
                                                        <p className={styles.employeeInfoParagraph}>{userData.NgaySinh}</p>
                                                    </div>
                                                    <div className={styles.employeeInfoContent}>
                                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faVenusMars} /> Giới tính: </span>
                                                        <p className={styles.employeeInfoParagraph}>{+userData.GioiTinh === 1 ? "Nam" : "Nữ"}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.employeeContentInfoExpandWrapper}>
                                                    <div className={styles.employeeInfoContent}>
                                                        <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faPhone} /> Số điện thoại: </span>
                                                        <p className={styles.employeeInfoParagraph}>0{userData.Tel}</p>
                                                    </div>
                                                    <div className={styles.employeeInfoContent}>
                                                        <span className={styles.employeeInfoTitle}>Zalo: </span>
                                                        <p className={styles.employeeInfoParagraph}>0{userData.Tel}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook: </span>
                                                    <p className={styles.employeeInfoParagraph}>https://www.facebook.com/</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faEnvelope} /> Email: </span>
                                                    <p className={styles.employeeInfoParagraph}>{userData.Email}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faLocationDot} /> Địa chỉ: </span>
                                                    <p className={styles.employeeInfoParagraph}>{userData.Address}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.employeeContentWrapper} style={{ marginTop: '20x' }}>
                                            <h3 className={styles.employeeContentTitle}>Thông tin công việc</h3>
                                            <div className={styles.employeeContentInfoWrapper}>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faCalendarDays} /> Ngày vào làm: </span>
                                                    <p className={styles.employeeInfoParagraph}>{userData.NgayVaoLam}</p>
                                                </div>
                                                <div className={styles.employeeInfoContent}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faWindowRestore} /> Chức vụ: </span>
                                                    <p className={styles.employeeInfoParagraph}>{+userData.GroupId === 2 ? "Nhân viên quản lý kho" : "Nhân viên kho hàng"}</p>
                                                </div>
                                                <div className={styles.employeeNoteWrapper}>
                                                    <span className={styles.employeeInfoTitle}><FontAwesomeIcon icon={faNoteSticky} /> Ghi chú: </span>
                                                    <p>{userData.DanhGia}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <><span>Not found data</span></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaNhan;