import logo from '../../assets/loginImg/logo.jpg'
import styles from '../Login/css/ResetPassword.module.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { useHookResetPassword, useHookStatePassword } from '../../hooks/loginHooks';


function ChangePassword() {
    const [passwordReset, setPasswordReset] = useHookResetPassword();
    const [password, setPassword] = useHookStatePassword();

    const confirm = () => {

    };


    return (
        <div className={styles.changePasswordPage}>
            <div className={styles.changePasswordForm}>
                <div className={styles.pageLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <form className={styles.form}>
                    <div className={styles.formInput}>
                        <div className={styles.inputGroupAppend}>
                            <span className={styles.inputGroupText}><FontAwesomeIcon icon={faKey}/></span>
                        </div>
                        <input
                            type="password"
                            name='password'
                            className={styles.inputForm}
                            placeholder='Nhập mật khẩu'
                        />
                    </div>
                    <div className={styles.formInput}>
                        <div className={styles.inputGroupAppend}>
                            <span className={styles.inputGroupText}><FontAwesomeIcon icon={faKey}/></span>
                        </div>
                        <input
                            type="password"
                            name='retype-password'
                            className={styles.inputForm}
                            placeholder='Nhập lại mật khẩu'
                        />
                    </div>
                    <div className={styles.formConfirmButton}>
                        <button className={styles.confirmButton} onClick={confirm}>
                            <Link to='/tongquan' className={styles.link}>Xác nhận</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword