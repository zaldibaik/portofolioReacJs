const Footer = () => {
  return (
    <section className="bg-gray-900 text-white p-10">
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="#" class="hover:underline">
              Zaldi
            </a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <a href="#home" class="hover:underline me-4 md:me-6">
                Home
              </a>
            </li> 
            <li>
              <a href="#about" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>   
            <li>
              <a href="#project" class="hover:underline me-4 md:me-6">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
