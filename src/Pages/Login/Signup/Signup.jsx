import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import signupBg from '../../../assets/others/authentication.png'
import signupImg from '../../../assets/others/authentication2.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Signup = () => {

    const { createUserWithEmail, errorMessage, setErrorMessage } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('')
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.");
            return;
        }

        createUserWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => user); // Pass the user to the next then block
            })
            .then((user) => { // Use user from the previous then block
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Register Success",
                                icon: "success",
                                draggable: true
                            });
                            form.reset();
                            navigate('/');
                        }
                    })
            })
            .catch(error => {
                setErrorMessage(error.message);
            });

    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100"
            style={{
                backgroundImage: `url(${signupBg})`,
                backgroundSize: 'cover',
            }}
        >
            <div
                className="w-full max-w-4xl bg-white shadow-black shadow-2xl rounded-lg overflow-hidden flex"
                style={{
                    backgroundImage: `url(${signupBg})`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Left Section (Image) */}
                <div className="w-1/2 hidden lg:flex items-center justify-center">
                    <img src={signupImg} alt="Signup Illustration" className="p-8" />
                </div>

                {/* Right Section (Signup Form) */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {/* {Photo Url} */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Your Photo URL"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
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
                                placeholder="Create a Password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                    {/* Footer Links */}
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to="/login" className="text-orange-500 font-medium">
                            Log In
                        </Link>
                    </p>
                    {/* Social Media Signup */}
                    <SocialLogin></SocialLogin>
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

export default Signup;
