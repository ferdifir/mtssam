import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Award, User, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { studentAchievements } from '@/components/landing/data';
import { Badge } from '@/components/ui/badge';


const PrestasiPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section id="prestasi" className="py-12 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Daftar Lengkap Prestasi Siswa</h1>
                            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Berbagai pencapaian gemilang siswa MTs Sunan Ampel Mulyosari di berbagai bidang.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {studentAchievements.map((item, index) => (
                                <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle className="flex items-start text-lg">
                                            <Award className="w-6 h-6 mr-3 mt-1 text-primary flex-shrink-0" />
                                            <div className="flex-1">
                                                {item.achievement}
                                                <Badge variant="secondary" className="ml-2">{item.level}</Badge>
                                            </div>
                                        </CardTitle>
                                        <CardDescription className="flex items-center pt-2">
                                            <User className="w-4 h-4 mr-2 text-muted-foreground" />
                                            {item.name}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                         <p className="text-sm text-foreground/80">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-8 text-center">*KKM: Kelompok Kerja Madrasah</p>
                         <div className="text-center mt-16">
                            <Button asChild>
                                <Link href="/">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Kembali ke Beranda
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrestasiPage;
