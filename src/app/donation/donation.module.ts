import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

import { ScheduleModule } from "../schedule/schedule.module";
import { DonationRoutingModule  } from "./donation-routing.module";
import { DonationComponent } from "./donation.component";

@NgModule({
    declarations: [
        DonationComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        DonationRoutingModule,
        NativeScriptDateTimePickerModule,
        NativeScriptPickerModule,
        ScheduleModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DonationModule { }
