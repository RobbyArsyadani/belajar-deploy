import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to My Static Site
      </h1>
      <p className="text-gray-700 mt-4">
        This is a simple static website built with Next.js
      </p>
      <nav className="mt-6">
        <Link
          href="/about"
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
          About
        </Link>
      </nav>
    </div>
  );
}

// About Page
export function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600">About This Site</h1>
      <p className="text-gray-700 mt-4">
        This is a static website built using Next.js and Tailwind CSS.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
      >
        Go Back
      </Link>
    </div>
  );
}

