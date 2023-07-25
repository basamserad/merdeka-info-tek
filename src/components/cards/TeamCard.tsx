function TeamCard() {
  const teamData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEs46kqkF1xGSJbgA2BJPhDpAM0MUXFab7qkFiQCKIyCoagwj",
      name: "Abu Bakr Siddiq",
      position: "CEO",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEs46kqkF1xGSJbgA2BJPhDpAM0MUXFab7qkFiQCKIyCoagwj",
      name: "Fullstack Developer",
      position: "El Chapo",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEs46kqkF1xGSJbgA2BJPhDpAM0MUXFab7qkFiQCKIyCoagwj",
      name: "Sharhabeel Morad",
      position: "Front-end Developer",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEs46kqkF1xGSJbgA2BJPhDpAM0MUXFab7qkFiQCKIyCoagwj",
      name: "Monkey D. Luffy",
      position: "Backend Developer",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEs46kqkF1xGSJbgA2BJPhDpAM0MUXFab7qkFiQCKIyCoagwj",
      name: "Emma Watson",
      position: "UI/UX Developer",
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEs46kqkF1xGSJbgA2BJPhDpAM0MUXFab7qkFiQCKIyCoagwj",
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
