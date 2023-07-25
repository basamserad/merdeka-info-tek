function ServicesCard() {
  const data = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/lms.svg",
      title: "Learning Management System",
      description:
        "LMS development can be a complex and time-consuming process, but a well-designed and implemented system can revolutionize the way educational content is delivered and accessed, making learning more accessible and efficient for a wide range of users.",
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/mobile.svg",
      title: "Mobile App Development",
      description:
        "Successful mobile apps offer a seamless user experience, deliver value to users, and contribute to achieving business objectives.",
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/pos.svg",
      title: "Point of Sale System",
      description:
        "POS development plays a critical role in optimizing the sales process, improving inventory management, and providing valuable insights into business performance.",
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/pwa.svg",
      title: "Progressive Web Application",
      description:
        "PWA development has gained popularity due to its ability to deliver a seamless and engaging user experience, comparable to that of native mobile apps, without the need for users to download or install anything from an app store.",
    },
    {
      id: 5,
      image: "https://raw.githubusercontent.com/abelmorad/merdeka-info-tek/main/public/products/website.svg",
      title: "Web Development",
      description:
        "Web development is a dynamic and evolving field, and developers must stay updated with the latest technologies and best practices to create high-quality and efficient web solutions that meet the needs of modern users and businesses.",
    },
  ];

  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="flex flex-col items-center text-center border border-gray-300 rounded-md p-4 gap-5 tablet:flex-row">
          <img className="h-24 w-24" src={data.image} alt={data.title} />
          <div className="flex flex-col tablet:text-start">
            <p className="font-semibold mb-4 text-lg">{data.title}</p>
            <p>{data.description.substring(0,100)}...</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServicesCard;
