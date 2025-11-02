import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
         <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/Y5vf0iKpVIA?autoplay=1&mute=1&loop=1&playlist=Y5vf0iKpVIA&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="School Profile Video"
        ></iframe>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          MTs Sunan Ampel Mulyosari
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
          Membentuk Generasi Unggul Berlandaskan Iman dan Taqwa
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#ppdb">Pendaftaran Siswa Baru</a>
          </Button>
          <Button size="lg" variant="secondary">
            <a href="#sambutan">Jelajahi Lebih Lanjut</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
