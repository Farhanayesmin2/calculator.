import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

interface VelocityResult {
  velocity: number;
  timeInHours: number;
  averageSpeed: number;
}

function PigeonCalculator() {
  const [distance, setDistance] = useState<string>('100');
  const [hours, setHours] = useState<string>('2');
  const [minutes, setMinutes] = useState<string>('30');
  const [result, setResult] = useState<VelocityResult | null>(null);

  const calculateVelocity = () => {
    const totalHours = parseFloat(hours) + parseFloat(minutes) / 60;
    const distanceKm = parseFloat(distance);
    
    const velocity = distanceKm / totalHours;
    const averageSpeed = velocity * 0.621371; // Convert to mph

    setResult({
      velocity: Number(velocity.toFixed(2)),
      timeInHours: Number(totalHours.toFixed(2)),
      averageSpeed: Number(averageSpeed.toFixed(2)),
    });
  };

  return (
    <CalculatorLayout
      title="Pigeon Velocity Calculator"
      description="Calculate racing pigeon velocity and average speed"
    >
      <div className="grid gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Distance (kilometers)
          </label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter distance"
            min="0"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Hours</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter hours"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Minutes</label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter minutes"
              min="0"
              max="59"
            />
          </div>
        </div>

        <button
          onClick={calculateVelocity}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Calculate Velocity
        </button>

        {result && (
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Velocity:</span>{' '}
                {result.velocity} km/h
              </p>
              <p>
                <span className="font-medium">Average Speed:</span>{' '}
                {result.averageSpeed} mph
              </p>
              <p>
                <span className="font-medium">Total Time:</span>{' '}
                {result.timeInHours} hours
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 prose prose-invert max-w-none">
        <h2>Pigeon Racing Velocity Calculator</h2>
        <p>
          Racing pigeons are renowned for their speed and endurance. Calculating their velocity is crucial for understanding performance metrics, whether for competitive racing or training.
        </p>

        <h3>Why Use a Pigeon Velocity Calculator?</h3>
        <p>
          This tool allows enthusiasts to determine a pigeon’s speed based on the distance flown and time taken. It simplifies calculations and ensures accurate results, essential for:
        </p>
        <ul>
          <li>Evaluating racing performance</li>
          <li>Tracking training progress</li>
          <li>Planning effective training strategies</li>
          <li>Understanding race rankings</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Input flight distance and time</li>
          <li>Get results in km/h and mph</li>
          <li>Accurately analyze pigeon speed for better training</li>
        </ul>

        <h3>Using the Calculator</h3>
        <p>
          Measure the distance flown and record the time. Input these values to get an accurate velocity reading, expressed in km/h or mph.
        </p>

        <h3>Tips for Optimizing Velocity</h3>
        <ul>
          <li>Ensure proper nutrition and training</li>
          <li>Monitor weather conditions and adjust accordingly</li>
          <li>Use consistent measurement practices for better accuracy</li>
        </ul>

        <h3>Pigeon Racing Benchmarks</h3>
        <p>
          Pigeon speeds vary, but typical averages include:
        </p>
        <ul>
          <li>Short distances: 1,000–1,200 m/min</li>
          <li>Medium distances: 800–1,000 m/min</li>
          <li>Long distances: 600–800 m/min</li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}

export default PigeonCalculator;
