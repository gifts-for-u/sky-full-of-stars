const loveNotes = [
  "In the quiet of the night, I always find myself wishing on the stars for more time with you.",
  "Every twinkle above us reminds me of how your smile lights up my world.",
  "No constellation could ever compare to the map of love I trace whenever I hold your hand.",
  "My heart glows brightest when it’s orbiting around you—forever and always."
];

const createStarField = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2.8 + 1.8}px`,
    duration: `${2 + Math.random() * 4}s`,
    delay: `${Math.random() * 4}s`,
    opacity: Math.random() * 0.25 + 0.75,
  }));

const starField = createStarField(220);

const StarField = () => (
  <div className="star-field" aria-hidden="true">
    {starField.map((star) => (
      <span
        key={star.id}
        className="star"
        style={{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDuration: star.duration,
          animationDelay: star.delay,
          opacity: star.opacity,
        }}
      />
    ))}
  </div>
);

const StarDivider = ({ isLast }) => {
  const stars = React.useMemo(
    () =>
      Array.from({ length: 75 }, (_, index) => ({
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2.4 + 1.6}px`,
        duration: `${2.2 + Math.random() * 3.3}s`,
        delay: `${Math.random() * 4}s`,
        opacity: Math.random() * 0.2 + 0.8,
      })),
    []
  );

  if (isLast) {
    return (
      <div className="moon-wrapper" aria-hidden="true">
        <span className="moon-halo" />
        <img
          className="moon-svg"
          src="https://www.svgrepo.com/show/401844/full-moon.svg"
          alt="Full moon"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="star-spray" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="spray-star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

const MessageSection = ({ text, isLast }) => (
  <section className="message-section">
    <StarDivider isLast={isLast} />
    <p className="glowing-text">{text}</p>
  </section>
);

const App = () => (
  <main className="night-sky">
    <StarField />
    <div className="sky-overlay" aria-hidden="true" />

    <div className="content">
      <header className="intro">
        <h1>For My Brightest Star</h1>
        <p className="intro-text">
          These words drift across our own little universe—each one shining just for you.
          Tweak the messages array to fill the sky with as many whispers of love as you like.
        </p>
      </header>

      <div className="messages">
        {loveNotes.map((note, index) => (
          <MessageSection
            key={note.slice(0, 10) + index}
            text={note}
            isLast={index === loveNotes.length - 1}
          />
        ))}
      </div>
    </div>
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
