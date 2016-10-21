import {isAndroid} from "platform";
import * as flexbox from "ui/layouts/flexbox-layout";

function set(what: string) {
    return function(args) {
        args.object.page.getViewById("container")[what] = args.object.text;
    }
}

export const flexDirection = set("flexDirection");
export const flexWrap = set("flexWrap");
export const justifyContent = set("justifyContent");
export const alignItems = set("alignItems");
export const alignContent = set("alignContent");

let lastSelection = null;
export function select(args) {
    if (lastSelection) {
        lastSelection.selected = "no";
        lastSelection.notify({ eventName: "selectedChange", object: lastSelection });
    }
    lastSelection = args.object;
    if (lastSelection) {
        lastSelection.selected = "yes";
        lastSelection.notify({ eventName: "selectedChange", object: lastSelection });
    }
}

export function order({object}) {
    if (!lastSelection) {
        return;
    }
    let value = parseInt(object.text);
    console.log("Set setOrder " + lastSelection + " " + value + " " + value + " " + (typeof value));
    flexbox.FlexboxLayout.setOrder(lastSelection, value);
}

export function flexGrow({object}) {
    if (!lastSelection) {
        return;
    }
    let value = parseInt(object.text);
    console.log("Set setFlexGrow " + lastSelection + " " + value + " " + value + " " + (typeof value));
    flexbox.FlexboxLayout.setFlexGrow(lastSelection, value);
}

export function flexShrink({object}) {
    if (!lastSelection) {
        return;
    }
    let value = parseInt(object.text);
    console.log("Set setFlexShrink " + lastSelection + " " + value + " " + value + " " + (typeof value));
    flexbox.FlexboxLayout.setFlexShrink(lastSelection, value);
}

// TODO: Align self