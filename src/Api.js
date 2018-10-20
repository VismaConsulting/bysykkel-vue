const host ="/";
const baseApiUrl = "api";
const baseStationsUrl = "/stasjoner";

class Api{
	static getStasjoner(){
		return host + baseApiUrl + baseStationsUrl;
	}

    static getStasjonerWithAvailability(){
        return host + baseApiUrl + baseStationsUrl + "/availability";
    }

	static getStasjonerById(id){
        return host + baseApiUrl + baseStationsUrl + id;
	}

    static getStasjonerByName(name){
        return host + baseApiUrl + baseStationsUrl + name;
    }
}

export default Api;
