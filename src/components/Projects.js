import gambar from "./img/img.png";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Projects Designer Grafish
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white p-5 shadow-lg rounded-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2 ">Project 1</h3>
            <img className="w-full object-cover rounded-lg" src={gambar} />
            <p className="text-gray-700">Description of project 1...</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
              View
            </button>
          </div>
          <div
            className="bg-white p-5 shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <img className="w-full object-cover rounded-lg" src={gambar} />
            <p className="text-gray-700">Description of project 2...</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
              View
            </button>
          </div>
          <div
            className="bg-white p-5 shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <img className="w-full object-cover rounded-lg" src={gambar} />
            <p className="text-gray-700">Description of project 3...</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-5">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Projects webdevelopment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white p-5 shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2 ">Project 1</h3>
            <img className="w-full object-cover rounded-lg" src={gambar} />
            <p className="text-gray-700">Description of project 1...</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
              View
            </button>
          </div>
          <div
            className="bg-white p-5 shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <img className="w-full object-cover rounded-lg" src={gambar} />
            <p className="text-gray-700">Description of project 2...</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
              View
            </button>
          </div>
          <div
            className="bg-white p-5 shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <img className="w-full object-cover rounded-lg" src={gambar} />
            <p className="text-gray-700">Description of project 3...</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
              View
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
