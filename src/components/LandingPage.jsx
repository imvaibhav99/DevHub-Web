import React from 'react';
import { Heart, Code, Users, Zap, Github, Coffee, Rocket, Star } from "lucide-react";
import NetworkBackground from './NetworkBackground';

export default function DevHubLanding() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-transparent">
      {/* 3D Background */}
      <NetworkBackground />
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 z-20 relative">
        <div className="navbar backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-md">
          <div className="navbar-start">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <a href="/" className="text-2xl font-bold ml-1 tracking-tight">DevHub</a>
            </div>
          </div>
          <div className="navbar-end flex items-center space-x-4">
            <button className="btn btn-ghost text-white hover:backdrop-blur-lg hover:bg-white/10 transition">
              Login
            </button>
            <button className="btn border-none bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block badge badge-outline border-purple-500/50 bg-white/5 text-purple-200 backdrop-blur-md p-3 shadow-md">
                🚀 Now in Beta
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_5px_30px_rgba(199,89,255,0.3)]">
                Find Your Perfect
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Dev Match
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                Connect with developers who share your passion, skills, and interests. Whether you're looking for a
                coding buddy, project partner, or your next team member.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-lg border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:ring-4 hover:ring-pink-200/20 hover:from-purple-600 hover:to-pink-600 text-white px-8 transition-all duration-150">
                <Heart className="w-5 h-5 mr-2" />
                Start Matching
              </button>
              <button className="btn btn-lg btn-outline border-purple-500 text-purple-200 hover:bg-purple-500/10 hover:text-white px-8 bg-transparent transition">
                <Code className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
            <div className="flex items-center space-x-10 text-purple-300 mt-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>10K+ Developers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>500+ Matches Daily</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 drop-shadow-2xl">
              <img
                src="https://placehold.co/500x600/1a1a2e/ffffff?text=Developer+Matching+Interface"
                alt="DevHub matching interface"
                width={500}
                height={600}
                className="rounded-3xl shadow-[0_10px_60px_rgba(174,126,255,0.15)] border border-white/10"
              />
              {/* Subtle glassy overlays */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl z-[-1]" />
              <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl z-[-1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-[0_5px_30px_rgba(183,124,255,0.15)]">Why Developers Love DevHub</h2>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            We understand what makes great developer connections. Our platform is built by developers, for developers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Glassmorphic Cards */}
          <div className="card bg-white/5 border border-purple-500/20 shadow-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">
            <div className="card-body items-center text-center p-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">Skill-Based Matching</h3>
              <p className="text-gray-200">Match with developers based on programming languages, frameworks, and technical expertise that align with your interests.</p>
            </div>
          </div>
          <div className="card bg-white/5 border border-cyan-500/20 shadow-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">
            <div className="card-body items-center text-center p-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">GitHub Integration</h3>
              <p className="text-gray-200">Showcase your projects and contributions. Let your code speak for itself and find developers who appreciate your work.</p>
            </div>
          </div>
          <div className="card bg-white/5 border border-emerald-500/20 shadow-xl backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">
            <div className="card-body items-center text-center p-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">Coffee Chat Ready</h3>
              <p className="text-gray-200">From virtual coffee chats to pair programming sessions, find developers ready to connect and collaborate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How DevHub Works</h2>
          <p className="text-xl text-gray-300">Simple, intuitive, and designed for busy developers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Create Your Profile</h3>
            <p className="text-gray-300">
              Showcase your skills, interests, and what you're looking for in a dev connection.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Swipe & Match</h3>
            <p className="text-gray-300">
              Browse developer profiles and swipe right on those who spark your interest.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Connect & Code</h3>
            <p className="text-gray-300">
              Start conversations, share projects, and build meaningful developer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Loved by Developers Worldwide</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Cards With Glow Hover */}
          {[
            {
              quote: "Found my perfect coding partner through DevHub. We've built 3 projects together!",
              user: "Sarah Chen",
              desc: "Full Stack Developer",
              color: "from-purple-500 to-pink-500",
              initial: "S"
            },
            {
              quote: "Amazing platform! Connected with developers who share my passion for AI and ML.",
              user: "Marcus Johnson",
              desc: "ML Engineer",
              color: "from-blue-500 to-cyan-500",
              initial: "M"
            },
            {
              quote: "Great for finding mentors and mentees. The skill matching is spot on!",
              user: "Alex Rivera",
              desc: "Senior Developer",
              color: "from-green-500 to-emerald-500",
              initial: "A"
            },
          ].map((t, i) => (
            <div key={i} className="card bg-white/10 border border-white/10 shadow-xl backdrop-blur-xl transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="card-body p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4">{t.quote}</p>
                <div className="flex items-center">
                  <div className={`avatar placeholder mr-3`}>
                    <div className={`bg-gradient-to-r ${t.color} text-neutral-content rounded-full w-10 h-10 shadow-lg flex items-center justify-center`}>
                      <span className="text-white font-bold">{t.initial}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{t.user}</p>
                    <p className="text-gray-400 text-sm">{t.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center backdrop-blur-md border border-purple-500/30 shadow-2xl">
          <Rocket className="w-16 h-16 text-purple-300 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dev Match?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already connecting, collaborating, and building amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-lg border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:ring-4 hover:ring-pink-200/20 hover:from-purple-600 hover:to-pink-600 text-white px-8 transition-all duration-150">
              <Heart className="w-5 h-5 mr-2" />
              Sign Up Free
            </button>
            <button className="btn btn-lg btn-outline border-purple-500 text-purple-200 hover:bg-purple-500/10 hover:text-white px-8 bg-transparent transition">
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 border-t border-slate-700 backdrop-blur-xl bg-white/5">
        <aside>
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">DevHub</span>
          </div>
          <p className="text-gray-300">&copy; 2024 DevHub. Made with ❤️ for developers, by developers.</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-purple-200">
            <a href="#" className="link link-hover hover:text-purple-300 transition-colors">Privacy</a>
            <a href="#" className="link link-hover hover:text-purple-300 transition-colors">Terms</a>
            <a href="#" className="link link-hover hover:text-purple-300 transition-colors">Support</a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
