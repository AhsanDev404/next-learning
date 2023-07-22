"use client"
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Header() {
    const user = useSelector((state) => state.user.user);   
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <a href="https://github.com/AhsanDev404" className="text-white font-bold text-2xl flex gap-1 cursor-pointer"> AhsanDev404 <FaGithub size={"35"} /></a>
        <div>
          {user && <button
            className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
            // Replace this with your login functionality, e.g., open a login modal
          >
            Logout
          </button>}
        </div>
      </div>
    </header>
  );
}
