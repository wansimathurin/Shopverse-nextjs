import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-black/30 backdrop-blur-lg">
      <div className="relative p-10 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 max-w-md text-center">
        
        {/* Glow effect behind the card */}
        <div className="absolute inset-0 -z-10 bg-amber-500/30 blur-3xl rounded-3xl"></div>

        <h1 className="text-8xl font-extrabold text-amber-500 drop-shadow-md">
          404
        </h1>
        
        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-white/70">
          Oops! The page you are looking for doesnt exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;