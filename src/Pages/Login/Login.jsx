import { useContext, useEffect, useRef, useState } from 'react';
import loginBg from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const { loginWithEmail, loginWithGoogle, errorMessage, setErrorMessage } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('');

        loginWithEmail(email, password)
            .then((userCredential) => {
                Swal.fire({
                    title: "Login Success",
                    icon: "success",
                    draggable: true
                });
                form.reset();
                navigate(from);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });

    };

    // const handleGoogleLogin = () => {
    //     setErrorMessage('');
    //     loginWithGoogle()
    //         .then((userCredential) => {
    //             navigate(from, { replace: true });
    //         })
    //         .catch((error) => {
    //             setErrorMessage(error.message);
    //         });
    // };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false);
            alert('Captcha Matched');
        } else {
            alert('Captcha Does Not Match');
            setDisabled(true);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: 'cover',
            }}
        >
            <div
                className="w-full max-w-4xl bg-white shadow-black shadow-2xl rounded-lg overflow-hidden flex"
                style={{
                    backgroundImage: `url(${loginBg})`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Left Section (Image) */}
                <div className="w-1/2 hidden lg:flex items-center justify-center">
                    <img src={loginImg} alt="Login Illustration" className="p-8" />
                </div>

                {/* Right Section (Login Form) */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type here"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {/* Captcha Section */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Captcha</label>
                            <div className="flex items-center space-x-4">
                                <LoadCanvasTemplate />
                            </div>
                            <input
                                type="text"
                                ref={captchaRef}
                                name="captcha"
                                placeholder="Type The Captcha"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleValidateCaptcha}
                                type="button"
                                className="btn btn-outline btn-xs mt-2"
                            >
                                Validate Captcha
                            </button>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={disabled}
                            className={`w-full font-bold py-2 px-4 rounded-lg transition ${disabled
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600'
                                }`}
                        >
                            {disabled ? 'Please Validate Captcha' : 'Sign In'}
                        </button>
                    </form>
                    {/* Footer Links */}
                    <p className="mt-4 text-center text-sm text-gray-500">
                        New here?{' '}
                        <Link to='/signUp' className="text-orange-500 font-medium">
                            Create a New Account
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                    {/* Social Media Login */}
                    {/* <div className="flex justify-center space-x-4 mt-6">
                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                            <FaFacebookF className="text-blue-600" size={20} />
                        </button>
                        <button onClick={handleGoogleLogin} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                            <FaGoogle className="text-red-500" size={20} />
                        </button>
                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                            <FaTwitter className="text-blue-400" size={20} />
                        </button>
                    </div> */}
                    {errorMessage && (
                        <div className="mt-4 text-center">
                            <p className="text-red-500">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
