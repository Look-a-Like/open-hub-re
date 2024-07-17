import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [emailData, setEmailData] = useState({
        email: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setEmailData({ ...emailData, [name]: value });
    };

    const handlePasswordSubmit = async () => {
        setIsSubmitting(true);
        const { currentPassword, newPassword, confirmPassword } = passwordData;

        if (newPassword !== confirmPassword) {
            setErrorMessage("New password and confirmation do not match");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(passwordData),
            });

            if (response.ok) {
                setPasswordData({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                });
                setErrorMessage('');
            } else {
                setErrorMessage('Error changing password');
            }
        } catch (error) {
            console.error('Error changing password', error.message);
            setErrorMessage('Error changing password');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEmailSubmit = async () => {
        setIsSubmitting(true);
        const { email } = emailData;

        try {
            const response = await fetch('/change-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                setEmailData({ email: '' });
                setErrorMessage('');
            } else {
                setErrorMessage('Error changing email');
            }
        } catch (error) {
            console.error('Error changing email', error.message);
            setErrorMessage('Error changing email');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignOut = () => {
        navigate('/');
    };

    const { currentPassword, newPassword, confirmPassword } = passwordData;
    const { email } = emailData;
    const isPasswordActive = currentPassword && newPassword && confirmPassword && !isSubmitting;
    const isEmailActive = email && !isSubmitting;

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-pink-50">
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-2xl space-y-6">
                    <div className="bg-white p-8 rounded-md shadow">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-bold mr-4">Change Password</h2>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                        <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
                            <input
                                type="password"
                                name="currentPassword"
                                placeholder="Current Password"
                                value={currentPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <button
                            onClick={handlePasswordSubmit}
                            disabled={!isPasswordActive}
                            className={`w-full p-2 ${isPasswordActive ? 'bg-red-400 hover:bg-red-500' : 'bg-red-200'} text-white rounded-md`}
                        >
                            Change Password
                        </button>
                        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                    </div>

                    <div className="bg-white p-8 rounded-md shadow">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-bold mr-4">Change Email</h2>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                        <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <button
                            onClick={handleEmailSubmit}
                            disabled={!isEmailActive}
                            className={`w-full p-2 ${isEmailActive ? 'bg-red-400 hover:bg-red-500' : 'bg-red-200'} text-white rounded-md`}
                        >
                            Change Email
                        </button>
                        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                    </div>

                    <div className="bg-white p-8 rounded-md shadow">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-bold mr-4">Session Management</h2>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="w-full p-2 bg-red-400 hover:bg-red-500 text-white rounded-md"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // <div className="flex flex-col md:flex-row min-h-screen bg-pink-50">
        //     <div className="flex-1 flex flex-col items-center justify-center p-8">
        //         <div className="w-full max-w-xl space-y-6">
        //             <div className="bg-white p-6 rounded-md shadow">
        //                 <h2 className="text-xl font-bold mb-4">Change Password</h2>
        //                 <div className="mb-4 space-y-4">
        //                     <input
        //                         type="password"
        //                         name="currentPassword"
        //                         placeholder="Current Password"
        //                         value={currentPassword}
        //                         onChange={handlePasswordChange}
        //                         className="w-full p-2 border rounded"
        //                     />
        //                     <input
        //                         type="password"
        //                         name="newPassword"
        //                         placeholder="New Password"
        //                         value={newPassword}
        //                         onChange={handlePasswordChange}
        //                         className="w-full p-2 border rounded"
        //                     />
        //                     <input
        //                         type="password"
        //                         name="confirmPassword"
        //                         placeholder="Confirm Password"
        //                         value={confirmPassword}
        //                         onChange={handlePasswordChange}
        //                         className="w-full p-2 border rounded"
        //                     />
        //                 </div>
        //                 <button
        //                     onClick={handlePasswordSubmit}
        //                     disabled={!isPasswordActive}
        //                     className={`w-full p-2 ${isPasswordActive ? 'bg-red-400 hover:bg-red-500' : 'bg-red-200'} text-white rounded-md`}
        //                 >
        //                     Change Password
        //                 </button>
        //                 {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        //             </div>

        //             <div className="bg-white p-8 rounded-md shadow">
        //                 <h2 className="text-xl font-bold mb-4">Change Email</h2>
        //                 <div className="mb-4 space-y-4">
        //                     <input
        //                         type="email"
        //                         name="email"
        //                         placeholder="Email Address"
        //                         value={email}
        //                         onChange={handleEmailChange}
        //                         className="w-full p-2 border rounded"
        //                     />
        //                 </div>
        //                 <button
        //                     onClick={handleEmailSubmit}
        //                     disabled={!isEmailActive}
        //                     className={`w-full p-2 ${isEmailActive ? 'bg-red-400 hover:bg-red-500' : 'bg-red-200'} text-white rounded-md`}
        //                 >
        //                     Change Email
        //                 </button>
        //                 {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        //             </div>

        //             <div className="bg-white p-8 rounded-md shadow">
        //                 <h2 className="text-xl font-bold mb-4">Session Management</h2>
        //                 <button
        //                     onClick={handleSignOut}
        //                     className="w-full p-2 bg-red-400 hover:bg-red-500 text-white rounded-md"
        //                 >
        //                     Sign Out
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SettingsPage;
