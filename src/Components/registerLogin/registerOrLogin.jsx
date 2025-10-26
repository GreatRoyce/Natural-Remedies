import React from "react";
import { Link } from "react-router-dom";
import { Leaf, BookOpen, Heart, Users, Shield, Sparkles } from "lucide-react";

function ToRegOrLog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-white to-brand-secondary/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="text-brand-clay h-10 w-10 mr-2" />
            <h1 className="text-4xl font-bold text-brand-secondary">Natural Remedies</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover nature's healing power with our curated collection of traditional remedies
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-brand-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="text-brand-clay h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Traditional Wisdom</h3>
            <p className="text-gray-600">Access centuries-old remedies that have stood the test of time and cultural practice.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-brand-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Heart className="text-brand-clay h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Natural Solutions</h3>
            <p className="text-gray-600">Explore gentle, plant-based approaches to common ailments and wellness support.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-brand-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-brand-clay h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Community Knowledge</h3>
            <p className="text-gray-600">Learn from a community sharing traditional remedies and personal experiences.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-center text-brand-secondary mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-clay">1</span>
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">Create Account</h3>
              <p className="text-gray-600">Join our community of natural wellness enthusiasts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-clay">2</span>
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">Explore Remedies</h3>
              <p className="text-gray-600">Browse our extensive database of natural solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-clay">3</span>
              </div>
              <h3 className="font-semibold text-brand-secondary mb-2">Track & Save</h3>
              <p className="text-gray-600">Save your favorite remedies and track what works for you</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-brand-secondary/5 rounded-2xl p-8 mb-12">
          <Sparkles className="h-12 w-12 text-brand-clay mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brand-secondary mb-4">Join Our Community Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Unlock access to hundreds of traditional remedies, save your favorites, 
            and contribute to our growing knowledge base of natural wellness solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 py-6">
            <Link
              to="/login"
              className="px-8 py-3 rounded-2xl bg-brand-secondary text-white font-semibold shadow-md hover:bg-brand-clay transition-all duration-300 flex items-center"
            >
              Login to Your Account
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 rounded-2xl bg-brand-clay text-white font-semibold shadow-md hover:bg-brand-secondary transition-all duration-300 flex items-center"
            >
              Create New Account
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed p-4 border-t border-gray-200">
          <Shield className="h-4 w-4 mx-auto mb-2" />
          This platform is focused on natural and traditional remedies, not regular Western medical practice. 
          The content is provided for educational purposes only and is not a substitute for professional 
          medical advice, diagnosis, or treatment.
        </div>
      </div>
    </div>
  );
}

export default ToRegOrLog;