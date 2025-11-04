'use client';

import React, { useState, createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  studentName: z.string().min(2, { message: 'Nama harus diisi (minimal 2 karakter).' }),
  originSchool: z.string().min(2, { message: 'Asal sekolah harus diisi (minimal 2 karakter).' }),
  academicYear: z.string({ required_error: 'Tahun ajaran harus dipilih.' }),
});

type PPDBFormValues = z.infer<typeof formSchema>;

interface PPDBDialogContextType {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const PPDBDialogContext = createContext<PPDBDialogContextType | undefined>(undefined);

export const usePPDBDialog = () => {
  const context = useContext(PPDBDialogContext);
  if (!context) {
    throw new Error('usePPDBDialog must be used within a PPDBDialog provider');
  }
  return context;
};

export function PPDBDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <PPDBDialogContext.Provider value={{ isOpen, setOpen }}>
      {children}
      <PPDBDialog />
    </PPDBDialogContext.Provider>
  );
}

export function PPDBDialog() {
  const { isOpen, setOpen } = usePPDBDialog();
  const { toast } = useToast();

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const academicYears = [`${currentYear}/${nextYear}`, `${nextYear}/${nextYear + 1}`];

  const form = useForm<PPDBFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      originSchool: '',
      academicYear: academicYears[0],
    },
  });

  const onSubmit = (data: PPDBFormValues) => {
    try {
      const phoneNumber = '6282301247678';
      const greeting = 'Assalamualaikum Warahmatullahi Wabarakatuh.';
      const intro = 'Yth. Bu Nikma,\nSaya tertarik untuk mendaftarkan siswa baru di MTS Sunan Ampel Mulyosari.';
      const studentData = `Berikut data awal saya: \n*  Nama Calon Siswa: ${data.studentName}\n*  Asal Sekolah (MI/SD): ${data.originSchool}\n*  Nomor WA Aktif Orang Tua: [Nomor WA Anda]`;
      const request = `Mohon bantuannya untuk informasi lebih lanjut mengenai persyaratan pendaftaran PPDB tahun ajaran ${data.academicYear} dan langkah selanjutnya.`;
      const closing = 'Terima kasih.';

      const message = [greeting, intro, studentData, request, closing].join('\n\n');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      setOpen(false);
      form.reset();

    } catch (error) {
       toast({
        variant: "destructive",
        title: "Gagal membuat link WhatsApp",
        description: "Terjadi kesalahan. Silakan coba lagi.",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Formulir Pendaftaran PPDB</DialogTitle>
          <DialogDescription>
            Isi data di bawah ini untuk melanjutkan pendaftaran melalui WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Calon Siswa</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: Budi Hartono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="originSchool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asal Sekolah (MI/SD)</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: MI Al-Hidayah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="academicYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun Ajaran</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tahun ajaran" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {academicYears.map(year => (
                        <SelectItem key={year} value={year}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Lanjutkan ke WhatsApp</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
