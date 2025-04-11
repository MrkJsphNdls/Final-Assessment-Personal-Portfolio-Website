import React, { useEffect } from 'react';

const Projects = ({ onOpenModal }) => {
    const projectsData = [
        {
            name: "To-Do List App",
            image: "https://cdn.discordapp.com/attachments/1117026822845116478/1359916133720789022/To-Do_List.png?ex=67f93818&is=67f7e698&hm=6c16890e3457ceebc74b4c4042e7c94882baf524a6e4973e2cbe61e6c9e03397&",
            description: "This web application enables users to input tasks, add them, delete them, and save them in the browser's local storage.",
        },
        {
            name: "Weather App",
            image: "https://cdn.discordapp.com/attachments/1117026822845116478/1359921456259272714/Weather-App.png?ex=67f93d0d&is=67f7eb8d&hm=c865d0e2ba6578698ee5a0754f93d9688d9b0530b536465a2074ec1790ab9573&",
            description: "A Weather App that helps you to know what is the actual temperature in city.",
        },
        {
            name: "Daily Time Record",
            image: "https://cdn.discordapp.com/attachments/1117026822845116478/1359922255492284647/image.png?ex=67f93dcb&is=67f7ec4b&hm=d971e360427e04aa7a463529d7a9c58d4e42724b5441ba8423e4e9e7f7a3f90a&",
            description: "This project implements an online DTR system for student records, registration management, and approval.",
        },
    ];

    return (
        <div id="projects" className="content-section">
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
              <div id="project-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image-container">
                            <img
                                className="project-image"
                                src={project.image}
                                alt={project.name}
                                onClick={() => onOpenModal(project.image)}
                            />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;