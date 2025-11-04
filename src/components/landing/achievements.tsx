import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { achievements, studentAchievements } from './data';

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
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary text-center mb-8">Daftar Prestasi Siswa</h3>
          <Card className="bg-card">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">No</TableHead>
                    <TableHead>Nama Siswa</TableHead>
                    <TableHead>Prestasi</TableHead>
                    <TableHead>Tingkat</TableHead>
                    <TableHead>Keterangan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentAchievements.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.no}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.achievement}</TableCell>
                      <TableCell>{item.level}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
          <p className="text-sm text-muted-foreground mt-4 text-center">*KKM: Kelompok Kerja Madrasah</p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
