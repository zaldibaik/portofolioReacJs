const Projects = () => {
    return (
      <section id="projects" className="bg-gray-100 p-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 shadow-lg" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-2 " >Project 1</h3>
              <p className="text-gray-700">Description of project 1...</p>
            </div>
            <div className="bg-white p-5 shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-700">Description of project 2...</p>
            </div>
            <div className="bg-white p-5 shadow-lg" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-700">Description of project 3...</p>
            </div>
            <div className="bg-white p-5 shadow-lg" data-aos="fade-down">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-700">Description of project 3...</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  