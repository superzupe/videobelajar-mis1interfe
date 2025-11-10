import { videobelajarLogo } from "../assets";
import { profileAvatar } from "../assets";

const Header = ({ type = "simple" }) => {
  const isMain = type === "main";

  return (
    <>
      <header className=" fixed top-0 left-0 flex flex-row justify-between items-center w-full h-20 px-6 bg-bg-main border-b border-border-medium shadow-lg md:px-30 md:shadow-none">
        <a href="#">
          <img
            src={videobelajarLogo}
            alt="videobelajar logo"
            className="w-48"
          />
        </a>

        {isMain && (
          <nav>
            <a href="#">
              <i class="fa-solid fa-bars"></i>
            </a>
            <a href="#" class="text-base nav-link">
              Kategori
            </a>
            <a href="#">
              <img
                src={profileAvatar}
                alt="profile-avatar"
                class="nav-avatar"
              />
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
