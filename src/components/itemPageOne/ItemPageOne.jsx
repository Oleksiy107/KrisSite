import React from "react";
import TeamPhoto from "../../../static/team1.jpeg";
function pageOne() {
  return (
    <div>
      <div className="block-info-pageOne">
        <h2 className="block-info-pageOne__title">Lorem</h2>
        <p className="block-info-pageOne__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          voluptate animi possimus exercitationem amet!
        </p>
        <img src={TeamPhoto} alt="" />
        <p className="block-info-pageOne__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          voluptate animi possimus exercitationem amet! Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Ipsam voluptate animi possimus
        </p>
      </div>
    </div>
  );
}
export default pageOne;
