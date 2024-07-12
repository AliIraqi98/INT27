import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class ApiServices {

    // -> to print verbose messages during development
    debug = true;
    localAssets = "assets/sample-data";

    constructor (private httpClient: HttpClient,
                 @Inject('API_URL') private apiUrl: string) {
        if (this.isLive()) {
            if (this.isDebug()) {
                console.log('Creating services.ts with live backend API: ' + apiUrl);
            }
        } else {
            if (this.isDebug()) {
                console.log('Using local data for development: ' + apiUrl);
            }
        }
    }

    isLive () {
        return this.apiUrl.includes('http');
    }

    isDebug () {
        return this.debug;
    }

    /**
     * API METHODS
     * - During development `isImplemented` is included to reflect the incremental implementation of stub methods.
     */

    api0GetPipeCleanerTest () {
        // PRIORITY: 1 MUST
        // ENDPOINT: N/A
        const isImplemented = false;
        if (this.isLive() && isImplemented) {
            const url = this.apiUrl + '/pipecleaner';
            if (this.isDebug()) {
                console.log('REQ #0 (PIPE CLEANER TEST) VIA GET', url);
            }
            return this.httpClient.get(url);
        } else {
            return this.httpClient.get(this.localAssets + '/api-0.json');
        }
    }

}
