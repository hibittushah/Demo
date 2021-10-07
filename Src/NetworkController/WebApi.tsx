import axios from 'axios';
import { Alert } from "react-native";

// resorces
// manager and custom class declare
import WebConstant from './WebConstant'




var WebApi = {
    getRequest: async (requestUrl: any, header: any) => {    
        axios.defaults.timeout = WebConstant.timeout;
        return axios.get(WebConstant.BASE_URL + requestUrl +header , {
            timeout: WebConstant.timeout,
            validateStatus: function (status) {
                return status >= 200  // default
            },
        }).then(function (response) {           
            console.log("resonse is " + JSON.stringify(response.data))
            return response.data;
        }).catch((error) => {
            console.log("error post api", error)           
            return false;
        });
    },

}
export default WebApi;
