function updateJam() {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const wib = new Date(utc + 3600000 * 7);

  let jam = wib.getHours().toString().padStart(2, "0");
  let menit = wib.getMinutes().toString().padStart(2, "0");
  let detik = wib.getSeconds().toString().padStart(2, "0");

  document.getElementById("jam").innerText = `${jam}:${menit}:${detik}`;

  const hariList = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const bulanList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let hari = hariList[wib.getDay()];
  let tanggal = wib.getDate();
  let bulan = bulanList[wib.getMonth()];
  let tahun = wib.getFullYear();

  const wetonList = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
  const baseDate = new Date(1945, 7, 17);
  const selisihHari = Math.floor((wib - baseDate) / (1000 * 60 * 60 * 24));
  let weton = wetonList[selisihHari % 5];

  document.getElementById("tanggal").innerText =
    `${hari} (${weton}), ${tanggal} ${bulan} ${tahun}`;
}

setInterval(updateJam, 1000);
updateJam();
