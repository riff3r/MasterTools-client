import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container mx-auto pt-10 pb-56">
      <h2 className="text-3xl">Name: Ruhul Amin</h2>
      <h2 className="text-xl">Email: arif4alll@gmail.com</h2>
      <br />
      <br />
      <h2 className="text-xl">Education:</h2>
      <p>MBA in Marketing (2017-2018)</p>
      <p>Shanto-Mariam University of Creative Technology</p>
      <p>Dhaka, Bangladesh</p>
      <h2 className="text-xl">Skills:</h2>
      <p>
        HTML5, CSS3, SCSS, Bootstrap, Tailwind, JavaScript, ES6, REST API,
        React, React Router, SPA
      </p>
      <br />
      <br />
      <h2 className="text-xl">Project:</h2>
      <Link to="https://todo-react-52f01.web.app/">
        https://todo-react-52f01.web.app/{" "}
      </Link>{" "}
      <br />
      <Link to="https://bookzilla-64a8e.web.app/">
        https://bookzilla-64a8e.web.app{" "}
      </Link>
      <br />
      <Link to="https://ruhul-s-consultancy.web.app/">
        https://ruhul-s-consultancy.web.app/
      </Link>
    </div>
  );
};

export default Portfolio;
