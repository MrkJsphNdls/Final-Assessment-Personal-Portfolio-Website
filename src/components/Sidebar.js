import React from 'react';

const Sidebar = ({ onSelectSection }) => {
    return (
        <div className="w-1/4 bg-white p-8 flex flex-col justify-between items-center border-r border-gray-200 min-h-screen">
            {/* Top Section: Profile and Navigation */}
            <div className="flex flex-col items-center w-full">
                <img
                    alt="Profile"
                    className="rounded-full mb-8"
                    height="100"
                    width="100"
                    src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t39.30808-6/481952462_2064583287368354_5868218130215078227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHC_7Zt-eKqKgKZDlw_C0TcPbcYYnE-7bc9txhicT7ttwWkYVFmV2r-Ri9AyOM6VOM7wn-7cQg3a_DcFn26iF0i&_nc_ohc=C2sIdM6g2YcQ7kNvwGTqb2x&_nc_oc=AdkW5MYFr00UYxhBau9An8H59WYe14yoNZaXyFxPWcc67EdL-S5vmxNalTwIk43vMho&_nc_zt=23&_nc_ht=scontent.fmnl10-1.fna&_nc_gid=Dun5MNGlCX_670TbHn2tGQ&oh=00_AfEemhngWKF-LbgAorQh_mzPTZT_GmFdwVwtnDgE36D3ag&oe=67FDA2D0"
                />

                <nav className="flex flex-col items-center space-y-4 w-full">
                    <div className="nav-button" onClick={() => onSelectSection('home')}>
                        <a className="flex items-center space-x-2 text-blue-900 justify-center">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </a>
                    </div>
                    <div className="nav-button" onClick={() => onSelectSection('projects')}>
                        <a className="flex items-center space-x-2 text-blue-900 justify-center">
                            <i className="fas fa-project-diagram"></i>
                            <span>Projects</span>
                        </a>
                    </div>
                    <div className="nav-button" onClick={() => onSelectSection('about')}>
                        <a className="flex items-center space-x-2 text-blue-900 justify-center">
                            <i className="fas fa-user"></i>
                            <span>About Me</span>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Bottom Section: Social Media */}
            <div className="flex space-x-4 mt-8">
                <a href="https://www.facebook.com/markjoseph.andales.90" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook text-black text-xl"></i>
                </a>
                <a href="https://www.instagram.com/itzmejeeeyy/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-black text-xl"></i>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;