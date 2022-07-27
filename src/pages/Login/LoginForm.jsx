import './css/LoginForm.scss';
import logo from '../../assets/loginImg/logo.jpg';
import { Link } from 'react-router-dom';
import { useHookStatePassword, useHookStateName } from '../../hooks/loginHooks';
import isEmpty from 'validator/lib/isEmpty';
import { faUser, faKey, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../services/userServices';
import React from 'react';
import { UserContext } from "../../context/userContext";


function Login() {

    const { loginContex } = React.useContext(UserContext);

    const history = useHistory();
    const [idNhanVien, setID] = useHookStateName();
    const [password, setPassword] = useHookStatePassword();
    const $ = document.querySelector.bind(document);

    // Validate the sign-in form
    const validateAll = () => {
        const msg = {};
        $('.errInput1').classList.remove('active');

        // Check ID empty
        if (isEmpty(idNhanVien)) {
            toast.error('Mã nhân viên không được để trống!');
            msg.idNhanVien = 'Vui lòng nhập mã nhân viên';

            $('.errInput1').classList.add('active');
            return false;
        }

        // Check ID true
        if (idNhanVien.length > 9 || idNhanVien.length < 9) {
            toast.error('Mã nhân viên không hợp lệ')
            $('.errInput1').classList.remove('active');
            return false;
        }

        // Check password empty
        $('.errInput2').classList.remove('active');
        if (isEmpty(password)) {
            toast.error('Mật khẩu không được để trống!')
            $('.errInput2').classList.add('active');
            return false;
        }

        var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!(password.match(decimal))) {
            toast.error('Mật khẩu phải bao gồm chữ thường, chữ in hoa và ít nhất một chữ số')
            $('.errInput2').classList.remove('active');
            return false;
        }
        return true;
    }

    let flat = null;
    // Login function
    const onSubmitLogin = async () => {

        const isValid = validateAll();
        if (isValid) {

            let response = await loginUser(idNhanVien, password);

            if (response && +response.EC === 0) {

                let groupRole = response.DT.groupRole;
                let email = response.DT.email;
                let username = response.DT.username;
                let id = response.DT.id;
                let token = response.DT.access_token;
                let level = response.DT.level;
                let data = {
                    // User authentication
                    isAuthenticated: true,
                    token: token,
                    account: { groupRole, email, username, id, level }
                }
                sessionStorage.setItem('account', JSON.stringify(data));
                loginContex(data);
                if (+ level == 2) {
                    history.push('/tongquan');

                }
                if (+ level == 1) {
                    history.push('/canhan');

                }

            }
            toast.success(response.EM);

        }
    }

    // Keypress function
    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            onSubmitLogin();
        }
    }

    return (
        <div className='loginPage'>
            <div className='loginForm'>
                <div className='pageLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <form className='form'>
                    <div className="formInputWithErr">
                        <div className='formInput'>
                            <div className='inputGroupAppend'>
                                <span className='inputGroupText'><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                            <input
                                type="text"
                                name='idNhanVien'
                                className='name inputForm'
                                placeholder='Mã nhân viên'
                                value={idNhanVien}
                                onChange={e => setID(e.target.value)}
                            />
                        </div>
                        <p className='errInput1'>Vui lòng nhập mã nhân viên</p>
                    </div>
                    <div className="formInputWithErr">
                        <div className='formInput'>
                            <div className='inputGroupAppend'>
                                <span className='inputGroupText'><FontAwesomeIcon icon={faKey} /></span>
                            </div>
                            <input
                                type="password"
                                name='password'
                                className='password inputForm'
                                placeholder='Mật khẩu'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onKeyPress={(event) => handlePressEnter(event)}
                            />
                        </div>
                        <p className="errInput2">Vui lòng nhập mật khẩu</p>
                    </div>

                    <div className='formRememberPassword'>
                        <input type="checkbox" name="check" />
                        <p>Lưu mật khẩu</p>
                    </div>
                    <div className='formLoginButton'>
                        <button type='button' className='loginButton' onClick={onSubmitLogin}>Đăng nhập</button>
                    </div>
                    <div className='formForgotPassword'>
                        <Link to='/forgotPasswordinfo' className='link'>Quên mật khẩu</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login