const loveNotes = [
  "Aku mau terus sama kamu, aku butuh kamu, aku gaakan disini kalo bukan karena kamu.",
  "Aku tahu hubungan kita jauh dari kata sempurna, tapi aku mau kita belajar bareng buat jadi lebih baik kedepannya.",
  "Aku mau kita saling sayang, saling cinta, saling jaga, saling support, aku mau kita sama-sama terus.",
  "Jadi, tetep sama aku ya sayang, aku gamau kamu kemana-mana, aku mau kamu disini terus, disamping aku.",
  "Aku juga mau kita kaya dulu lagi, atau kaya bulan maret waktu itu, hangatt banget aku suka, yuk sayang kita beresin bareng-bareng.",
  "I love you to thee moon and back, in every timeline, in every universe, in every reality.",
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
        <h1>For the One I Love Very Much</h1>
        <p className="intro-text">
          You are the one I love, the one who shines brighter than all the stars in the sky.
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
