import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Modal from './components/Modal';
import './styles.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');

    const handleOpenModal = (imageSrc) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar onSelectSection={setActiveSection} />
            <div className="w-3/4 p-8 flex flex-col justify-center items-start">
                {activeSection === 'home' && <Home />}
                {activeSection === 'projects' && <Projects onOpenModal={handleOpenModal} />}
                {activeSection === 'about' && <About />}
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={modalImageSrc} />
        </div>
    );
};

export default App;