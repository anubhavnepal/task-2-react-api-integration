export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Add avatar to each user
    const modifiedData = data.map((user) => ({
      ...user,
      avatar: `https://bootdey.com/img/Content/avatar/avatar${getRandomInt(
        1,
        8
      )}.png`,
    }));

    return modifiedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getRandomInt = (min, max) => {
  if (min > max) {
    throw new Error("Min should be less than or equal to Max.");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
