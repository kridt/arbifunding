import React from "react";

export default function HowItWorks() {
  return (
    <div
      style={{
        paddingBottom: "50px",
      }}
      className="gradient"
    >
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          paddingTop: "20px",
          fontWeight: "lighter",
        }}
      >
        How it works
      </p>

      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "4em",
            fontWeight: "bold",
            lineHeight: ".5em",
          }}
        >
          Step-by-step look at our <span className="blueWord">approach</span>
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: "lighter",
          }}
        >
          Leveraging cutting-edge AI technology, our proprietary algorithmic
          model delivers consistently <br /> positive and steady returns for our
          clients
        </p>

        <br />
        <br />
        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "20px",
            columnGap: "50px",
            maxWidth: "75%",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              gridArea: "1 / 1 / 2 / 4",
              textAlign: "left",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/img/breadcrumb.png"
              alt="breadcrumb"
            />
          </div>
          <div
            className="howItWorks-info"
            style={{
              gridArea: "2 / 1 / 2 / 2",
            }}
          >
            <h2>AI-Powered Algorithms</h2>
            <p>
              AI algorithms analyze market data in real-time to identify and
              exploit arbitrage opportunities
            </p>
          </div>
          <div
            className="howItWorks-info"
            style={{
              gridArea: "2 / 2 / 2 / 2",
            }}
          >
            <h2>High-Speed Execution</h2>
            <p>
              ensure swift trade execution to capitalize on market
              inefficiencies, minimizing delays and optimizing returns.
            </p>
          </div>
          <div
            className="howItWorks-info"
            style={{
              gridArea: "2 / 3 / 3 / 3",
            }}
          >
            <h2>Robust Risk Management</h2>
            <p>
              Comprehensive risk management strategies are in place to safeguard
              your investments and balance potential rewards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
