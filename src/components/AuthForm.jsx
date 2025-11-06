import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from "../assets/icon/google-icon.svg"

const AuthForm = ({ type }) => {
  const isLogin = type === "login";
//TINGGAL SET TAILWIND NYA, BENTAR YA
//INI MASIH BISA DIPECAH JADI BBRAPA KOMPONEN LAGI, LALU MENGGUNAKAN PROPS SEBAGAI VALIDASI, TAPI BENTAR YA
  return (
    <>
      <section className="flex justify-center items-center min-h-screen px-5 py-7 md:px-30 md:py-16">
        <div className="flex flex-col justify-center items-center text-center w-full max-w-80 p-5 gap-5 bg-bg-main border border-border-light rounded-sm md:max-w-148 md:p-9 md:gap-9">
          <div className="flex flex-col gap-2">
            <h3 className="font-poppins text-2xl font-semibold text-text-main md:text-3xl">
              {isLogin ? "Masuk ke Akun" : "Pendaftaran Akun"}
            </h3>
            <p className="text-sm font-normal text-text-base md:text-base">
              {isLogin
                ? "Yuk, lanjutin belajarmu di videobelajar."
                : "Yuk, daftarkan akunmu sekarang juga!"}
            </p>
          </div>

          <form className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col w-70 gap-6 md:w-129">
              {!isLogin && (
                <div className="flex flex-col items-start gap-3 md:gap-4">
                  <label
                    for="nama"
                    className="text-sm font-normal text-text-base md:text-base"
                  >
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    autocomplete="name"
                    required
                    className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
                  />
                </div>
              )}

              <div className="flex flex-col items-start gap-3 md:gap-4">
                <label
                  for="email"
                  className="text-sm font-normal text-text-base md:text-base"
                >
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autocomplete="email"
                  required
                  className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
                />
              </div>

              {/* {!isLogin && (
                <div className="flex flex-col items-start gap-3 md:gap-4">
                  <label for="phone"  className="text-sm font-normal text-text-base md:text-base">
                    No. Hp <span className="text-red-500">*</span>
                  </label>
                  <div class="form-phone">
                    <select id="countryCode"className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium phone">
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autocomplete="tel-country-code"
                      required
                      class="form-input"
                    />
                  </div>
                </div>
              )} */}

              <div className="flex flex-col items-start gap-3 md:gap-4">
                <label
                  for="sandi"
                  className="text-sm font-normal text-text-base md:text-base"
                >
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div class="password-input">
                  <input
                    type="password"
                    id="sandi"
                    name="sandi"
                    autocomplete="current-password"
                    required
                    className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
                  />
                  <button></button>
                </div>
              </div>

              {/* {!isLogin && (<div className="flex flex-col items-start gap-3 md:gap-4">
                <label for="confirm"  className="text-sm font-normal text-text-base md:text-base">
                  Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div class="password-input">
                  <input
                    type="password"
                    id="confirm"
                    name="confirm"
                    autocomplete="current-password"
                    required
                   className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
                  />
                  <button>
                    <i class="fa-solid fa-eye-slash"></i>
                  </button>
                </div>
              </div>)} */}

              <div className="text-end">
                <a
                  href="#"
                  className="text-sm font-semibold text-text-gray hover:text-text-base md:text-base "
                >
                  Lupa password?
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-70 min-h-25 gap-4 md:max-w-129">
              <button
                type="submit"
                className="px-0 py-2 font-bold text-sm border-none rounded-lg cursor-pointer md:px-0 md:py-2.5 md:text-base bg-btn-primary text-text-inverse hover:bg-btn-primary-hover"
              >
                {isLogin ? "Masuk" : "Daftar"}
              </button>
              <a
                href="#"
                className="px-0 py-2 font-bold text-sm border-none rounded-lg cursor-pointer md:px-0 md:py-2.5 md:text-base bg-btn-accent text-btn-primary hover:bg-btn-accent-hover"
              >
                {isLogin ? "Daftar" : "Masuk"}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex-1 h-px bg-border-light "></div>
              <span className="text-sm font-normal text-text-base">atau</span>
              <div className="flex-1 h-px bg-border-light"></div>
            </div>

            <button
              type="button"
              className="flex flex-row justify-center items-center w-full max-w-70 px-0 py-2 gap-2 bg-bg-main border border-border-light rounded-lg cursor-pointer hover:border-border-medium md:max-w-129 md:py-2.5"
            >
              <img src={GoogleLogo} alt="google-icon" />
              <span className="text-sm font-bold text-text-gray md:text-base ">
                Masuk dengan Google
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AuthForm;
