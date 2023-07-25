import PortfolioCard from "../components/cards/PortfolioCard";

function Portfolio() {
  return (
    <section id="portfolio" className="flex flex-col pt-28">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Our Portfolio
      </h2>
      <section className="grid grid-cols-1 gap-4 px-6 tablet:grid-cols-2 desktop:grid-cols-4 laptop:px-28">
        <PortfolioCard />
      </section>
    </section>
  );
}

export default Portfolio;
