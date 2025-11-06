import Logo from "../assets/icon/videobelajar-icon.png";
import Profile from "../assets/icon/profile-avatar.png";

const Header = ({ type = "simple" }) => {
  const isMain = type === "main";

  return (
    <>
      <header className="flex flex-row justify-between items-center fixed inset-x-0 h-20  px-6 bg-bg-main border-b border-border-medium shadow-[0px 8px 36px rgba(0, 0, 0, 0.1)] md:px-30 md:shadow-none">
        <a href="#">
          <img src={Logo} alt="videobelajar logo" className="w-48" />
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
                src={Profile}
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
