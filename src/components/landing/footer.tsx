import { Facebook, Instagram, Youtube, BookOpenCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <BookOpenCheck className="h-8 w-8 mr-2 text-primary" />
              <span className="text-xl font-bold font-headline text-primary">MTs Sunan Ampel</span>
            </div>
            <p className="text-sm">
              Dsn. Mulyosari, Ds. Bunder, Kabat, Banyuwangi
            </p>
            <p className="text-sm mt-2">+62 823-0124-7678 (Bu Nikma)</p>
            <p className="text-sm">+62 822-3495-5585 (P.Arif)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-primary">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sambutan" className="hover:text-primary transition-colors">Sambutan Kepala Sekolah</a></li>
              <li><a href="#visimisi" className="hover:text-primary transition-colors">Visi & Misi</a></li>
              <li><a href="#prestasi" className="hover:text-primary transition-colors">Prestasi</a></li>
              <li><a href="#guru" className="hover:text-primary transition-colors">Guru</a></li>
              <li><a href="#galeri" className="hover:text-primary transition-colors">Galeri</a></li>
              <li><a href="#ppdb" className="hover:text-primary transition-colors">PPDB</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4 text-primary">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/mts.sunanampel.mulyosari?igsh=b2huaGp2NWNrMXN3" aria-label="Instagram" className="text-secondary-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@MTsSunanAmpel-ck5rc" aria-label="YouTube" className="text-secondary-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MTs Sunan Ampel Mulyosari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
