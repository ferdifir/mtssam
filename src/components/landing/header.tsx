"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, BookOpenCheck } from "lucide-react";
import { cn } from '@/lib/utils';
import { usePPDBDialog } from '@/components/landing/ppdb-dialog';

const navLinks = [
  { href: '#sambutan', label: 'Sambutan' },
  { href: '#prestasi', label: 'Prestasi' },
  { href: '#guru', label: 'Guru' },
  { href: '#galeri', label: 'Galeri' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setOpen: openPPDBDialog } = usePPDBDialog();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => (
        isMobile ? (
          <SheetClose asChild key={link.href}>
            <Link href={link.href} className="block px-4 py-2 text-lg hover:bg-accent hover:text-accent-foreground rounded-md">
              {link.label}
            </Link>
          </SheetClose>
        ) : (
          <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
            {link.label}
          </Link>
        )
      ))}
    </>
  );
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpenCheck className="h-7 w-7 text-primary" />
            <span className={cn("font-headline font-bold text-lg", isScrolled ? "text-primary" : "text-white md:text-primary")}>
              MTs Sunan Ampel
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLinkItems />
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => openPPDBDialog(true)}>
              Daftar PPDB
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white hover:text-white/80")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Buka Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-background">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-8">
                       <BookOpenCheck className="h-7 w-7 text-primary" />
                      <span className="font-headline font-bold text-lg text-primary">MTs Sunan Ampel</span>
                    </div>
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
