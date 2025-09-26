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
        description: `
        <div class="space-y-0">
            <p>1. Pemeriksaan dan Pemesanan Nama PT</p>
            <p>2. Pembuatan Akta Pendirian oleh Notaris</p>
            <p>3. Pengesahan Akta Perseroan oleh Notaris</p>
            <p>4. Surat Ketetapan dari Kementerian Hukum dan HAM</p>
            <p>5. NPWP</p>
            <p>6. Nomor Induk Berusaha (NIB) OSS RBA</p>
        </div>
        `
      },
      {
        id: 'pt-pma',
        title: 'Pendirian PT(PMA)',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502770/PT_PMA_tqq6ft.png',
        description: `
        <div class="space-y-0">
            <p>1. Pemeriksaan dan Pemesanan Nama PT</p>
            <p>2. Pembuatan Akta Pendirian oleh Notaris</p>
            <p>3. Pengesahan Akta Perseroan oleh Notaris</p>
            <p>4. Surat Ketetapan dari Kementerian Hukum dan HAM</p>
            <p>5. NPWP</p>
            <p>6. Nomor Induk Berusaha (NIB) OSS RBA</p>
        </div>
        `
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
        description: `
        <div class="space-y-0">
            <p>1. Akta Perubahan</p>
            <p>2. Surat Ketetapan dari Kementerian Hukum dan HAM</p>
            <p>3. Nomor Induk Berusaha (NIB) OSS RBA</p>
        </div>
        `
      },
      {
        id: 'pendirian-cv',
        title: 'Pendirian CV',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502767/Pendirian_CV_ugizej.png',
        description: `
        <div class="space-y-0">
            <p>1. Pemeriksaan dan Pemesanan Nama CV</p>
            <p>2. Pengesahan Pengadilan Negeri</p>
            <p>3. NPWP</p>
            <p>4. Nomor Induk Berusaha (NIB) OSS RBA</p>
        </div>
        `
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
        description: `
        <div class="space-y-0">
            <p>1. Pemeriksaan dan Pemesanan Nama Firma</p>
            <p>2. Pengesahan Pengadilan Negeri</p>
            <p>3. NPWP</p>
            <p>4. Nomor Induk Berusaha (NIB) OSS RBA</p>
        </div>
        `
      },
      {
        id: 'pendaftaran-merek',
        title: 'Pendaftaran Merek',
        price: 'IDR 3,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757502766/Pendaftaran_Merek_ockhnx.png',
        description: `
        <div class="space-y-0">
            <p>1. Pengecekan Merek</p>
            <p>2. Permohonan Pendaftaran</p>
            <p>3. Monitoring Pendaftaran</p>
            <p>4. Sertifikat Tanda Daftar</p>
            <p>5. Sertifikat Merek</p>
            <p>6. Konsultasi seputar pendaftaran Merek</p>
        </div>
        `
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
        description: `
        <div class="space-y-0">
            <p>1. Nomor Pokok Wajib Pajak (NPWP)</p>
            <p>2. Surat Keterangan Terdaftar Pajak</p>
            <p>3. Surat Penerbitan Akun Wajib Pajak</p>
        </div>
        `
      },
      {
        id: 'npwp-perorangan',
        title: 'NPWP Perorangan',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503223/NPWP_Perorangan_bidjpq.png',
        description: `
        <div class="space-y-0">
            <p>Nomor Pokok Wajib Pajak (NPWP)</p>
        </div>
        `
      },
      {
        id: 'laporan-pajak-bulanan',
        title: 'Laporan Pajak Bulanan',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503222/Laporan_Pajak_Bulanan_l54ksl.png',
        description: `
        <div class="space-y-0">
            <p>1. Draft Laporan Bulanan <ul><li>PPH 21</li><li>PPH 23</li><li>4 (2)</li></ul></p>
            <p>2. Draft Template Coretax / E-Form</p>
            <p>3. Submit Laporan Pajak Bulanan</p>
            <p>4. Konsultasi Online</p>
        </div>
        `
      },
      {
        id: 'laporan-pajak-tahunan',
        title: 'Laporan Pajak Tahunan',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503223/Laporan_Pajak_Tahunan_kibtet.png',
        description: `
        <div class="space-y-0">
            <p>1. Draft Corporate Income Tax Return (CITR) <ul><li>Perhitungan List Aset</li><li>Perhitungan Inventory</li><li>Perhitungan kurang bayar, Angsuran pph 25</li><li>Persamaan SPM PPH 21 dengan biaya gaji</li></ul></p>
            <p>2. Draft Template Coretax / E-Form</p>
            <p>3. Submit Laporan Pajak Tahunan</p>
            <p>4. Konsultasi Online</p>
        </div>
        `
      },
      {
        id: 'pengembalian-pajak',
        title: 'Pengembalian Pajak',
        price: 'IDR 6,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503226/Pengembalian_Pajak_lmwhjo.png',
        description: `
        <div class="space-y-0">
            <p>1. Pengembalian PPh & PPN</p>
            <p>2. Penyusunan Dokumen & Pengajuan</p>
            <p>3. Pendampingan hingga Refund Cair</p>
        </div>
        `
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
        description: `
        <div class="space-y-0">
            <p>1. Konsultasi Hukum</p>
            <p>2. Legal Opinion</p>
        </div>
        `
      },
      {
        id: 'notaris',
        title: 'Notaris',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503378/Notaris_trtyaw.png',
        description: `
        <div class="space-y-0">
            <p>1. Konsultasi Hukum</p>
            <p>2. Legal Opinion</p>
        </div>
        `
      },
      {
        id: 'mediator',
        title: 'Mediator',
        price: 'IDR 1,500,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757503389/Mediator_tqsikv.png',
        description: `
        <div class="space-y-0">
            <p>Bantuan Penyelesaian Sengketa dengan Mediasi</p>
        </div>
        `
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
        price: 'IDR 2,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504137/Virtual_Office_unhnyj.png',
        description: `
        <div class="space-y-0">
            <p>1. Penyewaan Alamat VO 1 tahun</p>
            <p>2. Penerimaan Surat dan Paket</p>
            <p>3. Informasi Penerimaan Surat dan Paket</p>
        </div>
        `
      },
      {
        id: 'sewa-kantor',
        title: 'Sewa Kantor',
        price: 'IDR 11,000,000.00',
        image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1757504034/Sewa_Kantor_gimchj.png',
        description: `
        <div class="space-y-0">
            <p>1. Ipl</p>
            <p>2. Internet</p>
            <p>3. Air</p>
            <p>4. Listrik</p>
            <p>5. Bersih bersih</p>
            <p>6. Galon</p>
            <p>7. Pantry Supplies (coffee, tea & snack)</p>
            <p>8. Full furnished tinggal bawa diri</p>
            <p>9. 3 meja kerja</p>
            <p>10. Sofa</p>
            <p>11. Bean bag</p>
            <p>12. Whiteboard</p>
            <p>13. Lemari / rak simpan</p>
        </div>
        `
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
        description: `
        <div class="space-y-0">
            <p>1. Website Perusahaan & Portofolio</p>
            <p>2. Konsultasi sampai dengan maksimal 5 (lima) kali</p>
            <p>3. Hosting</p>
        </div>
        `
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
