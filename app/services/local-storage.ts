import {Injectable} from '@angular/core';
import {ApiServices} from "./api-services";

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    localStorage: Storage;

    isDebug() {
        return this.apiServices.isDebug();
    }

    constructor(private apiServices: ApiServices) {
        this.localStorage = window.localStorage;
    }

    get(key: string): any {
        if (this.isLocalStorageSupported) {
            if (this.isDebug()) {
                console.log("### RETURN: " + key, this.localStorage.getItem(key));
            }
            const val = this.localStorage.getItem(key);
            if (val !== undefined && val !== 'undefined' && val !== null) {
                return JSON.parse(this.localStorage.getItem(key)  || '{}');
            } else {
                if (this.isDebug()) {
                    console.log("### RETURN VALUE WAS UNDEFINED");
                }
                return '';
            }
        }
    }

    set(key: string, value: any) {
        if (this.isLocalStorageSupported) {
            if (this.isDebug()) {
                console.log("### SET: " + key, JSON.stringify(value));
            }
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }

    remove(key: string): boolean {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            return true;
        }
        return false;
    }

    get isLocalStorageSupported(): boolean {
        return !!this.localStorage;
    }
}
