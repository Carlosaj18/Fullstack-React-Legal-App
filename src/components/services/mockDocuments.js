/* --------------------- BAKEND ------------------- */
import latestDocuments from "../data/latestDocuments";

const APICallDocuments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(latestDocuments);
        }, 1000)
    })
}

export default APICallDocuments;
