import Constants from "../../configs/constants";

class PlacesAPI {
    static autoComplete(input, callback) {
        const parameters = {
            input: input,
            key: Constants.GOOGLE_API_KEY
        };
        fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json' + this.toQueryString(parameters)).then((response) => response.json()).then((responseJson) => {
            callback(null, responseJson)
            return true
        }).catch((error) => {
            callback(error, null)
        });
    }
    static placeDetail(placeId, callback) {
        const parameters = {
            placeid: placeId,
            key: Constants.GOOGLE_API_KEY
        };
        fetch('https://maps.googleapis.com/maps/api/place/details/json' + this.toQueryString(parameters)).then((response) => response.json()).then((responseJson) => {
            callback(null, responseJson)
            return true
        }).catch((error) => {
            callback(error, null)
        });
    }
    static getPlacePictureURI(photoReference) {
        const parameters = {
            photoreference: photoReference,
            key: Constants.GOOGLE_API_KEY
        };
        return 'https://maps.googleapis.com/maps/api/place/photo' + this.toQueryString(parameters);
    }
    static toQueryString = (parameters) => {
        var queryString = "?";
        for (let key in parameters) {
            queryString += key + "=" + parameters[key] + "&";
        }
        return queryString;
    }
}

export default PlacesAPI;
