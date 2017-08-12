import { dummyFoo } from './foo.js';
import coursesList from './scripts/courses-list.js';
require('./styles/style.sass');
require('./styles/courses-list.sass');

console.log('i`m index js file');

console.log('courses-list: ', window.location.pathname);
if (window.location.pathname === '/courses-list.html') {
  coursesList();
} else {
  dummyFoo();
}
