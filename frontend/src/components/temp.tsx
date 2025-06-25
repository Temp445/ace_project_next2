export default function ZoomBoxes() {

  return (
    <>
      <style>{`
        @keyframes zoomLoop {
          0%, 66.67%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          16.67%, 50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
          }
        }


        .animate-zoom-loop {
          animation: zoomLoop 3s infinite;
        }



        .delay-0 { animation-delay: 0s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-12 font-sans">

        {/* Box Container */}
        <div className="flex gap-8 items-center">
          {/* Box 1 */}
          <div className="w-30 h-30 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl bg-gradient-to-br from-red-400 to-red-600 delay-0 animate-zoom-loop">
            Box 1
          </div>

          {/* Box 2 */}
          <div className="w-30 h-30 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl bg-gradient-to-br from-teal-400 to-cyan-600 delay-1000 animate-zoom-loop">
            Box 2
          </div>

          {/* Box 3 */}
          <div className="w-30 h-30 rounded-2xl flex items-center justify-center text-gray-800 font-bold text-lg shadow-2xl bg-gradient-to-br from-pink-200 to-purple-300 delay-2000 animate-zoom-loop">
            Box 3
          </div>
        </div>
      </div>
    </>
  );
}