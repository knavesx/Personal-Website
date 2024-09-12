export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/1282140026200653825/1282140141925699667/O_0NhV1AS3mQVwIwKAEtBQ.png?ex=66e4344e&is=66e2e2ce&hm=3b5437e576779fe8cb5c7f9cadc868c0e065d30dd15855c9d7b7a167cf699f1e&=&format=webp&quality=lossless&width=671&height=671",
      name: "Knaves",
      description: "Knaves, it offers an ideal platform for developers to share their projects, interact with other developers and sell their projects for money, exploring many projects in different categories and software languages.",
      link: "https://discord.gg/qeW6Gjz3Zd",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/1282140026200653825/1282140141925699667/O_0NhV1AS3mQVwIwKAEtBQ.png?ex=66e4344e&is=66e2e2ce&hm=3b5437e576779fe8cb5c7f9cadc868c0e065d30dd15855c9d7b7a167cf699f1e&=&format=webp&quality=lossless&width=671&height=671",
      name: "Discord",
      description: "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management. I post videos about discord on my youtube channel.",
      link: "https://discord.gg/qeW6Gjz3Zd",
    }
  ];
  res.status(200).json(data);
};
