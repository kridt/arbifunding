import React from "react";

export default function Results() {
  return (
    <div className="gradientReverse">
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          paddingTop: "20px",
          fontWeight: "lighter",
        }}
      >
        Our results
      </p>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4em",
          fontWeight: "bold",
          lineHeight: ".9em",
        }}
      >
        Comprehensive Overview of Our <br />{" "}
        <span className="blueWord">results</span>
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          padding: "100px 8%",
        }}
        className="showCase"
      >
        <div
          style={{
            flex: "1",
            maxWidth: "550px",
            margin: "0 auto ",
          }}
          className="showCaseText"
        >
          <div>
            <h2>Monthly return: 3-5%</h2>
            <p>
              Our algorithm consistently delivers a solid monthly return,
              reflecting our ability to capture profitable opportunities and
              manage market fluctuations effectively we aim to have a return of
              3-5%.
            </p>
          </div>
          <div>
            <h2>Success rate: 71%</h2>
            <p>
              With a high success rate, our trading model has proven to be
              highly effective, maintaining accuracy and precision in
              identifying profitable trades.
            </p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "550px",
            flex: "1",
          }}
          className="showCaseImg"
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "25px",
            }}
            src="/img/forex.jpg"
            alt="forex market"
          />
        </div>
      </div>
    </div>
  );
}
