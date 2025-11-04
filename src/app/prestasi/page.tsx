import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { studentAchievements } from '@/components/landing/data';


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
