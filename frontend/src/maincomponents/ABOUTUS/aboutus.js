import React from "react";
import Zoomin from "../../reusablecomponents/zoomin";

const Aboutus = (props) => {
  const data = props.product;
  const content = [
    data.aboutUsContent,
    data.aboutUsContent2,
    data.aboutUsContent3,
    data.aboutUsContent4,
    data.aboutUsContent5,
  ];
  return (
    <div>
      <Zoomin heading={data.aboutUsHeading} content={content} />
    </div>
  );
};

export default Aboutus;
