/* --------------------- BAKEND ------------------- */
import documents from "../data/latestDocuments";

const APICallDocuments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(documents);
        }, 1000)
    })
}

export const APICallDocumentsCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.filter(documentArray => documentArray.categoryId === parseInt(categoryId));
            if(documentFound.length > 0)
                resolve(documentFound);
            else 
                reject("Document category not found")
        }, 1000)
    })
}

export const APICallSingleDocuments = (idURL) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.find(documentArray => documentArray.id === parseInt(idURL));
            if(documentFound)
                resolve(documentFound);
            else 
                reject("Document not found")
        }, 1000)
    })
}


export default APICallDocuments;
