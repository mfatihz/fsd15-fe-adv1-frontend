# CHILL App

CHILL app dibangun menggunakan React component dengan paradigma [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: Vite + React + React Router + tailwind\
Demo: [netlify](https://fsd15-fe-int2.netlify.app/)

## Login dan Register

**Login** page dan **Register** page menggunakan **AuthTemplate**.\
AuthTemplate tersusun **AuthHeader** molecule, dengan props untuk mengatur nilai di dalamnya, serta Form organims (**LoginForm** dan **RegisterForm**).

## Home dan List

**Home** page dan **List** page dibentuk dengan menggunakan **HomeTemplate**
yang tersusun atas: **Header** organism, **Hero** organism dan **Galleries** template, dan **Footer** organism.

### Header

Header memiliki elemen yang dibuat secara dinamis berdasar data yaitu link navigasi (**NavigationalLinks** molecule) dan menu item pada avatar (**SettingMenu** organism).\
Data yang dipakai diletakkan pada **home-utils.jsx** pada folder **src/utils/app**.

### Galleries

Tampilan **Galleries** template dibuat secara dinamis berdasarkan array object **Gallery** (disimpan pada **home-page-data.js** dan **list-page-data.js** pada folder **src/utils/data/**).\
Jika data **Galleries** tidak kosong, array **Gallery** akan terender pada page. Sedangkan jika data **Galleries** kosong, teks alternatif akan ditampilkan untuk menandai bahwa tidak ada data.

Contoh data **Galleries**:
```
[
    {
        title: "Melanjutkan Tonton Film",
        galleryType: "continue",
        movies: continueData,
    },
    {
        title: "Top Rating Film dan Series Hari ini",
        movies: topData,
    },
    {
        title: "Film Trending",
        movies: trendingData,
    },
    {
        title: "Rilis Baru",
        movies: newData,
    },
]
```

Penambahan atau pengurangan data **gallery** pada **Galleries** object di atas akan secara otomatis terefleksikan di dalam tampilan halaman.

### Gallery

Data **Gallery** object berisi data **title** (misalnya: "Rilis Baru") dan array object **Movie**.\
seperti halnya pada **Galleries** Jika data **Movie** kosong, teks alternatif akan ditampilkan untuk menandai bahwa isi gallery masih kosong.  

Struktur data yang dipakai pada **Gallery**:
```
{
        title, \\ title untuk gallery
        galleryType, \\ bisa dikosongkan (default) atau diisi 'continue'
        movies, \\ array movie object
}
```

### movie Object

Data **movie** JSON object merupakan unsur utama penyusun **gallery**. **movie** JSON object memiliki struktur data seperti berikut ini:
```
{
        id, // id unik movies. Harus diisi
        title, // judul movie/series
        type: // salah satu di antara: movies atau series. Harus diisi
        genres: // genre dari movies/series misalnya 'aksi, 'anime' atau 'drama'
        badges, // berupa array atau null. List bisa menggunakan nilai: 'new' atau 'top'.
        duration, // durasi movies
        episodes, // jumlah episode dalam series
        contentRating, // kategori rating movie atau series (mis: 'G' atau 'R')
        userRating, // nilai rating dari pengguna. Skala 0-5
        images: { // berisi url gambar pada folder public
            hero:'/images/hero/<nama-hero-img>',
            portrait:'/images/poster-portrait/<nama-portrait-img>',
            landscape:'/images/poster-landscape/<nama-landscape-img>',
        },
        summary, // untuk deskripsi di Hero image (atau di bagian lainnya, jika dibutuhkan)
}
```
## Poin Pengembangan App

Pada tahap ini, sisi interaktif app ditingkatkan lebih lanjut dengan penggunaan useState dan data array.

### useState

useState digunakan untuk mengupdate tampilan. Contoh utamanya:
- Halaman Home: useState dipakai untuk menentukan buka tutupnya menu avatar.
- Halaman Daftar Saya: useState dipakai untuk mengetahui list movies.
- Poster (organims): Poster card menggunakan useState untuk menentukan status hover mouse. Selain itu, Poster juga menerima props dari parent container-nya untuk menentukan posisi dari PosterHover. Jika Poster berada di pinggir, PosterHover digeser sedemikian rupa agar tampilannya tidak terpotong (kecuali pada Poster di posisi kiri yang bukan urutan pertama).

### Penggunaan array

Array telah digunakan di beberapa tempat, misalnya:
- Pada halaman Home: array digunakan untuk meng-generate tampilan galleries. Gallery sendiri juga merupakan array yang isinya adalah array dari object movie. Saat ini, array pada galleries masih bersifat statis, diletakkan dalam folder src\utils\data\. Perubahan pada data galleries dan gallery atakan secara otomatis tercermin di tampilan App.
- Pada Halaman DaftarSaya: array digunakan untuk menampilkan daftar movie, menambah, dan menghapus daftar movie. Data array di bagian ini bersifat dinamis, user bisa menambah atau mengurangi data dengan mengklik tombol 'Check' pada PosterHover. Data array ini juga telah disimpan di localStorage. 
