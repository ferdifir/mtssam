import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { achievements } from './data';

const Achievements = () => {
  return (
    <section id="prestasi" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Prestasi Siswa</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Komitmen kami dalam mencetak generasi berprestasi tercermin dari berbagai pencapaian gemilang.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                   <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">{achievement.title}</CardTitle>
                <CardDescription className="mt-2 text-sm">{achievement.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
