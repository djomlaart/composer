import {Directive, HostListener, Input, ViewContainerRef} from "@angular/core";
import {ContextService} from "./context.service";
import {MenuItem} from "../menu/menu-item";
@Directive({
    selector: "[ct-context]"
})
export class ContextDirective {

    @Input("ct-context")
    private contextMenuItems: MenuItem[];

    constructor(private context: ContextService,
                private viewContainer: ViewContainerRef) {
    }

    @HostListener("contextmenu", ["$event"])
    private onRightClick(event: MouseEvent) {
        event.preventDefault();
        if (!this.contextMenuItems) {
            return;
        }

        this.context.showAt(this.viewContainer, this.contextMenuItems, {x: event.clientX, y: event.clientY});
    }
}
