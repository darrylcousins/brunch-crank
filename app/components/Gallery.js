/** @jsx createElement */
import {createElement} from '@bikeshaving/crank/cjs';
import Image from './Image';

const items = [
  {
    src: '1999-14',
    href: 'https://goo.gl/photos/yjKQ6hzwfpGRC2qh8',
    title: 'Painting',
    byline:
    `
    I studied painting at various art schools, firstly in Australia and then
    later a year in Dublin and in Bratislava. This gallery of images are
    paintings that I made during the 2 years of study at the Vysoká škola
    výtvarných umení in Bratislava, Slovakia 1998/99.
    `
  },
  {
    src: 'taumutu',
    href: 'https://goo.gl/photos/9XbnbTsgK3txB2Tx5',
    title: 'House',
    byline:
    `
    Originally built as a 4 room cottage in the
    1920&apos;s the house was extended in the 1970&apos;s and the roof reframed at that
    time. It is still very much
    a work in progress (never to be completed I sometimes ask myself). Some
    of the project is documented in this gallery of images.
    `
  },
  {
    src: 'oven',
    href: 'https://goo.gl/photos/eprUyH4BHXoNZBB98',
    title: 'Ovens',
    byline:
    `
    I&apos;ve built more than a few brick and clay
    ovens over the years. This gallery documents a couple of them, including
    one that I use as a wood-fired kiln to bake smaller clay objects of
    practical and creative purpose.
    `
  },
  {
    src: 'porch',
    href: 'https://goo.gl/photos/Yq8TepCxAk8U73FR9',
    title: 'Porch',
    byline:
    `
    Probably the biggest building project that
    I completed on my own around 2005. The high deck was rebuilt, framed, and
    partially enclosed with second-hand windows. Steps were built down to a
    new lower deck. At the same time the front porch was rebuilt copying the
    style of the original build.
    `
  },
  {
    src: 'canoe',
    href: 'https://goo.gl/photos/fHsTe2Btx7n9Namk9',
    title: 'Canoe',
    byline:
    `
    Another unfinished project built to plans
    from a book on building strip canoes. One day the hull will be covered
    with transparent fibreglass. One day I may get there.
    `
  },
  {
    src: 'camper',
    href: 'https://goo.gl/photos/naU5SxQsd9zqYNgA8',
    title: 'Camper',
    byline:
    `
    This timber camper was built on the back on
    a ute. It did get a number of years of use as a covered ute canopy and
    camper before I finally sold it with the ute.
    `
  },
  {
    src: 'trailer',
    href: 'https://goo.gl/photos/Dd5Zv8rgAtuVKapo7',
    title: 'Trailer',
    byline:
    `
    This was my first and remains the biggest
    engineering project that I&apos;ve undertaken. It was built in 2008 and is
    still registered and in great condition.
    `
  },
  {
    src: 'bay-window',
    href: 'https://goo.gl/photos/64DT8BDpC7cqzzST7',
    title: ' Repairs',
    byline:
    `
    After the Christchurch earthquake of 2010 I
    was working for my cousin in demolition and soon after for a small
    building company carrying out earthquake repairs. This gallery documents
    a portion of that work.
    `
  },
];


module.exports = () => {
  return (
    <div class="w-80 center">
      <h2>Gallery</h2>
      <p class="fw1">Bits and pieces that D made. <span class="f6">(Links will open images in a new tab.)</span></p>
      { Array.from(items, obj => <Image title={obj.title} byline={obj.byline} href={obj.href} src={'images/'+obj.src+'.jpg'} />) }
    </div>
  );
};
