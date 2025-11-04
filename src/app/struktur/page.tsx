import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const OrgItem = ({ name, role, className = '' }: { name: string, role: string, className?: string }) => (
    <div className={`flex flex-col items-center justify-center text-center p-2 rounded-lg bg-primary/10 border-2 border-primary ${className}`}>
      <p className="font-bold text-primary text-sm">{role}</p>
      <p className="text-xs text-foreground">{name}</p>
    </div>
  );
  
const OrganizationPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section id="struktur" className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Struktur Organisasi</h1>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Struktur Organisasi dan Personalia MTs Sunan Ampel tahun 2025/2026</p>
                    </div>

                    <div className="flex justify-center mb-8">
                    <OrgItem name="Santoso, S.HI" role="Kepala Madrasah" />
                    </div>
                    
                    <div className="flex justify-center mb-8">
                    <div className="w-px bg-gray-400 h-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 mb-8 items-center justify-center">
                        <OrgItem name="Abdul Halim A.A, S.Pd" role="Operator" />
                        <OrgItem name="Khittotud Diniyah, S.Pd" role="Kepala Perpustakaan" />
                        <OrgItem name="Cici Fanisa Yulia Dwi Jayanti, S.Pd" role="Kepala TU" />
                        <OrgItem name="Nikmatul Ulfa Sari, S.SI" role="Bendahara" />
                    </div>
                    
                    <div className="flex justify-center mb-8">
                    <div className="w-px bg-gray-400 h-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <OrgItem name="Abdul Halim A.A, S.Pd" role="Waka Kurikulum" />
                    <OrgItem name="Ah. Ainur Rofiq, M.E" role="Waka Kesiswaan" />
                    <OrgItem name="Mistari" role="Waka Sarpras" />
                    <OrgItem name="Mishadi" role="Waka Humas" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="font-bold text-primary mb-2">Wali Kelas</h3>
                        <div className="space-y-2">
                            <p className="text-sm p-2 bg-card rounded-md">VII: Khittotud Diniyah, S.Pd</p>
                            <p className="text-sm p-2 bg-card rounded-md">VIII: Nikmatul Ulfa Sari, S.SI</p>
                            <p className="text-sm p-2 bg-card rounded-md">IX: Cici Fanisa Yulia Dwi Jayanti, S.Pd</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary mb-2">Koordinator BK/BP</h3>
                        <p className="text-sm p-2 bg-card rounded-md">Cici Fanisa Yulia Dwi Jayanti, S.Pd</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-primary mb-2">Komite Madrasah</h3>
                        <p className="text-sm p-2 bg-card rounded-md">Junaidi</p>
                    </div>
                    </div>
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

export default OrganizationPage;
