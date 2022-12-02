/* --------------------- BAKEND ------------------- */
import services from "../data/services";

const APICallServices = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(services);
        }, 2000)
    })
}

export default APICallServices;
