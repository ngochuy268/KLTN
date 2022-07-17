import styles from './DanhSachNhanVien.module.scss';
import avatar from '../../../../../../assets/layoutImg/employee_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
function DanhSachNhanVien() {
    return(
        <>
             <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperTitle}>
                        <p>Danh sách nhân viên</p> 
                    </div>

                  
                    <div className={styles.employeeListWrapper}>
                      {/* -----------------BE--------------------- */}
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeContent}>
                                    <div className={styles.employeeBasicInfo}>
                                        <div className={styles.employeeImgWrapper}>
                                            <img src={require('../../../../../../assets/layoutImg/employee_avatar.png').default} alt="employee-avatar" className={styles.employeeImg} />
                                        </div>
                                        <div className={styles.employeeNameAndID}>
                                            <p className={styles.employeeName}>Nguyễn Văn A</p>
                                            <p className={styles.employeeYearsOld}>
                                                21 tuổi
                                            </p>
                                            <p className={styles.employeeID}>
                                                <span>ID: </span>NV002
                                            </p>
                                    </div>
                                </div>
                                <div className={styles.employeeInfo}>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                        30/2/2000
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                        Nam
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                        05065165165
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Mật khẩu: </span>
                                        abc18394
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Email: </span>
                                        18520873@gm.uit.edu.vn
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                        An Thới - An Tịnh - Trảng Bàng - Tây Ninh
                                    </p>
                                </div>
                                <div className={styles.employeeStatusWrapper}>
                                    <div className={styles.employeeStatus}>
                                        <p className={styles.employeeStatusContent}>Đang làm</p>
                                    </div>
                                    <FontAwesomeIcon icon={faEdit} className={styles.employeeStatusEditIcon}/>
                                </div>
                              </div>
                           </div>
                        </div>
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeBasicInfo}>
                                    <div className={styles.employeeImgWrapper}>
                                        <img src={avatar} alt="employee-avatar" className={styles.employeeImg} />
                                    </div>
                                    <div className={styles.employeeNameAndID}>
                                        <p className={styles.employeeName}>Nguyễn Văn A</p>
                                        <p className={styles.employeeYearsOld}>
                                            21 tuổi
                                        </p>
                                        <p className={styles.employeeID}>
                                            <span>ID: </span>NV002
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.employeeInfo}>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                        30/2/2000
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                        Nam
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                        05065165165
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Mật khẩu: </span>
                                        abc18394
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Email: </span>
                                        18520873@gm.uit.edu.vn

                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                        An Thới - An Tịnh - Trảng Bàng - Tây Ninh
                                    </p>
                                </div>
                                <div className={styles.employeeStatusWrapper}>
                                    <div className={styles.employeeStatus}>
                                        <p className={clsx(styles.employeeStatusContent, styles.employeeStatusContentOff)}>Đã nghỉ</p>
                                    </div>
                                    <FontAwesomeIcon icon={faEdit} className={styles.employeeStatusEditIcon}/>
                                </div>
                           </div>
                        </div>
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeBasicInfo}>
                                    <div className={styles.employeeImgWrapper}>
                                        <img src={avatar} alt="employee-avatar" className={styles.employeeImg} />
                                    </div>
                                    <div className={styles.employeeNameAndID}>
                                        <p className={styles.employeeName}>Nguyễn Văn A</p>
                                        <p className={styles.employeeYearsOld}>
                                            21 tuổi
                                        </p>
                                        <p className={styles.employeeID}>
                                            <span>ID: </span>NV002
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.employeeInfo}>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                        30/2/2000
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                        Nam
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                        05065165165
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Mật khẩu: </span>
                                        abc18394
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Email: </span>
                                        18520873@gm.uit.edu.vn

                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                        An Thới - An Tịnh - Trảng Bàng - Tây Ninh
                                    </p>
                                </div>
                                <div className={styles.employeeStatusWrapper}>
                                    <div className={styles.employeeStatus}>
                                        <p className={clsx(styles.employeeStatusContent, styles.employeeStatusContentOff)}>Đã nghỉ</p>
                                    </div>
                                    <FontAwesomeIcon icon={faEdit} className={styles.employeeStatusEditIcon}/>
                                </div>
                           </div>
                          
                        </div>
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeBasicInfo}>
                                    <div className={styles.employeeImgWrapper}>
                                        <img src={avatar} alt="employee-avatar" className={styles.employeeImg} />
                                    </div>
                                    <div className={styles.employeeNameAndID}>
                                        <p className={styles.employeeName}>Nguyễn Văn A</p>
                                        <p className={styles.employeeYearsOld}>
                                            21 tuổi
                                        </p>
                                        <p className={styles.employeeID}>
                                            <span>ID: </span>NV002
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.employeeInfo}>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                        30/2/2000
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                        Nam
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                        05065165165
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Mật khẩu: </span>
                                        abc18394
                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Email: </span>
                                        18520873@gm.uit.edu.vn

                                    </p>
                                    <p className={styles.employeeInfoContent}>
                                        <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                        An Thới - An Tịnh - Trảng Bàng - Tây Ninh
                                    </p>
                                </div>
                                <div className={styles.employeeStatusWrapper}>
                                    <div className={styles.employeeStatus}>
                                        <p className={clsx(styles.employeeStatusContent, styles.employeeStatusContentOff)}>Đã nghỉ</p>
                                    </div>
                                    <FontAwesomeIcon icon={faEdit} className={styles.employeeStatusEditIcon}/>
                                </div>
                           </div>
                        </div>

                      {/* ---------------------------------------- */}
                    </div>
                </div>         
            </div>
        </>
    );
}

export default DanhSachNhanVien;