const services = [
  {
    id: 1,
    icon: "fas fa-laptop-code",
    title: "Front-End Development",
    description:
      "Modern, responsive websites built with HTML5, CSS3, JavaScript and popular frameworks like React, Bootstrap.",
  },
  {
    id: 2,
    icon: "fas fa-server",
    title: "Back-End Development",
    description: "Robust server-side solutions using  PHP, Node.js and database systems like MySQL",
  },

  {
    id: 3,
    icon: "fas fa-search",
    title: "SEO Optimization",
    description: "Improve your website's visibility with search engine optimization techniques and best practices.",
  },
];
function Services() {
  const Cards = services;
  return (
    <>
      <section className='service' id='service'>
        <h2>My Services</h2>
        <div className='services-container'>
          {Cards.map((card) => (
            <ServiceCards card={card} key={card.id} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Services;

function ServiceCards({ card }) {
  return (
    <>
      <div className='service-card' key={card.id} id='service-card'>
        <div className='service-icon'>
          <i className={card.icon}></i>
        </div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </>
  );
}
