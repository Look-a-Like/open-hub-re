import React from 'react';
import NavBar from './Setting_details/NavBar';
import SettingContent from './Setting_details/SettingContent';

const Settings = () => {
    return (
        <div className="flex h-screen">
            <NavBar />
            <div className="flex-grow p-8 bg-pink-100 overflow-y-auto">
                <SettingContent/>
            </div>
        </div>
    );
};

export default Settings;