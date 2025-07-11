# CHILL App Adv 1

Aplikasi ini dilengkapi dengan [backend](https://github.com/mfatihz/fsd15-fe-adv1-backend)

setting .env:  
    VITE_API_URL=http://localhost:5000/api

untuk menjalankan aplikasi:  
    npm run dev

Paradigma desain: [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: (Vite + React + React Router + tailwind) + axios + zustand  

## Task Lists
Mengintegrasikan data static dengan penggunaan API dan mendalami framework React.
- [x] customHook.
    > Done: src/hooks/useLocalStorage, src/hooks/auth
- [x] Fetching (Axios) untuk consume API.
    > Done: fetching data gallery dan list

    Contoh:
    ```
    const fetchGalleries = async () => {
      try {
        const response = await axios.get(`${API_URL}/galleries/movies`);
        setGalleries(response.data);
      } catch (e) {
        console.error('Error fetching galleries: ', e)
      }
    };
    ```

    ```
    export const toggleMyList = async (userId, movieId) => {
        try {
            const response = await axios.put(`${API_URL}/mylist/${userId}/toggle`, { movieId });
            return response?.data?.ids;
        } catch (e) {
            console.error('Error add to MyList:', e);
            throw e;
        }
    }
    ```
    
- [x] State management dengan seperti Redux, UseContext, dan Zustand.
    > Done: use Zustand in src/stores/usePopupDetailStore
        implementasi:
        - pada HomeTemplate: untuk mengatur scroll pada browser dan tampil tidaknya PopupDetail component
        - pada Poster: untuk menampilkan PopupDetail component
- [x] mengimplementasikan library pada React
    > Done: Sooner (Toaster, toast) saat menambah atau mengurangi myList

Instructions
1. Siapkan Fake API atau Mock Data .
    - [ ] Buat fake API menggunakan [Mock API](https://mockapi.io/) atau [Firebase](https://firebase.google.com/).
    - [ ] Buat fungsi GET, UPDATE, ADD, dan DELETE data.
        > Done: Create node + express backend
2. Implementasikan API Call
    - [x] Instal library [Axios](https://axios-http.com/docs/intro) atau gunakan Fetch API bawaan Javascript
    - [x] Buat folder "services/api".
    - [x] Kembangkan fungsi JavaScript untuk GET, UPDATE, ADD, dan DELETE data.
    - [x] Gunakan url API: simpan url api dasar dalam file .env

Catatan:
- [ ] Boleh mengimplementasikan interceptor
- [x] Simpan basic url pada .env
- [x] Bisa menggunakan custom hooks untuk memisahkan API dari komponen React

Poin Penilaian
- [x] Implementasi API yang dinamis untuk GET, UPDATE, ADD, dan DELETE


# Fitur App
- [x] Masuk
      > implement login (user: admin password: admin) with fake auth
- [x] Daftar
- [x] Beranda
- [x] Daftar Saya
      > ProtectedRoute, user harus login
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
