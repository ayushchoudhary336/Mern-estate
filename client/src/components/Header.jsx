import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Ayush</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg shadow-md flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none  w-24 sm:w-64 md:w-96 lg:w-96 xl:w-96 text-slate-700"
          />
          <FaSearch className="text-slate-700 cursor-pointer" />
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className=" sm:inline text-slate-700 hover:underline">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
