import { Component } from '@angular/core';
import {ApiServices} from "../../services/api-services";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    landingText;

    constructor (private apiServices: ApiServices) {
        this.api0GetLandingText();
    }

    isDebug () {
        return this.apiServices.isDebug();
    }

    api0GetLandingText () {
        const methodName = "#0: getLandingText()";
        if (this.isDebug()) {
            console.log('REQ ' + methodName);
        }
        this.apiServices.api0GetPipeCleanerTest().subscribe(((data) => {
            if (this.isDebug()) {
                console.log('DATA ' + methodName, data);
            }
            this.landingText = data;
        }), ((error) => {
            console.log("ERROR " + error.status + " " + methodName, error);
        }), (() => {
            console.log("COMPLETE " + methodName);
        }));
    }
}


