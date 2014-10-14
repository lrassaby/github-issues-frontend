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
  /* COME BACK TO THIS */
  function linkProfiles(text) {
    return text.replace(/(^|\s|>)@([a-zA-Z_-]{2,})/g, '$1<a href="https://github.com/$2">@$2</a>');
  }

  return {makeBlurb: makeBlurb,
          linkProfiles: linkProfiles};
});
