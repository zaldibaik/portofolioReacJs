import gambar from "./img/img.png";

const Heading = () => {
  return (
    <div id="home" className="flex justify-center min-h-screen text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div data-aos="fade-up">
          <img
            className="w-30 h-30 rounded-full object-cover md:p-3 p-20"
            src={gambar}
            alt="Descriptive alt text"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:pt-60 pt-10"> {/* Adjusted padding for mobile */}
          <div className="md:text-1xl">
            <div className="md:text-6xl text-center mb-4 md:mb-8">Halo nama saya Zaldi</div>
            <a
              href="./Pdf/CV.pdf"
              download="CV.pdf"
              className="md:text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
