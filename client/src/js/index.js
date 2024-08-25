import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import logo96 from '../images/logo.png';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

document.querySelector('.navbar-brand img').src = logo96;

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/service-worker.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
