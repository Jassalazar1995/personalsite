import { Link } from "react-router-dom";



export default function Nav() {

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
      <div className="flex gap-4">
        <Link to='/home' className="hover:text-gray-300">
          <div>Home</div>
        </Link>

      </div>
    </nav>
  );
}
