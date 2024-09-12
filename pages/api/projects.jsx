export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/1282140026200653825/1282140141925699667/O_0NhV1AS3mQVwIwKAEtBQ.png?ex=66e4344e&is=66e2e2ce&hm=3b5437e576779fe8cb5c7f9cadc868c0e065d30dd15855c9d7b7a167cf699f1e&=&format=webp&quality=lossless&width=671&height=671",
      name: "Knaves",
      description: "I am a professional editor and software developer. I have been professionally involved in community management and development for 2 years. I have high-level knowledge and experience in areas such as community management and social media management.",
      link: "https://discord.gg/qeW6Gjz3Zd",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/1282140026200653825/1282140141925699667/O_0NhV1AS3mQVwIwKAEtBQ.png?ex=66e4344e&is=66e2e2ce&hm=3b5437e576779fe8cb5c7f9cadc868c0e065d30dd15855c9d7b7a167cf699f1e&=&format=webp&quality=lossless&width=671&height=671",
      name: "Discord",
      description: "I am a professional editor and software developer. I have been professionally involved in community management and development for 2 years. I have high-level knowledge and experience in areas such as community management and social media management.",
      link: "https://discord.gg/qeW6Gjz3Zd",
    }
  ];
  res.status(200).json(data);
};
