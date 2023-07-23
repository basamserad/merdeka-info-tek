import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="flex flex-col text-white items-start place-content-center hero-bg mobile:h-1/2 mobile:w-screen mobile:px-4 mobile:py-20 mobile:text-center mobile:items-center tablet:h-screen tablet:items-start tablet:text-start tablet:w-screen tablet:px-32 laptop:px-72">
        <h1 className="capitalize text-4xl laptop:text-5xl font-extrabold mb-5">
          let's build your web application!
        </h1>
        <p className="mb-5">
          We’re a full-stack JavaScript development company, creating serverless
          cross-platform and web applications.
        </p>
      <Link to="/" className="bg-white text-green-700 text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2 hover:text-white hover:bg-green-700">Let's Talk</Link>
    </section>
  );
}

export default Landing;
