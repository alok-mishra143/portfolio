import React, { useState, useEffect } from "react";
import NumberTicker from "../magicUi/Numberticker";
import {
  GetGithubDetails,
  GetLeetCodeDetails,
} from "../action/GetShowCaseDetails";

interface ShowCaseProps {
  github: string;
  leetcode: string;
}

const ShowCase = ({ github, leetcode }: ShowCaseProps) => {
  const [repo, setRepo] = useState(0);
  const [totalSolved, setTotalSolved] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchGithubDetails = async () => {
      const data = await GetGithubDetails(github);
      setRepo(data.public_repos);
    };

    const fetchLeetCodeDetails = async () => {
      const data = await GetLeetCodeDetails(leetcode);
      setTotalSolved(data?.data1.totalSolved);
      setRating(data?.data2.contestRating);
    };

    fetchGithubDetails();
    fetchLeetCodeDetails();
  }, [github, leetcode]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full  ">
      <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
        <h1 className="text-white text-lg font-semibold mb-2">Github Repos</h1>
        <div className="text-blue-400">
          <NumberTicker value={repo} />
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <h1 className="text-white text-lg font-semibold mb-2">
          LeetCode Profile
        </h1>
        <div className="flex flex-col text-white">
          <div className="mb-2">
            <span className="text-gray-400">Contest Rating: </span>
            <span className="text-yellow-400">
              <NumberTicker value={rating} />
            </span>
          </div>
          <div>
            <span className="text-gray-400">Questions Solved: </span>
            <span className="text-green-400">
              <NumberTicker value={totalSolved} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
