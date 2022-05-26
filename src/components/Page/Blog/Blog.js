import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="my-5">
        <div className="my-5">
          <h2 className="text-3xl mb-4">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            Keeping component state local where necessary. <br />
            <br />
            Memoizing React components to prevent unnecessary re-renders. <br />
            <br />
            Code-splitting in React using dynamic import() <br />
            <br />
            Windowing or list virtualization in React. <br />
            <br />
            Lazy loading images in React.
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl mb-4">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are four main types of state need to properly manage React
            apps: <br />
            <br />
            Local state <br />
            <br />
            Global state <br />
            <br />
            Server state <br />
            <br />
            URL state
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl mb-4">
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl mb-4">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </h2>
          <p>
            Because setProduct is the function to change the state. It's the
            appropriate way. In this way react will know where and when changes
            occers
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl mb-4">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing ensures that all code meets quality standards before
            it's deployed. This ensures a reliable engineering environment where
            quality is paramount. Over the course of the product development
            life cycle, unit testing saves time and money, and helps developers
            write better code, more efficiently
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
