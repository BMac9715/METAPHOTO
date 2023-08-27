import { Geolocation } from "./geolocation.intetface";

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geolocation;
}
