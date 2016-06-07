import {EventData} from "data/observable";
import {Page} from "ui/page";
import {Label} from "ui/label";
import frame = require("ui/frame");

var selected:number = -1;

export function onLoaded(args: EventData) {
    console.log(">>> main-page.onLoaded");
    //console.trace();
}


export function onTap(args: EventData) {
    let page = (<any>args.object).page;

        showModal(page, selected, false);
    
}


function showModal(page: Page, _selected: number, fullscreen?: boolean) {
    page.showModal("./modalView", _selected, function (selectedItem:number) {
        console.log("selected "+selectedItem);
        selected = selectedItem;
    }, fullscreen);
}

// export function onCloseModal(args: EventData) {
//     let page = (<any>args.object).page;
//     page.closeModal();
// }