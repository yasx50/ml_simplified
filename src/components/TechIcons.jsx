import React from "react";
import {
  SiPython,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

const TechIcons = () => {
  return (
    <div className="flex justify-center gap-10 py-8 text-5xl">
      <SiPython />
      <SiPandas />
      <SiNumpy />
      <SiTensorflow />
      <SiScikitlearn />
    </div>
  );
};

export default TechIcons;