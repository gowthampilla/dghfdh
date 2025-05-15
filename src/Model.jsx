import React, { useState } from 'react';

import './Model.css';

const neurons = [
  { id: 1, x: 10, y: 40, label: 'Input Layer', info: 'Processes raw data input.' },
  { id: 2, x: 30, y: 20, label: 'Hidden Layer 1', info: 'Learns patterns & features.' },
  { id: 3, x: 30, y: 60, label: 'Hidden Layer 2', info: 'Detects deeper features.' },
  { id: 4, x: 50, y: 40, label: 'Hidden Layer 3', info: 'Combines complex features.' },
  { id: 5, x: 70, y: 40, label: 'Output Layer', info: 'Outputs predictions.' },
];

const connections = [
  [1, 2], [1, 3],
  [2, 4], [3, 4],
  [4, 5]
];

const NeuralNetworkSection = () => {
  const [hoveredNeuron, setHoveredNeuron] = useState(null);

  return (
    <section className="neural-section" id="model">
      <h2 className="neural-title">How Our AI Model Works</h2>
      <div className="neural-network-container">
        <svg className="neural-svg" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
          {connections.map(([fromId, toId], idx) => {
            const from = neurons.find(n => n.id === fromId);
            const to = neurons.find(n => n.id === toId);
            return (
              <motion.line
                key={idx}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#ccc"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              />
            );
          })}
          {neurons.map(neuron => (
            <motion.circle
              key={neuron.id}
              cx={neuron.x}
              cy={neuron.y}
              r="2"
              fill={hoveredNeuron === neuron.id ? '#00f2ff' : '#fff'}
              stroke="#00f2ff"
              strokeWidth="0.3"
              onMouseEnter={() => setHoveredNeuron(neuron.id)}
              onMouseLeave={() => setHoveredNeuron(null)}
              whileHover={{ scale: 1.4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </svg>

        {hoveredNeuron && (
          <div className="tooltip">
            <h4>{neurons.find(n => n.id === hoveredNeuron)?.label}</h4>
            <p>{neurons.find(n => n.id === hoveredNeuron)?.info}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NeuralNetworkSection;
