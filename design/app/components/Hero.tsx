import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative bg-black py-16 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-fuchsia-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-5 py-2 md:py-2.5">
              <Star className="size-3 md:size-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs md:text-sm text-gray-300">Trusted by 100K+ Elite Athletes</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Body & Mind
              </span>
              <br />
              <span className="text-white">with FitFlow</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Experience the future of fitness with AI-powered personalized workouts, 
              elite nutrition coaching, and a premium community dedicated to excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white h-12 md:h-14 px-8 md:px-10 gap-2 shadow-2xl shadow-violet-600/50 border-none group">
                Start Your Journey
                <ArrowRight className="size-4 md:size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="h-12 md:h-14 px-8 md:px-10 bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20">
                Explore Programs
              </Button>
            </div>

            {/* Premium Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 lg:gap-12 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  500K+
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Active Members</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Success Rate</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/10"></div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="size-5 md:size-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    4.9
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Premium Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/50 to-fuchsia-600/50 rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1757924284732-4189190321cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmaXRuZXNzJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NTc0MTM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury fitness training"
                className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-black/60 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-lg opacity-50"></div>
                  <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 p-2 md:p-3 rounded-lg md:rounded-xl">
                    <Sparkles className="size-4 md:size-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Your Progress</p>
                  <p className="text-lg md:text-2xl font-bold text-white">+450 Cal</p>
                  <p className="text-[10px] md:text-xs text-emerald-400">↑ 23% from yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}