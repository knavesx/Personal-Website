export default async (req, res) => {
  const data = [
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1283805443512205363/1283832833256853556/san.png?ex=66e46dff&is=66e31c7f&hm=ed9d2e1b69a19454d822c0ec1eeddfaab4201b6cc4c2ede29dbb57c66f799c21&",
      name: "Discord",
      description: "",
      link: "https://discord.gg/qeW6Gjz3Zd",
    }
  ];
  res.status(200).json(data);
};
