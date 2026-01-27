import { Dumbbell, Apple, Heart, Target, Trophy, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const features = [
  {
    icon: Dumbbell,
    title: 'Custom Workouts',
    description: 'Tailored exercise plans designed specifically for your fitness level and goals.',
    color: 'blue',
  },
  {
    icon: Apple,
    title: 'Nutrition Plans',
    description: 'Expert meal planning and nutritional guidance to fuel your body right.',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Health Tracking',
    description: 'Monitor your progress with comprehensive health and fitness metrics.',
    color: 'red',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set achievable milestones and track your journey to success.',
    color: 'purple',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description: 'Earn badges and rewards as you hit your fitness milestones.',
    color: 'yellow',
  },
  {
    icon: Zap,
    title: 'Quick Routines',
    description: 'Time-efficient workouts for busy schedules without compromising results.',
    color: 'orange',
  },
];

const colorClasses: Record<string, { bg: string; icon: string; button: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
  green: { bg: 'bg-green-50', icon: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
  red: { bg: 'bg-red-50', icon: 'text-red-600', button: 'bg-red-600 hover:bg-red-700' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
  yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', button: 'bg-yellow-600 hover:bg-yellow-700' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700' },
};

export function FeaturesCards() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            FitFlow provides all the tools and support you need to transform your fitness journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];
            
            return (
              <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-shadow border-gray-200">
                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`size-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl md:text-2xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-white mb-4">
            Ready to Transform Your Body?
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already achieved their fitness goals with FitFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8">
              Start Your Journey
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
