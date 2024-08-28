import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>("local storage", {
	providedIn: "root",
	factory() {
		if (typeof window !== "undefined") {
			return window.localStorage;
		} else {
			return null;
		}
	},
});
