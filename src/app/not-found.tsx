import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-700 mb-6">
            Oops! The page you are looking for doesn't exist. It might have been
            moved or deleted.
          </p>
          <Link href="/" passHref>
            <Link
              href={"/"}
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Go to Homepage
            </Link>
          </Link>
        </div>
      </body>
    </html>
  );
}
