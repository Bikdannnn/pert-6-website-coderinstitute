const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let dataMahasiswa = [
    {
      "nama": "Adik Tingkat",
      "NIM": "D121XXXXXX",
      "fakultas": "Teknik",
      "is_active": true,
      "skills": ["HTML", "CSS", "JS"]
    }
];

app.get('/api/mahasiswa', (req, res) => {
    res.status(200).json({
        pesan: "Data mahasiswa berhasil diambil!",
        data: dataMahasiswa
    });
});

app.post('/api/mahasiswa', (req, res) => {
    const mahasiswaBaru = req.body;
    
    dataMahasiswa.push(mahasiswaBaru);

    res.status(201).json({
        pesan: "Data mahasiswa berhasil ditambahkan!",
        data: mahasiswaBaru
    });
});

app.listen(port, () => {
    console.log(`Server Backend berjalan di http://localhost:${port}`);
});