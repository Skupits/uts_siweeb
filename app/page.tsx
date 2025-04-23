import Link from 'next/link';

export default function TolongLandingPage() {
  return (
    <div className="min-h-screen bg-[#EDE1CD] flex items-center justify-center">
      <div className="w-full max-w-3xl text-center relative overflow-hidden bg-[#164A24] rounded-xl">
        <div className="absolute w-full h-full top-0 left-0">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <path
              d="M0,300 C150,200 650,200 800,300 L800,400 L0,400 Z"
              fill="#97AE84"
            />
            <path
              d="M0,350 C200,250 600,250 800,350 L800,400 L0,400 Z"
              fill="#EDE1CD"
            />
          </svg>
        </div>

        <div className="relative z-10 py-16 px-6">
          <h1 className="text-4xl font-bold text-white mb-6 font-[cursive]">To1Ong</h1>

          <div className="w-40 h-40 mx-auto rounded-full bg-[#EDE1CD] flex items-center justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="Cat Icon"
              className="w-24 h-24"
            />
          </div>

          <div className="flex justify-center gap-6">
            <Link href="/Auth/Login">
            <button className="bg-[#164A24] text-white border border-white px-6 py-2 rounded-full hover:bg-green-800 transition">
              Sign In
            </button>
            </Link>
            <Link href="/Auth/Register">
            <button className="bg-[#164A24] text-white border border-white px-6 py-2 rounded-full hover:bg-green-800 transition">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
