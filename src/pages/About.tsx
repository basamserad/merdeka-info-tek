import TeamCard from "../components/TeamCard";

function About() {
  return (
    <section className="flex flex-col mobile:px-4">
      <article className="flex flex-col pt-20 gap-10 mb-10 tablet:px-16 desktop:px-44">
        <div className="flex-col">
          <h2 className="capitalize mb-5 font-semibold text-4xl">about us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            molestias commodi? Sapiente id vel cum rem sequi temporibus delectus
            laboriosam asperiores eaque, commodi dolores neque enim illum,
            blanditiis facere excepturi.
          </p>
        </div>
        <div className="flex-col">
          <h2 className="capitalize mb-5 font-semibold text-4xl">our vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            molestias commodi? Sapiente id vel cum rem sequi temporibus delectus
            laboriosam asperiores eaque, commodi dolores neque enim illum,
            blanditiis facere excepturi.
          </p>
        </div>
        </article>
        <div className="flex-col my-20">
          <h2 className="capitalize mb-10 font-semibold text-4xl text-center tablet:px-16 desktop:px-44">meet our team</h2>
          <div className="flex flex-col items-center gap-5 tablet:grid tablet:grid-flow-col tablet:grid-rows-3 tablet:place-content-center laptop:grid-rows-2">
            <TeamCard />
          </div>
        </div>
    </section>
  );
}

export default About;
