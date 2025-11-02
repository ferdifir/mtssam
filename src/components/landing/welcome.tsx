import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Welcome = () => {
  const principalImage = PlaceHolderImages.find(img => img.id === 'principal');

  return (
    <section id="sambutan" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            {principalImage && (
              <div className="relative w-[300px] h-[375px] md:w-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl transform md:rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-105 duration-300">
                <Image
                  src={principalImage.imageUrl}
                  alt={principalImage.description}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={principalImage.imageHint}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Sambutan Kepala Sekolah</h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/80">
              <p>
                Assalamu'alaikum Warahmatullahi Wabarakatuh.
              </p>
              <p>
                Selamat datang di website resmi MTs Sunan Ampel Mulyosari. Dengan penuh rasa syukur, kami persembahkan platform digital ini sebagai sarana komunikasi dan informasi bagi seluruh civitas akademika serta masyarakat luas.
              </p>
              <p>
                Kami berkomitmen untuk menyediakan pendidikan berkualitas yang tidak hanya unggul dalam bidang akademik, tetapi juga kokoh dalam nilai-nilai keislaman dan akhlak mulia. Melalui website ini, kami berharap dapat berbagi informasi mengenai program, kegiatan, dan prestasi sekolah kami. Mari bersama-sama kita wujudkan generasi yang cerdas, berkarakter, dan siap menghadapi tantangan zaman.
              </p>
              <p>
                Wassalamu'alaikum Warahmatullahi Wabarakatuh.
              </p>
            </div>
            <p className="mt-6 font-bold font-headline text-lg">Drs. H. Abdullah, M.Pd.I.</p>
            <p className="text-sm text-muted-foreground">Kepala MTs Sunan Ampel Mulyosari</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
