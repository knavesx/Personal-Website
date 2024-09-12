export default async (req, res) => {
  const data = [
  {
      id: 1,
      image: "https://media.discordapp.net/attachments/1282140026200653825/1282140058672955402/DcWWWF00TXaI3JkILQU3-Q.png?ex=66e4343a&is=66e2e2ba&hm=be560b5886098e57d2d0c53a71c98f8784e800714c17d1b4935e204241d7a814&=&format=webp&quality=lossless&width=671&height=671",
      name: "Knaves",
      description: "My Discord Account",
      link: "https://discord.com/users/987087764661088306",
    },
    
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
