/* --------------------- BAKEND ------------------- */
import documents from "../data/latestDocuments";

const APICallDocuments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(documents);
        }, 1000)
    })
}

export const APICallDocumentsCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.filter(documentArray => documentArray.category === category);
            if(documentFound.length > 0)
                resolve(documentFound);
            else 
                reject("Document category not found")
        }, 1000)
    })
}

export const APICallDocumentsTitle = (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let documentFound = documents.filter(documentArray => documentArray.title === title);
            console.log(documentFound)
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
