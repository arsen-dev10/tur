# Шпаргалка по коду проекта Visit Kyrgyzstan

Этот файл нужен для запоминания: здесь собраны самые полезные части кода, объяснение и случаи, когда их применять в следующих проектах.

## 1. Точка входа React

Файл: `src/main.jsx`

```jsx
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(<App />);
```

Объяснение:

- `createRoot(...)` подключает React к элементу `<div id="root">` из `index.html`.
- `.render(<App />)` показывает главный компонент приложения.

Используйте это в каждом React-проекте.

## 2. Компонент React

```jsx
function App() {
  return <h1>Мой сайт</h1>;
}
```

Компонент — это функция, которая возвращает интерфейс. Название компонента всегда начинается с большой буквы: `App`, `Header`, `MapPage`.

## 3. Состояние `useState`

```jsx
import { useState } from 'react';

const [language, setLanguage] = useState('ru');
```

Объяснение:

- `language` — текущее значение, например `ru`.
- `setLanguage` — функция, меняющая это значение.
- `useState('ru')` — начальное значение.

Пример кнопок языка:

```jsx
<button onClick={() => setLanguage('ru')}>RU</button>
<button onClick={() => setLanguage('kg')}>KG</button>
<button onClick={() => setLanguage('en')}>EN</button>
```

После вызова `setLanguage` React автоматически обновляет экран. Это используется для языка, тёмной темы, меню, фильтров, форм и модальных окон.

## 4. Переводы на нескольких языках

```jsx
const translations = {
  ru: { title: 'Открой Кыргызстан' },
  kg: { title: 'Кыргызстанды ач' },
  en: { title: 'Discover Kyrgyzstan' },
};

const t = translations[language];

<h1>{t.title}</h1>
```

Здесь `t` получает переводы выбранного языка. Вместо трёх отдельных страниц достаточно одной страницы и одного объекта с переводами.

## 5. Массив данных и вывод карточек через `.map()`

```jsx
const places = [
  { id: 1, name: 'Иссык-Куль', description: 'Горное озеро' },
  { id: 2, name: 'Ала-Арча', description: 'Национальный парк' },
];

{places.map((place) => (
  <article className="card" key={place.id}>
    <h3>{place.name}</h3>
    <p>{place.description}</p>
  </article>
))}
```

`.map()` создаёт карточку для каждого объекта из массива. `key` обязателен: он должен быть уникальным, например `id`.

Применение: каталог товаров, список студентов, новости, фильмы, туры, отзывы, меню ресторана.

## 6. Обработчик события

```jsx
function showMessage() {
  alert('Спасибо за отзыв!');
}

<button onClick={showMessage}>Отправить</button>
```

`onClick` запускает функцию после нажатия. В React пишется `onClick`, а не `onclick`.

## 7. Условный вывод

```jsx
{isAdmin ? <AdminPanel /> : <LoginForm />}
```

Если `isAdmin` равен `true`, показывается админ-панель. Если `false` — форма входа.

Также можно показать элемент только при условии:

```jsx
{isLoggedIn && <button>Выйти</button>}
```

## 8. Интерактивная карта с React Leaflet

Установить библиотеку:

```powershell
npm install leaflet react-leaflet
```

Пример компонента карты:

```jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TouristMap({ places }) {
  return (
    <MapContainer center={[41.7, 74.7]} zoom={7} style={{ height: 500 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {places.map((place) => (
        <Marker key={place.id} position={place.position}>
          <Popup>
            <strong>{place.name}</strong><br />
            {place.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
```

Запомнить:

- `MapContainer` — сама карта;
- `TileLayer` — слой карты OpenStreetMap;
- `Marker` — точка на карте;
- `Popup` — окно с информацией;
- координаты записываются так: `[широта, долгота]`.

## 9. Сохранение данных в браузере

```js
localStorage.setItem('theme', 'dark');

const theme = localStorage.getItem('theme') || 'light';

localStorage.removeItem('theme');
```

Применение: язык сайта, тема, избранные места, отзывы в демонстрационной версии, корзина товаров.

Важно: `localStorage` не подходит для паролей, банковских данных и настоящей безопасной авторизации.

## 10. Ссылки и адреса страниц в этом проекте

```text
/?page=places       — места
/?page=mountains    — горы
/?page=routes       — маршруты
/?page=map          — карта
/?page=reviews      — отзывы
/?admin=            — вход в админку
/?admin=dashboard   — дашборд
```

Такие параметры читаются из адресной строки:

```js
const params = new URLSearchParams(window.location.search);
const page = params.get('page');
```

## 11. Полезные команды Vite

```powershell
npm install       # установить библиотеки
npm run dev       # запустить проект
npm run build     # собрать сайт для хостинга
npm run preview   # открыть собранную версию локально
```

## 12. Что нужно помнить для следующего проекта

1. Сначала создайте компоненты: `Header`, `Footer`, `Card`, `Page`.
2. Данные храните в массивах объектов, а не копируйте одинаковый HTML много раз.
3. Для изменения интерфейса используйте `useState`.
4. Для списка всегда применяйте `.map()` и уникальный `key`.
5. Для общего текста используйте объект `translations`.
6. Для настоящего входа используйте сервер и базу данных, а не пароль в `localStorage`.
7. Сохраняйте все исходные файлы в кодировке **UTF-8**, чтобы русский и кыргызский язык не превращались в нечитаемые символы.

## 13. Короткие ответы для преподавателя

**Что такое React?**

React — это JavaScript-библиотека для создания интерфейсов из компонентов. Он обновляет только изменившуюся часть страницы.

**Что такое компонент?**

Компонент — это независимая часть интерфейса, например шапка, карточка места или карта.

**Зачем нужен `useState`?**

Он хранит изменяемые данные и обновляет интерфейс после их изменения.

**Зачем нужен Vite?**

Vite быстро запускает React-проект во время разработки и создаёт оптимизированную папку `dist` для публикации.

**Как работает карта?**

Leaflet получает слой OpenStreetMap, а приложение выводит на него маркеры из массива туристических мест.
