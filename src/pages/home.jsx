import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeatureProducts from "../components/featuredProducts";
import Newarrivals from "../components/newarrivals";
import banner from "../assets/images/banner/b17.jpg";
import banner1 from "../assets/images/banner/b10.jpg";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="back-details">
                      <p className="mb-3">Trade in offer</p>
                      <h1>Super Value Deals</h1>
                      <h2>On all products</h2>

                      <p className="mb-3">Save more today with Apneck</p>

                      <Link
                        to="/shop"
                        className="btn btn-primary"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>All Weather Modern Designs</p>
            </div>
            <FeatureProducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="repair-details text-center align-items-center">
              <h5 className="mb-3 text-white">Repair Services</h5>
              <h2 className="mb-3 text-white">
                On 70% Off on All Products And Accessories
              </h2>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
            <Newarrivals />
          </div>
        </div>
      </section>

      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={banner}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hot Deals</h5>
                      <h2 className="card-text mb-2">Buy One get One free.</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          The latest best collection in our closet <br />
                          Feel Cute with our outfits
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={banner1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Season-In</h5>
                      <h2 className="card-text mb-2">All Weather Attire</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          It never matter which season it is <br />
                          We got you covered
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
