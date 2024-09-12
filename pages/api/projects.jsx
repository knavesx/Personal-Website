export default async (req, res) => {
  const data = [
    {
      id: 2,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tamindir.com%2Fhaber%2Fdiscord-logosu_67741%2F&psig=AOvVaw31tdvmHhK-YrIR6t7MT6Kg&ust=1726246303036000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjOxN_uvYgDFQAAAAAdAAAAABAE",
      name: "Discord",
      description: "",
      link: "https://discord.gg/qeW6Gjz3Zd",
    }
  ];
  res.status(200).json(data);
};
