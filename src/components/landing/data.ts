import { BookOpen, Trophy, Users, Award } from 'lucide-react';

export const achievements = [
  {
    icon: Trophy,
    title: 'Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten',
    description: 'Tim Cerdas Cermat kami berhasil meraih juara pertama, menunjukkan keunggulan akademik sekolah.',
  },
  {
    icon: BookOpen,
    title: 'Juara 2 Lomba Tahfidz Al-Quran',
    description: 'Siswa kami menunjukkan prestasi gemilang dalam menghafal Al-Quran pada kompetisi tingkat provinsi.',
  },
  {
    icon: Users,
    title: 'Juara Umum Pekan Olahraga Pelajar',
    description: 'Kontingen olahraga MTs Sunan Ampel Mulyosari berhasil menjadi juara umum dengan meraih medali terbanyak.',
  },
  {
    icon: Award,
    title: 'Finalis Olimpiade Sains Nasional',
    description: 'Mewakili kabupaten, siswa kami berhasil lolos ke babak final Olimpiade Sains Nasional (OSN) bidang Matematika.',
  },
] as const;

export const teachers = [
  {
    id: "santoso",
    name: "Santoso, S.HI",
    subject: "Kepala Madrasah",
  },
  {
    id: "abdulhalim",
    name: "Abdul Halim A.A, S.Pd",
    subject: "Waka Kurikulum / Operator",
  },
  {
    id: "ainurrofiq",
    name: "Ah. Ainur Rofiq, M.E",
    subject: "Waka Kesiswaan",
  },
  {
    id: "nikmatul",
    name: "Nikmatul Ulfa Sari, S.SI",
    subject: "Bendahara / Wali Kelas VIII",
  },
  {
    id: "cicifanisa",
    name: "Cici Fanisa Yulia Dwi Jayanti, S.Pd",
    subject: "Kepala TU / Koordinator BK/BP / Wali Kelas IX",
  },
  {
    id: "mishadi",
    name: "Mishadi",
    subject: "Waka Humas",
  },
  {
    id: "mistari",
    name: "Mistari",
    subject: "Waka Sarpras",
  },
  {
    id: "khittotud",
    name: "Khittotud Diniyah, S.Pd",
    subject: "Kepala Perpustakaan / Wali Kelas VII",
  },
  {
    id: "uswah",
    name: "Uswah Hasanah",
    subject: "Guru Bidang Studi",
  },
] as const;
