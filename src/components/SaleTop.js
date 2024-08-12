import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./SaleTop.css";
export default function SaleTop() {
  const [loading, setLoading] = useState(false);
  const [percentIncrease, setPercentIncrease] = useState(52);
  return (
    <div className="gradient">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "5em",
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

        <div style={{ paddingTop: "2em" }}>
          <div>
            <div>
              <div
                style={{
                  maxWidth: "579px",
                }}
              >
                <img src="/img/Vector 1.png" alt="back" />
              </div>
              <div
                style={{
                  height: "100px",
                }}
              >
                <h1
                  style={{
                    zIndex: "1000",
                    position: "relative",
                    bottom: "200px",
                    left: "20px",
                  }}
                >
                  {percentIncrease}%
                  <br />
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "lighter",
                      lineHeight: "1.5em",
                      color: "#fff",
                    }}
                  >
                    Increase in returns since <br /> 9. June 2024
                  </span>
                </h1>
                <img
                  style={{
                    position: "relative",
                    bottom: "378px",
                  }}
                  src="/img/Vector 2.png"
                  alt="front"
                />
              </div>
            </div>
            {loading && (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={579}
                height={720}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
