"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from '@/lib/utils';
import { usePPDBDialog } from '@/components/landing/ppdb-dialog';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/#sambutan', label: 'Sambutan' },
  { href: '/visi-misi', label: 'Visi & Misi' },
  { href: '/#prestasi', label: 'Prestasi' },
  { href: '/struktur', label: 'Struktur' },
  { href: '/#guru', label: 'Guru' },
  { href: '/#galeri', label: 'Galeri' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setOpen: openPPDBDialog } = usePPDBDialog();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => {
        const isStructureOrVisiMisi = link.label === 'Struktur' || link.label === 'Visi & Misi';

        if (isMobile) {
          return (
            <SheetClose asChild key={link.href}>
              <Link href={link.href} className="block px-4 py-2 text-lg hover:bg-accent hover:text-accent-foreground rounded-md">
                {link.label}
              </Link>
            </SheetClose>
          )
        }
        
        return (
          <Link key={link.href} href={isStructureOrVisiMisi ? link.href : (isHomePage ? link.href : `/${link.href}`)} className="text-sm font-medium hover:text-primary transition-colors">
            {link.label}
          </Link>
        )
      })}
    </>
  );
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled || !isHomePage ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo MTs Sunan Ampel Mulyosari" width={40} height={40} className="h-10 w-10" />
            <span className={cn("font-headline font-bold text-lg", isScrolled || !isHomePage ? "text-primary" : "text-white")}>
              MTs Sunan Ampel Mulyosari
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLinkItems />
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="/#ppdb">Daftar PPDB</a>
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(isScrolled || !isHomePage ? "text-foreground" : "text-white hover:text-white/80")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Buka Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-background p-0">
                  <SheetHeader className="p-6 pb-0">
                    <SheetTitle>
                       <div className="flex items-center gap-2 mb-4">
                          <Image src="/logo.png" alt="Logo MTs Sunan Ampel Mulyosari" width={40} height={40} className="h-10 w-10" />
                          <span className="font-headline font-bold text-lg text-primary">MTs Sunan Ampel Mulyosari</span>
                        </div>
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Menu navigasi utama. Pilih dari tautan di bawah untuk menjelajahi situs.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-6">
                    <nav className="flex flex-col gap-4">
                      <NavLinkItems isMobile />
                      <SheetClose asChild>
                        <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => openPPDBDialog(true)}>
                          Daftar PPDB
                        </Button>
                      </SheetClose>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
