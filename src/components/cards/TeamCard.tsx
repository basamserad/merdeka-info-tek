function TeamCard() {
  const teamData = [
    {
      id: 1,
      image: "/public/avatar/ceo.png",
      name: "Abu Bakr Siddiq",
      position: "CEO",
    },
    {
      id: 2,
      image: "/public/avatar/fullstack.png",
      name: "Fullstack Developer",
      position: "El Chapo",
    },
    {
      id: 3,
      image: "/public/avatar/frontend.png",
      name: "Sharhabeel Morad",
      position: "Front-end Developer",
    },
    {
      id: 4,
      image: "/public/avatar/backend.png",
      name: "Monkey D. Luffy",
      position: "Backend Developer",
    },
    {
      id: 5,
      image: "/public/avatar/graphic.png",
      name: "Emma Watson",
      position: "UI/UX Developer",
    },
    {
      id: 6,
      image: "/public/avatar/graphic.png",
      name: "Elsa Mae",
      position: "Dev Ops",
    },
  ];

  return (
    <>
      {teamData.map((data) => (
        <div
          className="flex flex-col place-content-center items-center border border-gray-300 rounded-md h-72 w-60 px-10 py-10 text-center"
          key={data.id}
        >
          <img src={data.image} alt={data.name} className="h-32 w-32 mb-4" />
          <p>{data.name}</p>
          <p>
            <strong>{data.position}</strong>
          </p>
        </div>
      ))}
    </>
  );
}

export default TeamCard;
