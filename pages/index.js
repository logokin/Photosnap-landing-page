import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const stories = [
  {
    title: "The Mountains",
    photographer: "John Appleseed",
    backgroundImage: "/assets/stories/desktop/mountains.jpg",
  },
  {
    title: "Sunset Cityscapes",
    photographer: "Benjamin Cruz",
    backgroundImage: "/assets/stories/desktop/cityscapes.jpg",
  },
  {
    title: "18 Days Voyage",
    photographer: "Alexei Borodin",
    backgroundImage: "/assets/stories/desktop/18-days-voyage.jpg",
  },
  {
    title: "Architecturals",
    photographer: "Samantha Brooke",
    backgroundImage: "/assets/stories/desktop/architecturals.jpg",
  },
];

export default function Home() {
  function renderStories() {
    return stories.map((s, i) => (
      <div
        key={i}
        className="story"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${s.backgroundImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text">
          <div className="title">{s.title}</div>
          <div className="photographer">by {s.photographer}</div>
          <div className="read">
            READ STORY{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#FFF">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>

        <div className="border" />
      </div>
    ));
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="index">
        <section id="hero">
          <div className="temp">
            <div className="text">
              <div style={{ position: "relative" }}>
                <div className="gradient" />
                <h1>Create and share your photo stories.</h1>
                <p>
                  Photosnap is a platform for photographers and visual storytellers. We make it easy
                  to share photos, tell stories and connect with others.
                </p>
                <div className="btn secondary light">
                  GET AN INVITE{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                    <g fill="none" fillRule="evenodd" stroke="#FFF">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="image" id="create-and-share" />
          </div>
          <div className="temp">
            <div className="image" id="beautiful-stories" />

            <div className="text">
              <div>
                <h1>BEAUTIFUL STORIES EVERY TIME</h1>
                <p>
                  We provide design templates to ensure your stories look terrific. Easily add
                  photos, text, embed maps and media from other networks. Then share your story with
                  everyone.
                </p>
                <div className="btn secondary dark">
                  View The Stories{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                    <g fill="none" fillRule="evenodd" stroke="#000000">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="temp">
            <div className="text">
              <div>
                <h1>DESIGNED FOR EVERYONE</h1>
                <p>
                  Photosnap can help you create stories that resonate with your audience. Our tool
                  is designed for photographers of all levels, brands, businesses you name it.
                </p>
                <div className="btn secondary dark">
                  View The Stories{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                    <g fill="none" fillRule="evenodd" stroke="#000000">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="image" id="designed-for-everyone" />
          </div>
        </section>

        <section className="stories">{renderStories()}</section>

        <section className="features">
          <div className="container">
            <div className="feature">
              <div className="image">
                <img src="/assets/features/desktop/responsive.svg" alt="Responsive" />
              </div>
              <h3>100% Responsive</h3>
              <p>
                No matter which the device you’re on, our site is fully responsive and stories look
                beautiful on any screen.
              </p>
            </div>
            <div className="feature">
              <div className="image">
                <img src="/assets/features/desktop/no-limit.svg" alt="Responsive" />
              </div>
              <h3>No Photo Upload Limit</h3>
              <p>
                Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all
                of your stories in one go.
              </p>
            </div>
            <div className="feature">
              <div className="image">
                <img src="/assets/features/desktop/embed.svg" alt="Responsive" />
              </div>
              <h3>Available to Embed</h3>
              <p>
                Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps,
                and more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
