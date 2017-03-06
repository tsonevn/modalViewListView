import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Label } from "ui/label";
import frame = require("ui/frame");

var selected: string = "-1";
var laststate = "mainpage";

export function pageNavigated(args: EventData) {
    if (laststate != "mainpage") {
        let page = (<any>args.object).page;

        showModal(page, selected, true);
    }
}


export function onTap(args: EventData) {
    let page = (<any>args.object).page;

    showModal(page, selected, true);

}


function showModal(page: Page, _selected: string, fullscreen?: boolean) {
    page.showModal("./modalView", _selected, function (selectedItem: string) {
        console.log("selected " + selectedItem);
        selected = selectedItem;
        if (selectedItem == "next page") {
            frame.topmost().navigate("page2");
            laststate = "modal";
        }
        else {
            laststate = "mainpage"
        }
    }, fullscreen);
}
