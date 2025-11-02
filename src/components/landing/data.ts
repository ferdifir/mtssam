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
    id: 'teacher1',
    name: 'Drs. H. Ahmad Fauzi, M.Pd.',
    subject: 'Matematika',
  },
  {
    id: 'teacher2',
    name: 'Siti Aisyah, S.Ag.',
    subject: 'Pendidikan Agama Islam',
  },
  {
    id: 'teacher3',
    name: 'Dr. Indah Permatasari, M.Hum.',
    subject: 'Bahasa Indonesia',
  },
  {
    id: 'teacher4',
    name: 'Budi Santoso, S.Pd.',
    subject: 'Ilmu Pengetahuan Alam',
  },
] as const;
