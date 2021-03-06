console.log('ADSTATS: Adding Listener for AdFuel Created at ' + Date.now() / 1000);
document.addEventListener('AdFuelCreated', function (event) {
    alert("AdFuel Created")
})
console.log('ADSTATS: Adding Listener for DCL at ' + Date.now() / 1000);
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("ADSTATS: DOM Content Loaded")
});
console.log('ADSTATS: Adding Listener for Scrolling at ' + Date.now() / 1000);
window.addEventListener('scroll', function (event) {
    //console.log("ADSTATS: We be scrollin")
});
console.log('ADSTATS: Adding Listener for AdFuelRequestComplete at ' + Date.now() / 1000);
document.addEventListener('AdFuelRequestComplete', function (event) {
    console.log('ADSTATS: AdFuelRequestComplete fired at ' + Date.now() / 1000 + ' for ' + event.detail.slots.length + ' slots');
    var requestedSlots = event.detail.slots;
    var dispatchOptions = event.detail.options;
});
console.log('ADSTATS: Adding Listener for GPTRenderComplete at ' + Date.now() / 1000);
document.addEventListener('GPTRenderComplete', function (event) {
    console.log('ADSTATS: GPTRenderComplete for ' + event.detail.divId + ' fired at ' + Date.now() / 1000);
    var gptSlot = event.detail.asset;
    var renderedSlotId = 'ad_' + event.detail.pos;
    var isEmpty = event.detail.empty;
    var adSize = event.detail.renderedSize;
});
