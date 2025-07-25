import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-red-700 px-4 py-2">
      <div className="relative flex items-center justify-between text-red-700 silkscreen-regular h-14">

        {/* Left: Logo */}
        <a href="/" className="flex-shrink-0">
          <div className="h-10 w-20 bg-red-700"></div>
        </a>

        {/* Center: Title (absolute for centering) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl text-center">
          ml simplified
        </div>

        {/* Right: Profile Icon */}
        <div className="flex-shrink-0">
          <a href="/profile">
            <svg width="28" height="28" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 22.7472C14.8476 22.7472 9.84241 17.742 9.84241 11.5896C9.84241 5.4372 14.8476 0.433201 21 0.433201C27.1524 0.433201 32.1576 5.4384 32.1576 11.5908C32.1576 17.7432 27.1524 22.7472 21 22.7472ZM21 1.4928C15.4332 1.4928 10.9032 6.0228 10.9032 11.5896C10.9032 17.1564 15.4332 21.6864 21 21.6864C26.5668 21.6864 31.0968 17.1564 31.0968 11.5896C31.0968 6.0228 26.5668 1.4928 21 1.4928ZM41.1936 41.5668H0.806406C0.736664 41.5671 0.66755 41.5536 0.603056 41.5271C0.538561 41.5005 0.479964 41.4615 0.430648 41.4122C0.381333 41.3628 0.342276 41.3042 0.315733 41.2398C0.289191 41.1753 0.275689 41.1061 0.276006 41.0364V34.188C0.759606 25.4892 8.59681 24.9648 8.67601 24.96L33.2916 24.9588C33.3996 24.9636 41.2392 25.4892 41.7216 34.158L41.7228 41.0364C41.7231 41.106 41.7097 41.1751 41.6832 41.2395C41.6567 41.3039 41.6178 41.3624 41.5686 41.4117C41.5194 41.461 41.4609 41.5001 41.3966 41.5267C41.3322 41.5533 41.2632 41.567 41.1936 41.5668ZM1.33681 40.5072H40.6632V34.188C40.2336 26.4864 33.5484 26.034 33.264 26.0184L8.70601 26.0196C8.45161 26.0352 1.76641 26.5116 1.33681 34.2168V40.5072Z" fill="#008000" />
            </svg>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
