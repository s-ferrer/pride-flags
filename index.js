function prideFlags(name) {
  const flags = {
    agender: "./flags/agender.png",
    aromantic: "./flags/aromantic.png",
    asexual: "./flags/asexual.png",
    bisexual: "./flags/bisexual.png",
    demiromantic: "./flags/demiromantic.png",
    genderfluid: "./flags/genderfluid.png",
    genderqueer: "./flags/genderqueer.png",
    grayAsexual: "./flags/gray-asexual.png",
    grayromantic: "./flags/grayromantic.png",
    intersex: "./flags/intersex.png",
    lesbian: "./flags/lesbian.png",
    morecolor: "./flags/morecolor.png",
    nonBinary: "./flags/agender.png",
    pansexual: "./flags/pansexual.png",
    polyamory: "./flags/polyamory.png",
    rainbow: "./flags/rainbow.png",
    transgender: "./flags/transgender.png",
  };

  const flagDivision = document.createElement("div");
  flagDivision.id = "flag";
  const flag = document.body.appendChild(flagDivision);
  flag.innerHTML = `<img src=${flags[`${name}`]} alt=${name} pride flag>`;

  return flag;
}

module.exports = prideFlags;
