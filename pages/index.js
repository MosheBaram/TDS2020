import Nav from "../components/nav";
import Layout from "../components/Layout";

export default () => (
  <div>
    <Layout pageTitle="TDS 2020 - Demo Index Page">
      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
          <a
            href="https://github.com/zeit/next.js#getting-started"
            className="card"
          >
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
          <a className="card" href="https://open.segment.com/create-next-app">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the{" "}
              <code>create-next-app</code> site
            </p>
          </a>
          <a
            className="card"
            href="https://github.com/segmentio/create-next-app"
          >
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </div>
      </div>
    </Layout>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);
