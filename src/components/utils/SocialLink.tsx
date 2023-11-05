import React, { useState } from "react";
import { Sociallink } from "../../data/data";

const SocialLink: React.FC<Sociallink> = ({ icon }) => {
 // eslint-disable-next-line
  const [currIcon, setCurrIcon] = useState(icon);
  const onClickHandler = () => {
    if (currIcon.includes("instagram") === true) {
      window.open("https://www.instagram.com/digital.vjti/");
    } else if (currIcon.includes('youtube') === true) {
      window.open("https://www.youtube.com/@digitalvjti");
    }
    else{
      window.open("https://in.linkedin.com/company/digitalvjti");
    }
  };
  return (
    <>
      {icon.includes("youtube") ||
      icon.includes("instagram") ||
      icon.includes("linkedin") ? (
        <img
          src={icon}
          alt="icon/social"
          className="w-9 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5
          transition-all duration-200 hover:scale-110"
          onClick={() => onClickHandler()}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default SocialLink;
