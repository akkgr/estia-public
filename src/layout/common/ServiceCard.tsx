import React from "react";

interface IServiceCard {
  icon?: any;
  title?: any;
  desc?: any;
  page?: any;
}

const ServiceCard: React.FC<IServiceCard> = ({
  icon,
  title,
  desc,
  page,
}) => {
  return (
    <div>
      <div className="thumbnail">
        {icon}
        <p>
          <strong>{title}</strong>
        </p>
        <p>{desc}</p>
        {page}
      </div>
    </div>
  );
};
export default ServiceCard