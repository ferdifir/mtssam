import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Welcome from '@/components/landing/welcome';
import Achievements from '@/components/landing/achievements';
import Teachers from '@/components/landing/teachers';
import Gallery from '@/components/landing/gallery';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';
import Organization from '@/components/landing/organization';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Achievements />
        <Organization />
        <Teachers />
        <Gallery />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
