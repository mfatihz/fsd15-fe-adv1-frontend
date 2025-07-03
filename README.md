# CHILL App

CHILL app dibangun menggunakan React component dengan paradigma [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: Vite + React + React Router + tailwind\
Demo: [netlify](https://fsd15-fe-adv1.netlify.app/)

## Task Lists
Mengintegrasikan data static dengan penggunaan API dan mendalami framework React.
- [x] customHook.\
    done:
    - useLocalStorage
- [ ] Fetching (Axios) untuk consume API.
- [x] State management dengan seperti Redux, UseContext, dan Zustand.\
    done:
    - Zustand: usePopupDetailStore (in folder: src\stores\\)\
        implementasi:
        - pada HomeTemplate: untuk mengatur scroll pada browser dan tampil tidaknya PopupDetail component
        - pada Poster: untuk menampilkan PopupDetail component
- [x] mengimplementasikan library pada React\
    done:
    - React Router: Link
    - Sooner: Toaster, toast

Instructions
1. Siapkan Fake API atau Mock Data .
- [ ] Buat fake API menggunakan [Mock API](https://mockapi.io/) atau [Firebase](https://firebase.google.com/).
- [ ] Buat fungsi GET, UPDATE, ADD, dan DELETE data.
2. Implementasikan API Call
- [x] Instal library [Axios](https://axios-http.com/docs/intro) atau gunakan Fetch API bawaan Javascript
- [x] Buat folder "services/api".
- [ ] Kembangkan fungsi JavaScript untuk GET, UPDATE, ADD, dan DELETE data.
- [ ] Gunakan url API: simpan url api dasar dalam file .env

Catatan:
- [ ] Dapat mengimplementasikan interceptor
- [ ] Simpan basic url pada .env
- [ ] Bisa menggunakan custom hooks untuk memisahkan API dari komponen React

Poin Penilaian
- [ ] Implementasi API yang dinamis untuk GET, UPDATE, ADD, dan DELETE


Fitur app:
- [x] Masuk: add auth
- [x] Daftar
- [x] Beranda
- [x] Daftar Saya
- [ ] Series: add filter
- [ ] Film: add filter
- [x] Popup Series
- [x] Popup Film
- [ ] Tonton
- [ ] Popup Premium
- [ ] Profil
- [ ] Paket
- [ ] Pembayaran
- [ ] Tunggu Pembayaran