# CityU Optimus Dashboard

A responsive dashboard webpage for CityU Student Development Services built with React and Tailwind CSS.

## Features

### 1. Header Section
- Welcome message with "Optimus" highlighted in blue
- Current date display in format: "30 July 2025, Wednesday"
- Clean, modern typography

### 2. Total Visits Today Section
- 3 green cards displaying visit counts for different areas:
  - 6/F Lobby 👤 54
  - 6/F Activity Rooms 👤 32
  - 7/F Activity Rooms 👤 24
- Responsive grid layout

### 3. Select Area Card
- Dynamic dropdown system with 3 levels:
  - **Building**: BOC Building
  - **Floor**: 6/F, 7/F
  - **Area**: Dynamic based on floor selection
    - 6/F: 6/F Lobby, 6/F Activity Room
    - 7/F: 7/F Activity Room

### 4. Area Graph Card
- Bar chart showing visits by weekday
- Dynamic data based on selected area
- Custom styling matching the design
- Purple/pink bars with rounded corners
- Interactive tooltips

### 5. Reports Section
- Date range picker with calendar icons
- Professional date input styling
- Excel export functionality
- Generate reports with dummy visit data

### 6. Excel Export Features
- Exports data in .xlsx format using SheetJS
- Includes columns: Device_ID, Area_Name, Date, Visit
- Dynamic filename with date range
- Realistic dummy data generation

## Technology Stack

- **React 19.x** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Recharts** - Chart visualization
- **react-datepicker** - Date selection components
- **xlsx/SheetJS** - Excel file generation
- **@heroicons/react** - Icons
- **date-fns** - Date formatting

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── Header.js              # Welcome header with date
│   ├── TotalVisitsCards.js    # Green visit count cards
│   ├── SelectAreaCard.js      # Dynamic dropdowns
│   ├── AreaGraphCard.js       # Bar chart visualization
│   └── ReportsSection.js      # Date pickers & Excel export
├── App.js                     # Main application component
├── index.js                   # React entry point
└── index.css                  # Global styles & Tailwind
```

## Features Demonstrated

✅ Responsive design (mobile-first approach)
✅ Modern UI with shadows, rounded corners, hover effects
✅ Dynamic data visualization
✅ Interactive form controls
✅ File export functionality
✅ Clean component organization
✅ Accessibility considerations
✅ Professional styling matching design specifications

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

The dashboard is fully responsive and works seamlessly across all device sizes.
