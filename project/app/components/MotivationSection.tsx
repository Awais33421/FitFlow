import { Trophy, Award, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function MotivationSection() {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            Join the <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Elite Community</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-12 md:mb-16 leading-relaxed px-4">
            Track every achievement, celebrate every milestone, and transform your life 
            alongside thousands of dedicated athletes pursuing excellence.
          </p>

          {/* Premium Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-10 hover:border-violet-500/50 transition-all">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Trophy className="size-8 md:size-10 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2 md:mb-3">
                  500K+
                </h3>
                <p className="text-sm md:text-base text-gray-400">Goals Crushed</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-10 hover:border-fuchsia-500/50 transition-all">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-fuchsia-600 to-pink-600 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Award className="size-8 md:size-10 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-2 md:mb-3">
                  98%
                </h3>
                <p className="text-sm md:text-base text-gray-400">Success Rate</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-10 hover:border-orange-500/50 transition-all">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Zap className="size-8 md:size-10 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 md:mb-3">
                  2M+
                </h3>
                <p className="text-sm md:text-base text-gray-400">Workouts Completed</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 md:gap-6 px-4">
            <Button className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-500 hover:via-fuchsia-500 hover:to-pink-500 text-white h-14 md:h-16 px-10 md:px-12 gap-2 md:gap-3 shadow-2xl shadow-fuchsia-600/50 border-none text-base md:text-lg group w-full sm:w-auto">
              Start Your Transformation
              <ArrowRight className="size-5 md:size-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs md:text-sm text-gray-500">No credit card required • 14-day premium trial</p>
          </div>
        </div>
      </div>
    </section>
  );
}