const Header = () => {
  return (
    <header
      className="bg-gray-900 text-white p-5 sticky top-0 z-50"
      data-aos="fade-down"
    >
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-4">
          <a href="#about" className="flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.50186 21.1155C2.50186 21.3278 2.67904 21.5 2.89761 21.5L21.1012 21.5C21.3197 21.5 21.4969 21.3279 21.4969 21.1157V20.6565C21.506 20.5182 21.5245 19.8277 21.0694 19.0644C20.7824 18.5831 20.3659 18.1673 19.8314 17.8286C19.1848 17.4189 18.3623 17.122 17.3674 16.9432C17.36 16.9423 16.6223 16.8445 15.8666 16.6515C14.5505 16.3153 14.4355 16.0178 14.4347 16.0149C14.427 15.9855 14.4158 15.9573 14.4014 15.9307C14.3907 15.8752 14.3641 15.6664 14.4149 15.1068C14.544 13.6855 15.3064 12.8455 15.919 12.1706C16.1122 11.9577 16.2947 11.7567 16.4352 11.5595C17.0414 10.709 17.0976 9.74195 17.1002 9.682C17.1002 9.56055 17.0862 9.4607 17.0564 9.36815C16.9969 9.18295 16.8849 9.06755 16.8032 8.9833L16.8026 8.9827C16.782 8.9615 16.7626 8.9414 16.7467 8.92295C16.7406 8.9159 16.7245 8.89725 16.7392 8.8015C16.793 8.44905 16.8253 8.15395 16.8408 7.8728C16.8684 7.3719 16.8899 6.6228 16.7607 5.89375C16.7448 5.76925 16.7174 5.63775 16.6747 5.4811C16.5382 4.97907 16.3189 4.54985 16.0142 4.19562C15.9618 4.13861 14.6878 2.7964 10.9894 2.521C10.478 2.48293 9.97245 2.50344 9.4748 2.52887C9.35485 2.5348 9.1906 2.54294 9.0369 2.58277C8.65505 2.68168 8.55315 2.92371 8.5264 3.05917C8.48205 3.28354 8.56 3.45807 8.61155 3.57359C8.61905 3.59033 8.6283 3.61106 8.61215 3.66498C8.5263 3.79794 8.39125 3.9178 8.25355 4.03136C8.21375 4.06519 7.28635 4.86484 7.23535 5.90945C7.09785 6.7039 7.10825 7.9417 7.27085 8.7972C7.2803 8.84445 7.29425 8.9144 7.2716 8.96165C7.09675 9.11835 6.89855 9.29595 6.89905 9.7012C6.90115 9.74195 6.9574 10.709 7.5636 11.5595C7.704 11.7565 7.8863 11.9574 8.07935 12.1701L8.0798 12.1706C8.6924 12.8455 9.45475 13.6855 9.5839 15.1067C9.6347 15.6663 9.6081 15.8752 9.59735 15.9307C9.583 15.9572 9.5718 15.9855 9.5641 16.0149C9.5633 16.0178 9.4487 16.3143 8.1386 16.6498C7.3828 16.8433 6.63875 16.9422 6.61655 16.9454C5.6497 17.1086 4.83219 17.3981 4.18676 17.8057C3.65407 18.1422 3.23677 18.5587 2.94645 19.0438C2.48259 19.8189 2.49513 20.5248 2.50186 20.6537V21.1155Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            About
          </a>
          <a href="#projects" className="flex items-center px-3">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            Projects
          </a>
          <a href="#contact" className="flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 18V22H20V2H4V6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 15H5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12H5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 9H5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 10.5C13.1046 10.5 14 9.60457 14 8.5C14 7.39543 13.1046 6.5 12 6.5C10.8954 6.5 10 7.39543 10 8.5C10 9.60457 10.8954 10.5 12 10.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 17.5C16 15.2908 14.2092 13.5 12 13.5C9.79085 13.5 8 15.2908 8 17.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;