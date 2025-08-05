
// const socialLinks = [
//   {
//     name: "Twitter",
//     icon: (
//       <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
//         10.66 0 0 1 3 4s-4 9 5 13a11.64 
//         11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 
//         4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//       </svg>
//     ),
//     href: "#",
//   },
//   {
//     name: "YouTube",
//     icon: (
//       <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M10 15l5.19-3L10 9v6zm12-6.5s0-2.06-.84-2.97c-.77-.85-1.63-.85-2.02-.9C16.19 
//         5 12 5 12 5h0s-4.19 0-7.14.63c-.39.05-1.25.05-2.02.9C2 6.44 
//         2 8.5 2 8.5S2 10.56 2.84 11.47c.77.85 1.78.82 2.23.91C7.81 
//         13 12 13 12 13s4.19 0 7.14-.63c.39-.05 1.25-.05 
//         2.02-.9.84-.91.84-2.97.84-2.97z" />
//       </svg>
//     ),
//     href: "#",
//   },
//   {
//     name: "GitHub",
//     icon: (
//       <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2C6.48 2 2 6.48 2 12c0 
//         4.42 2.87 8.167 6.84 9.49.5.09.66-.217.66-.483 
//         0-.237-.01-1.022-.015-1.855-2.782.605-3.37-1.34-3.37-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.07-.608.07-.608 
//         1.004.07 1.533 1.032 1.533 1.032.89 1.523 2.34 1.084 
//         2.91.83.09-.645.35-1.085.635-1.335-2.22-.253-4.555-1.11-4.555-4.944 
//         0-1.092.39-1.987 1.03-2.688-.1-.253-.45-1.27.1-2.645 
//         0 0 .84-.27 2.75 1.025A9.56 9.56 0 0 1 12 6.8c.85.004 
//         1.71.114 2.51.334 1.91-1.295 2.75-1.025 
//         2.75-1.025.55 1.375.2 2.392.1 2.645.64.701 
//         1.03 1.596 1.03 2.688 0 3.842-2.34 4.688-4.57 
//         4.935.36.31.68.917.68 1.855 
//         0 1.338-.015 2.417-.015 2.747 0 .27.16.58.67.48A10.003 
//         10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
//       </svg>
//     ),
//     href: "#",
//   },
// ];

// const quickLinks = [
//   { name: "Privacy Policy", href: "#" },
//   { name: "Terms of Service", href: "#" },
//   { name: "Contact", href: "#" },
// ];

// const Footer = () => (
//   <footer className="left-0 right-0 bottom-0 z-20 w-full
//     bg-gradient-to-r from-blue-950/90 via-indigo-900/80 to-teal-900/80
//     backdrop-blur-xl border-t border-cyan-500/40 shadow-xl shadow-blue-900/10">
//     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-5 gap-4">
//       {/* Logo and Brand */}
//       <aside className="flex items-center gap-4">
//         <div className="relative group">
//           <span className="absolute -inset-2 block rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-700 to-pink-500 opacity-30 blur lg:group-hover:blur-xl transition-all duration-700 z-0" />
//           <svg
//             width="40" height="40" viewBox="0 0 24 24"
//             className="fill-purple-300 group-hover:fill-pink-300 transition-all duration-300 drop-shadow-lg z-10 relative"
//           >
//             <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
//           </svg>
//         </div>
//         <div className="text-xl font-bold tracking-tight text-white drop-shadow-md flex flex-col">
//           <span className="font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">DevHub</span>
//           <span className="text-xs text-purple-200">
//             © {new Date().getFullYear()} All rights reserved
//           </span>
//         </div>
//       </aside>

//       {/* Quick Navigation */}
//       <nav className="flex gap-6 text-purple-200 font-medium tracking-tight text-sm md:text-base flex-wrap items-center">
//         {quickLinks.map(link => (
//           <a
//             href={link.href}
//             key={link.name}
//             className="relative px-2 py-1 hover:text-pink-300 transition-colors after:block after:absolute after:h-0.5 after:w-0 after:left-1/2 after:bottom-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 group-hover:after:w-full group-hover:after:left-0 after:transition-all duration-200"
//           >
//             {link.name}
//           </a>
//         ))}
//       </nav>

//       {/* Social Icons */}
//       <nav className="flex items-center gap-5">
//         {socialLinks.map(({ name, icon, href }) => (
//           <a
//             key={name}
//             href={href}
//             className="group relative"
//             aria-label={name}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span className="sr-only">{name}</span>
//             <span className="absolute -inset-2 rounded-full bg-gradient-radial from-purple-700/80 to-pink-500/30 blur opacity-0 group-hover:opacity-70 transition-all duration-300" />
//             <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:scale-110 hover:shadow-xl transition-all duration-200 border border-purple-500/30">
//               {icon}
//             </span>
//             <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-purple-200 text-xs font-semibold px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-95 pointer-events-none transition-all duration-200">
//               {name}
//             </span>
//           </a>
//         ))}
//       </nav>
//     </div>
//     {/* Pulsing gradient top border */}
//     <div className="h-1 w-full bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-teal-300/20 animate-pulse opacity-60 blur-md"></div>
//   </footer>
// );

