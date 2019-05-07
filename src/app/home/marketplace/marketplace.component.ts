import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";
import { registerElement } from "nativescript-angular";
import { RouterExtensions } from "nativescript-angular/router";
import { PDFView } from "nativescript-pdf-view";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-marketplace",
    styleUrls: ["./marketplace.component.scss"],
    templateUrl: "./marketplace.component.html"
})
export class MarketplaceComponent implements OnInit {
    location: string;
    date: Date;

    companies: Array<{ name: string, imageSrc: string }> = [
        { name: "Andy's Pizza", imageSrc: "res://marketplace_andyspizza" },
        { name: "Bucuria", imageSrc: "res://marketplace_bucuria" },
        { name: "Farmacia Familiei", imageSrc: "res://marketplace_farmaciafamiliei" },
        { name: "Fidesco", imageSrc: "res://marketplace_fidesco" },
        { name: "Orange", imageSrc: "res://marketplace_orange" },
        { name: "StarNet", imageSrc: "res://marketplace_starnet" },
        { name: "Teatrul „Mihai Eminescu”", imageSrc: "res://marketplace_teatrulmihaieminescu" },
    ];

    constructor(
        private page: Page,
        private routerExtension: RouterExtensions,
        private webLocation: Location,
    ) {
        // Use the component constructor to inject providers.
    }

    goNext(): void {
        // this.routerExtension.navigate(["../dashboard/default"], { clearHistory: true });
    }

    onItemTap(args: ItemEventData): void {
        console.log("Item with index: " + args.index + " tapped");
    }

    onLoad() {
        alert("Loaded PDF!");
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.page.actionBarHidden = false;
    }
}