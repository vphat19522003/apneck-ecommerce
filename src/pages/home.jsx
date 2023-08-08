import { Link } from "react-router-dom";
import Hero from "../components/hero";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-md fs-6">Trade in offer!!!</span>
              <h1>Super Value Deals</h1>
              <h2>On all products</h2>
              <p className="m-1 py-1">Save more with Apneck</p>
              <Link className="button-link mb-3">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <section className="featured-products"></section>
    </>
  );
};

export default home;
