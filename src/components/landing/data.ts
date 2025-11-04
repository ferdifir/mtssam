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

export const studentAchievements = [
    { no: 1, name: "Mts Sunan Ampel Mulyosari (Putra)", achievement: "Juara 2", level: "Kecamatan", description: "Lari Gembira" },
    { no: 2, name: "Mts Sunan Ampel Mulyosari (Putri)", achievement: "Juara 1", level: "Kecamatan", description: "Lari Gembira" },
    { no: 3, name: "Mts Sunan Ampel Mulyosari (Putra)", achievement: "Juara 2", level: "Kecamatan", description: "Gerak jalan putra" },
    { no: 4, name: "Mts Sunan Ampel Mulyosari (Putri)", achievement: "Juara 3", level: "Kecamatan", description: "gerak jalan Putri" },
    { no: 5, name: "Siti mutamimah", achievement: "Juara 2", level: "KKM", description: "Tahfidz Putri" },
    { no: 6, name: "Putri Hijjatul mabruroh", achievement: "Juara 3", level: "KKM", description: "Kaligrafi Kontemporer" },
    { no: 7, name: "Reny Fariska", achievement: "Juara 1", level: "KKM", description: "Pidato Bahasa Indonesia" },
    { no: 8, name: "Siti Rohmah", achievement: "Juara 1", level: "KKM", description: "Pidato bahasa arab" },
    { no: 9, name: "Abdul Malik", achievement: "Juara 2", level: "KKM", description: "Tahfidz Putra" },
    { no: 10, name: "Andi Saputra", achievement: "Juara 3", level: "KKM", description: "Tenis Meja" },
    { no: 11, name: "Achmad Muqorrobin", achievement: "Juara 1", level: "Kabupaten", description: "Matematika" },
    { no: 12, name: "Fuji Nurman", achievement: "Juara 1", level: "KKM", description: "Pidato Bahasa Indonesia" },
    { no: 13, name: "Suci Aulia", achievement: "Juara 1", level: "KKM", description: "Catur" },
] as const;
