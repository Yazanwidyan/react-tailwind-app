import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-6xl space-y-5 p-4 pt-0" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Top bar */}
      <div className="border-b border-gray-200 bg-white py-4">
        <div className="z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-start">
            {/* Logo */}
            <img
              onClick={() => navigate("/")}
              src="/logo-blue.svg"
              alt="Logo"
              className="h-10 w-auto cursor-pointer sm:h-8 ltr:pr-3 rtl:pl-3"
            />
          </div>
          <LanguageSwitcher defaultTheme />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
      <p className="mt-2 text-gray-700">Welcome to our website! This is the home page.</p>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => navigate("/about")}
      >
        go to about page
      </button>
    </div>
  );
};

export default Home;
