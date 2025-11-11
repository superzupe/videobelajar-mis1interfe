import { useState } from "react";
import { flagID, flagKR, flagTH, flagUS, googleLogo } from "../assets";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {HiChevronDown } from "react-icons/hi";

const InputField = ({ id, type, required = false, label }) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-start gap-3 md:gap-4">
      <label
        htmlFor={id}
        className="text-sm font-normal text-text-base md:text-base"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete={id}
        required={required}
        className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
      />
    </div>
  );
};

const PhoneField = () => {
  const [countryCode, setCountryCode] = useState("+62");
  const [value, setValue] = useState("");

  const countries = [
    { code: "+62", label: "Indonesia", flag: flagID },
    { code: "+82", label: "Korea", flag: flagKR },
    { code: "+66", label: "Thailand", flag: flagTH },
    { code: "+1", label: "USA", flag: flagUS },
  ];

  const CountryDropdown = ({ selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (code) => {
      onSelect(code);
      setIsOpen(false);
    };

    const current = countries.find((c) => c.code === selected);
    return (
      <>
        <div className="relative flex flex-row w-full max-w-36 cursor-pointer rounded-md">
          <div className="relative flex justify-center items-center bg-gray-100 border border-border-medium px-5 py-4 rounded-tl-md rounded-bl-md">
            <img
              src={current.flag}
              alt={current.label}
              className="absolute z-10 w-5"
            />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-row justify-between w-full p-2 text-sm text-text-main border border-border-light rounded-br-md rounded-tr-md md:text-base hover:ring-2 hover:ring-border-medium"
          >
            <span>{current.code}</span>
            <span className="flex justify-center items-center">
              <HiChevronDown className="text-gray-400 text-xl" />
            </span>
          </button>

          {isOpen && (
            <ul className="absolute z-10 flex flex-col justify-center w-full bg-bg-main border-2 border-border-medium rounded-md">
              {countries.map((c) => {
                return (
                  <li
                    key={c.code}
                    data-value={c.code}
                    onClick={() => handleSelect(c.code)}
                    className="flex flex-row justify-start w-full gap-2 px-4 py-2 text-sm text-text-main border border-border-light cursor-pointer md:text-base hover:ring-2 hover:ring-border-medium"
                  >
                    <img src={c.flag} alt={c.label} className="w-5" />
                    <span>{c.label}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col w-full items-start gap-3 md:gap-4">
        <label
          htmlFor="tel"
          className="text-sm font-normal text-text-base md:text-base"
        >
          No. Hp
          <span className="text-red-500"> *</span>
        </label>
        <div className="flex flex-row gap-3 w-full justify-center items-center">
          <CountryDropdown
            selected={countryCode}
            onSelect={(code) => setCountryCode(code)}
          />
          <input
            type="tel"
            id="tel"
            name="tel"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="tel-country-code"
            required
            className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
          />
        </div>
      </div>
    </>
  );
};

const PasswordField = ({ id, label, type }) => {
  const isLogin = type === "login";
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showPassword = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="flex flex-col items-start gap-3 md:gap-4">
        <label
          htmlFor={id}
          className="text-sm font-normal text-text-base md:text-base"
        >
          {label} <span className="text-red-500"> *</span>
        </label>
        <div className="relative w-full">
          {visible && (
            <input
              type="text"
              id={id}
              name={id}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={
                type === isLogin ? "current-password" : "new-password"
              }
              required
              className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
            />
          )}
          {!visible && (
            <input
              type="password"
              id={id}
              name={id}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={
                type === isLogin ? "current-password" : "new-password"
              }
              required
              className=" w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
            />
          )}
          <button
            type="button"
            onClick={showPassword}
            className="absolute z-10 right-4 translate-y-1/2"
          >
            {visible ? (
              <FaEye className="text-gray-400 text-xl" />
            ) : (
              <FaEyeSlash className="text-gray-400 text-xl" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

//TINGGAL ATUR SWITCH PERHALAMANNYA, BELAJAR ROUTES PATH, HASH DLL
const AuthButton = ({ type }) => {
  const classBase =
    "px-0 py-2 font-bold text-sm border-none rounded-lg cursor-pointer md:px-0 md:py-2.5 md:text-base";

  const variant = {
    primary: "bg-btn-primary text-text-inverse hover:bg-btn-primary-hover",
    secondary: "bg-btn-accent text-btn-primary hover:bg-btn-accent-hover",
  };

  const isLogin = type === "login";
  return (
    <>
      <button type="submit" className={`${classBase} ${variant.primary}`}>
        {isLogin ? "Masuk" : "Daftar"}
      </button>
      <button type="button" className={`${classBase} ${variant.secondary}`}>
        {isLogin ? "Daftar" : "Masuk"}
      </button>
    </>
  );
};

const AuthForm = ({ type }) => {
  const isLogin = type === "login";
  return (
    <>
      <section className="flex justify-center items-center px-5 py-7 mt-18 md:px-30 md:py-16">
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
            <div className="flex flex-col w-full min-w-70 gap-6 md:min-w-129">
              {!isLogin && (
                <InputField
                  id="name"
                  type="text"
                  required={true}
                  label="Nama Lengkap"
                />
              )}
              <InputField
                id="email"
                type="email"
                required={true}
                label="E-mail"
              />
              {isLogin && (
                <PasswordField
                  id="password"
                  label="Masukkan Sandi"
                  type="login"
                />
              )}

              {!isLogin && (
                <>
                  <PhoneField />
                  <PasswordField
                    id="password"
                    label="Masukkan Sandi"
                    type="register"
                  />
                  <PasswordField
                    id="confirmPassword"
                    label="Konfirmasi Sandi"
                    type="register"
                  />
                </>
              )}

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
              {isLogin && <AuthButton type="login"/>}
              {!isLogin && <AuthButton type="register"/>}
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
              <img src={googleLogo} alt="Google Icon" />
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
