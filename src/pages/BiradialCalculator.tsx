import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface CalculationResult {
  throatDiameter: number;
  mouthWidth: number;
  mouthHeight: number;
}

function BiradialCalculator() {
  const [frequency, setFrequency] = useState<string>('30');
  const [horizontalAngle, setHorizontalAngle] = useState<string>('20');
  const [verticalAngle, setVerticalAngle] = useState<string>('30');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateDimensions = () => {
    const c = 343; // Speed of sound in m/s
    const f = parseFloat(frequency);
    const hRad = (parseFloat(horizontalAngle) * Math.PI) / 180;
    const vRad = (parseFloat(verticalAngle) * Math.PI) / 180;

    const throatDiameter = c / (4 * f);
    const mouthWidth = c / (f * Math.sin(hRad));
    const mouthHeight = c / (f * Math.sin(vRad));

    setResult({
      throatDiameter: Number(throatDiameter.toFixed(4)),
      mouthWidth: Number(mouthWidth.toFixed(4)),
      mouthHeight: Number(mouthHeight.toFixed(4)),
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold">Biradial Horn Calculator</h1>
        </div>

        <div className="grid gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">
              Frequency (Hz)
            </label>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter frequency"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Horizontal Dispersion Angle (degrees)
            </label>
            <input
              type="number"
              value={horizontalAngle}
              onChange={(e) => setHorizontalAngle(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter horizontal angle"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Vertical Dispersion Angle (degrees)
            </label>
            <input
              type="number"
              value={verticalAngle}
              onChange={(e) => setVerticalAngle(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter vertical angle"
            />
          </div>
        </div>

        <button
          onClick={calculateDimensions}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Throat Diameter:</span>{' '}
                {result.throatDiameter} meters
              </p>
              <p>
                <span className="font-medium">Mouth Width:</span>{' '}
                {result.mouthWidth} meters
              </p>
              <p>
                <span className="font-medium">Mouth Height:</span>{' '}
                {result.mouthHeight} meters
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 prose prose-invert max-w-none">
        <h2>About Biradial Horn Design Calculator</h2>
        <p>
          Biradial horns are sophisticated acoustic devices designed to provide
          uniform sound coverage across specified angles in both horizontal and
          vertical planes. They are widely used in professional audio systems where
          precise sound control is essential.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Uniform sound dispersion across specified coverage angles</li>
          <li>Excellent pattern control throughout the operating bandwidth</li>
          <li>Minimal distortion and optimal acoustic loading</li>
        </ul>
      </div>
    </div>
  );
}

export default BiradialCalculator;