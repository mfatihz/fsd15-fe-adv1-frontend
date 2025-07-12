import UserIcon from "../../components/atoms/user-icon"
import StarIcon from "../../components/atoms/star-icon"
import ExitIcon from "../../components/atoms/exit-icon"

export const navData = [
    {id:1, children: "Series", to:"/series"},
    {id:2, children: "Film", to:"/movies"},
    {id:3, children: "Daftar Saya", to:"/lists"},
]

export const menuData = [
    {id:1, icon:<UserIcon />, text: "Profil Saya", to:"/profile"},
    {id:2, icon:<StarIcon />, text: "Ubah Premium", to:"/premium"},
    {id:3, icon:<ExitIcon />, text: "Keluar", to:"/login"},
]

export const genreData = {
  title:"Genre",
  basePath:"/genre/",
  links:[
    { label: "Aksi", path: "aksi" },
    { label: "Anak-anak", path: "anak-anak" },
    { label: "Anime", path: "anime" },
    { label: "Britania", path: "britania" },
    { label: "Drama", path: "drama" },
    { label: "Fantasi Ilmiah & Fantasi", path: "fantasi" },
    { label: "Kejahatan", path: "kejahatan" },
    { label: "KDrama", path: "kdrama" },
    { label: "Komedi", path: "komedi" },
    { label: "Petualangan", path: "petualangan" },
    { label: "Perang", path: "perang" },
    { label: "Romantis", path: "romantis" },
    { label: "Sains & Alam", path: "sains-alam" },
    { label: "Thriller", path: "thriller" },
]};

export const helpData = {
  title:"Bantuan",
  basePath:"/help/",
  links:[
    { label: "FAQ", path: "faq" },
    { label: "Kontak Kami", path: "kontak" },
    { label: "Privasi", path: "privasi" },
    { label: "Syarat & Ketentuan", path: "syarat-ketentuan" },
  ]
};