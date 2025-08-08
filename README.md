DevHub Frontend:
DevHub is the frontend application for a developer matching platform, inspired by social apps like Tinder but tailored for developers. It provides an intuitive user interface for creating profiles, browsing feeds, editing details, sending requests, and more. This frontend integrates with the DevHub backend to deliver a seamless experience.

Live Demo: http://16.171.33.78/

Features
User authentication and session management (login/signup/logout)

Profile creation, viewing, and editing with live previews

Feed generation for potential developer matches (Tinder-style single-card display)

Sending interest or ignore requests to other users

Social link validation and storage (GitHub, LinkedIn, X, LeetCode, GFG)

Error handling and validation for user inputs

Payment Integration (for premium features like boosted profiles)

Real-time messaging (for matched users to chat)

Responsive UI with animations, carousels, and modern design elements


Tech Stack
Framework: React.js

State Management: Redux

HTTP Client: Axios

Styling: Tailwind CSS

Icons: Lucide React

Routing: React Router

Other Libraries: React Intersection Observer (for infinite scrolling), Socket.IO (for real-time messaging), Stripe (for payment integration)

Build Tool: Vite

Prerequisites
Node.js (v14 or higher)

npm or yarn package manager

Access to the DevHub backend API (running locally or deployed)

Installation
Clone the repository:

git clone https://github.com/imvaibhav99/DevHub-Web.git
cd DevHub-Web
Install dependencies:


npm install
Set up environment variables: Create a .env file in the root directory with the following:

VITE_BASE_URL=http://your-backend-url (e.g., http://localhost:5000)
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
Running the Application
Start the development server:


npm run dev
The app will be available at http://localhost:5173.

Build for production:


npm run build
Deploy the dist folder to a hosting service like Vercel or Netlify.

 DevHub Backend :https://github.com/imvaibhav99/DevHub