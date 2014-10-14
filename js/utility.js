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
  function linkGHHandles(text) {
    return text.replace(/(^|\s|>)@([a-zA-Z0-9_-]{2,})/g, '<a href="https://github.com/$2">@$2</a>');
  }

  return {makeBlurb: makeBlurb,
          linkGHHandles: linkGHHandles};
});
