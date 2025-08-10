import React from 'react';
import { Heart, Code, Users, Zap, Github, Coffee, Rocket, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardCarousel from './CardCarousel.jsx';


export default function DevHubLanding() {
const carouselImages = [
  { src: "/card/card1.png", alt: "Profile 1" },
  { src: "/card/card2.png", alt: "Profile 2" },
  { src: "/card/card3.png", alt: "Profile 3" },
];



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#17162a] via-purple-900 to-slate-950 text-white relative">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="navbar backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-md flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <a href="/" className="text-2xl font-bold ml-1 tracking-tight hover:underline hover:text-purple-200 transition select-none">
              DevHub
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="btn btn-ghost text-white hover:backdrop-blur-lg hover:bg-white/10 transition px-4 py-2 rounded-lg">
              Login
            </Link>
            <Link to="/signup" className="btn border-none bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg px-6 py-2 rounded-lg transition-all">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6 max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Find Your Perfect
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Dev Match
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Connect with developers who share your passion, skills, and interests. Whether you're looking for a coding buddy, project partner, or your next team member.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn btn-lg border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:ring-4 hover:ring-pink-300/30 hover:from-purple-600 hover:to-pink-600 text-white px-8 rounded-lg flex items-center gap-2 transition duration-150">
                <Heart className="w-5 h-5" />
                Start Matching
              </Link>
              <a href='#how-devhub-works' className="btn btn-lg btn-outline border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white px-8 bg-transparent rounded-lg flex items-center gap-2 transition">
                <Code className="w-5 h-5" />
                Learn More
              </a>
            </div>
            <div className="flex items-center space-x-10 text-purple-300 mt-10">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                {/* <span>10K+ Developers</span> */}
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                {/* <span>500+ Matches Daily</span> */}
              </div>
            </div>
          </div>

          {/* Right Column with Image and Carousel */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Main hero image */}
            <img
              src="/card/developerconsole.png"
              alt="DevHub matching interface"
              width={500}
              height={600}
              className="rounded-3xl shadow-[0_10px_60px_rgba(174,126,255,0.15)] border border-white/10"
              loading="lazy"
            />
            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl z-[-1]" />

            {/* Card Carousel below image */}
            <div className="w-full max-w-md">
              <CardCarousel
                images={carouselImages}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Why Developers Love DevHub</h2>
          <p className="text-xl text-gray-300">
            We understand what makes great developer connections. Our platform is built by developers, for developers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="card bg-white/10 border border-purple-500/30 shadow-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 rounded-3xl">
            <div className="card-body items-center text-center p-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">Skill-Based Matching</h3>
              <p className="text-gray-200">
                Match with developers based on programming languages, frameworks, and technical expertise that align with your interests.
              </p>
            </div>
          </div>
          <div className="card bg-white/10 border border-cyan-500/30 shadow-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 rounded-3xl">
            <div className="card-body items-center text-center p-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">GitHub Integration</h3>
              <p className="text-gray-200">
                Showcase your projects and contributions. Let your code speak for itself and find developers who appreciate your work.
              </p>
            </div>
          </div>
          <div className="card bg-white/10 border border-emerald-500/30 shadow-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 rounded-3xl">
            <div className="card-body items-center text-center p-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">Coffee Chat Ready</h3>
              <p className="text-gray-200">
                From virtual coffee chats to pair programming sessions, find developers ready to connect and collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 id="how-devhub-works"  className="text-4xl font-bold mb-6">How DevHub Works</h2>
          <p className="text-xl text-gray-300">Simple, intuitive, and designed for busy developers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="text-center px-4">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg text-white font-bold text-3xl">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4">Create Your Profile</h3>
            <p className="text-gray-300 max-w-xs mx-auto">
              Showcase your skills, interests, and what you're looking for in a dev connection.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg text-white font-bold text-3xl">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4">Swipe & Match</h3>
            <p className="text-gray-300 max-w-xs mx-auto">
              Browse developer profiles and swipe right on those who spark your interest.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg text-white font-bold text-3xl">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4">Connect & Code</h3>
            <p className="text-gray-300 max-w-xs mx-auto">
              Start conversations, share projects, and build meaningful developer relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center backdrop-blur-md border border-purple-500/30 shadow-2xl max-w-4xl mx-auto">
          <Rocket className="w-16 h-16 text-purple-300 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dev Match?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already connecting, collaborating, and building amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/signup" className="btn btn-lg border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:ring-4 hover:ring-pink-200/20 hover:from-purple-600 hover:to-pink-600 text-white px-10 rounded-lg transition-all duration-150 flex items-center gap-3">
              <Heart className="w-6 h-6" />
              Sign Up Free
            </Link>
            <Link to="/login" className="btn btn-lg btn-outline border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:text-white px-10 bg-transparent rounded-lg transition-all duration-150">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 border-t border-slate-700 backdrop-blur-xl bg-white/5 mt-16 rounded-t-3xl max-w-full">
        <aside>
          <div className="flex items-center space-x-3 mb-4 md:mb-0 justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white select-none tracking-wide">DevHub</span>
          </div>
          <p className="text-gray-300 text-center mt-2">
            © {new Date().getFullYear()} DevHub. Made with ❤️ for developers, by developers.
          </p>
        </aside>
        <nav className="grid grid-flow-col gap-6 justify-center mt-4 text-purple-300">
          <a href="#" className="link link-hover hover:text-purple-400 transition">Privacy</a>
          <a href="#" className="link link-hover hover:text-purple-400 transition">Terms</a>
          <a href="#" className="link link-hover hover:text-purple-400 transition">Support</a>
        </nav>
      </footer>
    </div>
  );
}
