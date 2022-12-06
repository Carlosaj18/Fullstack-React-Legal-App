/* --------------------- BAKEND ------------------- */
import documents from "../data/latestDocuments";

const APICallDocuments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(documents);
        }, 1000)
    })
}


export const APICallSingleDocuments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(documents[0]);
        }, 1000)
    })
}


export default APICallDocuments;
