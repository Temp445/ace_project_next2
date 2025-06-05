'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const NotificationButton = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShow(true);
    }, 40 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrolledPercent = scrollY / pageHeight;

      if (scrolledPercent > 0.3) {
        if (!shouldShow) {
          setShouldShow(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldShow]);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (!shouldShow || isClosed) return null;

  return (
    <div className="fixed top-80 left-0 bg-blue-600 text-white px-2 md:px- py-2 rounded-e-lg shadow-lg flex items-center md:space-x-2 z-[200]">
 
      <button
        onClick={handleClose}
        className="ml-2 text-white hover:text-red-300 text-lg font-bold"
        aria-label="Close notification"
      >
        <AiOutlineCloseCircle />
      </button>
           <Link href="#contact" className="text-sm">
        BOOK A DEMO
      </Link>
    </div>
  );
};

export default NotificationButton;
