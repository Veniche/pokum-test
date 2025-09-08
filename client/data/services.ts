export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  isFlipped?: boolean;
}

export interface ServiceSection {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export const serviceSections: ServiceSection[] = [
  {
    id: 'legality',
    title: 'Legality',
    description: 'Handle essential legal documents and business permits. We ensure your company complies with regulations, from business registration to operational licenses.',
    services: [
      {
        id: 'pt-pmdn',
        title: 'Pendirian PT(PMDN)',
        price: 'IDR 8,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/b2a1ab12dd8d678d4bf5b14c352e9672d6310c75?width=640',
        description: 'Pendirian Perseroan Terbatas Penanaman Modal Dalam Negeri (PT PMDN) dengan proses cepat dan terpercaya. Termasuk pengurusan akta notaris, SK Kemenkumham, NIB, dan dokumen pendukung lainnya.'
      },
      {
        id: 'pt-pma',
        title: 'Pendirian PT(PMA)',
        price: 'IDR 11,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/2938cc9eb2f558311a2df3fb1af33796fa29a790?width=640',
        description: 'Pendirian Perseroan Terbatas Penanaman Modal Asing (PT PMA) untuk investor asing yang ingin berinvestasi di Indonesia. Termasuk pengurusan izin investasi, akta notaris, dan dokumen legal lainnya.'
      },
      {
        id: 'pt-perorangan',
        title: 'Pendirian PT(Perorangan)',
        price: 'IDR 1,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/1864b9955126e81208d95c0c789d029fc327e44c?width=640',
        description: 'Pendirian PT Perorangan sesuai dengan UU Cipta Kerja. Solusi tepat untuk pelaku usaha mikro dan kecil dengan proses yang lebih sederhana dan biaya terjangkau.'
      },
      {
        id: 'perubahan-akta',
        title: 'Perubahan Akta',
        price: 'IDR 6,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/f1b866b5d25f74e78c697bd74a386b87f14f8358?width=640',
        description: 'Layanan perubahan akta pendirian atau perubahan perusahaan, termasuk perubahan nama, alamat, modal, pengurus, atau komposisi pemegang saham.'
      },
      {
        id: 'pendirian-cv',
        title: 'Pendirian CV',
        price: 'IDR 6,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/1b9873818bbad31b6e32e6244f51658c2eb60557?width=640',
        description: 'Pendirian Commanditaire Vennootschap (CV) untuk usaha kecil dan menengah. Termasuk pengurusan akta notaris, NIB, dan dokumen pendukung lainnya.'
      },
      {
        id: 'perubahan-cv',
        title: 'Perubahan CV',
        price: 'IDR 5,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/b4814a3492b77d30c889bc54169d0d89a0a8978b?width=640',
        description: 'Layanan perubahan data CV, termasuk perubahan pengurus, alamat, modal, atau bidang usaha. Dilengkapi dengan pengurusan perubahannya di notaris dan instansi terkait.'
      },
      {
        id: 'pendirian-firma',
        title: 'Pendirian Firma',
        price: 'IDR 6,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/4254a5625b7bf0ddc05139edfff14c6d20ee96bb?width=640',
        description: 'Pendirian Firma untuk usaha yang dijalankan oleh beberapa orang dengan satu nama bersama. Termasuk pengurusan akta notaris dan dokumen pendukung lainnya.'
      },
      {
        id: 'pendaftaran-merek',
        title: 'Pendaftaran Merek',
        price: 'IDR 3,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/2886e00d9cb29f11484196afc9ee0bfdf216c46c?width=640',
        description: 'Pendaftaran merek dagang ke Direktorat Jenderal Kekayaan Intelektual (DJKI). Termasuk konsultasi kelas merek, penelusuran merek, dan pengurusan dokumen pendaftaran.'
      },
      {
        id: 'perpanjangan-merek',
        title: 'Perpanjangan Merek',
        price: 'IDR 2,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/2c7a8b985e3e02f9cf1a4d82592132878d6ecf19?width=640',
        description: 'Layanan perpanjangan masa berlaku merek dagang yang akan habis masa berlakunya. Dilakukan sebelum masa berlaku habis untuk menghindari pembatalan merek.'
      }
    ]
  },
  {
    id: 'tax',
    title: 'Tax',
    description: 'Comprehensive tax services including consultation, reporting, and compliance to keep your business in good standing with tax authorities.',
    services: [
      {
        id: 'npwp-perusahaan',
        title: 'NPWP Perusahaan',
        price: 'IDR 8,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/a58b7c886be6c958ba42947b58a3fb17a523e956?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Orang Pribadi (Form 1770/1770S/1770SS).'
      },
      {
        id: 'npwp-perorangan',
        title: 'NPWP Perorangan',
        price: 'IDR 11,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/62541ab90271f5626c57aa4b1ca22fdfab660e23?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'laporan-pajak-bulanan',
        title: 'Laporan Pajak Bulanan',
        price: 'IDR 1,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/6ca0a07c856a53581d9f503a4dddc96ff381d80a?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'laporan-pajak-tahunan',
        title: 'Laporan Pajak Tahunan',
        price: 'IDR 6,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/526823435ef7a6c8948f844279a160ddba1edabc?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'pengembalian-pajak',
        title: 'Pengembalian Pajak',
        price: 'IDR 6,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/2d769bb2eb8adf1b337afcdac7eed08155cdc7f2?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      }
    ]
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'Discuss your business goals with our experts. We offer insights and tailored guidance across legal, operational, and branding challenges.',
    services: [
      {
        id: 'advokat',
        title: 'Advokat',
        price: 'IDR 8,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/5634fb80dec005fdb3dcf508d1dc1634a5ebbaeb?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'notaris',
        title: 'Notaris',
        price: 'IDR 11,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/14a5000a62b696eb2433a1ff1cf25a211c361021?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'mediator',
        title: 'Mediator',
        price: 'IDR 1,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/367a6a5d72423077fd87b52f6061cc5a0afe1dfb?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      }
    ]
  },
  {
    id: 'office-rent',
    title: 'Office Rent',
    description: 'Need a workspace to ease your operational process? We assist in finding and securing office rentals that match your business scale, budget, and location needs.',
    services: [
      {
        id: 'virtual-office',
        title: 'Virtual Office',
        price: 'IDR 8,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/d6d92996449ceab1fc46ccf74942a5a9271ee5b3?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'sewa-kantor',
        title: 'Sewa Kantor',
        price: 'IDR 11,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/435727131dbcd27e5887633dad54d051bb74af37?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Need a workspace to ease your operational process? We assist in finding and securing office rentals that match your business scale, budget, and location needs.',
    services: [
      {
        id: 'paket-video-satuan-essentials',
        title: 'Paket Video Satuan Essentials',
        price: 'IDR 8,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/f853320b7264f83b11181f8b1078688bb247d1ab?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-satuan-advanced',
        title: 'Paket Video Satuan Advanced',
        price: 'IDR 11,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/a264071f16d6a9247623e6236fedf390b46b1c1c?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-satuan-premium',
        title: 'Paket Video Satuan Premium',
        price: 'IDR 1,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/8ae0c0b1325397a813246171dcf4bc2404cf80df?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-bulk-essentials',
        title: 'Paket Video Bulk Essentials',
        price: 'IDR 6,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/4ebd9043144c4e56efb44f83fd77374a4f87b35a?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-bulk-advanced',
        title: 'Paket Video Bulk Advanced',
        price: 'IDR 8,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/c59a7f8b5614fe0d79bc5d3a5382b2cd07fdf49e?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-bulk-premium',
        title: 'Paket Video Bulk Premium',
        price: 'IDR 11,000,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/3a1520c5138f31b4de3eb0b5a1f4ef0d25b53381?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'peluncuran-website',
        title: 'Peluncuran Website',
        price: 'IDR 1,500,000.00',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/799ba80339acd88dd873b031d4ee850f4dd50b1b?width=640',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      }
    ]
  }
];

export const getServiceById = (id: string) => {
  for (const section of serviceSections) {
    const service = section.services.find(svc => svc.id === id);
    if (service) return service;
  }
  return null;
};

export const getSectionById = (id: string) => {
  return serviceSections.find(section => section.id === id) || null;
};
