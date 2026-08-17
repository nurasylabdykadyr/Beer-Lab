import moxImg from '../assets/Mox.jpg';
import nachChechil from '../assets/Наш Чечел 70гр палочки.jpg';
import superBoch from '../assets/Супер чечил Бочонок белый.jpg'
import adygeiKosa from '../assets/Чечил Адыгей Коса.jpg'

const products = [
  // --- РАЗЛИВНОЕ ПИВО (type: "beer") ---
  { id: 1, name: "Разливное пиво Шымкент Пилснер", price: 1000, unit: "л.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/h7c/hf5/64368291774494.jpg?format=gallery-small" },
  { id: 2, name: "Разливное пиво Прага Рудный", price: 1050, unit: "л.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/h7c/hf5/64368291774494.jpg?format=gallery-small" },
  { id: 3, name: "Разливное пиво Немецкое Классическое", price: 1100, unit: "л.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/h7c/hf5/64368291774494.jpg?format=gallery-small" },
  { id: 4, name: "Разливное пиво Прага Алматы", price: 1000, unit: "л.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/h7c/hf5/64368291774494.jpg?format=gallery-small" },
  { id: 5, name: "Разливное пиво Прага Нефильтрованное", price: 1100, unit: "л.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/h7c/hf5/64368291774494.jpg?format=gallery-small" },
  { id: 6, name: "Разливное пиво Сигма Нефильтрованное", price: 1150, unit: "л.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/h7c/hf5/64368291774494.jpg?format=gallery-small" },
  { id: 7, name: "Разливной лимонад Мохито", price: 650, unit: "л.", type: "beverage", img: moxImg },

  // --- ЗАКУСКИ (type: "snack") ---
  { id: 8, name: "Курт штучно", price: 150, unit: "шт.", type: "snack", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesupUJAYYUZAAFLs0TNyjUhd9qDuxTtgb0EMq-S13xpclApbuli0P8AIX&s=10" },
  { id: 9, name: "Паутинка 100гр", price: 630, unit: "шт.", type: "snack", img: "" },
  { id: 10, name: "Наш Чечел 70гр палочки", price: 750, unit: "шт.", type: "snack", img: nachChechil },
  { id: 11, name: "Сайрам чечил 100гр", price: 580, unit: "шт.", type: "snack", img: "" },
  { id: 12, name: "Чесночные сухарики штучный", price: 100, unit: "шт.", type: "snack", img: "" },
  { id: 13, name: "Чечил Адыгей Коса", price: 850, unit: "шт.", type: "snack", img: adygeiKosa },
  { id: 14, name: "БиоКурт Ermak 60гр", price: 800, unit: "шт.", type: "snack", img: "https://uz.all.biz/img/uz/catalog/137869.jpg" },
  { id: 15, name: "Супер чечил копченый 80гр", price: 800, unit: "шт.", type: "snack", img: "" },
  { id: 16, name: "Семечки Джинн Великан соленые 200гр", price: 1050, unit: "шт.", type: "snack", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCH7HsAoDFxtVHHT-8Gz5hTpW17rAeML8H6nji4fG7VoOtvTZnVLXArPKN&s=10" },
  { id: 17, name: "ABROY охотничьи патронники 260гр", price: 1100, unit: "шт.", type: "snack", img: "" },
  { id: 18, name: "Супер чечил Бочонок белый", price: 1200, unit: "шт.", type: "snack", img:superBoch },
  { id: 33, name: "Караван Стандарт 90гр", price: 400, unit: "шт.", type: "snack", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUd0YJGz0LUakHNZXOpCnktyWjilwtdI_AXraAKqAj5iWwg3MqJauz2I5Y&s=10" },

  // --- ФАБРИЧНОЕ ПИВО (type: "beer") ---
  { id: 19, name: "БАЛТИКА - 9 (ЖЕСТЬ) 0.45л", price: 600, unit: "шт.", type: "beer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwieSuqVjwnikfd2zWVRvOO0VEjUiZ8Mggf58dDWLK6SPAg6UG1BeO9CGg&s=10" },
  { id: 20, name: "Балтика 5 золотое светлое 0.45л", price: 750, unit: "шт.", type: "beer", img: "https://resources.cdn-kaspi.kz/img/m/p/p4f/p29/60751552.jpg?format=gallery-small" },
  { id: 21, name: "Жатецкий гусь зеленый 0.43л ж/б", price: 600, unit: "шт.", type: "beer", img: "https://arbuz.kz/image/s3/arbuz-kz-products/file_name__1dd80e6c-853f-4628-b2f3-9cc6b45d71b0-4870145004357_pivo_zhateckii_gus_svetloe_filtrovannoe_zh_b_4_6_0_43_l_1_jpg.jpg?w=720&h=720&_c=1756368530" },
  { id: 22, name: "Miller 0.33л", price: 1050, unit: "шт.", type: "beer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHPm-1SAKSAFir3a8A_Ybms9cMZwMhSBxHpu9ILcfrUhDqo_gQ7QNAmg&s=10" },
  { id: 23, name: "Пиво Балтика 0.45л ж/б 0%", price: 400, unit: "шт.", type: "beer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVleZwLUYdaWZtbCppfCoIwhpOQFXoezxpuX5BHQwfMA&s=10" },
  { id: 25, name: "Пиво Шымкентское Pilsner 0.45л", price: 600, unit: "шт.", type: "beer", img: "https://vsabrine.kz/wp-content/uploads/4870220790359-480x480.jpg" },
  { id: 26, name: "Пиво YICHANG светлое 0.45л ж/б", price: 650, unit: "шт.", type: "beer", img: "https://elitclub.kz/upload/images/41107_391109_04.jpg" },
  { id: 27, name: "Пиво Heineken 0.5л ст", price: 950, unit: "шт.", type: "beer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-okkFMfh6WKjcQJS-cxYj0pqDaED2qOEQDf1E8ledg&s=10" },
  { id: 28, name: "Большая кружка Мягкое 0.43л ж/б", price: 600, unit: "шт.", type: "beer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6X2sIUlQ4-iGcZEoe-tFKNmU2XDxhfmTEFyKIfXZpyw&s=10" },
  // --- КРЕПКИЙ АЛКОГОЛЬ (type: "alcohol") ---
  { id: 29, name: "Garage Hard Black Cherry 0.4л ст", price: 800, unit: "шт.", type: "alcohol", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XcP9UoC-4eHuLITry-lkmi5NS-Hqjhy35tVOIGe4wg&s=10" },
  { id: 30, name: "Водка MOROSHA 0.5л", price: 3200, unit: "шт.", type: "alcohol", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYLrF09JUNyra5npzXIbmAC0NLKBd_J72iU8mCvzwF7WTZzc-bdI3BZQC&s=10" },
  { id: 31, name: "Хортица Айс 0.5л", price: 3500, unit: "шт.", type: "alcohol", img: "https://static.wixstatic.com/media/a4c9ad_e0e7e731199f42cebdfe8f432430d400~mv2.png/v1/fit/w_500,h_500,q_90/file.png" },
  { id: 32, name: "Ликер JAGERMEISTER 0.7л", price: 12500, unit: "шт.", type: "alcohol", img: "https://luxalcomarket.kz/assets/images/products/4067700014573.jpg" },

  // --- БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ И СНЕКИ (type: "snack") ---
  { id: 34, name: "Кока-Кола 1л", price: 700, unit: "шт.", type: "beverage", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4nW0OVIuTXuczU_snK_M8GrTtEleeHUlW5vFWtTYmssyIWPzC7SEmNQ&s=10" },
  { id: 35, name: "Dizzy Энерджи 0.33л", price: 550, unit: "шт.", type: "beverage", img: "https://arbuz.kz/image/s3/arbuz-kz-products/file_name__5af02f11-0cef-44f8-9b96-9f089cb30801-204853-001_jpg.jpg?_c=1781776018" },
  { id: 24, name: "Gorila energy 0.45л", price: 600, unit: "шт.", type: "beverage", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_jS_YeR2SZ01XuRIfu0619PPzjpdL-U53ignhP0K4GBaRIVKOwTlZm8&s=10" }
];

export default products;