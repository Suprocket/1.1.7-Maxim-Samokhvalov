import { createElement } from 'react';
import ReactDOM from 'react-dom/client';

const element = createElement('h3', { className: 'title' }, 'У меня в штанах две пушки. Один - огнестрел. Второй - для подружки.  © Джейсон Cтетхэм');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);