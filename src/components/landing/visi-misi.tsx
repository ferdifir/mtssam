import { CheckCircle, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisiMisi = () => {
    const indikatorVisi = [
        "Kokoh dalam tauhid dan rajin dalam ibadah",
        "Cerdas dan berakhlakul karimah",
        "Berprestasi di bidang akademik dan non-akademik",
        "Terampil dalam bersikap",
        "Menghasilkan kelulusan yang berkualitas"
    ];

    const misi = [
        "Meningkatkan kualitas proses kegiatan belajar mengajar",
        "Meningkatkan kualitas pengembangan diri",
        "Meningkatkan kualitas kegiatan keagamaan"
    ];

  return (
    <section id="visimisi" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Visi & Misi</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Landasan dan tujuan pendidikan di MTs Sunan Ampel Mulyosari.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center">
                <Target className="w-8 h-8 text-primary mr-4" />
                <CardTitle className="font-headline text-2xl text-primary">Visi</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg font-semibold text-foreground/90">
                    “UNGGUL DALAM PRESTASI YANG BERAKHLAKUL KARIMAH”
                </blockquote>
                <h4 className="font-headline text-lg font-bold mt-6 mb-3 text-primary">Indikator Visi:</h4>
                <ul className="space-y-2">
                    {indikatorVisi.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                            <span className="text-foreground/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
                <div className="flex items-center">
                    <Award className="w-8 h-8 text-primary mr-4" />
                    <CardTitle className="font-headline text-2xl text-primary">Misi</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {misi.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">{index + 1}</div>
                            <p className="text-lg text-foreground/80 pt-1">{item}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
