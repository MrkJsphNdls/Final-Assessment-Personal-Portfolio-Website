import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div id="imageModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded">
                <span onClick={onClose} className="cursor-pointer text-black float-right">&times;</span>
                <img className="max-w-full max-h-screen" src={imageSrc} alt="Project" />
            </div>
        </div>
    );
};

export default Modal;