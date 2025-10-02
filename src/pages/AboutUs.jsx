import React from "react";

import LanguageSwitcher from "../components/LanguageSwitcher";

const AboutUs = () => {
  return (
    <div className="p-6">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold text-green-600">About Us</h1>
      <p className="mt-2 text-gray-700">
        This is the About Us page where you can learn more about our project.
      </p>
    </div>
  );
};

export default AboutUs;
