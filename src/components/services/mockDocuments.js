/* --------------------- BAKEND ------------------- */
import documents from "../data/documents";

const APICallDocuments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArry = documents.slice(0, 3);
      resolve(newArry);
    }, 1000);
  });
};

export const APICallDocumentsMore = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArry = documents.slice(0, 6);
      resolve(newArry);
    }, 1000);
  });
};

export const APICallDocumentsCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let documentFound = documents.filter(
        (documentArray) => documentArray.category === category
      );
      if (documentFound.length > 0) resolve(documentFound);
      else reject("Document category not found");
    }, 1000);
  });
};

export const APICallDocumentsCategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let documentFound = documents.filter(
        (documentArray) => documentArray.categoryId === parseInt(categoryId)
      );
      if (documentFound.length > 0) resolve(documentFound);
      else reject("Document category not found");
    }, 1000);
  });
};

export const APICallDocumentsTitle = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let documentFound = documents.filter((documentArray) => {
        return title.toLowerCase() === ""
          ? documentArray
          : documentArray.title.toLowerCase().includes(title.toLowerCase());
      });
      if (documentFound.length > 0) resolve(documentFound);
      else reject("Document category not found");
    }, 1000);
  });
};

export const APICallSingleDocuments = (idURL) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let documentFound = documents.find(
        (documentArray) => documentArray.id === parseInt(idURL)
      );
      if (documentFound) resolve(documentFound);
      else reject("Document not found");
    }, 1000);
  });
};

export const APICallDocumentsCheckBox = (searchCheckBox) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      searchCheckBox
        .filter((checkBox) => {
          return checkBox !== undefined;
        })
        .map((checkBox) => {
          let documentFound = documents.filter((documentFound) => {
            return documentFound.category === checkBox;
          });
          if (documentFound) resolve(documentFound);
          else reject("Document not found");
        });
    }, 1000);
  });
};

export default APICallDocuments;
