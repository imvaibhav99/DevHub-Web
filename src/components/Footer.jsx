// import React from 'react'

// const Footer = () => {
//   return (
//    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content fixed bottom-0">
//   <aside className="grid-flow-col items-center">
//     <svg
//       width="36"
//       height="36"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       className="fill-current">
//       <path
//         d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//     </svg>
//     <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
//   </aside>
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//       </svg>
//     </a>
//   </nav>
// </footer>
//   )
// }

// export default Footer;
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
    href: "#",
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
    href: "#",
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
    href: "#",
  },
];

const quickLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => (
  <footer className="left-0 right-0 bottom-0 z-20 w-full
    bg-gradient-to-r from-blue-950/90 via-indigo-900/80 to-teal-900/80
    backdrop-blur-xl border-t border-cyan-500/40 shadow-xl shadow-blue-900/10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-5 gap-4">
      {/* Logo and Brand */}
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

      {/* Quick Navigation */}
      <nav className="flex gap-6 text-purple-200 font-medium tracking-tight text-sm md:text-base flex-wrap items-center">
        {quickLinks.map(link => (
          <a
            href={link.href}
            key={link.name}
            className="relative px-2 py-1 hover:text-pink-300 transition-colors after:block after:absolute after:h-0.5 after:w-0 after:left-1/2 after:bottom-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 group-hover:after:w-full group-hover:after:left-0 after:transition-all duration-200"
          >
            {link.name}
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
    {/* Pulsing gradient top border */}
    <div className="h-1 w-full bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-teal-300/20 animate-pulse opacity-60 blur-md"></div>
  </footer>
);

export default Footer;
