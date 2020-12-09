/** @jsx createElement */
import 'regenerator-runtime/runtime.js'; // regeneratorRuntime error
import {createElement} from '@bikeshaving/crank/cjs';
import {renderer} from '@bikeshaving/crank/cjs/dom';
import crossroads from 'crossroads';
import Gallery from 'components/Gallery';
import Quotes from 'components/Quotes';
import Documents from 'components/Documents';

const quotes = crossroads.addRoute('quotes', () =>  renderer.render(<Quotes />, document.querySelector('#app')));
const gallery = crossroads.addRoute('gallery', () =>  renderer.render(<Gallery />, document.querySelector('#app')));
const documents = crossroads.addRoute('documents/:key:');

documents.matched.add((key) => {
  renderer.render(<Documents key={key} />, document.querySelector('#app'));
});

document.addEventListener('DOMContentLoaded', () => {

  console.log('Initialized app');

  const path = window.location.pathname;

  crossroads.parse(path);
});
