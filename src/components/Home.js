const Home = () => {
    const handleContactClick = () => {
        window.open("mailto:leesinandales@gmail.com");
    };

    return (
        <div id="home" className="content-section large-container"> {/* Added class for larger container */}
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-200 to-blue-500"></div>
                <div className="text-gray-500">01</div>
                <div className="text-3xl"> {/* Increased text size */}
                    <span className="text-gray-500">&lt;</span>
                    Hello, I'm
                    <span className="text-blue-900"> Mark!</span>
                    <span className="text-gray-500">&gt;</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
                <div className="text-gray-500">02</div>
                <div className="text-3xl"> {/* Increased text size */}
                    <span className="text-gray-500">&lt;</span>
                    A <span className="text-blue-900">3rd Year</span> College <span className="text-blue-900">Student</span>
                    <span className="text-gray-500">&gt;</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
                <div className="text-gray-500">03</div>
                <div className="text-3xl"> {/* Increased text size */}
                    <span className="text-gray-500">&lt;</span>
                    at <span className="text-blue-900">Gardner</span> College <span className="text-blue-900">Cainta</span>
                    <span className="text-gray-500">&gt;</span>
                </div>
            </div>
            <div className="mt-8 flex items-center space-x-2">
                <button 
                    className="bg-blue-900 text-white px-6 py-3 rounded-full contact-btn" // Increased padding for button
                    onClick={handleContactClick}
                >
                    Contact Me <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Home;