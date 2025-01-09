import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { loginWithGoogle, setErrorMessage } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        setErrorMessage('');
        loginWithGoogle()
            .then((userCredential) => {
                const userInfo = {
                    name: userCredential.user?.displayName,
                    email: userCredential.user?.email,
                    photo: userCredential.user?.photoURL
                };

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Register Success",
                            icon: "success",
                            draggable: true
                        });
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="flex justify-center space-x-4 mt-6">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                <FaFacebookF className="text-blue-600" size={20} />
            </button>
            <button onClick={handleGoogleLogin} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                <FaGoogle className="text-red-500" size={20} />
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                <FaTwitter className="text-blue-400" size={20} />
            </button>
        </div>
    );
};

export default SocialLogin;