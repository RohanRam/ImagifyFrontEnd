import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import EditProfile from '../components/EditProfile';

const Profile = () => {
    const { user } = useContext(AppContext);

    useEffect(() => {
       
    }, [user]); 

    if (!user) {
        return <h2 className="text-center mt-5">Loading user data...</h2>;
    }

   
    const genderIcon = user.gender === 'male' ? (
        <i className="bx bx-male male-icon"></i>  // Male icon
    ) : user.gender === 'female' ? (
        <i className="bx bx-female female-icon"></i>  // Female icon
    ) : user.gender === 'others' ? (
        <i className="bx bx-male-female mf-icon"></i>  // Others
    ) : (
        <i className="bx bx-grid-small"></i>  // Default icon
    );

    return (
        <div className="profile-cont">
            <h1 className="text-center profile-head mt-5">Profile Overview</h1>
            <p className="text-center" style={{ color: 'grey' }}>Customize Your Profile</p>

            <div className="w-100 d-flex justify-content-center mt-1">
                <div className="prof-col border border-1 mt-5">
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        {genderIcon}
                    </div>
                    <h2 style={{ color: 'rgba(0, 0, 0, 0.6)' }} className="text-center mt-4">
                        {user.name || "Guest User"}
                    </h2>
                    <p className="em">
                        EMAIL: <span className="em2" style={{ color: 'blue' }}>
                            {user.email || "No Email"}
                        </span>
                    </p>
                    <EditProfile />
                </div>
            </div>
        </div>
    );
};

export default Profile;
