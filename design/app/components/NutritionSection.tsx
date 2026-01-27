import { Apple, Brain, Sparkles, TrendingUp } from 'lucide-react';

const nutritionFeatures = [
  {
    icon: Brain,
    title: 'AI Meal Planning',
    description: 'Intelligent algorithms craft perfect nutrition strategies',
  },
  {
    icon: Apple,
    title: 'Gourmet Recipes',
    description: 'Chef-designed meals that fuel performance and taste amazing',
  },
  {
    icon: TrendingUp,
    title: 'Macro Optimization',
    description: 'Precision tracking for peak body composition',
  },
  {
    icon: Sparkles,
    title: 'Supplement Guide',
    description: 'Science-backed recommendations from experts',
  },
];

export function NutritionSection() {
  return (
    <section className="bg-gradient-to-b from-black to-slate-950 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-violet-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Image */}
          <div className="relative order-last lg:order-first">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-3xl blur-2xl"></div>
            
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1679087860517-5dc07e5a8050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ291cm1ldCUyMGZvb2R8ZW58MXx8fHwxNzY1NzQxNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gourmet healthy nutrition"
                className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/60 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-5 shadow-2xl">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-1.5 md:p-2 rounded-lg">
                  <Apple className="size-4 md:size-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400">Daily Macros</p>
                  <p className="text-sm md:text-lg font-bold text-white">Perfect</p>
                </div>
              </div>
              <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-5 py-1.5 md:py-2 mb-4 md:mb-6">
              <Sparkles className="size-3 md:size-4 text-emerald-400" />
              <span className="text-xs md:text-sm text-gray-300">Premium Nutrition</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Fuel Your <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Excellence</span>
            </h2>
            
            <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
              Transform your nutrition with AI-powered meal planning, gourmet recipes from 
              professional chefs, and personalized guidance that makes healthy eating effortless and delicious.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {nutritionFeatures.map((feature, index) => {
                const Icon = feature.icon;
                
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-emerald-500/50 transition-all group">
                    <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="size-5 md:size-6 text-emerald-400" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}