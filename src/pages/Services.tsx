import ServicesCard from "../components/ServicesCard"

function Services() {
  return (
    <div id="services" className="flex flex-col px-2 pt-36">
      <h2 className="text-4xl font-semibold text-center mb-10">Products & Services</h2>
      <div className="flex flex-col px-5 gap-5 tablet:grid tablet:grid-cols-2 laptop:px-24">
        <ServicesCard />
      </div>
    </div>
  )
}

export default Services