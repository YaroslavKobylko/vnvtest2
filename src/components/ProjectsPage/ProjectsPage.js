import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectsPage.css';

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      type: 'youtube', 
      source: 'https://www.youtube.com/embed/S9bCLPwzSC0?si=C4Ozr-gCl3-QysOf',
      title: 'Проект 1',
    },
    {
      id: 2,
      type: 'youtube',
      source: 'https://www.youtube.com/embed/YVkUvmDQ3HY?si=SCsbKAUVBX2vIGZ2',
      title: 'Проект 2',
    },
    {
      id: 3,
      type: 'youtube',
      source: 'https://www.youtube.com/embed/_Yhyp-_hX2s?si=gaIxSHOB7XJOoHVy',
      title: 'Проект 3',
    },
  ];

  return (
    <div className="projects-page">
      <Carousel
        autoPlay
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        {projects.map((project) => (
          <div key={project.id}>
            {project.type === 'image' ? (
              <img src={project.source} alt={project.title} />
            ) : project.type === 'video' ? (
              <video controls>
                <source src={project.source} type="video/mp4" />
                Ваш браузер не підтримує відео.
              </video>
            ) : project.type === 'youtube' ? (
              <iframe
                title={project.title}
                width="560"
                height="595"
                src={project.source}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : null}
            <p className="legend">{project.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProjectsPage;