// src/hooks/useVote.ts

import { useState } from 'react';

/**
 * Custom hook for handling voting functionality.
 * 
 * @param initialScore - The initial score for the vote.
 * @returns An object containing the current score, vote status, and a function to handle voting.
 */
export const useVote = (initialScore: number) => {
  const [score, setScore] = useState(initialScore);
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);

  const handleVote = (newStatus: 'up' | 'down') => {
    setVoteStatus((prevStatus) => {
      if (prevStatus === newStatus) {
        // If clicking the same button, remove the vote
        setScore(initialScore);
        return null;
      } else {
        // Otherwise, set the new vote status and update the score
        setScore(initialScore + (newStatus === 'up' ? 1 : -1));
        return newStatus;
      }
    });
  };

  return { score, voteStatus, handleVote };
};