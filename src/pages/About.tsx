import React from 'react';
import { Calculator, Heart } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="h-8 w-8 text-red-500" />
          <h1 className="text-3xl font-bold">About CalcHub</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="lead">
            CalcHub is your go-to destination for specialized calculators that cater
            to unique professional and hobby needs. Our mission is to provide
            accurate, user-friendly calculation tools for various fields.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded by a team of engineers and developers passionate about
            precision and usability, CalcHub began as a project to create better
            tools for specific calculations that weren't well-served by existing
            solutions.
          </p>

          <h2>Our Calculators</h2>
          <ul>
            <li>
              <strong>Biradial Horn Calculator:</strong> For audio professionals
              designing speaker systems
            </li>
            <li>
              <strong>Share Certificate Calculator:</strong> For financial planning
              and investment analysis
            </li>
            <li>
              <strong>Lords Mobile Gem Calculator:</strong> For gaming resource
              optimization
            </li>
            <li>
              <strong>Pigeon Velocity Calculator:</strong> For racing enthusiasts
              and trainers
            </li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            We are committed to providing:
          </p>
          <ul>
            <li>Accurate calculations based on proven formulas</li>
            <li>User-friendly interfaces</li>
            <li>Mobile-optimized experience</li>
            <li>Regular updates and improvements</li>
            <li>Educational resources and documentation</li>
          </ul>

          <h2>Join Our Community</h2>
          <p>
            We welcome feedback and suggestions from our users. Your input helps us
            improve our calculators and develop new tools that serve your needs
            better.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;