import Api from "../../NetworkController/WebApi";
import WebConstant from "../../NetworkController/WebConstant";

export function getSeasonalWorkerList(params) {
    return Api.getRequest(WebConstant.SEASONAL_WORKER_LIST, params);
}
