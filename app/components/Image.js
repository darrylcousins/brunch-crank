/** @jsx createElement */
import {createElement} from '@bikeshaving/crank/cjs';
/*
  background-image: linear-gradient(black, black), url(${(props) => props.src});
  background-size: cover;
  background-blend-mode: saturation;
  */

module.exports = function* ({src, href, title, byline}) {
  const img = new Image();
  let loaded = false;
  img.onload = () => {
    loaded = true;
    this.refresh();
  };
  img.src = src;
  while (true) {
    yield (
      <div class="fl w-100 w-50-m w-third-l pa4">
        <div class="aspect-ratio aspect-ratio--1x1">
        {loaded 
            ? <a href={href} target="_blank"
              class="aspect-ratio--object link cover bg-center dt filtered hide-child"
              style={'background: url('+src+') center;'}>
                <div class="white dtc w-100 h-100 child bg-black-25 pa2">
                  { title }
                </div>
            </a>
          : <div class="spinner" />}
        </div>
      </div>
    );
  };
};
