import { HeroSection } from '@/components/sections/hero';
import { MissionVision } from '@/components/sections/mission-vision';
import { TechAdvantage } from '@/components/sections/tech-advantage';
import { ServicePortfolio } from '@/components/sections/service-portfolio';
import { TeamSection } from '@/components/sections/team';
import { TalentSection } from '@/components/sections/talent';
import { ContactSection } from '@/components/sections/contact';
import { LocationSection } from '@/components/sections/location';
import { FutureRoadmap } from '@/components/sections/future-roadmap';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TechAdvantage />
      <MissionVision />
      <ServicePortfolio />
      <FutureRoadmap />
      <TeamSection />
      <TalentSection />
      <ContactSection />
      <LocationSection />
    </div>
  );
}
