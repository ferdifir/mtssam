import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const Gallery = () => {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

  return (
    <section id="galeri" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Galeri Kegiatan</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Momen-momen berharga dari berbagai kegiatan sekolah kami.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="overflow-hidden group">
               <div className="aspect-w-3 aspect-h-2">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  data-ai-hint={image.imageHint}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild>
                <Link href="https://www.instagram.com/mts.sunanampel.mulyosari?igsh=b2huaGp2NWNrMXN3" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    Lihat Lebih Banyak di Instagram
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
