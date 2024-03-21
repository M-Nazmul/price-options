import { useState } from "react";
import Link from "../Link/Link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' }
  ];
    return (
        <nav className="py-2">
          <div className="mt-3 md:hidden text-3xl cursor-pointer " onClick={() => setOpen(!open)}>
            {
              open == true ? 
              <MdOutlineRestaurantMenu /> : <RxHamburgerMenu />
            }
          </div>
            <ul className= {`md:flex md:gap-4 my-4 ease-in duration-300 absolute md:static z-10  bg-gray-700 rounded-xl justify-center items-center px-8 md:px-0 max-w-3xl mx-auto 
            ${open ? "left-16 top-[50px]" : "-left-52"}`}>
              {
                routes.map(route => <Link key={route.id} route = {route}></Link>)
              }              
            </ul>
        </nav>
    );
};

export default NavBar;