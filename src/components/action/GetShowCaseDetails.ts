export const GetGithubDetails = async (username: string) => {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetLeetCodeDetails = async (username: string) => {
  try {
    const res1 = await fetch(
      `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
    );
    const res2 = await await fetch(
      `https://alfa-leetcode-api.onrender.com/${username}/contest/`
    );
    const data1 = await res1.json();
    const data2 = await res2.json();
    return { data1, data2 };
  } catch (error) {
    console.log(error);
  }
};
