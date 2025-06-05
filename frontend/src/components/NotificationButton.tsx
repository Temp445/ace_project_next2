'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";

const NotificationButton = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShow(true);
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrolledPercent = scrollY / pageHeight;

      if (scrolledPercent > 0.3 && !shouldShow) {
        setShouldShow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldShow]);

  if (!shouldShow || isClosed) return null;

  return (
    <div className="fixed top-[50%] left-0 z-[200]">
      <div className="group flex items-center bg-blue-600 text-white py-2 px-2 rounded-e-lg shadow-lg space-x-2">
        <button
          onClick={() => setIsClosed(true)}
          className="text-white hover:text-red-300 text-lg font-bold"
          aria-label="Close notification"
        >
          <AiOutlineCloseCircle />
        </button>

        <Link
          href="#contact"
          className="bg-white text-black rounded px-3 py-1 text-sm font-semibold flex items-center gap-1"
        >
          BOOK A DEMO <FaCalendarDays className="animate-bounce" />
        </Link>

        <div className="hidden group-hover:block absolute top-full left-2 -mt-32 w-72 bg-white border shadow-2xl text-black text-xs p-2 rounded ">
         Take a quick tour of ACE Projects and discover how it can simplify your project management. Click below to book a demo now.
        </div>
      </div>
    </div>
  );
};

export default NotificationButton;
