"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const SigninButtons = () => {
  return (
    <>
      <button
        className="bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 px-4 rounded-lg flex items-center space-x-2 shadow-sm transition"
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
      >
        <Image
          src={"/g-logo.svg"}
          alt={"Google Logo"}
          height={20}
          width={20}
          className="mr-2"
        />
        Sign in with Google
      </button>

      <button
        className=" bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-sm transition"
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000/" })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {/* Replace this with the actual GitHub logo SVG */}
          <path
            fillRule="evenodd"
            d="M10 0.228c-5.171 0-9.366 4.195-9.366 9.366 0 4.15 2.689 7.665 6.433 8.923 0.471 0.087 0.643-0.205 0.643-0.453 0-0.224-0.008-0.813-0.012-1.594-2.629 0.572-3.183-1.271-3.183-1.271-0.43-1.089-1.051-1.378-1.051-1.378-0.861-0.588 0.065-0.576 0.065-0.576 0.952 0.067 1.451 0.978 1.451 0.978 0.845 1.448 2.215 1.03 2.751 0.787 0.085-0.613 0.33-1.03 0.601-1.267-2.104-0.24-4.319-1.052-4.319-4.689 0-1.036 0.369-1.883 0.978-2.548-0.093-0.237-0.424-1.204 0.092-2.51 0 0 0.794-0.255 2.6 0.974 0.756-0.211 1.561-0.316 2.366-0.32 0.805 0.004 1.61 0.109 2.366 0.32 1.806-1.229 2.6-0.974 2.6-0.974 0.516 1.306 0.187 2.273 0.092 2.51 0.606 0.665 0.978 1.512 0.978 2.548 0 3.645-2.218 4.447-4.326 4.683 0.341 0.292 0.643 0.87 0.643 1.754 0 1.266-0.012 2.288-0.012 2.598 0 0.251 0.171 0.544 0.649 0.452 3.743-1.258 6.431-4.773 6.431-8.923 0-5.171-4.195-9.366-9.366-9.366z"
          />
        </svg>
        Sign in with GitHub
      </button>
    </>
  );
};

export default SigninButtons;
