import React, { useState } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';

interface CalculationResult {
  finalAmount: number;
  interest: number;
  apy: number;
}

function ShareCalculator() {
  const [principal, setPrincipal] = useState<string>('10000');
  const [rate, setRate] = useState<string>('2.5');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateReturns = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = 0.5; // 6 months in years

    const interest = p * r * t;
    const finalAmount = p + interest;
    const apy = (Math.pow(1 + r * t, 1/t) - 1) * 100;

    setResult({
      finalAmount: Number(finalAmount.toFixed(2)),
      interest: Number(interest.toFixed(2)),
      apy: Number(apy.toFixed(2)),
    });
  };

  return (
    <CalculatorLayout 
      title="6 Month Share Certificate Calculator"
      description="Calculate returns on your 6-month share certificate investment with our professional calculator."
    >
      <div className="grid gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Principal Amount ($)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter principal amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter interest rate"
            step="0.1"
          />
        </div>

        <button
          onClick={calculateReturns}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Calculate Returns
        </button>

        {result && (
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Investment Summary</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Final Amount:</span>{' '}
                ${result.finalAmount.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Interest Earned:</span>{' '}
                ${result.interest.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Annual Percentage Yield (APY):</span>{' '}
                {result.apy}%
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 prose prose-invert max-w-none">
        <h2>Understanding Share Certificates</h2>
        <p>
          Share certificates are secure investment vehicles offered by credit unions, similar to certificates of deposit (CDs) offered by banks. They typically offer higher returns than regular savings accounts in exchange for keeping your money invested for a fixed term.
        </p>
        
        <h3>Benefits of 6-Month Share Certificates</h3>
        <ul>
          <li>Higher interest rates than traditional savings accounts</li>
          <li>Short-term commitment with guaranteed returns</li>
          <li>NCUA insurance up to $250,000</li>
          <li>Perfect for short-term financial goals</li>
        </ul>

        <h3>How to Use This Calculator</h3>
        <p>
          Enter your initial investment amount and the annual interest rate offered by your credit union. Our calculator will show you the total return after 6 months, including the interest earned and the effective Annual Percentage Yield (APY).
        </p>

        <h3>Important Considerations</h3>
        <ul>
          <li>Early withdrawal penalties may apply</li>
          <li>Interest rates are typically fixed for the entire term</li>
          <li>Consider laddering certificates for better liquidity</li>
          <li>Compare rates across different credit unions</li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}

export default ShareCalculator;