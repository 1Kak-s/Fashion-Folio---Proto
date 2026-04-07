export const getUser = async () => {
  return {
    name: "Mohamed",
    bio: "Passionné de mode streetwear",
    avatar: "https://via.placeholder.com/150",

    clothes: 24,
    outfits: 8,
    likes: 56,

    savedOutfits: [
      {
        name: "Tenue été",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Look soirée",
        image: "https://via.placeholder.com/300",
      },
    ],
  };
};