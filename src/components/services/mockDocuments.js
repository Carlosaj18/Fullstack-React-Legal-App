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
        return title.toLowerCase() === " "
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

export const APICallSingleDocumentsIndex = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let index = documents.findIndex(
        (documentArray) => documentArray.id === parseInt(id)
      );
      if (index) resolve(documents[index]);
      else reject("Document not found");
    }, 1000);
  });
};

export const APICallDocumentsCheckBox = (searchCheckBox) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let arrayOptions = [];
      let filterCombo = searchCheckBox.filter((checkBox) => {
        return checkBox !== undefined;
      });
      if (filterCombo.length > 0) {
        filterCombo.forEach((element) => {
          let array = documents.filter((document) => {
            return (
              document.signed === element ||
              document.category === element ||
              document.state === element ||
              document.area === element
            );
          });
          if (array.length > 0) arrayOptions.push(...array);
        });
        if (arrayOptions) {
          let tem = [];
          arrayOptions.forEach((option) => {
            if (!tem.includes(option)) {
              tem.push(option);
            }
          });
          resolve(tem);
        } else reject("Document not found");
      } else {
        let newArry = documents.slice(0, 3);
        resolve(newArry);
      }
    }, 1000);
  });
};

export default APICallDocuments;
