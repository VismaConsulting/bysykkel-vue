const baseApiUrl = "/api";
const baseStationsUrl = "/stasjoner";

class Api{
	static getStasjoner(){
		return baseApiUrl + baseStationsUrl;
	}

    static getStasjonerWithAvailability(){
        return baseApiUrl + baseStationsUrl + "/availability";
    }

	static getStasjonerById(id){
        return baseApiUrl + baseStationsUrl + id;
	}

    static getStasjonerByName(name){
        return baseApiUrl + baseStationsUrl + name;
    }
}

export default Api;
