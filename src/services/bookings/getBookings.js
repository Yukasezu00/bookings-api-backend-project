import prisma from "../../../prisma/prisma.js";

const getBookings = async (userId) => {
  return prisma.booking.findMany({
    where: {
      userId,
    },
  });
};

export default getBookings;
