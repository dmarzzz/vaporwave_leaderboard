import React from 'react';
import { Trophy, Medal } from 'lucide-react';

interface ScoreEntryProps {
  rank: number;
  name: string;
  score: number;
  isHighlight?: boolean;
}

export function ScoreEntry({ rank, name, score, isHighlight }: ScoreEntryProps) {
  const getRankDisplay = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-fuchsia-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-fuchsia-300" />;
      default:
        return <span className="text-cyan-300">{rank}.</span>;
    }
  };

  const getScoreColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-fuchsia-400";
      case 2:
        return "text-cyan-400";
      case 3:
        return "text-fuchsia-300";
      default:
        return "text-cyan-300";
    }
  };

  return (
    <div className={`grid grid-cols-8 gap-2 py-1 px-3 items-center ${
      isHighlight ? 'animate-pulse' : ''
    }`}>
      <div className="col-span-1 text-xl flex items-center">
        {getRankDisplay(rank)}
      </div>
      <div className={`col-span-3 text-lg ${getScoreColor(rank)}`}>
        {name}
      </div>
      <div className={`col-span-4 text-lg text-right font-mono ${getScoreColor(rank)}`}>
        {score.toString().padStart(8, '0')}
      </div>
    </div>
  );
}