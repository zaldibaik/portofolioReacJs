import gambar from "./img/img.png";

const Heading = () => {
  return (

    <div id="home" className="container flex justify-center min-h-screen text-center shadow-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div data-aos="zoom-in shadow-lg">
          <img
            className="w-30 h-30 rounded-full object-cover md:p-40 p-10"
            src={gambar}  
            alt="Descriptive alt text"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:pt-60">
          <div className="md:text-1xl">
            <div className="md:text-3xl font-bold mb-4 md:mb-8">Halo nama saya Zaldi</div>
            <a
              href="./Pdf/CV.pdf"
              download="CV.pdf"
              className="justify-center md:text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
