import { dummyFoo } from './foo.js';
import coursesList from './scripts/courses-list.js';
import homePage from './scripts/home-page.js';
require('./styles/style.sass');

console.log('i`m index js file');

console.log(window.location.pathname);
if (window.location.pathname === '/courses-list.html') {
  coursesList();
} else if (window.location.pathname === '/home-page.html') {
  homePage();
}
else {
  dummyFoo();
}

