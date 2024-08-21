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
        <div className="flex justify-center item center text-center md:pt-60">
          <div className="md:text-6xl h1">
            <a
              href="./Pdf/CV.pdf"
              download="CV.pdf"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
              Download CV
            </a>
            <div className="mt-5">halo nama saya Zaldi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
