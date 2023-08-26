import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
const Nav = () => {
  return (
    <header className="padding-x py-10 absolute z-10 w-full ">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {navLinks.map((item) => (
            <li>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray "
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            className="md:hidden"
            src={hamburger}
            alt=""
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
