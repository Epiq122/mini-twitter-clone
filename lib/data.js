export const getTweets = async (prisma) => {
  return prisma.tweet.findMany({
    where: {},
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
};
