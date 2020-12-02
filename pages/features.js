import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const storiesArr = [
  {
    date: "April 16th 2020",
    title: "The Mountains",
    photographer: "John Appleseed",
    backgroundImage: "/assets/stories/desktop/mountains.jpg",
  },
  {
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    photographer: "Benjamin Cruz",
    backgroundImage: "/assets/stories/desktop/cityscapes.jpg",
  },
  {
    date: "April 11th 2020",
    title: "18 Days Voyage",
    photographer: "Alexei Borodin",
    backgroundImage: "/assets/stories/desktop/18-days-voyage.jpg",
  },
  {
    date: "April 9th 2020",
    title: "Architecturals",
    photographer: "Samantha Brooke",
    backgroundImage: "/assets/stories/desktop/architecturals.jpg",
  },
  {
    date: "April 7th 2020",
    title: "World Tour 2019",
    photographer: "Timothy Wagner",
    backgroundImage: "/assets/stories/desktop/world-tour.jpg",
  },
  {
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    photographer: "William Malcolm",
    backgroundImage: "/assets/stories/desktop/unforeseen-corners.jpg",
  },
  {
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    photographer: "Tim Hillenburg",
    backgroundImage: "/assets/stories/desktop/king-on-africa.jpg",
  },
  {
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    photographer: "Felicia Rourke",
    backgroundImage: "/assets/stories/desktop/trip-to-nowhere.jpg",
  },
  {
    date: "March 19th 2020",
    title: "Rage of The Sea",
    photographer: "Mohammed Abdul",
    backgroundImage: "/assets/stories/desktop/rage-of-the-sea.jpg",
  },
  {
    date: "March 16th 2020",
    title: "Running Free",
    photographer: "Michelle",
    backgroundImage: "/assets/stories/desktop/running-free.jpg",
  },
  {
    date: "March 11th 2020",
    title: "Behind the Waves",
    photographer: "Lamarr Wilson",
    backgroundImage: "/assets/stories/desktop/behind-the-waves.jpg",
  },
  {
    date: "March 9th 2020",
    title: "Calm Waters",
    photographer: "Samantha Brooke",
    backgroundImage: "/assets/stories/desktop/calm-waters.jpg",
  },
  {
    date: "March 5th 2020",
    title: "The Milky Way",
    photographer: "Benjamin Cruz",
    backgroundImage: "/assets/stories/desktop/milky-way.jpg",
  },
  {
    date: "March 4th 2020",
    title: "Night at The Dark Forest",
    photographer: "Mohammed Abdul",
    backgroundImage: "/assets/stories/desktop/dark-forest.jpg",
  },
  {
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    photographer: "Michelle",
    backgroundImage: "/assets/stories/desktop/somwarpet.jpg",
  },
  {
    date: "February 25th 2020",
    title: "Land of Dreams",
    photographer: "William Malcolm",
    backgroundImage: "/assets/stories/desktop/land-of-dreams.jpg",
  },
];

function Stories() {
  function renderStories() {
    return storiesArr.map((s, i) => (
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

      <main id="features">
        <section className="hero">
          <div className="text">
            <div>
              <div className="gradient" />
              <h1>FEATURES</h1>
              <p>
                We make sure all of our features are designed to be loved by every aspiring and even
                professional photograpers who wanted to share their stories.
              </p>
            </div>
          </div>
          <div className="image" />
        </section>

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

            <div className="feature">
              <div className="image">
                <img src="/assets/features/desktop/custom-domain.svg" alt="Custom Domain" />
              </div>
              <h3>Custom Domain</h3>
              <p>
                With Photosnap subscriptions you can host your stories on your own domain. You can
                also remove our branding!
              </p>
            </div>
            <div className="feature">
              <div className="image">
                <img src="/assets/features/desktop/boost-exposure.svg" alt="Boost Your Exposure" />
              </div>
              <h3>Boost Your Exposure</h3>
              <p>
                Users that viewed your story or gallery can easily get notifed of new and featured
                stories with our built in mailing list.
              </p>
            </div>
            <div className="feature">
              <div className="image">
                <img src="/assets/features/desktop/drag-drop.svg" alt="Drag & Drop Image" />
              </div>
              <h3>Drag & Drop Image</h3>
              <p>
                Easily drag and drop your image and get beautiful shots everytime. No over the top
                tooling to add friction to creating stories.
              </p>
            </div>
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

export default Stories;
