define([], function getUtilities() {
  function makeBlurb(text, len) {
    blurb = text.substr(0, len);
    for (var i = len; text[i] && !(text[i].match(/\s/)); i++) {
       blurb += text[i];
    }
    if (blurb != text) {
      blurb += "...";
    }
    return blurb;
  }
  function link(text) {
    text = linkGHHandles(text);
    text = linkWebPages(text);
    // faulty regex
    // text = linkCodeSnippets(text); 
    return text;
  }
  function linkGHHandles(text) {
    return text.replace(/(^|\s|>)@([a-zA-Z0-9_-]{2,})/g, '$1<a href="https://github.com/$2">@$2</a>');
  }
  function linkWebPages(text) {
    return text.replace(/(^|\s|>)(http[:/#\.a-zA-Z0-9=?_-]{2,})/g, '$1<a href="$2">$2</a>');
  }

  function linkCodeSnippets(text) {
    return text.replace(/(^|\s|>)`(.{1,})`/g, '$1<code>$2</code>');
  }

  return {makeBlurb: makeBlurb,
          link: link};
});
