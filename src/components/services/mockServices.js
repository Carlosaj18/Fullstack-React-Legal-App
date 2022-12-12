/* --------------------- BAKEND ------------------- */
import services from "../data/services";

const APICallServices = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArry = services.slice(0, 3);
      resolve(newArry);
    }, 2000);
  });
};

export const APICallServicesMore = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArry = services.slice(0, 6);
      resolve(newArry);
    }, 1000);
  });
};

export const APICallServiceCategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let serviceFound = services.filter(
        (serviceArray) => serviceArray.categoryId === parseInt(categoryId)
      );
      if (serviceFound.length > 0) resolve(serviceFound);
      else reject("Service category not found");
    }, 1000);
  });
};

export const APICallServicesTitle = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let serviceFound = services.filter((serviceArray) => {
        return title.toLowerCase() === ""
          ? serviceArray
          : serviceArray.title.toLowerCase().includes(title.toLowerCase());
      });
      if (serviceFound.length > 0) resolve(serviceFound);
      else reject("Document category not found");
    }, 1000);
  });
};

export const APICallSingleService = (idURL) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let documentFound = services.find(
        (documentArray) => documentArray.id === parseInt(idURL)
      );
      if (documentFound) resolve(documentFound);
      else reject("Document not found");
    }, 1000);
  });
};

export default APICallServices;
