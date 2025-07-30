import React from 'react';

const TotalVisitsCards = () => {
  const visitsData = [
    { area: '6/F Lobby', visits: 54 },
    { area: '6/F Activity Rooms', visits: 32 },
    { area: '7/F Activity Rooms', visits: 24 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Total Visits Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visitsData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg p-6 text-white text-center hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#5CBE81' }}
          >
            <div className="font-medium text-lg mb-2">{item.area}</div>
            <div className="text-2xl font-bold flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>{item.visits}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalVisitsCards;
