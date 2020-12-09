/** @jsx createElement */
import {createElement, Fragment, Raw} from '@bikeshaving/crank/cjs';

module.exports = ({key}) => {

  const Loading = () => (
    <div>Fetching ...</div>
  );

  const Error = ({msg}) => (
    <div>Error! {msg}</div>
  );

  const Fetch = ({src}) => (
    fetch(src)
      .then((response) => {
        if (response.status !== 200) {
          const err = 'Fetch Error. Status Code: ' + response.status;
          return <Error msg={err}/>;
        }
        return response.text();
      })
      .then((html) => {
        const bodyHtml = /<div id="contents">([\s\S]*)<\/div>/.exec(html)[1];
        const style = /<style.*?>([\s\S]*)<\/style>/.exec(bodyHtml)[1];
        const text = bodyHtml.replace(`<style type="text/css">${style}</style>`, '');
        const body = /<div.*?>([\s\S]*)<\/div>/.exec(bodyHtml)[1];
        return (
          <Fragment>
            <style type="text/css">
              <Raw value={style} />
            </style>
            <div class="pa5-ns w-80-ns pa2 center">
              <Raw value={body} />
            </div>
          </Fragment>
        )
      })
      .catch(function(err) {
        return <Error msg={err}/>;
      })
  );

  if (key) {
    window.addEventListener('scroll', function(e) {
      const backtotop = document.getElementById('back-to-top');
      if (window.scrollY > 0) {
        backtotop.classList.remove('dn');
        backtotop.classList.add('db');
      } else {
        backtotop.classList.remove('db');
        backtotop.classList.add('dn');
      };
    });
    const src = `https://docs.google.com/document/d/e/${key}/pub`;

    return (
      <div class="w-80-ns pa1 pa2-ns center">
        <a class="db near-black link dim"
          href="/documents/">⇦ back to list</a>
        <a class="dn near-black link dim" id="back-to-top"
          href="#top">⇧ back to top</a>
        <Fetch src={src} />
      </div>
    );
  };

  // obj map of title and google id for 'published to web'
  const docs = {
    'Why Organics?': '2PACX-1vQLAvC-r5a8ExHLlpbnXZD8IGCY6PMWyq1UNnzeeBnGFQVKFEAH8nBdm2yotr76T6snVmSWLNLhqupG',
    'The Development of Organic Horticulture in New Zealand': '2PACX-1vQ4KGWGoC5rwKqfsOzjVkWaDfAfSw2kSClQwj4D69jNwiITDxS6xjRoJnraeQ69OvCJwcF2hSKICucf',
    'Fertility Management Strategies in Organic Production': '2PACX-1vQ8PkTDB-9HVNkIiJ_0-G_ESieHQKcHQEK_1l8kFDi7tCra9UMS0op9PCya3kGSzS44s31EIdKPNd5c',
    'Biotic Interactions Within Organic Production Ecosystems': '2PACX-1vROfeahjl6-BJBVjI5WCbrtK6yzvWxV1bM4KeDLIhnnfHSbmU4fuUK8cmysYUtam8Bhb8YX0lpC_fNq',
    'Minimising Soil Degradation with Organic Horticulture': '2PACX-1vSiEHmaUrMhkTFm1QsxnYwjKKXwOnstDLqNpS5pJe7c-ZpX1yJUPruIh8e2cFLe_P5WyZDT6qdZHgSr',
    'Aspects of Holistic Integration': '2PACX-1vTT7ayZZDhgm_4Rv0Ese8TEAVTterxwpg_Leel4cw6YAX3IAa6L46YuUKmCD0DqcDzOb6TJcYUr_U0Y',
  };

  const Item = ({ title, key }) => (
    <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
      <a class="db near-black link dim" href={`/documents/${key}`}>{ title }</a>
    </li>
  );

  return (
    <div class="pa3 pa5-ns">
      <ul class="list pl0 measure center">
        { Array.from(Object.entries(docs), ([title, key]) => <Item title={title} key={key} />) }
      </ul>
    </div>
  );
};

/*
          <a class="db near-black link dim"
            href={`/documents/${doc}`}>Fertility Management Strategies in Organic Production</a>
            */
