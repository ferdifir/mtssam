'use client';

import React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teachers } from './data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Teachers = () => {
  const teacherImages = Object.fromEntries(
    PlaceHolderImages.filter(img => img.id.startsWith('teacher')).map(img => [img.id.replace('teacher-', ''), img])
  );
  
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="guru" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Tenaga Pendidik Profesional</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Dibimbing oleh para guru yang berdedikasi dan ahli di bidangnya.</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {teachers.map((teacher, index) => {
               const image = teacherImages[teacher.id];
               return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="text-center border-none shadow-none bg-transparent">
                      <CardContent className="p-0 flex flex-col items-center">
                        <div className="relative w-48 h-48 md:w-52 md:h-52 mb-4">
                          {image && (
                            <Image
                              src={`${image.imageUrl}?v=${Date.now()}`}
                              alt={`Foto ${teacher.name}`}
                              width={208}
                              height={208}
                              data-ai-hint={image.imageHint}
                              className="rounded-full border-4 border-background shadow-lg object-cover w-full h-full"
                            />
                          )}
                        </div>
                        <h3 className="font-bold font-headline text-lg">{teacher.name}</h3>
                        <p className="text-sm text-primary">{teacher.subject}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Teachers;
