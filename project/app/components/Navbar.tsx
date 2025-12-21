import { Dumbbell, Sparkles, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 p-2 md:p-2.5 rounded-xl md:rounded-2xl">
                <Dumbbell className="size-5 md:size-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
                FitFlow
              </span>
              <div className="flex items-center gap-1">
                <Sparkles className="size-2 md:size-3 text-violet-400" />
                <span className="text-[10px] md:text-xs text-violet-400 font-medium tracking-wider uppercase">Premium</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <a href="#home" className="text-gray-300 hover:text-white transition-all relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#workouts" className="text-gray-300 hover:text-white transition-all relative group">
              Workouts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#nutrition" className="text-gray-300 hover:text-white transition-all relative group">
              Nutrition
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#community" className="text-gray-300 hover:text-white transition-all relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-none shadow-lg shadow-violet-600/30">
              Join Elite
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#workouts"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Workouts
              </a>
              <a
                href="#nutrition"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nutrition
              </a>
              <a
                href="#community"
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <div className="flex flex-col gap-3 px-4 pt-2">
                <Button variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10">
                  Login
                </Button>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-none">
                  Join Elite
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}