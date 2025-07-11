# CHILL App


CHILL app dibangun menggunakan React component dengan paradigma [atomic design](https://github.com/mfatihz/fsd15-intermediate-1/blob/main/README.md)  

Stack: axios + zustand + (Vite + React + React Router + tailwind)
Aplikasi ini menggunakan [backend](https://github.com/mfatihz/fsd15-fe-adv1-backend)

setting .env:  
    VITE_API_URL=http://localhost:5000/api

## Task Lists
Mengintegrasikan data static dengan penggunaan API dan mendalami framework React.
- [x] customHook.
    > Done: src/hooks/useLocalStorage, src/hooks/auth
- [x] Fetching (Axios) untuk consume API.
    > Done: fetching data gallery dan list

    Contoh get:
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

    Contoh post:
    ```
    const toggleId = async (movieId) => {
    try {
      const response = await axios.post(`${API_URL}/mylist/${userId}/toggle`, { movieId });
      const newSet = new Set(response.data.ids);
      setStoredValue(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      return newSet.has(movieId);
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      const newSet = new Set(storedValue);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      setStoredValue(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      return newSet.has(movieId);
    }
  };
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
