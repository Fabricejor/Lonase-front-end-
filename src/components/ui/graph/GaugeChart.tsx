import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface GaugeChartProps {
  value: number; // valeur entre 0 et 100
  title?: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value, title = "Analyse Score" }) => {
  // Nous utilisons 2 segments pour créer l'effet de jauge
  const data = [
    { value: value },
    { value: 100 - value }, // segment restant pour compléter le demi-cercle
  ];

  // Définition des couleurs en fonction de la valeur
  const getColor = (value: number) => {
    if (value <= 30) return '#EF4444'; // rouge pour les valeurs faibles
    if (value <= 70) return '#F59E0B'; // orange pour les valeurs moyennes
    return '#10B981'; // vert pour les valeurs élevées
  };

  const mainColor = getColor(value);

  return (
    <div className="relative w-full max-w-xs mx-auto flex flex-col items-center justify-center">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      
      <div className="relative">
        <PieChart width={200} height={100}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill={mainColor} />
            <Cell fill="#E5E7EB" />
          </Pie>
        </PieChart>
        
        {/* Affichage de la valeur au centre */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 translate-y-[25%]  text-center">
          <span className="text-3xl font-bold text-gray-700">{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
