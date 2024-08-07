import React from "react";
import { Link } from "react-scroll";
export default function SaleTop() {
  return (
    <div className="gradient">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        className="sales"
      >
        <div
          style={{
            marginTop: "20px",
            width: "20%",
          }}
        >
          <p
            style={{
              fontWeight: "lighter",
              textTransform: "uppercase",
            }}
          >
            Leverage Forex Trading
          </p>
          <h1
            style={{
              fontSize: "2.5rem",
            }}
          >
            Boost returns through{" "}
            <span className="blueWord">forex AI trading</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "lighter",
              textAlign: "left",
              lineHeight: "1.5em",
            }}
          >
            Leveraging cutting-edge AI technology, our proprietary algorithmic
            model delivers consistently positive and steady returns for our
            clients
          </p>
          <br />
          <br />
          <br />
          <div>
            <Link
              id="getInTouch"
              to="get-in-touch"
              smooth={true}
              duration={500}
            >
              Get in touch
            </Link>
            <Link
              style={{
                marginLeft: "40px",
                padding: "10px 20px",
                cursor: "pointer",
              }}
              to="howItWorks"
              smooth={true}
              duration={500}
            >
              How it works
            </Link>
          </div>
        </div>

        <div>
          <div>
            <img src="https://via.placeholder.com/579x739" alt="" />
          </div>
          <div>
            <h1>56%</h1>
            <p>Increase in returns since 9. June 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
