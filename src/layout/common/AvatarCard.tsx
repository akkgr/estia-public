import React from "react";

interface IAvatarCard {
  photo?: any;
  name?: any;
  duty?: any;
}

const AvatarCard: React.FC<IAvatarCard> = ({ photo, name, duty }) => {
  return (
    <div>
      <img src={photo} alt="Argiris Nikolaou" style={{ borderRadius: "50%" }} />
      <div className="box-skin-1 ">
        <h5>{name}</h5>
        <p>{duty}</p>
      </div>
    </div>
  );
};

export default AvatarCard;
