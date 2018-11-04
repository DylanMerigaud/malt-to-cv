function selectorNotFound(e) {
  console.log(`"${e}" selector was not found.`)
}
[
  "#profileSectionsContainer > div > div.profile-layout__side > div.profile-side-section.profile-social-share--v2",
  "body > footer",
  "#profileStickyHeader",
  "body > main > div:nth-child(1)",
  "body > div.profile-overview",
  "body > div.new-main-header > header",
  "#profileHeader > header > div.profile-header-layout__main > div > div.profile-header-content__side.profile-availability__wrapper",
  "#profileSectionsContainer > div > div.profile-layout__side"
].forEach(e => {
  if (document.querySelector(e)) document.querySelector(e).style.display = "none"
  else selectorNotFound(e)
});
document.querySelector("body").style.paddingTop = "0";
[
  "#profileHeader > header > div.profile-header-layout__main > div > div",
  "#profileSectionsContainer > div > div.profile-layout__main"
].forEach(e => {
  if (document.querySelector(e)) document.querySelector(e).style.width = "100%"
  else selectorNotFound(e)
});
[
  "#profileDescriptionWrapper > a",
  "#experiencesContent > div.v-tac > a",
  "#profileRecommendations > div.profile-recommendation.u-mt4 > div.v-tac.u-mt4 > a"
].forEach(e => {
  if (document.querySelector(e)) document.querySelector(e).click()
  else selectorNotFound(e)
});
setTimeout(() => {
  window.scroll({
    top: 0
  });
}, 1000)
console.log("\x1b[35m%s\x1b[0m", "Enjoy !")