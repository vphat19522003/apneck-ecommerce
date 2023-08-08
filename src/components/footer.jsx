import { BsDiscord, BsTwitter, BsFacebook, BsSlack } from "react-icons/bs";
import { Link } from "react-router-dom";
import appstore from "../assets/images/pay/app.jpg";
import chplay from "../assets/images/pay/play.jpg";
import pay from "../assets/images/pay/pay.png";

const footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-4">Contact us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> Thika town, Naltex building, 2nd floor
                </p>
                <p className="mb-3">
                  <b>Phone:</b>{" "}
                  <a href="tel:+2457865438">Call us +2457865438</a>
                </p>
                <p className="mb-5">
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>
                <p className="mb-3">
                  <b>Follow the developer</b>
                </p>
                <div className="mb-3 social-icons d-flex justify-content-around">
                  <Link>
                    <BsDiscord className="fs-4" />
                  </Link>
                  <Link>
                    <BsTwitter className="fs-4" />
                  </Link>
                  <Link>
                    <BsFacebook className="fs-4" />
                  </Link>
                  <Link>
                    <BsSlack className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Terms & Conditions</Link>
                <Link className="mb-3">Fee Policy</Link>
              </div>
            </div>
            <div className="col-2">
              <h3 className="mb-4">Account</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3">View Cart</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3">Payments</Link>
                <Link className="mb-3">My Wishlist</Link>
                <Link className="mb-3">Coupons</Link>
              </div>
            </div>
            <div className="col-4">
              <h3 className="mb-3">Install App</h3>
              <div className="footer-details">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay">
                  <Link>
                    <img
                      src={chplay}
                      alt="Google Play"
                      className="img-fluid p-2"
                    />
                  </Link>
                  <Link>
                    <img
                      src={appstore}
                      alt="App Store"
                      className="img-fluid p-2 "
                    />
                  </Link>
                </div>
                <p className="mb-2">Payment Methods</p>
                <Link className="pay">
                  <img src={pay} alt="pay" className="img-fluid p-2" />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">
                &copy;Developed by Eclar Developers 2023
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-inline text-center text-md-end">
                <li className="list-inline-item">
                  <Link to="#" className="text-dark">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-dark">
                    Terms of Use
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-dark">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
