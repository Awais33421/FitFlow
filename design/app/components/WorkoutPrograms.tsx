import { Dumbbell, Zap, Flame, Crown } from 'lucide-react';
import { Card } from './ui/card';

const programs = [
  {
    icon: Dumbbell,
    title: 'Elite Strength',
    description: 'Premium resistance training with AI-powered form analysis and progressive overload optimization.',
    image: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU3MDQwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-violet-600 to-purple-600',
    badge: 'Most Popular'
  },
  {
    icon: Flame,
    title: 'HIIT Performance',
    description: 'High-intensity metabolic conditioning designed by world-class trainers for maximum results.',
    image: 'https://images.unsplash.com/photo-1759476530066-94bee6a30c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGZhc2hpb24lMjBmaXRuZXNzfGVufDF8fHx8MTc2NTc0MTM5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-orange-600 to-red-600',
    badge: 'New'
  },
  {
    icon: Zap,
    title: 'Mind & Body Flow',
    description: 'Luxury wellness combining yoga, meditation, and mobility for holistic transformation.',
    image: 'https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHByZW1pdW18ZW58MXx8fHwxNzY1NzQxMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-emerald-600 to-teal-600',
    badge: 'Premium'
  },
];

export function WorkoutPrograms() {
  return (
    <section className="bg-black py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-fuchsia-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-5 py-1.5 md:py-2 mb-4 md:mb-6">
            <Crown className="size-3 md:size-4 text-yellow-400" />
            <span className="text-xs md:text-sm text-gray-300">Premium Programs</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            Elite Training <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Curated by world-renowned coaches and powered by cutting-edge technology
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 group relative">
                {/* Badge */}
                {program.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-3 md:px-4 py-1 md:py-1.5">
                    <span className="text-xs font-medium text-white">{program.badge}</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Icon with glow */}
                  <div className="absolute top-4 right-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} blur-xl opacity-50`}></div>
                    <div className={`relative bg-gradient-to-r ${program.gradient} w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center`}>
                      <Icon className="size-6 md:size-7 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    {program.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-5 md:mb-6">
                    {program.description}
                  </p>

                  <button className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white py-3 md:py-3.5 rounded-xl font-medium transition-all`}>
                    Explore Program
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}