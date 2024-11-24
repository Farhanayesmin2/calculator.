import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

interface GemCalculation {
  totalGems: number;
  dailyGems: number;
  monthlyGems: number;
  purchaseValue: number;
}

function GemCalculator() {
  const [dailyQuests, setDailyQuests] = useState<string>('8');
  const [guildGifts, setGuildGifts] = useState<string>('50');
  const [colosseum, setColosseum] = useState<string>('60');
  const [result, setResult] = useState<GemCalculation | null>(null);

  const calculateGems = () => {
    const dailyQuestsGems = parseInt(dailyQuests) * 2;
    const guildGiftsGems = parseInt(guildGifts);
    const colosseumGems = parseInt(colosseum);

    const daily = dailyQuestsGems + guildGiftsGems + colosseumGems;
    const monthly = daily * 30;
    const purchaseValue = monthly * 0.01; // Assuming $0.01 per gem value

    setResult({
      totalGems: daily,
      dailyGems: dailyQuestsGems,
      monthlyGems: monthly,
      purchaseValue: Number(purchaseValue.toFixed(2)),
    });
  };

  return (
    <CalculatorLayout
      title="Lords Mobile Gem Calculator"
      description="Calculate your daily and monthly gem earnings in Lords Mobile"
    >
      <div className="grid gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Daily Quests Completed
          </label>
          <input
            type="number"
            value={dailyQuests}
            onChange={(e) => setDailyQuests(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter number of quests"
            min="0"
            max="15"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Guild Gifts (Gems)
          </label>
          <input
            type="number"
            value={guildGifts}
            onChange={(e) => setGuildGifts(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter guild gifts gems"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Colosseum Rewards (Gems)
          </label>
          <input
            type="number"
            value={colosseum}
            onChange={(e) => setColosseum(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter colosseum gems"
          />
        </div>

        <button
          onClick={calculateGems}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Calculate Gems
        </button>

        {result && (
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Gem Summary</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Daily Gems from Quests:</span>{' '}
                {result.dailyGems.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Total Daily Gems:</span>{' '}
                {result.totalGems.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Monthly Gems:</span>{' '}
                {result.monthlyGems.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Equivalent Value:</span> $
                {result.purchaseValue.toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 prose prose-invert max-w-none">
        <h2>Maximizing Gem Income in Lords Mobile</h2>
        <p>
          Gems are a valuable resource in Lords Mobile, used for various upgrades and purchases.
          Understanding your gem income helps you plan your game progression more effectively.
        </p>

        <h3>Key Sources of Gems</h3>
        <ul>
          <li>Daily Quests (2 gems per quest)</li>
          <li>Guild Gifts from other members</li>
          <li>Colosseum rankings and rewards</li>
          <li>Events and special occasions</li>
        </ul>

        <h3>Tips for Gem Management</h3>
        <ul>
          <li>Complete all daily quests consistently</li>
          <li>Join an active guild for more gifts</li>
          <li>Maintain a high Colosseum ranking</li>
          <li>Save gems for important events and upgrades</li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}

export default GemCalculator;