import coursesList from './scripts/courses-list.js';
import homePage from './scripts/home-page.js';
import aboutUsPage from './scripts/about-us-page.js';
import aboutCoursePage from './scripts/about-course-page.js';
import spaces from './scripts/spaces.js';
require('./styles/style.sass');

console.log('i`m index js file: ', window.location.pathname);
if (window.location.pathname === '/courses-list.html') {
  coursesList();
} else if (window.location.pathname === '/home-page.html') {
  homePage();
} else if (window.location.pathname === '/about-us-page.html') {
  aboutUsPage();
}else if (window.location.pathname === '/about-course-page.html') {
  aboutCoursePage();
  aboutUsPage();
}else if (window.location.pathname === '/spaces.html') {
  spaces();
} else {
  console.info('no js, everything is ok!');
}
