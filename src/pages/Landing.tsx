
import bismillah from "../../public/images/bismillahcalligraphy.png"


function Landing() {
  return (
    <section className="flex flex-col text-white items-start place-content-center hero-bg h-screen w-screen mobile:px-4 mobile:py-20 mobile:text-center mobile:items-center tablet:items-start tablet:text-start tablet:px-32 laptop:px-72">
        {/* <img src={bismillah} alt="bismillah" className="h-72 w-max place-self-center"  /> */}
        <b className="mb-10 text-4xl laptop:text-5xl font-extrabold">Assalamualaikum Warahmatullahi Wabarakatuh!</b>
        <h1 className="capitalize text-4xl laptop:text-5xl font-extrabold mb-5">
         
          let's build your web application!
        </h1>
        <p className="mb-5">
          We’re a full-stack JavaScript development company, creating serverless
          cross-platform and web applications.
        </p>
      <a href="#" className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2 hover:text-white hover:bg-black">Let's Talk</a>
    </section>
  );
}

export default Landing;
