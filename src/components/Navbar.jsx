import { Link } from "react-router-dom";
import SlideInModal from "./SlideInModal";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <Link to="/" className="text-xl font-bold tracking-wide">
        Standup-Helper
      </Link>

      <div className="space-x-4">
        <SlideInModal />
      </div>
    </nav>
  );
};

export default Navbar;
