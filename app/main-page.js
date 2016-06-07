"use strict";
var selected = -1;
function onLoaded(args) {
    console.log(">>> main-page.onLoaded");
    //console.trace();
}
exports.onLoaded = onLoaded;
function onTap(args) {
    var page = args.object.page;
    showModal(page, selected, false);
}
exports.onTap = onTap;
function showModal(page, _selected, fullscreen) {
    page.showModal("./modalView", _selected, function (selectedItem) {
        console.log("selected " + selectedItem);
        selected = selectedItem;
    }, fullscreen);
}
// export function onCloseModal(args: EventData) {
//     let page = (<any>args.object).page;
//     page.closeModal();
// } 
//# sourceMappingURL=main-page.js.map