import React, { ReactNode } from 'react';
import { Calculator } from 'lucide-react';

interface CalculatorLayoutProps {
  title: string;
  children: ReactNode;
  description?: string;
}

function CalculatorLayout({ title, children, description }: CalculatorLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        
        {description && (
          <p className="text-gray-300 mb-6">{description}</p>
        )}

        {children}
      </div>
    </div>
  );
}

export default CalculatorLayout;