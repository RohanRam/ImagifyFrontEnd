import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';


const EditProfile = () => {
    const [show, setShow] = useState(false);
    const { handleUpdateProfile, name, email, setName, setEmail, } = useContext(AppContext);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        handleUpdateProfile(); 
        handleClose(); 
    };


    return (
        <>
            <div>
                <button onClick={handleShow} className='edit-btn2 mt-4 mb-5'>Edit</button>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row p-5">
                            <div className="d-flex flex-column align-items-center justify-content-center col-lg-4">
                                {/* <label>
                                    <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
                                    <img className='img-fluid' src={profileImage || assets.profile_icon} alt="Profile" />
                                </label>
                                <div className="text-center mb-3 text-danger fw-bold" style={{ fontSize: "13px" }}>
                                    *Upload Only Image Files [jpg/jpeg/png]
                                </div> */}
                                <i style={{ fontSize: '50px', color: '#86A788' }} class='bx bxs-user-pin mt-5 mb-5'></i>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center col-lg-8">
                                <div className='mb-3'>
                                    <input className='form-control' type="text" placeholder='Username' value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input className='form-control' type="text" placeholder='Email' value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleSubmit} variant="primary">Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default EditProfile;

