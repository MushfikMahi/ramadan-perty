import { FaArrowRight, FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";



const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">Ramadan Perty</Link>
        </div>
        <div className="">
          <Link to={"/about"}>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <p>About me</p>
              <FaArrowRight />
            </div>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Mushfikus Salehin Mahi" src="https://i.ibb.co/fx4tJcM/Whats-App-Image-2024-03-20-at-19-02-54-a462226b.jpg" />
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>

      {/* footer */}
      <footer className="p-4 bg-neutral text-neutral-content">
        <div className="flex justify-between items-center">
          <aside className="">
            <p>Copyright © 2024 Mushfikus Salehin Mahi - All rights reserved.</p>
          </aside>
          <nav className="grid grid-cols-2 md:grid-cols-4 items-center gap-5 pr-3 text-4xl">
            <a href="https://www.facebook.com/mushfik.mahi.52/"><FaSquareFacebook /></a>
            <a href="https://wa.me/8801408000789"><FaSquareWhatsapp /></a>
            <a href="https://github.com/MushfikMahi"><FaSquareGithub /></a>
            <a href="https://www.instagram.com/mushfik_mahi_/"><FaInstagramSquare /></a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Header;