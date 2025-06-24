# CHILL App

CHILL app dibangun menggunakan React component dengan paradigma [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: Vite + React + React Router + tailwind\
Demo: [netlify](https://fsd15-fe-int2.netlify.app/)

## Task Lists
Mengintegrasikan data static dengan penggunaan API dan mendalami framework React.
- [x] customHook
    - done: useLocalStorage
- [ ] Fetching (Axios) untuk consume API.
- [x] State management dengan seperti Redux, UseContext, dan Zustand.\
    done: Zustand
    - pada HomeTemplate: untuk mengatur scroll pada browser dan tampil tidaknya PopupDetail component
    - pada Poster: untuk menampilkan PopupDetail component
- [x] mengimplementasikan library pada React\
    done: React Router

Instructions
1. Siapkan Fake API atau Mock Data .
- [ ] Buat fake API menggunakan [Mock API](https://mockapi.io/) atau [Firebase](https://firebase.google.com/).
- [ ] Buat fungsi GET, UPDATE, ADD, dan DELETE data.
2. Implementasikan API Call
- [ ] Instal library [Axios](https://axios-http.com/docs/intro) atau gunakan Fetch API bawaan Javascript
- [ ] Buat folder "services/api".
- [ ] Kembangkan fungsi JavaScript untuk GET, UPDATE, ADD, dan DELETE data.
- [ ] Gunakan url API: simpan url api dasar dalam file .env

Catatan:
- [ ] Dapat menggimplementasikan interceptor
- [ ] Simpan basic url pada .env
- [ ] Bisa menggunakan custom hooks untuk memisahkan API dari komponen React

Poin Penilaian
- [ ] Implementasi API yang dinamis untuk GET, UPDATE, ADD, dan DELETE
