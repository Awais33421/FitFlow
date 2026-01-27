import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkoutPrograms } from './components/WorkoutPrograms';
import { NutritionSection } from './components/NutritionSection';
import { MotivationSection } from './components/MotivationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WorkoutPrograms />
      <NutritionSection />
      <MotivationSection />
      <Footer />
    </div>
  );
}