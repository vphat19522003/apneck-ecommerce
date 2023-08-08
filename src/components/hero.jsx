import icon1 from "../assets/images/icons/icon1.png";
import icon2 from "../assets/images/icons/icon2.png";
import icon3 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";

const hero = () => {
  return (
    <>
      <section className="hero p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-details d-flex justify-content-around text-center">
              <div className="card px-4 py-1">
                <img src={icon1} alt="Fast Orders" />
                <p>Fast Orders</p>
              </div>
              <div className="card px-4 py-1">
                <img src={icon2} alt="Quick Shipping" />
                <p>Quick Shipping</p>
              </div>
              <div className="card px-4 py-1">
                <img src={icon3} alt="High Saves" />
                <p>High Saves</p>
              </div>
              <div className="card px-4 py-1">
                <img src={icon4} alt="24/7 Support" />
                <p>24/7 Support</p>
              </div>
              <div className="card px-4 py-1">
                <img src={icon5} alt="Online Orders" />
                <p>Online Orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
