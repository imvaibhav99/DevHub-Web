import React from 'react';
import { Heart, Code, Users, Zap, Github, Coffee, Rocket, Star } from "lucide-react";

export default function DevHubLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <a href="/" className="text-2xl font-bold">DevHub</a>
            </div>
          </div>
          <div className="navbar-end flex items-center space-x-4">
            <button className="btn btn-ghost hover:text-purple-300">
              Login
            </button>
            <button className="btn border-none bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="badge badge-outline border-purple-500/30 bg-purple-500/20 text-purple-300 p-3">🚀 Now in Beta</div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Dev Match
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Connect with developers who share your passion, skills, and interests. Whether you're looking for a
                coding buddy, project partner, or your next team member.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn btn-lg border-none bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
              >
                <Heart className="w-5 h-5 mr-2" />
                Start Matching
              </button>
              <button
                className="btn btn-lg btn-outline border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 bg-transparent"
              >
                <Code className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 text-gray-400">
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
            <div className="relative z-10">
              <img
                src="https://placehold.co/500x600/1a1a2e/ffffff?text=Developer+Matching+Interface"
                alt="DevHub matching interface"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Developers Love DevHub</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We understand what makes great developer connections. Our platform is built by developers, for developers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">Skill-Based Matching</h3>
              <p className="text-gray-300">
                Match with developers based on programming languages, frameworks, and technical expertise that align
                with your interests.
              </p>
            </div>
          </div>

          <div className="card bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">GitHub Integration</h3>
              <p className="text-gray-300">
                Showcase your projects and contributions. Let your code speak for itself and find developers who
                appreciate your work.
              </p>
            </div>
          </div>

          <div className="card bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-2xl font-bold mb-4">Coffee Chat Ready</h3>
              <p className="text-gray-300">
                From virtual coffee chats to pair programming sessions, find developers ready to connect and
                collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How DevHub Works</h2>
          <p className="text-xl text-gray-300">Simple, intuitive, and designed for busy developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Create Your Profile</h3>
            <p className="text-gray-300">
              Showcase your skills, interests, and what you're looking for in a dev connection.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Swipe & Match</h3>
            <p className="text-gray-300">Browse developer profiles and swipe right on those who spark your interest.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
          <h2 className="text-4xl font-bold text-white mb-4">Loved by Developers Worldwide</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <div className="card-body p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Found my perfect coding partner through DevHub. We've built 3 projects together!"
              </p>
              <div className="flex items-center">
                <div className="avatar placeholder mr-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-neutral-content rounded-full w-10 h-10">
                        <span className="text-white font-bold">S</span>
                    </div>
                </div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <div className="card-body p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Amazing platform! Connected with developers who share my passion for AI and ML."
              </p>
              <div className="flex items-center">
                <div className="avatar placeholder mr-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-neutral-content rounded-full w-10 h-10">
                        <span className="text-white font-bold">M</span>
                    </div>
                </div>
                <div>
                  <p className="font-semibold">Marcus Johnson</p>
                  <p className="text-gray-400 text-sm">ML Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <div className="card-body p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Great for finding mentors and mentees. The skill matching is spot on!"
              </p>
              <div className="flex items-center">
                <div className="avatar placeholder mr-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-neutral-content rounded-full w-10 h-10">
                        <span className="text-white font-bold">A</span>
                    </div>
                </div>
                <div>
                  <p className="font-semibold">Alex Rivera</p>
                  <p className="text-gray-400 text-sm">Senior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center backdrop-blur-sm border border-purple-500/30">
          <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dev Match?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already connecting, collaborating, and building amazing things
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn btn-lg border-none bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
            >
              <Heart className="w-5 h-5 mr-2" />
              Sign Up Free
            </button>
            <button
              className="btn btn-lg btn-outline border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 bg-transparent"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 border-t border-slate-700">
        <aside>
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">DevHub</span>
            </div>
          <p>&copy; 2024 DevHub. Made with ❤️ for developers, by developers.</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="link link-hover hover:text-purple-300 transition-colors">Privacy</a>
            <a href="#" className="link link-hover hover:text-purple-300 transition-colors">Terms</a>
            <a href="#" className="link link-hover hover:text-purple-300 transition-colors">Support</a>
          </div>
        </nav>
      </footer>
    </div>
  )
}

