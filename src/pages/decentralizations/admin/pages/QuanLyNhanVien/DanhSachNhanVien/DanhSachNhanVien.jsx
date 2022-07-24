import styles from './DanhSachNhanVien.module.scss';
import avatar from '../../../../../../assets/layoutImg/employee_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import ChinhSuaInfo from './ChinhSuaInfo';



function DanhSachNhanVien() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
    };


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
                                        <img src={require('../../../../../../assets/layoutImg/Avatar/av1.png').default} 
                                            alt="employee-avatar" className={styles.employeeImg} />

                                        <div className={styles.employeeInfoWrapper}>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                <p>Nguyễn Thanh Toàn</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                <p>25/06/1998</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                <p>Nam</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                <p>0516516134</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>2017-12-15</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfo}>
                                        <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
                                            <span className={styles.employeeInfoTitle} >Email: </span>
                                            <p>tuankha.29072000@gmail.com</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                            <p>Đông Hưng Thuận - Q13</p> 
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                <li>Chăm chỉ</li>
                                                <li>Đi làm đúng giờ</li>
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
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeContent}>
                                    <div className={styles.employeeBasicInfo}>
                                        <img src={require('../../../../../../assets/layoutImg/Avatar/av2.jpg').default} 
                                            alt="employee-avatar" className={styles.employeeImg} />

                                        <div className={styles.employeeInfoWrapper}>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                <p>Nguyễn Văn Tài</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                <p>03/04/1999</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                <p>Nam</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                <p>0845575136</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>15/12/2017</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfo}>
                                        <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
                                            <span className={styles.employeeInfoTitle} >Email: </span>
                                            <p>taivan2506@gmail.com</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                            <p>Đông Hưng Thuận - Q14</p> 
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                <li>Chăm chỉ</li>
                                                <li>Đi làm đúng giờ</li>
                                                <li>Lâu lâu vắng vài buổi</li>
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
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeContent}>
                                    <div className={styles.employeeBasicInfo}>
                                        <img src={require('../../../../../../assets/layoutImg/Avatar/av3.jpg').default} 
                                            alt="employee-avatar" className={styles.employeeImg} />

                                        <div className={styles.employeeInfoWrapper}>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                <p>Nguyễn Thị Phượng</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                <p>02/10/1997</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                <p>Nữ</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                <p>0547535643</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>30/12/2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfo}>
                                        <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
                                            <span className={styles.employeeInfoTitle} >Email: </span>
                                            <p>phuong97@gmail.com</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                            <p>Đông Hưng Thuận - Q15</p> 
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                <li>Chăm chỉ</li>
                                                <li>Làm việc hiệu quả</li>
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
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeContent}>
                                    <div className={styles.employeeBasicInfo}>
                                        <img src={require('../../../../../../assets/layoutImg/Avatar/av4.jpg').default} 
                                            alt="employee-avatar" className={styles.employeeImg} />

                                        <div className={styles.employeeInfoWrapper}>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                <p>Nguyễn Quốc Tuấn</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                <p>30/10/1999</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                <p>Nam</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                <p>084425463</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>15/03/2019</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfo}>
                                        <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
                                            <span className={styles.employeeInfoTitle} >Email: </span>
                                            <p>tuanquoc@gmail.com</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                            <p>Bình Mĩ - Củ Chi</p> 
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                <li>Hay lơ đễnh trong công việc</li>
                                                <li>Hay vắng làm</li>
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
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeContent}>
                                    <div className={styles.employeeBasicInfo}>
                                        <img src={require('../../../../../../assets/layoutImg/Avatar/av5.jpg').default} 
                                            alt="employee-avatar" className={styles.employeeImg} />

                                        <div className={styles.employeeInfoWrapper}>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                <p>Nguyễn Đức Huy</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                <p>10/10/2000</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                <p>Nam</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                <p>0912344511</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>05/07/2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfo}>
                                        <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
                                            <span className={styles.employeeInfoTitle} >Email: </span>
                                            <p>huytuan1010@gmail.com</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                            <p>Linh Trung - Thủ Đức</p> 
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                <li>Chăm chỉ</li>
                                                <li>Đi làm đúng giờ</li>
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
                        <div className={styles.employeeListItem} >
                           <div className={styles.backGround}>
                                <div className={styles.employeeContent}>
                                    <div className={styles.employeeBasicInfo}>
                                        <img src={require('../../../../../../assets/layoutImg/Avatar/av6.jpg').default} 
                                            alt="employee-avatar" className={styles.employeeImg} />

                                        <div className={styles.employeeInfoWrapper}>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Họ và tên: </span>
                                                <p>Thái Vĩnh Đức</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày sinh: </span>
                                                <p>03/04/1999</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Giới tính: </span>
                                                <p>Nam</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Số điện thoại: </span>
                                                <p>0854793115</p>
                                            </div>
                                            <div className={styles.employeeInfoContent}>
                                                <span className={styles.employeeInfoTitle}>Ngày vào làm: </span>
                                                <p>13/04/2019</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfo}>
                                        <div className={styles.employeeInfoContent} style={{marginTop: '18px'}}>
                                            <span className={styles.employeeInfoTitle} >Email: </span>
                                            <p>ducthai@gmail.com</p>
                                        </div>
                                        <div className={styles.employeeInfoContent}>
                                            <span className={styles.employeeInfoTitle}>Địa chỉ: </span>
                                            <p>Song Hành - Hóc Môn</p> 
                                        </div>
                                    </div>
                                    <div className={styles.employeeInfoFeedBack}>
                                            <span>Đánh giá:</span>
                                            <ul>
                                                <li>Chăm chỉ</li>
                                                <li>Đi làm đúng giờ</li>
                                                <li>Thỉnh thoảng vắng</li>
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
