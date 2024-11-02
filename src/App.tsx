import React, { useState, useEffect } from 'react';
import { Bird, Joystick } from 'lucide-react';
import { ScoreEntry } from './components/ScoreEntry';

const TOP_SCORES = [
  { rank: 1, name: "ACE", score: 100000 },
  { rank: 2, name: "BOB", score: 90000 },
  { rank: 3, name: "CAT", score: 80000 },
  { rank: 4, name: "DAN", score: 70000 },
  { rank: 5, name: "ELI", score: 60000 },
  { rank: 6, name: "FLO", score: 50000 },
  { rank: 7, name: "GUS", score: 40000 },
  { rank: 8, name: "HAL", score: 30000 },
  { rank: 9, name: "IKE", score: 25000 },
  { rank: 10, name: "JOY", score: 20000 },
  { rank: 11, name: "KAI", score: 15000 },
  { rank: 12, name: "LEO", score: 10000 },
  { rank: 13, name: "MAX", score: 8000 },
  { rank: 14, name: "NOA", score: 6000 },
  { rank: 15, name: "PAM", score: 4000 }
];

function App() {
  const [blinkState, setBlinkState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkState(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-crt grid-bg p-4 relative overflow-hidden flex flex-col items-center justify-center gap-6">
      <div className="absolute inset-0 pointer-events-none bg-scanlines"></div>
      
      {/* Game Title */}
      <div className="text-center relative z-10">
        <div className="flex items-center justify-center gap-3">
          <Bird className="w-12 h-12 text-fuchsia-400 animate-pulse" />
          <h1 className="text-5xl font-bold chrome-text">
            TWEET GAME
          </h1>
          <Bird className="w-12 h-12 text-cyan-400 animate-pulse" />
        </div>
      </div>

      {/* Leaderboard Container */}
      <div className="w-full max-w-2xl relative pixel-corners border-4 border-fuchsia-500 p-6 bg-[#120458]/90 backdrop-blur-sm">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2">
            <Joystick className="w-8 h-8 text-fuchsia-400" />
            <h2 className="text-2xl font-bold tracking-[0.2em] animate-[rainbow_4s_ease-in-out_infinite]">
              HIGH SCORES
            </h2>
            <Joystick className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="h-1 w-3/4 mx-auto mt-4 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500"></div>
        </div>

        {/* Scrollable Scores */}
        <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
          {TOP_SCORES.map((score) => (
            <ScoreEntry
              key={score.rank}
              {...score}
              isHighlight={score.rank <= 3}
            />
          ))}
        </div>
      </div>

      {/* Insert Coin - Now outside the leaderboard */}
      <div className={`text-center relative z-10 mt-4 ${blinkState ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xl tracking-[0.3em] text-cyan-400 font-bold animate-pulse">
          INSERT COIN
        </p>
        <p className="text-xs text-fuchsia-400 mt-2 tracking-[0.2em]">
          1 CREDIT = 1 TWEET
        </p>
      </div>
    </div>
  );
}

export default App;