/* ===========================================================
   BUKU SAKU KPLP — data modul
   Sumber: Buku Saku Modul Pelatihan KPLP, Lapas Narkotika Kelas IIA Jakarta
   Edisi Revisi 2026
=========================================================== */

const KELOMPOK = [
  { nama: "Pos & Penjagaan", bab: [1,2,3,4,16,17] },
  { nama: "Penggeledahan", bab: [5,6] },
  { nama: "Kepemimpinan Regu", bab: [7,9,10,11] },
  { nama: "Tata Tertib Blok Hunian", bab: [12,13,14,15,18] },
  { nama: "Kondisi Darurat", bab: [8] },
];

const BAB = [
{
  no: 1,
  foto: "img/bab01.jpg",
  judul: "Pengamanan Pos Depan, Pos RS, dan Pos Wasrik",
  ringkas: "Lini pertama pertahanan keamanan Lapas",
  pendahuluan: "Pengamanan pos depan, pos rumah sakit (Pos RS), dan pos wasrik merupakan lini pertama pertahanan keamanan Lembaga Pemasyarakatan. Petugas yang bertugas di pos-pos ini memiliki tanggung jawab besar dalam memastikan setiap orang dan barang yang masuk maupun keluar telah melalui prosedur pemeriksaan yang benar sesuai ketentuan yang berlaku.",
  tujuan: ["Mencegah barang terlarang masuk.","Verifikasi identitas pengunjung/petugas.","Menjaga keamanan akses utama.","Pelayanan tertib dan profesional."],
  uraian: "Pos Depan merupakan gerbang utama Lapas yang dijaga ketat, tempat setiap tamu wajib menunjukkan identitas, mengisi buku kunjungan, dan diperiksa dengan metal detector. Pos RS bertugas mengamankan area rumah sakit dalam Lapas agar WBP yang dirawat tetap dalam pengawasan. Pos Wasrik berfungsi sebagai pemeriksaan lanjutan untuk memastikan tidak ada barang terlarang yang lolos dari Pos Depan.",
  alur: ["Tamu/petugas datang ke Pos Depan","Verifikasi identitas & pengisian buku kunjungan","Pemeriksaan dengan metal detector & manual","Ditemukan indikasi mencurigakan?","Ya → koordinasi dengan Ka. KPLP  |  Tidak → izinkan masuk","Catat seluruh aktivitas di buku jurnal pos"],
  ceklis: ["Verifikasi identitas setiap tamu sebelum masuk area Lapas.","Gunakan metal detector dan pemeriksaan manual untuk semua barang.","Catat seluruh kunjungan dan kejadian di buku jurnal pos.","Koordinasikan dengan Ka. KPLP jika ada situasi mencurigakan.","Jaga sikap profesional dan ramah dalam melayani tamu."]
},
{
  no: 2,
  foto: "img/bab02.jpg",
  judul: "Pengamanan Pos P2U (Pintu Utama)",
  ringkas: "Titik paling kritis dalam sistem keamanan Lapas",
  pendahuluan: "Pos P2U (Pintu Utama) adalah titik paling kritis dalam sistem keamanan Lapas. Sebagai pintu gerbang resmi yang menghubungkan area dalam dan luar Lapas, pos P2U dijaga secara ketat selama 24 jam penuh oleh petugas yang terlatih dan berdedikasi tinggi.",
  tujuan: ["Mengendalikan keluar masuk di Lapas.","Mencegah pelarian dan akses tidak sah.","Memastikan prosedur berjalan sesuai aturan.","Mencatat seluruh aktivitas secara akurat."],
  uraian: "Pos P2U harus berfungsi dalam kondisi apapun. Petugas P2U memiliki kewenangan menolak akses pihak yang tidak memenuhi persyaratan. Sistem kunci ganda dan verifikasi berlapis diterapkan untuk mencegah segala bentuk pelanggaran. Setiap pergerakan WBP ke luar area wajib disertai surat izin resmi dan pengawalan petugas yang ditunjuk.",
  alur: ["Permintaan akses masuk/keluar diterima","Verifikasi identitas & surat izin resmi","Sesuai prosedur & persyaratan?","Ya → buka pintu & catat waktu/alasan  |  Tidak → tolak akses","Laporkan kondisi mencurigakan ke Ka. KPLP","Kunci P2U kembali dikuasai petugas berwenang"],
  ceklis: ["Kunci P2U tidak boleh diserahkan kepada pihak yang tidak berwenang.","Setiap pembukaan pintu harus tercatat dengan waktu dan alasan yang jelas.","Petugas P2U wajib waspada terhadap indikasi percobaan pelarian.","Koordinasikan dengan pos depan dan pos lainnya untuk keamanan berlapis.","Tetap siaga dan tidak meninggalkan pos tanpa pengganti yang resmi."]
},
{
  no: 3,
  foto: "img/bab03.jpg",
  judul: "Pengamanan Pos Rupam (Regu Pengamanan)",
  ringkas: "Satuan pelaksana tugas pengamanan bersistem shift",
  pendahuluan: "Regu Pengamanan (Rupam) merupakan satuan pelaksana tugas pengamanan yang beroperasi secara terjadwal dalam sistem shift. Setiap regu dipimpin oleh Komandan Regu (Danru) yang bertanggung jawab atas seluruh anggota regu dan aktivitas pengamanan selama shift berlangsung.",
  tujuan: ["Menjaga keamanan seluruh area Lapas.","Mengawasi ketertiban WBP di blok hunian.","Merespons gangguan dengan cepat.","Melakukan pengecekan rutin saat dinas."],
  uraian: "Rupam terdiri dari beberapa anggota yang ditempatkan di pos-pos strategis dalam area Lapas. Setiap anggota memiliki wilayah patroli dan pos jaga yang telah ditetapkan. Danru wajib melakukan pengecekan seluruh pos jaga setiap 2 jam. Buku jurnal regu harus diisi secara lengkap dan akurat sepanjang shift berlangsung.",
  alur: ["Serah terima regu di awal shift","Pembagian pos jaga oleh Danru","Patroli rutin & pengecekan pos setiap 2 jam","Ditemukan gangguan keamanan?","Ya → lapor Danru & tindak lanjut  |  Tidak → lanjutkan patroli","Isi buku jurnal regu secara lengkap"],
  ceklis: ["Serah terima regu harus dilakukan secara lengkap dan formal.","Patroli rutin adalah kewajiban yang tidak boleh diabaikan.","Setiap anggota Rupam wajib membawa alat komunikasi yang berfungsi.","Laporkan segera kepada Danru jika terdapat situasi tidak normal.","Jaga kekompakan dan koordinasi antar anggota regu selama shift."]
},
{
  no: 4,
  foto: "img/bab04.jpg",
  judul: "Pengamanan Pos Menara (Menara Pengawas)",
  ringkas: '"Mata" pengawasan dari ketinggian',
  pendahuluan: "Pos Menara (Menara Pengawas) ditempatkan di posisi strategis untuk memaksimalkan jangkauan pengawasan visual di seluruh area Lapas. Petugas menara berperan sebagai \"mata\" yang memantau situasi dari ketinggian guna mendeteksi potensi gangguan keamanan sedini mungkin.",
  tujuan: ["Mengawasi area Lapas dari ketinggian.","Mendeteksi dan melaporkan aktivitas mencurigakan.","Mendukung patroli Rupam dengan pengamatan visual.","Mencegah upaya pelarian dari perimeter."],
  uraian: "Petugas menara ditempatkan di menara pengawas yang tersebar di titik-titik strategis perimeter Lapas. Pos ini dilengkapi dengan teropong, alat komunikasi radio, dan lampu sorot untuk pengamanan malam hari. Petugas wajib melaporkan situasi setiap 30 menit kepada Danru atau Ka. KPLP. Pengamatan mencakup seluruh area dalam dan luar perimeter Lapas termasuk kondisi pagar kawat dan penerangan.",
  alur: ["Petugas naik & bersiaga di pos menara","Pengamatan visual menyeluruh (teropong, radio, lampu sorot)","Terdeteksi aktivitas mencurigakan?","Ya → lapor Danru/Ka. KPLP segera  |  Tidak → lanjutkan pengamatan","Laporan rutin situasi setiap 30 menit"],
  ceklis: ["Petugas tidak boleh meninggalkan pos menara tanpa izin Danru.","Alat komunikasi harus selalu dalam kondisi aktif dan siap digunakan.","Laporan situasi wajib disampaikan tepat waktu setiap 30 menit.","Cuaca buruk bukan alasan untuk mengurangi kewaspadaan di pos menara.","Koordinasikan pengamatan dengan petugas patroli di bawah secara aktif."]
},
{
  no: 5,
  foto: "img/bab05.jpg",
  judul: "Penggeledahan Insidentil",
  ringkas: "Penggeledahan reaktif berdasar informasi khusus",
  pendahuluan: "Penggeledahan insidentil adalah penggeledahan tidak terjadwal yang dilakukan berdasarkan informasi atau perintah khusus dari Ka. Lapas atau Ka. KPLP. Penggeledahan ini bersifat reaktif untuk menangani dugaan gangguan keamanan dan ketertiban (Kamtib) yang memerlukan tindakan segera.",
  tujuan: ["Mencegah peredaran barang terlarang.","Menjaga keamanan dan ketertiban Lapas.","Menindaklanjuti informasi intelijen dengan cepat.","Mengamankan barang bukti pelanggaran."],
  uraian: "Penggeledahan insidentil dilakukan berdasarkan informasi adanya barang terlarang. Setelah asesmen keamanan oleh Ka. Lapas atau Ka. KPLP, penggeledahan dilaksanakan jika kondisi memungkinkan oleh tim gabungan KPLP dan Rupam berdasarkan Surat Perintah Penggeledahan.",
  alur: ["Informasi/laporan dugaan pelanggaran diterima","Asesmen oleh Ka. Lapas/Ka. KPLP","Penerbitan Surat Perintah Penggeledahan","Tim gabungan KPLP & Rupam melaksanakan penggeledahan","Ditemukan barang terlarang?","Ya → sita & buat Berita Acara  |  Tidak → laporkan hasil nihil"],
  ceklis: ["Pastikan surat perintah telah ditandatangani sebelum penggeledahan.","Gunakan APD yang diperlukan dan utamakan keselamatan petugas.","Dokumentasikan seluruh temuan dalam foto dan berita acara.","Jaga koordinasi dengan Ka. KPLP selama pelaksanaan.","Bersikap profesional saat berinteraksi dengan WBP."]
},
{
  no: 6,
  foto: "img/bab06.jpg",
  judul: "Penggeledahan Rutin",
  ringkas: "Pemeriksaan terjadwal secara berkala di blok hunian",
  pendahuluan: "Penggeledahan rutin adalah pemeriksaan terjadwal yang dilaksanakan secara berkala di blok hunian. Kegiatan ini direncanakan oleh Ka. KPLP dan Kasi Adkam sebagai upaya menjaga keamanan dan ketertiban (Kamtib) Lapas secara berkelanjutan.",
  tujuan: ["Mencegah masuknya barang terlarang.","Menjaga keamanan dan ketertiban Lapas.","Meningkatkan kesiapsiagaan petugas.","Memberikan efek pencegahan bagi WBP."],
  uraian: "Penggeledahan rutin diawali dengan penyusunan rencana oleh Ka. KPLP dan Kasi Adkam serta persetujuan Ka. Lapas melalui Surat Perintah Penggeledahan. Pelaksanaan dilakukan oleh Ka. KPLP bersama SATGAS Kamtib dan Ka. Rupam menggunakan perlengkapan standar. Seluruh temuan dilaporkan kepada Ka. Lapas, dan barang terlarang yang ditemukan dimusnahkan sesuai perintah Ka. Lapas.",
  alur: ["Penyusunan rencana oleh Ka. KPLP & Kasi Adkam","Persetujuan Ka. Lapas (Surat Perintah Penggeledahan)","Pelaksanaan oleh SATGAS Kamtib & Ka. Rupam","Ditemukan barang terlarang?","Ya → musnahkan sesuai perintah Ka. Lapas (disaksikan)  |  Tidak → laporkan hasil","Dokumentasikan seluruh tahapan (foto & Berita Acara)"],
  ceklis: ["Susun rencana penggeledahan dengan sasaran yang spesifik dan terukur.","Laporkan segera setiap temuan kepada Ka. Lapas via Ka. KPLP.","Pemusnahan barang wajib disaksikan minimal oleh Ka. Rupam, Ka. KPLP, dan Kasi Adkam.","Dokumentasikan seluruh tahapan dengan foto dan berita acara resmi."]
},
{
  no: 7,
  foto: "img/bab07.jpg",
  judul: "Pengawalan Pemindahan Narapidana",
  ringkas: "Menjamin keselamatan, keamanan, dan kelancaran administrasi",
  pendahuluan: "Pemindahan narapidana antar Lapas memerlukan pengawalan ketat untuk menjamin keselamatan, keamanan, dan kelancaran administrasi. Kesalahan dalam pelaksanaannya dapat menyebabkan overkapasitas serta mengganggu keamanan dan ketertiban Lapas asal maupun tujuan.",
  tujuan: ["Menjamin pemindahan narapidana aman dan tertib.","Memastikan keabsahan data dan identitas.","Mencegah pelarian dan gangguan keamanan.","Mendukung pengelolaan kapasitas hunian."],
  uraian: "Pemindahan narapidana diawali dari Binadik yang menyerahkan data ke Ka. KPLP untuk diverifikasi. Selanjutnya narapidana dijemput dari blok hunian oleh Staf KPLP dan Ka. Rupam, lalu didata oleh Staf Registrasi. Sebelum diberangkatkan, dilakukan penggeledahan dan pemeriksaan kelengkapan oleh KPLP serta verifikasi akhir oleh P2U sebelum keluar dari Lapas.",
  alur: ["Binadik menyerahkan data pemindahan ke Ka. KPLP","Verifikasi data oleh Ka. KPLP","Penjemputan WBP dari blok (Staf KPLP & Ka. Rupam)","Pendataan oleh Staf Registrasi","Penggeledahan & pemeriksaan kelengkapan oleh KPLP","Verifikasi akhir P2U → keberangkatan (isi Register B)"],
  ceklis: ["Verifikasi data WBP sebelum penjemputan dari blok untuk mencegah kesalahan orang.","Borgol wajib terpasang sejak penjemputan hingga serah terima di Lapas tujuan.","Buku Register B harus diisi dan ditandatangani sebagai bukti resmi pemindahan.","Koordinasikan waktu keberangkatan dengan Lapas tujuan terlebih dahulu."]
},
{
  no: 8,
  foto: "img/bab08.jpg",
  judul: "Pencegahan Gangguan Kamtib dan Bencana Alam",
  ringkas: "Kesiapsiagaan menghadapi insiden keamanan & bencana",
  pendahuluan: "Lapas memiliki risiko tinggi terhadap gangguan keamanan dan ketertiban, seperti perkelahian, pelarian, maupun bencana kebakaran. Oleh karena itu, kesiapsiagaan petugas KPLP sangat penting untuk menjamin keselamatan penghuni, petugas, serta menjaga stabilitas keamanan Lapas.",
  tujuan: ["Menjaga keamanan dan ketertiban.","Merespons insiden dengan cepat.","Mencegah eskalasi gangguan.","Memastikan koordinasi yang efektif."],
  uraian: "Penanganan gangguan Kamtib dilakukan secara berjenjang dari Petugas Blok, Ka. Rupam, Ka. KPLP, hingga Ka. Lapas. Setiap insiden, seperti perkelahian, kebakaran, bencana alam, atau pelarian, ditangani sesuai prosedur dan segera dilaporkan untuk memperoleh tindakan lanjutan serta koordinasi dengan pihak terkait bila diperlukan.",
  alur: ["Insiden terdeteksi oleh Petugas Blok","Tindak lanjut awal & laporan ke Ka. Rupam","Eskalasi ke Ka. KPLP","Memerlukan penanganan lanjutan/eksternal?","Ya → lapor Ka. Lapas & koordinasi pihak terkait  |  Tidak → selesaikan di lapangan","Susun Berita Acara insiden"],
  ceklis: ["Hafal nomor HT semua pejabat dalam rantai komando pengamanan.","Lakukan simulasi penanganan darurat secara berkala bersama tim regu.","Selalu utamakan keselamatan jiwa sebelum keselamatan harta benda.","Pastikan alat pemadam kebakaran dalam kondisi terisi dan siap pakai setiap saat.","Buat Berita Acara setiap insiden, sekecil apapun kejadiannya."]
},
{
  no: 9,
  foto: "img/bab09.jpg",
  judul: "Tugas Kepala Regu Pengamanan (Ka. Rupam)",
  ringkas: "Penghubung antara petugas lapangan dan Ka. KPLP",
  pendahuluan: "Ka. Rupam bertanggung jawab mengawasi pelaksanaan tugas pengamanan oleh anggota regu agar berjalan tertib dan sesuai prosedur. Selain itu, Ka. Rupam berperan sebagai penghubung antara petugas lapangan dan Ka. KPLP.",
  tujuan: ["Menjaga keamanan dan ketertiban selama jam dinas.","Mengelola administrasi penjagaan dengan tertib.","Mengoordinasikan tugas regu pengamanan.","Memastikan kelancaran serah terima tugas."],
  uraian: "Ka. Rupam bertugas mengawasi kegiatan pengamanan, pembagian makanan, kebersihan blok, pergerakan penghuni, serta pelaksanaan tugas anggota regu. Selain itu, Ka. Rupam mengelola administrasi penjagaan, laporan serah terima, dan inventaris. Pelaksanaan tugas dilakukan dalam tiga shift, dengan hasil pengawasan dilaporkan kepada Ka. KPLP dan diteruskan kepada Ka. Lapas.",
  alur: ["Menerima tugas & pembagian pos dari Ka. KPLP","Mengawasi kegiatan blok (makan, kebersihan, pergerakan)","Mengelola administrasi penjagaan & inventaris","Memantau pelaksanaan sepanjang 3 shift","Menyusun laporan hasil pengawasan","Melaporkan ke Ka. KPLP → diteruskan ke Ka. Lapas"],
  ceklis: ["Pastikan serah terima tugas regu dilakukan dengan cermat dan menyeluruh.","Lakukan kontrol blok secara berkala sepanjang jam dinas.","Tandatangani buku laporan hanya setelah memverifikasi isi laporan secara seksama.","Jaga komunikasi aktif dengan seluruh anggota regu melalui HT."]
},
{
  no: 10,
  foto: "img/bab10.jpg",
  judul: "Tugas Wakil Kepala Regu Pengamanan (Waka. Rupam)",
  ringkas: "Menjamin kesinambungan pengamanan regu",
  pendahuluan: "Waka. Rupam bertugas mendampingi dan membantu Ka. Rupam dalam seluruh pelaksanaan tugas pengamanan. Apabila Ka. Rupam berhalangan, Waka. Rupam mengambil alih tanggung jawab kepemimpinan regu sehingga pelaksanaan tugas pengamanan tetap berjalan lancar dan berkesinambungan.",
  tujuan: ["Membantu pelaksanaan tugas Ka. Rupam.","Menjamin kesinambungan pengamanan.","Menjaga ketertiban operasional dan administrasi.","Melaporkan kegiatan secara tepat waktu."],
  uraian: "Waka. Rupam melaksanakan tugas pengamanan dan administrasi yang mencakup pengawasan penghuni, anggota penjagaan, barang, tamu, serta kebersihan blok hunian. Seluruh kegiatan dicatat dan dilaporkan kepada Ka. Rupam untuk diteruskan kepada Ka. KPLP. Pengawasan dilakukan secara berjenjang melalui sistem tiga shift guna menjamin keamanan dan ketertiban Lapas.",
  alur: ["Mendampingi Ka. Rupam dalam tugas rutin","Mengawasi penghuni, petugas, barang, dan tamu","Ka. Rupam berhalangan?","Ya → ambil alih tanggung jawab kepemimpinan regu  |  Tidak → bantu tugas rutin","Catat & laporkan kegiatan ke Ka. Rupam"],
  ceklis: ["Pahami seluruh tugas Ka. Rupam karena Waka. Rupam adalah penggantinya.","Laporkan setiap penyimpangan kepada Ka. Rupam tanpa menunda.","Jangan menandatangani buku laporan tanpa melakukan pengecekan fisik terlebih dahulu.","Koordinasi aktif dengan anggota regu sangat penting untuk deteksi dini gangguan."]
},
{
  no: 11,
  foto: "img/bab11.jpg",
  judul: "Timbang Terima Regu Pengamanan",
  ringkas: "Pergantian tanggung jawab penjagaan secara resmi",
  pendahuluan: "Timbang terima regu pengamanan merupakan proses pergantian tanggung jawab penjagaan dari satu regu ke regu berikutnya secara resmi dan terstruktur. Proses ini penting untuk menjaga kesinambungan pengamanan serta mencegah terjadinya celah keamanan di dalam Lapas.",
  tujuan: ["Menjamin kelancaran pergantian regu.","Mendokumentasikan kondisi Lapas saat serah terima.","Menjaga akuntabilitas inventaris keamanan.","Menyampaikan informasi terkini kepada regu pengganti."],
  uraian: "Timbang terima regu dilakukan oleh regu lama dan regu pengganti dengan pengawasan Ka. Rupam. Kegiatan ini meliputi pemeriksaan jumlah penghuni, inventaris keamanan, sarana prasarana, kondisi keamanan, serta jumlah petugas yang bertugas. Setelah seluruh data diverifikasi, kedua Ka. Rupam menandatangani berita acara serah terima sebagai bukti pelaksanaan tugas.",
  alur: ["Regu lama & regu baru siap serah terima","Cek jumlah penghuni & inventaris keamanan","Cek sarana prasarana & kondisi keamanan","Data sesuai antara kedua regu?","Ya → tanda tangan Berita Acara  |  Tidak → investigasi selisih","Regu baru resmi memulai tugas"],
  ceklis: ["Datang minimal 15 menit sebelum jadwal timbang terima untuk persiapan.","Hitung jumlah narapidana dan tahanan secara fisik, bukan hanya berdasarkan catatan.","Laporkan setiap temuan perbedaan data kepada Ka. KPLP segera.","Jangan meninggalkan pos sebelum timbang terima dinyatakan selesai secara resmi."]
},
{
  no: 12,
  foto: "img/bab12.jpg",
  judul: "Tugas Anggota Regu Pengamanan di Pos Blok",
  ringkas: "Garda terdepan interaksi langsung dengan WBP",
  pendahuluan: "Petugas pengamanan pos blok merupakan garda terdepan dalam menjaga keamanan dan ketertiban di blok hunian. Karena berinteraksi langsung dengan WBP setiap hari, petugas harus memahami tugas dan kewenangannya dengan baik agar kondisi Kamtib Lapas tetap terjaga.",
  tujuan: ["Menjaga keamanan dan ketertiban blok hunian.","Mengawasi aktivitas di blok hunian.","Melaporkan gangguan Kamtib kepada Ka. Rupam.","Mendukung pembinaan dan layanan WBP secara tertib."],
  uraian: "Anggota Rupam di pos blok bertugas mengawasi penghuni, pembagian makanan, kegiatan pembinaan, dan layanan kesehatan, serta melakukan penghitungan jumlah penghuni secara berkala. Setiap gangguan Kamtib, kondisi penghuni, maupun sarana prasarana wajib dilaporkan kepada Ka. Rupam. Seluruh pelaksanaan tugas dicatat dalam laporan dan disampaikan melalui HT maupun buku laporan blok.",
  alur: ["Awasi penghuni & aktivitas blok","Bagikan makanan & dukung layanan pembinaan/kesehatan","Hitung jumlah penghuni secara berkala","Ditemukan gangguan Kamtib?","Ya → lapor Ka. Rupam via HT  |  Tidak → lanjutkan pengawasan","Catat dalam buku laporan blok"],
  ceklis: ["Kenali setiap WBP di blok Anda beserta risiko keamanan yang melekat padanya.","Lakukan penghitungan penghuni minimal tiga kali dalam setiap shift.","Catat setiap kejadian sekecil apapun dalam buku laporan blok.","Segera laporkan bila menemukan WBP tidak berada di kamarnya tanpa izin."]
},
{
  no: 13,
  foto: "img/bab13.jpg",
  judul: "Apel Penghuni",
  ringkas: "Penghitungan & pengecekan keberadaan seluruh WBP",
  pendahuluan: "Apel penghuni adalah kegiatan penghitungan dan pengecekan keberadaan seluruh WBP saat pergantian regu. Kegiatan ini bertujuan memastikan seluruh penghuni terdata dengan benar serta mencegah terjadinya pelarian atau gangguan keamanan lainnya.",
  tujuan: ["Memastikan jumlah dan keberadaan WBP.","Mencegah pelarian WBP.","Memastikan penempatan WBP sesuai data.","Menjaga keamanan kamar hunian."],
  uraian: "Apel penghuni dilaksanakan bersamaan dengan timbang terima regu di bawah pengawasan Ka. Rupam. WBP harus berada di kamar masing-masing dalam kondisi terkunci. Penghitungan dilakukan dua kali oleh regu lama dan regu baru, lalu dicocokkan dengan data resmi. Jika ada ketidaksesuaian, dilakukan tindakan pengamanan atau penyesuaian, kemudian hasil dilaporkan sebagai dasar serah terima regu.",
  alur: ["Regu lama & regu baru siap, WBP dikunci di kamar","Penghitungan ke-1 oleh regu lama","Penghitungan ke-2 oleh regu baru","Hasil hitung cocok dengan data resmi?","Ya → lanjutkan serah terima  |  Tidak → tindakan pengamanan/penyesuaian","Laporkan hasil apel sebagai dasar timbang terima"],
  ceklis: ["Laksanakan apel dengan suasana yang tertib namun tidak memancing ketegangan.","Gunakan daftar penghuni resmi sebagai acuan verifikasi, bukan hafalan.","Dokumentasikan setiap ketidaksesuaian dalam buku laporan jaga.","Pastikan seluruh gembok dan kunci berfungsi normal sebelum meninggalkan pos."]
},
{
  no: 14,
  foto: "img/bab14.jpg",
  judul: "Penguncian Blok dan Kamar Hunian",
  ringkas: "Prosedur utama menjaga keamanan fisik Lapas",
  pendahuluan: "Penguncian blok dan kamar hunian adalah prosedur utama untuk menjaga keamanan fisik Lapas. Selain membatasi pergerakan WBP, kegiatan ini juga berfungsi sebagai kontrol dan verifikasi jumlah penghuni. Kelalaian dalam pelaksanaannya dapat menimbulkan gangguan keamanan serius.",
  tujuan: ["Mengunci blok dan kamar sesuai jadwal.","Mengendalikan pergerakan WBP.","Mengecek jumlah WBP.","Menjaga keamanan malam hari."],
  uraian: "Penguncian dilakukan berdasarkan perintah Ka. Rupam setelah penghitungan jumlah WBP oleh Petugas Blok. Penguncian harus dilakukan langsung oleh petugas sesuai waktu yang ditetapkan dan tidak boleh dilakukan oleh WBP. Setelah selesai, kunci diserahkan ke Ka. Rupam lalu disimpan dalam box kunci yang dikelola Ka. KPLP sebagai sistem pengendalian dan tanggung jawab keamanan.",
  alur: ["Perintah penguncian dari Ka. Rupam","Petugas Blok menghitung jumlah WBP","Penguncian kamar satu per satu sesuai checklist","Seluruh kamar terkunci dengan baik?","Ya → serahkan kunci ke Ka. Rupam  |  Tidak → cek ulang & perbaiki","Kunci disimpan dalam box kunci (dikelola Ka. KPLP)"],
  ceklis: ["Buat checklist kamar yang harus dikunci agar tidak ada yang terlewat.","Pastikan setiap gembok terkunci rapat sebelum melanjutkan ke kamar berikutnya.","Jangan biarkan WBP memegang anak kunci apapun.","Laporkan segera bila ada gembok yang rusak atau tidak berfungsi kepada Ka. Rupam."]
},
{
  no: 15,
  foto: "img/bab15.jpg",
  judul: "Mutasi Kamar WBP",
  ringkas: "Pemindahan WBP antar kamar secara terencana",
  pendahuluan: "Mutasi kamar WBP adalah pemindahan WBP antar kamar di dalam Lapas yang berfungsi sebagai bagian dari pengelolaan keamanan, pembinaan, dan kesehatan. Jika tidak terencana dan terdokumentasi dengan baik, mutasi dapat memicu gangguan keamanan dan konflik.",
  tujuan: ["Mengoptimalkan penempatan WBP sesuai pembinaan.","Mencegah konflik antar WBP.","Menyesuaikan penempatan dengan kondisi kesehatan.","Mendokumentasikan mutasi secara resmi."],
  uraian: "Mutasi kamar WBP dimulai dari usulan program yang diterima Staf KPLP dan disusun menjadi draft mutasi oleh Ka. KPLP. Penyusunan mempertimbangkan pembinaan, jumlah WBP, kesehatan, keamanan, dan mapenaling. Setelah disetujui, Ka. KPLP menetapkan laporan final yang diteruskan ke Ka. Rupam untuk pelaksanaan oleh Petugas Blok, dengan pengawasan ketat agar penempatan WBP tetap akurat.",
  alur: ["Usulan mutasi diterima Staf KPLP","Penyusunan draft mutasi oleh Ka. KPLP","Pertimbangan pembinaan, kesehatan, & keamanan","Draft disetujui?","Ya → tetapkan laporan final  |  Tidak → revisi draft","Ka. Rupam & Petugas Blok melaksanakan mutasi"],
  ceklis: ["Perbarui papan lalu lintas penghuni segera setelah setiap mutasi kamar dilaksanakan.","Pastikan WBP yang dimutasi memahami alasan pemindahannya.","Catat seluruh mutasi dalam buku laporan dan pastikan data tersinkronisasi.","Koordinasikan mutasi untuk alasan kesehatan dengan petugas klinik Lapas."]
},
{
  no: 16,
  foto: "img/bab16.jpg",
  judul: "Tugas Petugas Penjaga Pintu Utama",
  ringkas: "Garda terdepan dan terakhir pengamanan Lapas",
  pendahuluan: "Petugas Penjaga Pintu Utama (P2U) merupakan garda terdepan dan terakhir pengamanan Lapas. Semua orang, barang, dan kendaraan yang masuk maupun keluar harus melalui pemeriksaan P2U. Kelalaian tugas dapat membuka celah masuknya barang terlarang atau pelarian WBP.",
  tujuan: ["Mengendalikan keluar masuk orang dan barang.","Mencegah barang terlarang masuk Lapas.","Mencegah WBP keluar tanpa izin.","Mencatat lalu lintas secara akurat."],
  uraian: "P2U bekerja di bawah Ka. Rupam dan berkoordinasi dengan Ka. KPLP, dengan kewajiban hadir sebelum dinas untuk serah terima dan pengecekan inventaris. Tugasnya meliputi pengawasan keluar masuk orang dan barang melalui pemeriksaan fisik dan X-Ray, pelaporan gangguan Kamtib, serta pencatatan administrasi. P2U menggunakan peralatan seperti HT, X-Ray, PHH, dan perlengkapan lainnya untuk mendukung pengamanan.",
  alur: ["Serah terima & cek inventaris sebelum dinas","Orang/barang/kendaraan datang untuk diperiksa","Pemeriksaan fisik & X-Ray","Sesuai prosedur & persyaratan?","Ya → izinkan masuk/keluar & catat  |  Tidak → tolak & lapor Ka. KPLP","Catat administrasi lalu lintas P2U"],
  ceklis: ["Jangan pernah membuka pintu gerbang tanpa izin resmi dari Ka. KPLP atau Ka. Lapas.","Fungsikan X-Ray secara optimal untuk setiap pemeriksaan barang bawaan.","Catat setiap peristiwa di pintu utama dengan detail: waktu, nama, keperluan.","Koordinasikan setiap kondisi mencurigakan segera kepada Ka. KPLP via HT."]
},
{
  no: 17,
  foto: "img/bab17.jpg",
  judul: "Tugas Anggota Regu Pengamanan di Pos Luar",
  ringkas: "Lapisan pertahanan tambahan di luar tembok Lapas",
  pendahuluan: "Pengamanan pos luar merupakan lapisan pertahanan tambahan di luar tembok Lapas yang berfungsi memantau area perimeter dari sisi eksternal. Petugas di pos ini memiliki tanggung jawab penting karena berhadapan langsung dengan lingkungan luar yang memiliki potensi risiko keamanan tinggi, sehingga membutuhkan kewaspadaan dan kesiapsiagaan yang maksimal.",
  tujuan: ["Mengawasi perimeter luar Lapas.","Mendeteksi ancaman dari luar.","Mencegah pelarian dan penyelundupan.","Mendukung sistem keamanan berlapis."],
  uraian: "Pos luar Lapas terdiri dari beberapa titik seperti Pos RS, Pos Lobby, Pos Wasrik, dan Pos Menara yang diisi petugas sesuai pembagian Ka. Rupam. Untuk menjaga kewaspadaan, dilakukan rolling pos setiap 2 jam. Tugas petugas meliputi pengawasan area, pelaporan kondisi dan gangguan Kamtib, serta pencatatan laporan tugas. Ka. Rupam memastikan rolling berjalan tertib dan komunikasi antarpos melalui HT tetap aktif.",
  alur: ["Pembagian pos oleh Ka. Rupam","Pengawasan area perimeter luar","Rolling pos setiap 2 jam","Ditemukan anomali/ancaman?","Ya → hubungi Ka. Rupam segera  |  Tidak → lanjutkan pengawasan","Catat laporan tugas pos luar"],
  ceklis: ["Kenali titik-titik rawan di perimeter Lapas dan tingkatkan kewaspadaan di area tersebut.","Laksanakan rolling pos tepat waktu dan catat setiap pergantian dalam buku laporan.","Jangan meninggalkan pos sebelum digantikan oleh petugas selanjutnya.","Hubungi Ka. Rupam segera bila menemukan anomali di area pos luar."]
},
{
  no: 18,
  foto: "img/bab18.jpg",
  judul: "Penempatan WBP pada Blok Mapenaling",
  ringkas: "Tahap pengenalan lingkungan bagi WBP baru",
  pendahuluan: "Blok Mapenaling adalah blok khusus bagi WBP baru sebagai tahap pengenalan lingkungan Lapas. Fase ini berfungsi membantu WBP beradaptasi dengan aturan dan sistem pembinaan. Penempatan dilakukan secara terstandar agar berjalan adil dan sesuai ketentuan.",
  tujuan: ["Menempatkan WBP baru sesuai prosedur.","Memverifikasi identitas dan kondisi kesehatan.","Memberikan masa orientasi sebelum blok reguler.","Mencegah gangguan Kamtib akibat kesalahan penempatan."],
  uraian: "Penempatan WBP di blok Mapenaling dimulai dari penerimaan oleh P2U, dilanjutkan pemeriksaan berkas dan identitas oleh Staf Registrasi. WBP kemudian menjalani penggeledahan dan skrining kesehatan untuk memastikan keamanan dan kondisi fisik. Setelah itu, Ka. KPLP memerintahkan Ka. Rupam untuk penempatan, yang diteruskan ke Petugas Blok Mapenaling. Proses ini dilakukan secara terkoordinasi untuk menjamin ketertiban dan keamanan.",
  alur: ["WBP diterima di P2U","Pemeriksaan berkas & identitas oleh Staf Registrasi","Penggeledahan & skrining kesehatan","Kondisi aman & sehat untuk ditempatkan?","Ya → Ka. KPLP perintahkan penempatan  |  Tidak → rujuk klinik/tindak lanjut","Petugas Blok Mapenaling menempatkan WBP"],
  ceklis: ["Sambut WBP baru dengan sikap profesional: tegas namun manusiawi.","Jangan menempatkan WBP baru sebelum seluruh tahapan verifikasi selesai.","Koordinasikan temuan kondisi kesehatan khusus dengan petugas klinik segera.","Pastikan WBP baru mendapat penjelasan singkat tentang aturan blok Mapenaling."]
},
];

