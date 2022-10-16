import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Feature",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Article",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "AL-QUR'AN INDONESIA",
    name: "AL-QUR'AN DIGITAL",
    post: "JUZZ-'AMMA",
    design: "DO'A-DO'A HARIAN",
    surat: "BACA'AN DO'A DZIKIR",
    fitur: "MUROTTAL AL-QUR'AN",
    desc: "Al-Qur'an Digital dengan terjemahan Bahasa Indonesia yang terdiri dari 114 surah atau 30 juz tanpa pembatasan, Dapat dibaca secara offline serta tampilan antarmuka user friendly.",
  },
];
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1: "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    cover: "../images/port/indonesia-big.png",
  },
];
export const services = [
  {
    id: 1,
    icon: <BarChart />,
    title: "JADWAL SHALAT",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "ZAKAT PENGHASILAN",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "ZAKAT MAAL",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "ZIKIR PAGI & PETANG",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "ARTIKLE ISLAMI",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <Settings />,
    title: "PENGATURAN",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "98",
    title: "Rating PlayStore",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "100",
    title: "Feature",
  },
  {
    id: 3,
    icon: <Public />,
    num: "50000",
    title: "Apps Downloads",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "553",
    title: "Reviews",
  },
];
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/ss6.jpg",
    name: "Qur'an Indo",
    category: "Layanan",
    title: "Digital",
  },
  {
    id: 2,
    cover: "../images/port/ss5.jpg",
    name: "Qur'an Indo",
    category: "Layanan",
    title: "Digital",
  },
  {
    id: 3,
    cover: "../images/port/ss4.jpg",
    name: "Qur'an Indo",
    category: "Surat dan Juz",
    title: "Digital",
  },
  {
    id: 4,
    cover: "../images/port/ss1.jpg",
    name: "Qur'an Indo",
    category: "Layanan",
    title: "Digital",
  },
  {
    id: 5,
    cover: "../images/port/ss3.jpg",
    name: "Qur'an Indo",
    category: "Surat dan Juz",
    title: "Digital",
  },
  {
    id: 6,
    cover: "../images/port/ss2.jpg",
    name: "Qur'an Indo",
    category: "Surat dan Juz",
    title: "Digital",
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Alhamdulilah zaman sudah makin moderen sudah ada AlQuran yang simpel praktis yaitu Di hp bisa dibawa kemana pun.",
    image: "./images/testimonials/testi2.jpg",
    name: "Yulian Dwi",
  },
  {
    id: 2,
    text: "Alhamdulillah jadi bisa ngaji setiap saat. Semoga kedepannya bisa ditambahkan audio & pewarnaan huruf untuk tajwid.",
    image: "./images/testimonials/testi1.jpg",
    name: "Hanifar30",
  },
  {
    id: 3,
    text: "bagus sekali.. semua bacaan yg kita butuhkan dzikir dan doa Komplit disertai penghitungan zakat👍 Belum prnh ada yg spt ini sblmx masyaALLAH.",
    image: "./images/testimonials/testi3.png",
    name: "rifkiafnt18",
  },
];
export const blog = [
  {
    id: 1,
    title: "Sebenarnya apa kita bisa masuk surga hanya dengan mengerjakan amalan yang wajib saja?",
    date: "Jun 27, 2022",
    author: "Amal-Post",
    desc: "",
    cover: "./images/blog/artikle1.jpg",
  },
  {
    id: 2,
    title: "Siapa yang menyusun urutan surat-surat di dalam Al-Qur'an?",
    date: "Jun 27, 2022",
    author: "Amal-Post",
    desc: "",
    cover: "./images/blog/artikle2.jpg",
  },
  {
    id: 3,
    title: "Apa boleh menikah di bulan Ramadhan?",
    date: "Jun 27, 2022",
    author: "Amal-Post",
    desc: "",
    cover: "./images/blog/artikle4.jpg",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: ": Depok, Jawa Barat",
  },
  {
    icon: <PhoneIphone />,
    text1: ": +62 812-9516-1022",
  },
  {
    icon: <EmailOutlined />,
    text1: ": quranindo.help@gmail.com",
    text2: ": https://amalpost.com/",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
