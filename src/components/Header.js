const Header = () => {
    return (
      <header className="bg-gray-900 text-white p-5 " data-aos="fade-down">
        <div className="container mx-auto flex justify-between items-center">
          
          <nav>
            <a href="#about" className="px-3">About</a>
            <a href="#projects" className="px-3">Projects</a>
            <a href="#contact" className="px-3">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  