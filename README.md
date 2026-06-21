# Timesheet Management Application

A Next.js application for managing timesheets with filtering, date range selection, and detailed time tracking capabilities.

## Setup Instructions

### Prerequisites

- Node.js (v20 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure the following variables:

```bash
cp .env.example .env.local
```

Required environment variables:

- `NEXTAUTH_SECRET` - Secret key for NextAuth.js (generate with `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`)
- `NEXTAUTH_URL` - Your application URL (e.g., `http://localhost:3000` for local development)

### Deployment

#### Netlify

1. Connect your repository to Netlify
2. Set environment variables in Netlify dashboard:
   - `NEXTAUTH_SECRET` - Your generated secret key
   - `NEXTAUTH_URL` - Your Netlify site URL
3. Deploy automatically on push to main branch

## Frameworks and Libraries Used

### Core Framework

- **Next.js 16.2.9** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety

### UI Components & Styling

- **@mui/material 9.1.1** - Material-UI component library
- **@mui/x-date-pickers 9.6.0** - Date picker components
- **TailwindCSS 4** - Utility-first CSS framework
- **@emotion/react 11.14.0** - CSS-in-JS library
- **@emotion/styled 11.14.1** - Styled components

### Utilities

- **dayjs 1.11.21** - Date manipulation library
- **axios 1.18.0** - HTTP client
- **react-icons 5.6.0** - Icon library
- **react-hot-toast 2.6.0** - Toast notifications

### Form Handling

- **formik 2.4.9** - Form management
- **yup 1.7.1** - Schema validation

### Authentication

- **next-auth 4.24.14** - Authentication solution

## Project Structure

```
my-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── timesheets/    # Timesheet endpoints
│   ├── dashboard/         # Dashboard page
│   └── timesheets/        # Timesheet pages
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── common/           # Shared components (Button, Dropdown, etc.)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── timesheet/        # Timesheet-related components
│   └── timesheet-detail/ # Timesheet detail components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── mocks/                # Mock data for development
├── services/             # API service layer
├── types/                # TypeScript type definitions
└── constants/            # Application constants
```

## Key Features

- **Timesheet Management**: View, create, and update timesheets
- **Date Range Filtering**: Filter timesheets by date range with custom date picker
- **Status Filtering**: Filter by timesheet status (COMPLETED, INCOMPLETE, MISSING)
- **Pagination**: Paginated table view with configurable rows per page
- **Responsive Design**: Mobile-friendly interface using TailwindCSS
- **Mock Data**: Comprehensive mock data covering 25 weeks of 2026

## Assumptions and Notes

### Date Handling

- All dates are stored in ISO 8601 format (UTC)
- Date filtering normalizes dates to UTC midnight for consistent comparison
- Week numbering follows ISO standards (Monday as first day of week)
- Future dates are disabled in the date picker to prevent invalid selections

### Mock Data

- Mock data covers 25 weeks from December 29, 2025 to June 19, 2026
- Each week represents Monday-Friday workdays
- Timesheet status is calculated based on total hours vs target hours (40 hours)
- Status logic:
  - 0 hours = MISSING
  - > = 40 hours = COMPLETED
  - < 40 hours = INCOMPLETE

### API Routes

- API routes include a 500ms delay to simulate network latency
- All timesheet data is currently mocked (no database integration)
- Date range filtering uses overlap logic to include any week that intersects with the selected range

### Component Architecture

- Custom dropdown component replaces native select elements for consistent styling
- Material-UI Dialog component used for modals with custom styling via sx prop
- Icons from react-icons library (IoIos family)
- Status badges with color-coded indicators

## Time Spent

The following features were implemented during development:

1. **AddEntryModal Component** - Fixed TypeScript error, replaced native selects with CustomDropdown, added icons for hour adjustment, integrated with TimesheetTable
2. **CustomDropdown Component** - Added placeholder functionality
3. **TimesheetFilters Component** - Added close icons for clear buttons
4. **DateRangePicker Component** - Disabled future dates, improved cursor styling
5. **Mock Data Updates** - Updated all dates from 2024 to 2026, corrected week dates to match actual 2026 calendar, extended data through June 2026
6. **API Route** - Fixed date filtering logic with UTC normalization

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Material-UI Documentation](https://mui.com/) - component library documentation
- [TailwindCSS Documentation](https://tailwindcss.com/) - utility-first CSS framework
- [Day.js Documentation](https://day.js.org/) - lightweight date manipulation library

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
