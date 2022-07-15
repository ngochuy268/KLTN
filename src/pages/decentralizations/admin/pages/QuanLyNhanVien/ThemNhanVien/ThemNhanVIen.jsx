import styles from './ThemNhanVien.module.scss';

function  ThemNhanVien() {
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
                                    <textarea name="note" id={styles.addEmployeeNote} rows="4"></textarea>
                                </div>
                            </div>
                            <div className={styles.addEmployeesItems}>
                                <div className={styles.addEmployeesItem}>
                                    <p>Chức vụ</p>
                                    <input type="text" className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Mật khẩu</p>
                                    <input type="password" className={styles.addEmployeesInput} />
                                </div>
                                <div className={styles.addEmployeesItem}>
                                    <p>Nhập lại mật khẩu</p>
                                    <input type="password" className={styles.addEmployeesInput} />
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
                                <button className={styles.saveButton}>Thêm mới</button>
                        </div>
                    </div>


                    {/* ----------------------------------------------- */}
                </div> 
        </>
    );
}

export default ThemNhanVien;