import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Share, Gem, Bird } from 'lucide-react';

const calculators = [
  {
    title: 'Biradial Horn Design Calculator',
    description: 'Design professional audio horns with precise acoustic calculations',
    icon: Calculator,
    path: '/biradial',
    color: 'blue',
  },
  {
    title: '6 Month Share Certificate Calculator',
    description: 'Calculate returns on your share certificate investments',
    icon: Share,
    path: '/share-certificate',
    color: 'green',
  },
  {
    title: 'Lords Mobile Gem Calculator',
    description: 'Optimize your gem usage and track in-game resources',
    icon: Gem,
    path: '/gem',
    color: 'purple',
  },
  {
    title: 'Pigeon Velocity Calculator',
    description: 'Calculate racing pigeon speeds and performance metrics',
    icon: Bird,
    path: '/pigeon',
    color: 'red',
  },
];

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Calculator Suite</h1>
        <p className="text-xl text-gray-300">
          Precise calculations for audio engineering, finance, gaming, and sports
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {calculators.map((calc) => (
          <Link
            key={calc.path}
            to={calc.path}
            className="block bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start gap-4">
              <calc.icon className={`h-8 w-8 text-${calc.color}-500 shrink-0`} />
              <div>
                <h2 className="text-xl font-semibold mb-2">{calc.title}</h2>
                <p className="text-gray-300">{calc.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <article className="mt-16 prose prose-invert max-w-none">
        <h2>Professional Calculator Tools for Every Need</h2>
        <p>
          Welcome to our comprehensive suite of professional calculators, designed to provide precise calculations for various specialized fields. Whether you're an audio engineer working on speaker design, a financial planner calculating investment returns, a mobile gamer optimizing resources, or a pigeon racing enthusiast analyzing performance, our tools offer the accuracy and features you need.
        </p>
        
        <h3>Why Choose Our Calculators?</h3>
        <ul>
          <li>Professional-grade accuracy and precision</li>
          <li>User-friendly interfaces with real-time calculations</li>
          <li>Comprehensive results with detailed explanations</li>
          <li>Mobile-optimized for calculations on the go</li>
        </ul>

        <h3>Featured Tools</h3>
        <p>
          Our calculator suite includes specialized tools for audio engineering (Biradial Horn Design Calculator), financial planning (Share Certificate Calculator), mobile gaming (Lords Mobile Gem Calculator), and sports analytics (Pigeon Velocity Calculator). Each calculator is designed with input from industry experts to ensure reliable results for professional use.
        </p>
      </article>
    </div>
  );
}

export default Home;