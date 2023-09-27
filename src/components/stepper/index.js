// components/StaticStepper.js
import React from 'react';

function StaticStepper({ steps, currentStep }) {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Static Stepper</h1>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 ${
              index === currentStep
                ? 'bg-blue-100 border-blue-500 text-blue-700'
                : 'bg-gray-100 border-gray-300 text-gray-700'
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">Step {index + 1}</h2>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaticStepper;
