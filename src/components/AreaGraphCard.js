import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for different areas
const areaData = {
  '6/F Lobby': [
    { day: 'Sun', visits: 100 },
    { day: 'Mon', visits: 120 },
    { day: 'Tue', visits: 110 },
    { day: 'Wed', visits: 50 },
    { day: 'Thur', visits: 0 },
    { day: 'Fri', visits: 0 },
    { day: 'Sat', visits: 0 },
  ],
  '6/F Activity Room': [
    { day: 'Sun', visits: 80 },
    { day: 'Mon', visits: 95 },
    { day: 'Tue', visits: 150 },
    { day: 'Wed', visits: 60 },
    { day: 'Thur', visits: 0 },
    { day: 'Fri', visits: 0 },
    { day: 'Sat', visits: 0 },
  ],
  '7/F Activity Room': [
    { day: 'Sun', visits: 110 },
    { day: 'Mon', visits: 130 },
    { day: 'Tue', visits: 90 },
    { day: 'Wed', visits: 40 },
    { day: 'Thur', visits: 0 },
    { day: 'Fri', visits: 0 },
    { day: 'Sat', visits: 0 },
  ],
};

const AreaGraphCard = ({ selectedArea }) => {
  const data = areaData[selectedArea] || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Area: <span className="font-bold text-gray-800">{selectedArea}</span>
      </h2>
      {/* Custom Legend */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-4 rounded-sm" style={{ backgroundColor: '#FAE9FB' }}></div>
          <span className="text-sm text-gray-600">Visits</span>
        </div>
      </div>
      
     <div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: '#e2e8f0' }} />
      <YAxis tickLine={false} axisLine={false} />
      <Tooltip 
        cursor={{ fill: 'rgba(239, 246, 255, 0.5)' }} 
        contentStyle={{ 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        }}
      />
      <Bar 
        dataKey="visits" 
        fill="#FAE9FB" 
        stroke="#e6cfe6" 
        strokeWidth={1.5} 
        barSize={50} 
        radius={[4, 4, 0, 0]} 
      />
    </BarChart>
  </ResponsiveContainer>
</div>

    </div>
  );
};

export default AreaGraphCard;
