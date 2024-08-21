import gambar from "./img/img.png";

const Heading = () => {
  return (
    <div id="home" className=" flex justify-center min-h-screen text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div data-aos="fade-up">
          <img
            className="w-30 h-30 rounded-full object-cover md-3 p-20"
            src={gambar}
          />
        </div>
        <div className="flex justify-center item center md:pt-60">
          <div className="md:text-1xl">
            <div className="md:text-6xl text-center">Halo nama saya Zaldi</div>
            <a
              href="./Pdf/CV.pdf"
              download="CV.pdf"
              className="w-3 h-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
