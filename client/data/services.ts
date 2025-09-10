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
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757500064/PMDN_rrnnav.png',
        description: 'Pendirian Perseroan Terbatas Penanaman Modal Dalam Negeri (PT PMDN) dengan proses cepat dan terpercaya. Termasuk pengurusan akta notaris, SK Kemenkumham, NIB, dan dokumen pendukung lainnya.'
      },
      {
        id: 'pt-pma',
        title: 'Pendirian PT(PMA)',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502770/PT_PMA_tqq6ft.png',
        description: 'Pendirian Perseroan Terbatas Penanaman Modal Asing (PT PMA) untuk investor asing yang ingin berinvestasi di Indonesia. Termasuk pengurusan izin investasi, akta notaris, dan dokumen legal lainnya.'
      },
      {
        id: 'pt-perorangan',
        title: 'Pendirian PT(Perorangan)',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502769/PT_PERSERO_viyyen.png',
        description: 'Pendirian PT Perorangan sesuai dengan UU Cipta Kerja. Solusi tepat untuk pelaku usaha mikro dan kecil dengan proses yang lebih sederhana dan biaya terjangkau.'
      },
      {
        id: 'perubahan-akta',
        title: 'Perubahan Akta',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502766/Akta_y8hmbc.png',
        description: 'Layanan perubahan akta pendirian atau perubahan perusahaan, termasuk perubahan nama, alamat, modal, pengurus, atau komposisi pemegang saham.'
      },
      {
        id: 'pendirian-cv',
        title: 'Pendirian CV',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502767/Pendirian_CV_ugizej.png',
        description: 'Pendirian Commanditaire Vennootschap (CV) untuk usaha kecil dan menengah. Termasuk pengurusan akta notaris, NIB, dan dokumen pendukung lainnya.'
      },
      {
        id: 'perubahan-cv',
        title: 'Perubahan CV',
        price: 'IDR 5,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502768/Perubahan_CV_u4kkvz.png',
        description: 'Layanan perubahan data CV, termasuk perubahan pengurus, alamat, modal, atau bidang usaha. Dilengkapi dengan pengurusan perubahannya di notaris dan instansi terkait.'
      },
      {
        id: 'pendirian-firma',
        title: 'Pendirian Firma',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502767/Pendirian_Firma_n1gks3.png',
        description: 'Pendirian Firma untuk usaha yang dijalankan oleh beberapa orang dengan satu nama bersama. Termasuk pengurusan akta notaris dan dokumen pendukung lainnya.'
      },
      {
        id: 'pendaftaran-merek',
        title: 'Pendaftaran Merek',
        price: 'IDR 3,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502766/Pendaftaran_Merek_ockhnx.png',
        description: 'Pendaftaran merek dagang ke Direktorat Jenderal Kekayaan Intelektual (DJKI). Termasuk konsultasi kelas merek, penelusuran merek, dan pengurusan dokumen pendaftaran.'
      },
      {
        id: 'perpanjangan-merek',
        title: 'Perpanjangan Merek',
        price: 'IDR 2,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502767/Perpanjangan_Merek_vkobgw.png',
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
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503224/NPWP_Perusahaan_vxovyh.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Orang Pribadi (Form 1770/1770S/1770SS).'
      },
      {
        id: 'npwp-perorangan',
        title: 'NPWP Perorangan',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503223/NPWP_Perorangan_bidjpq.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'laporan-pajak-bulanan',
        title: 'Laporan Pajak Bulanan',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503222/Laporan_Pajak_Bulanan_l54ksl.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'laporan-pajak-tahunan',
        title: 'Laporan Pajak Tahunan',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503223/Laporan_Pajak_Tahunan_kibtet.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'pengembalian-pajak',
        title: 'Pengembalian Pajak',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503226/Pengembalian_Pajak_lmwhjo.png',
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
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503362/Advokat_pfsvpd.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'notaris',
        title: 'Notaris',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503378/Notaris_trtyaw.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'mediator',
        title: 'Mediator',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503389/Mediator_tqsikv.png',
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
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504137/Virtual_Office_unhnyj.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'sewa-kantor',
        title: 'Sewa Kantor',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504034/Sewa_Kantor_gimchj.png',
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
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504174/Paket_Video_Satuan_Essentials_o8iqpq.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-satuan-advanced',
        title: 'Paket Video Satuan Advanced',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504173/Paket_Video_Satuan_Advanced_vg6kvh.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-satuan-premium',
        title: 'Paket Video Satuan Premium',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504179/Paket_Video_Satuan_Premium_qgzo4w.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-bulk-essentials',
        title: 'Paket Video Bulk Essentials',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504167/Paket_Video_Bulk_Essentials_dj1otm.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-bulk-advanced',
        title: 'Paket Video Bulk Advanced',
        price: 'IDR 8,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504166/Paket_Video_Bulk_Advanced_zp8llr.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'paket-video-bulk-premium',
        title: 'Paket Video Bulk Premium',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504172/Paket_Video_Bulk_Premium_oq3l5m.png',
        description: 'Layanan pembuatan dan pelaporan SPT Tahunan Pajak Penghasilan Badan (Form 1771) untuk perusahaan.'
      },
      {
        id: 'peluncuran-website',
        title: 'Peluncuran Website',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504177/Peluncuran_Website_fmnqek.png',
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
