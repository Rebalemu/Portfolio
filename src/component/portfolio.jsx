const portfolioItems = [
  {
    imageSrc: "images/realState.png",
    imageAlt: "Project 2",
    title: "Real State Website",
    link: "https://estate-rebi-alex.vercel.app/",
  },
  {
    imageSrc: "images/tikShop.png",
    imageAlt: "Project 4",
    title: "E-commerce Platform",
    link: "https://github.com/SeriousRasCode/video-cart-snap",
  },
  {
    imageSrc: "images/medical-website.png",
    imageAlt: "Project 1",
    title: "Medical Record System",
    link: "#Portfolio",
  },
  {
    imageSrc: "images/shareFact.png",
    imageAlt: "Project 3",
    title: "Share-Intresting-Fact",
    link: "https://share-intresting-fact.netlify.app/",
  },
];

function Portfolio() {
  const items = portfolioItems;
  return (
    <>
      <section class='portfolio' id='portfolio'>
        <h2>My Projects</h2>
        <div class='portfolio-container'>
          {items.map((item) => (
            <Projects item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Portfolio;

function Projects({ item }) {
  return (
    <>
      <div className='portfolio-card'>
        <div className='portfolio-image'>
          <img src={item.imageSrc} alt={item.imageAlt} />
        </div>
        <div className='portfolio-overlay'>
          <h3>{item.title}</h3>
          <a href={item.link} className='portfolio-link' target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-external-link-alt'></i>
          </a>
        </div>
      </div>
    </>
  );
}