const PENULIS = {
  nama: "Rendy Caesar Pratama Putra, A.Md.P., S.H., M.H., M.M.",
  jabatan: "Kepala Kesatuan Pengamanan Lapas Narkotika Kelas IIA Jakarta",
  foto: "img/penulis.jpg",
  bio: "Aparatur Sipil Negara di lingkungan Kementerian Imigrasi dan Pemasyarakatan dengan pengalaman lebih dari satu dekade di bidang pemasyarakatan, mengemban berbagai jabatan strategis terkait pengamanan, pembinaan, tata tertib, dan manajemen organisasi."
};

const PUSTAKA = [
  "Undang-Undang Republik Indonesia Nomor 22 Tahun 2022 tentang Pemasyarakatan. Jakarta: Sekretariat Negara.",
  "Peraturan Pemerintah Nomor 31 Tahun 1999 tentang Pembinaan dan Pembimbingan Warga Binaan Pemasyarakatan. Jakarta: Sekretariat Negara.",
  "Peraturan Pemerintah Nomor 32 Tahun 1999 tentang Syarat dan Tata Cara Pelaksanaan Hak Warga Binaan Pemasyarakatan. Jakarta: Sekretariat Negara.",
  "Peraturan Pemerintah Nomor 58 Tahun 1999 tentang Syarat-Syarat dan Tata Cara Pelaksanaan Wewenang, Tugas, dan Tanggung Jawab Perawatan Tahanan. Jakarta: Sekretariat Negara.",
  "Peraturan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor 28 Tahun 2023 tentang Organisasi dan Tata Kerja Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia."
];
