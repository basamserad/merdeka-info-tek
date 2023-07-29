import TeamCard from "../components/cards/TeamCard";

function About() {
  return (
    <section id="about-us" className="flex flex-col pt-36 mobile:px-4">
      <article className="flex flex-col gap-10 tablet:px-16 desktop:px-44">
        <div className="flex-col">
          <h2 className="capitalize mb-5 font-semibold text-4xl">about us</h2>
          <p>
          At Merdeka Info Tek, we are passionate about empowering the Muslim community with the latest information and technology. 
          Our journey began when a Muslim revert assembled and organized a team of Muslim programmers and developers, 
          regardless of tribes and nationality, and came up with an idea to prioritize providing I.T. services for the Muslim Ummah. 
          Since then, we have been dedicated to innovating and sharing our skills not just with Muslim minorities but also with everyone else.
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
