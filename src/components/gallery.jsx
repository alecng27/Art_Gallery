import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Art Gallery</h2>
          <p>
            This is an art gallery created using ReactJS by Alec Nguyen for CMSC 150.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>

        <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Alec Nguyen.{" "}
            <a href="https://github.com/alecng27/Art_Gallery" rel="nofollow">
              GitHub
            </a>
          </p>
        </div>
      </div>

      </div>
    </div>
  );
};
