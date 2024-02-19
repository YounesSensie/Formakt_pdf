"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
     // Define state to track the window width
     const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Update windowWidth state on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Initial width
    window.addEventListener('resize', handleResize); // Event listener for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup function
  }, []);
  return (
    <nav className={`bg-gray-800 py-4 ${windowWidth !== null && windowWidth <= 768 ? 'hidden' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className='flex items-center justify-center'>
            <div className="text-white text-xl font-semibold"> Formakt_PDF</div>
          </Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className='flex items-center justify-center'>
              <div className="text-white hover:text-gray-300">Home</div>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/formaktBac" className='flex items-center justify-center'>
              <div className="text-white hover:text-gray-300">About</div>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/formaktBac" className='flex items-center justify-center'>
              <div className="text-white hover:text-gray-300">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;