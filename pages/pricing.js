import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Switch from "../components/switch";

function Checkmark() {
  return <img src="/assets/pricing/desktop/check.svg" alt="Checkmark" />;
}

function Pricing() {
  const [rate, setRate] = useState("m");

  return (
    <>
      <Head>
        <title>PHOTOSNAP | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="pricing">
        <section className="hero">
          <div className="text">
            <div>
              <div className="gradient" />
              <h1>PRICING</h1>
              <p>
                Create a your stories, Photosnap is a platform for photographers and visual
                storytellers. It’s the simple way to create and share your photos.
              </p>
            </div>
          </div>
          <div className="image" />
        </section>

        <section className="cta">
          <Switch rate={rate} setRate={setRate} />

          <div className="container">
            <div className="main-plan">
              <h2>Basic</h2>
              <p>
                Includes basic usage of our platform. Recommended for new and aspiring
                photographers.
              </p>
              <h1 className="price">{rate === "m" ? "$19.00" : "$190.00"}</h1>
              <p>{rate === "m" ? "per month" : "per year"}</p>
              <div className="btn primary dark">Pick Plan</div>
            </div>

            <div className="main-plan" id="pro">
              <div className="gradient" />
              <h2>Pro</h2>
              <p>
                More advanced features available. Recommended for photography veterans and
                professionals.
              </p>
              <h1 className="price">{rate === "m" ? "$39.00" : "$390.00"}</h1>
              <p>{rate === "m" ? "per month" : "per year"}</p>

              <div className="btn primary light">Pick Plan</div>
            </div>

            <div className="main-plan">
              <h2>Business</h2>
              <p>
                Additional features available such as more detailed metrics. Recommended for
                business owners.
              </p>
              <h1 className="price">{rate === "m" ? "$99.00" : "$990.00"}</h1>
              <p>{rate === "m" ? "per month" : "per year"}</p>

              <div className="btn primary dark">Pick Plan</div>
            </div>

            <div className="tablet-plan">
              <div className="text">
                <h2>Basic</h2>
                <p>
                  Includes basic usage of our platform. Recommended for new and aspiring
                  photographers.
                </p>
                <div className="btn primary dark">Pick Plan</div>
              </div>
              <div>
                <h1 className="price">{rate === "m" ? "$19.00" : "$190.00"}</h1>
                <p>{rate === "m" ? "per month" : "per year"}</p>
              </div>
            </div>

            <div className="tablet-plan" id="pro">
              <div className="gradient" />
              <div className="text">
                <h2>Pro</h2>
                <p>
                  More advanced features available. Recommended for photography veterans and
                  professionals.
                </p>
                <div className="btn primary light">Pick Plan</div>
              </div>
              <div>
                <h1 className="price">{rate === "m" ? "$39.00" : "$390.00"}</h1>
                <p>{rate === "m" ? "per month" : "per year"}</p>
              </div>
            </div>

            <div className="tablet-plan">
              <div className="text">
                <h2>Business</h2>
                <p>
                  Additional features available such as more detailed metrics. Recommended for
                  business owners.
                </p>
                <div className="btn primary dark">Pick Plan</div>
              </div>
              <div>
                <h1 className="price">{rate === "m" ? "$99.00" : "$990.00"}</h1>
                <p>{rate === "m" ? "per month" : "per year"}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="table">
          <div className="container">
            <h1>COMPARE</h1>
            <table className="main-table">
              <thead>
                <tr>
                  <th>The Features</th>
                  <th>Basic</th>
                  <th>Pro</th>
                  <th>Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unlimited Story Posting</td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Unlimited Photo Upload</td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Embed Custom Content</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Customize Metadata</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Advanced Metrics</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Photo Downloads</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Search Engine Indexing</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
                <tr>
                  <td>Custom Analytics</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="mobile-table">
              <thead>
                <tr>
                  <th colSpan="3">The Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-header">
                  <td colSpan="3">Unlimited Story Posting</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Unlimited Photo Upload</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Embed Custom Content</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Customize Metadata</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Advanced Metrics</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Photo Downloads</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Search Engine Indexing</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>

                <tr className="tr-header">
                  <td colSpan="3">Custom Analytics</td>
                </tr>
                <tr className="tr-plans">
                  <td>Basic</td>
                  <td>Pro</td>
                  <td>Business</td>
                </tr>
                <tr className="tr-checks">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <Checkmark />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="beta">
          <div className="gradient" />
          <div className="container">
            <h1>We’re in beta. Get your invite today!</h1>
            <div className="read">
              GET AN INVITE{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Pricing;