// export default Footer;









import React from 'react';

const socialLinks = [
  {
    name: "Twitter",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
        10.66 0 0 1 3 4s-4 9 5 13a11.64 
        11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 
        4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
    href: "https://twitter.com/yourhandle",
  },
  {
    name: "YouTube",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 15l5.19-3L10 9v6zm12-6.5s0-2.06-.84-2.97c-.77-.85-1.63-.85-2.02-.9C16.19 
        5 12 5 12 5h0s-4.19 0-7.14.63c-.39.05-1.25.05-2.02.9C2 6.44 
        2 8.5 2 8.5S2 10.56 2.84 11.47c.77.85 1.78.82 2.23.91C7.81 
        13 12 13 12 13s4.19 0 7.14-.63c.39-.05 1.25-.05 
        2.02-.9.84-.91.84-2.97.84-2.97z" />
      </svg>
    ),
    href: "https://youtube.com/yourchannel",
  },
  {
    name: "GitHub",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 
        4.42 2.87 8.167 6.84 9.49.5.09.66-.217.66-.483 
        0-.237-.01-1.022-.015-1.855-2.782.605-3.37-1.34-3.37-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.07-.608.07-.608 
        1.004.07 1.533 1.032 1.533 1.032.89 1.523 2.34 1.084 
        2.91.83.09-.645.35-1.085.635-1.335-2.22-.253-4.555-1.11-4.555-4.944 
        0-1.092.39-1.987 1.03-2.688-.1-.253-.45-1.27.1-2.645 
        0 0 .84-.27 2.75 1.025A9.56 9.56 0 0 1 12 6.8c.85.004 
        1.71.114 2.51.334 1.91-1.295 2.75-1.025 
        2.75-1.025.55 1.375.2 2.392.1 2.645.64.701 
        1.03 1.596 1.03 2.688 0 3.842-2.34 4.688-4.57 
        4.935.36.31.68.917.68 1.855 
        0 1.338-.015 2.417-.015 2.747 0 .27.16.58.67.48A10.003 
        10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
    href: "https://github.com/yourhandle",
  },
];

const quickLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="left-0 right-0 bottom-0 z-20 w-full
    bg-gradient-to-r from-blue-950/90 via-indigo-900/80 to-teal-900/80
    backdrop-blur-xl border-t border-cyan-500/40 shadow-xl shadow-blue-900/10">
    
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-5 gap-6">
      
      {/* Brand */}
      <aside className="flex items-center gap-4">
        <div className="relative group">
          <span className="absolute -inset-2 block rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-700 to-pink-500 opacity-30 blur lg:group-hover:blur-xl transition-all duration-700 z-0" />
          <svg
            width="40" height="40" viewBox="0 0 24 24"
            className="fill-purple-300 group-hover:fill-pink-300 transition-all duration-300 drop-shadow-lg z-10 relative"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
          </svg>
        </div>
        <div className="text-xl font-bold tracking-tight text-white drop-shadow-md flex flex-col">
          <span className="font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">DevHub</span>
          <span className="text-xs text-purple-200">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </aside>

      {/* Quick Links */}
      <nav className="flex gap-6 text-purple-200 font-medium tracking-tight text-sm md:text-base flex-wrap items-center">
        {quickLinks.map(link => (
          <a
            href={link.href}
            key={link.name}
            className="relative px-2 py-1 hover:text-pink-300 transition-colors group"
          >
            {link.name}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full group-hover:left-0 transition-all duration-200"></span>
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <nav className="flex items-center gap-5">
        {socialLinks.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            className="group relative"
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{name}</span>
            <span className="absolute -inset-2 rounded-full bg-gradient-radial from-purple-700/80 to-pink-500/30 blur opacity-0 group-hover:opacity-70 transition-all duration-300" />
            <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:scale-110 hover:shadow-xl transition-all duration-200 border border-purple-500/30">
              {icon}
            </span>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-purple-200 text-xs font-semibold px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-95 pointer-events-none transition-all duration-200">
              {name}
            </span>
          </a>
        ))}
      </nav>
    </div>

    {/* Gradient Pulse Border */}
    <div className="h-1 w-full bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-teal-300/20 animate-pulse opacity-60 blur-md"></div>
  </footer>
);

export default Footer;

