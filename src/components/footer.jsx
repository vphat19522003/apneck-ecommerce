import { BsDiscord, BsTwitter, BsFacebook, BsSlack } from "react-icons/bs";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-5">Contact us</h3>
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
                <div className="social-icons d-flex justify-content-around">
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
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
