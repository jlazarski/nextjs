console.log("ADSTATS: Adding AIS and Adfuel JS")
var aisFile = document.createElement('script');
aisFile.type = "text/javascript";
// aisFile.src = "//i.cdn.turner.com/ads/qa/adfuel/ais/2.0/nba2-ais.js"
aisFile.src = "//i.cdn.turner.com/ads/adfuel/ais/2.0/nba3-ais.js"
document.getElementsByTagName('head')[0].appendChild(aisFile);
var afFile = document.createElement('script');
afFile.type = "text/javascript";
afFile.src = "//i.cdn.turner.com/ads/adfuel/adfuel-2.1.39.js"
document.getElementsByTagName('head')[0].appendChild(afFile);

// console.log("ADSTATS: Adding NBA User Consent")
// var ucFile = document.createElement('script');
// ucFile.type = "text/javascript";
// ucFile.src = "//www.nba.com/assets/global/user-consent.js"
// document.getElementsByTagName('head')[0].appendChild(ucFile);