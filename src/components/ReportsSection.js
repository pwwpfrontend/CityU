import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as XLSX from 'xlsx';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

const ReportsSection = () => {
  const [startDate, setStartDate] = useState(new Date('2025-07-16'));
  const [endDate, setEndDate] = useState(new Date('2025-07-16'));

  // Dummy visit data for export
  const generateDummyData = () => {
    const devices = [
      'CITYU-SDS-FF-01',
      'CITYU-SDS-FF-02',  
      'CITYU-SDS-FF-03'
    ];
    
    const areas = [
      '6/F Lobby',
      '6/F Activity Rooms',
      '7/F Activity Rooms'
    ];

    const data = [];
    
    // Generate data for date range
    const current = new Date(startDate);
    const end = new Date(endDate);
    
    while (current <= end) {
      devices.forEach((device, deviceIndex) => {
        const baseVisits = [184, 168, 156]; // Different base visits for each device
        const variance = Math.floor(Math.random() * 50) - 25; // ±25 variance
        const visits = Math.max(0, baseVisits[deviceIndex] + variance);
        
        data.push({
          Device_ID: device,
          Area_Name: areas[deviceIndex],
          Date: format(current, 'd MMMM yyyy, EEE'),
          Visit: visits
        });
      });
      
      current.setDate(current.getDate() + 1);
    }
    
    return data;
  };

  const handleGenerateReport = () => {
    const data = generateDummyData();
    
    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    
    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Visits Report');
    
    // Generate filename with date range
    const startDateStr = format(startDate, 'yyyy-MM-dd');
    const endDateStr = format(endDate, 'yyyy-MM-dd');
    const filename = `CityU_Visits_Report_${startDateStr}_to_${endDateStr}.xlsx`;
    
    // Save file
    XLSX.writeFile(wb, filename);
  };

  const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
    <div className="relative">
      <input
        type="text"
        value={value}
        onClick={onClick}
        ref={ref}
        placeholder={placeholder}
        readOnly
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      />
      <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  ));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Reports</h2>
      <p className="text-gray-600 mb-8 text-left">Please select a date range</p>
      
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        {/* Date Pickers */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput placeholder="Start date" />}
              dateFormat="MMM dd, yyyy"
            />
          </div>
          
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              customInput={<CustomInput placeholder="End date" />}
              dateFormat="MMM dd, yyyy"
            />
          </div>
        </div>
        
        {/* Generate Report Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleGenerateReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
