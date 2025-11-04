'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePPDBDialog } from '@/components/landing/ppdb-dialog';

const Cta = () => {
  const { setOpen } = usePPDBDialog();

  return (
    <section id="ppdb" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          "Berakhlak Mulia, Berprestasi, Berwawasan Global"
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
          Jadilah bagian dari keluarga besar MTs Sunan Ampel Mulyosari dan wujudkan potensi terbaikmu bersama kami.
        </p>
        <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setOpen(true)}>
            Daftar PPDB Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Cta;
