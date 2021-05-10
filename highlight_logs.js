let regExpArray = [
  {
    start: new RegExp("\\d+:\\d+:\\d+\\s\\|\\sERROR"),
    end: new RegExp("\\d+\-\\d+\-\\d+"),
    color: 'orangered'
  },
  {
    start: new RegExp("\\d+:\\d+:\\d+\\s\\|\\sWARNING"),
    end: new RegExp("\\d+\-\\d+\-\\d+"),
    color: 'darkorange'
  }
];

function doHighlighting() {
  let newNodes = [];
  let text = document.body.textContent;
  let foundIndexStart = -1;
  let foundIndexEnd = -1;
  let el = undefined;
  let regexp;


  while (text.length > 0) {
    let target;
    console.log({text})

    for (regexp of regExpArray) {
      let searchIndex = text.search(regexp.start);
      targetSearchIndex = target ? target.searchIndex : undefined;
      console.log({searchIndex, targetSearchIndex});
      regexp.searchIndex = searchIndex;
      if (searchIndex === -1) continue;
      if (target == undefined) {
        target = regexp;
        continue;
      }
      if (searchIndex < target.searchIndex) {
        target = regexp;
      }
    }

    foundIndexStart = target ? target.searchIndex : -1;
    console.log({foundIndexStart})

    if (!target || foundIndexStart === -1) {
      el = document.createElement('pre');
      el.innerText = text;
      newNodes.push(el);
      break;
    };

    if (foundIndexStart > 0) {
      el = document.createElement('pre');
      el.innerText = text.slice(0, foundIndexStart);
      newNodes.push(el);
    }

    text = text.slice(foundIndexStart);
    foundIndexEnd = text.search(target.end);
    if (foundIndexEnd === -1) {
      foundIndexEnd = text.length;
    };

    el = document.createElement('pre');
    el.innerText = text.slice(0, foundIndexEnd);
    el.style.color = target.color;
    newNodes.push(el);
    console.log({foundIndexStart, foundIndexEnd, text, el})

    text = text.slice(foundIndexEnd);
  }

  document.body.childNodes.forEach( it => it.remove() );
  newNodes.forEach( it => document.body.appendChild(it) );
}

doHighlighting();
