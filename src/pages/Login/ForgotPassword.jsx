import logo from '../../assets/layoutImg/logo.png';
import styles from '../Login/css/ForgotPassword.module.scss';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { firebase, auth } from '../Login/js/firebase';
import { useHookID, useHookOtp, useHookPhone, useHookResult, useHookStateValidate, useHookStep } from '../../hooks/loginHooks';
import isEmpty from 'validator/lib/isEmpty';

function ForgotPasswordInFo() {
    let history = useHistory();
    const [phoneNumber, setPhoneNumber] = useHookPhone();
    const [iD, setID] = useHookID();
    const [otp, setOtp] = useHookOtp();
    const [step, setStep] = useHookStep();
    const [result, setResult] = useHookResult();
    const [validationMsg, setValidationMsg] = useHookStateValidate();


    // Check OTP
    const verifyOTP = () => {
        if (phoneNumber === "") return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible'
        });

        auth.signInWithPhoneNumber(phoneNumber, verify).then((result) => {
            setResult(result);
            setStep('VERIFY_OTP');
        })
            .catch((err) => {
                alert(err);
            });
    }

    const ValidateOtp = () => {
        if (otp === null) return;

        result.confirm(otp).then((result) => {
            setStep('VERIFY_SUCCESS');
        })
            .catch((err) => {
                setStep('VERIFY_FAIL');
            })
    }


    // Check input
    const validateAll = () => {
        const msg = {};
        if (isEmpty(iD)) {
            msg.iD = 'Vui lòng nhập ID';
        }
        if (isEmpty(phoneNumber)) {
            msg.phoneNumber = 'Vui lòng nhập số điện thoại của bạn';
        }

        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const onSubmitLogin = () => {
        const isValid = validateAll();
        if (!isValid) return
        else {
            verifyOTP();
        }
    }


    return (
        <div className={styles.changePasswordPage}>
            <div className={styles.changePasswordForm}>
                <div className={styles.pageLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <form className={styles.form}>
                    {step === 'INPUT_PHONE_NUMBER' &&
                    <>
                        <div className={styles.formInputWithErr}>
                            <div className={styles.formInput}>
                                <div className={styles.inputGroupAppend}>
                                    <span className={styles.inputGroupText}><FontAwesomeIcon icon={faUser}/></span>
                                </div>
                                <input
                                    type="text"
                                    name='id'
                                    className={styles.inputForm}
                                    placeholder='ID nhân viên'
                                    onChange={e => setID(e.target.value)}
                                />
                            </div>
                            <p className="errInput">{validationMsg.iD}</p>
                        </div>
                        <div className={styles.formInputWithErr}>
                            <div className={styles.formInput}>
                                <div className={styles.inputGroupAppend}>
                                    <span className={styles.inputGroupText}><FontAwesomeIcon  icon={faPhone} /></span>
                                </div>
                                <input
                                    type="text"
                                    name='phoneNumber'
                                    className={styles.inputForm}
                                    value={phoneNumber} onChange={e => { setPhoneNumber(e.target.value) }}
                                    placeholder='Nhập số điện thoại'
                                />
                                <div id="recaptcha-container"></div>
                            </div>
                            <p className="errInput">{validationMsg.phoneNumber}</p>
                        </div>
                        <div className={styles.formConfirmButton}>
                            <button type='button' className={styles.confirmButton} onClick={onSubmitLogin}>
                               Xác nhận
                            </button>
                        </div>
                    </>
                    }

                    {step === 'VERIFY_OTP' && 
                    <>
                        <div className={styles.otpParagraph}>
                            <p>Mã OTP đã được gửi đến số điện thoại của bạn, vui lòng kiểm tra và nhập OTP</p>
                        </div>
                        <input type="text" placeholder='Nhập mã OTP' className={styles.otpFormInput}
                            onChange={(e) => { setOtp(e.target.value) }} 
                        />
                        <div className={styles.formConfirmButton}>
                            <button type='button' className={styles.confirmButton} onClick={ValidateOtp}>
                                Xác nhận
                            </button>
                        </div>                 
                    </>
                    }

                    {step === 'VERIFY_SUCCESS' && 
                        <> 
                            history.push('/changePassword')
                            {/* <Navigate to='/changePassword' replace={true} /> */}
                        </>
                    }

                    {step === 'VERIFY_FAIL' &&
                        <>
                            <div className={styles.otpParagraph}>
                                <p>Nhập sai mã OTP, vui lòng nhập lại</p>
                            </div>
                            <input type="text" placeholder='Nhập mã OTP' className={styles.otpFormInput}
                                onChange={(e) => { setOtp(e.target.value) }} 
                            />
                            <div className={styles.formConfirmButton}>
                                <button type='button' className={styles.confirmButton} onClick={ValidateOtp}>
                                    Xác nhận
                                </button>
                            </div>           
                        </>
                    }
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordInFo
