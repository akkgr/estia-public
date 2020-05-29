import React from "react";
import logo from "../../layout/photos/city_services_logo.png";

export const MainAbout = () => {
  return (
    <div>
      <div className="container-fluid well-xs well-sm-inset-1 mmedia">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={logo}
              alt="City Services Logo"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-sm-6">
            <br />
            <div className="iframeContainerHome ">
              <iframe
                style={{ width: "600", height: "400" }}
                title="yt"
                src="https://www.youtube.com/embed/2vaMo1BOWsc?loop=1&playlist=2vaMo1BOWsc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
