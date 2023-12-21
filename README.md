<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://user-images.githubusercontent.com/62365628/214876004-be858914-bb6b-4b6e-8c40-b49112ff0d30.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best App for Legal Documents </h3>

  <p align="center">
    An awesome App for your Legal Documents needs!
    <br />
    <a href="https://github.com/Carlosaj18/Legal-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://user-images.githubusercontent.com/62365628/216801631-60796360-c249-4d48-8c90-4b21520415bf.mp4">View Demo</a>
    ·
    <a href="https://github.com/Carlosaj18/Legal-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/Carlosaj18/Legal-App/issues">Request Feature</a>
  </p>
</div>

<br />

<!-- ABOUT THE PROJECT -->
## :star2: About the Project

<div align="justify">It is a project that seeks to generate a centralization of legal documents at hand. Where you can download our templates, and use right after. You will have all your documents organized.
 <br><br>
</div>

## Project Technological Stack:

* React: Frontend library for building interactive and dynamic user interfaces.
* Redux: State management library ensuring consistent and scalable application state.
* Figma: Design tool for creating and prototyping user interfaces and experiences.
* Firebase: Platform for app development that provides various tools, including hosting, authentication, and database management.

<p align="center">
  <br><br>
  <a target="_blank" rel="noopener noreferrer"> <img src="https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg" alt="Figma" height="40" style="vertical-align:top; margin:4px"></a>
  <a target="_blank" rel="noopener noreferrer"> <img src="https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/firebase/firebase-plain-wordmark.svg" alt="Firebase" height="40" style="vertical-align:top; margin:4px"></a>
  <a target="_blank" rel="noopener noreferrer"> <img src="https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" alt="Firebase" height="40" style="vertical-align:top; margin:10px"></a>
  <a target="_blank" rel="noopener noreferrer"> <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" alt="React" height="40" style="vertical-align:top; margin:10px"</a>
   <a> <img src="https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/materialui/materialui-original.svg" alt="MaterialUi" height="40" style="vertical-align:top; margin:10px"></a>
  <a> <img src="https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg" alt="Redux" height="40" style="vertical-align:top; margin:10px"></a>
   <a> <img src="https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original-wordmark.svg" alt="MaterialUi" height="40" style="vertical-align:top; margin:10px"></a>
</p>

## Features:

*     Google Authentication: Utilize Google Authentication for secure user logins.
*     Search Bar: Implement a search feature for easy document retrieval.
*     Filtering Options: Provide filtering options to organize and access documents efficiently.
*     Document Repository: Create a centralized repository for storing legal documents.
*     Data Storage: Utilize Firebase's storage capabilities for efficient data management.
*     Custom Document Creation: Implement functionality to create personalized documents within the app.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

`**Note**`: This app requires API key from <a href="hhttps://firebase.google.com/">Firebase Service Account Key</a>, and API Key from <a href="https://geo-battuta.net/" >GEO Battuta</a>


### 1. Download Node.js and `npm` (follow instructions [here](https://nodejs.org/en/))

### 2. Git clone and cd into the repo folder:

```bash
https://github.com/Carlosaj18/Fullstack-React-Legal-App.git && cd legal-app-clone
```

### 3. Install all dependencies

```bash
npm install
```

### 4. In root service folder, updated the firebaseConfig

```bash
Updated with your information

const firebaseConfig = {
  apiKey: "AIzaSyApsrE8imumIQd-6tS30jS7xc3OGxOrqME",
  authDomain: "lawyers-test.firebaseapp.com",
  projectId: "lawyers-test",
  storageBucket: "lawyers-42999.appspot.com",
  messagingSenderId: "864342280404",
  appId: "1:864342280404:web:643432e91f7d3241941341",
  measurementId: "G-V3FLS074K8"
};
```

### 5. Inject the data

```
Call the function createCollection() in the App.js from src/components/services/firebase.js only one time. 

```

### 6. Updated API Key from GEO Battuta

```
Updated the file from src/components/services/apiPaises.js

BATTUTA_KEY = YOUR_BATTUTA_KEY

```

### 5. Run the client

```bash
npm start
#for deployed version

npm run dev
#for deployed version
```

### 6. Access the project in your browser at [`http://localhost:3000`](http://localhost:3000)
   
## Demo & Showcasing:

### :camera: Screenshots

https://user-images.githubusercontent.com/62365628/216801631-60796360-c249-4d48-8c90-4b21520415bf.mp4


## Live Site 

<p id="live-site"><p>

<a href="">![Live Site](https://res.cloudinary.com/dn1e07eul/image/upload/v1659389947/Readme%20Headers/inter-live-site_ngkqcf.png)</a>

• **[Legal App]()** is a responsive web app can be viewed on any device.

<br>

<!-- CONTACT -->
## Contact

<a href=#lets-connect>![Let's Connect!](https://res.cloudinary.com/dn1e07eul/image/upload/v1659314257/Readme%20Headers/inter-lets-connect_bv3kcd.png)</a>

<p><a href="https://twitter.com/"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" height=30 width=90 alt="Twitter badge"></a> <a href="https://www.linkedin.com/in/carlos-jaramillo-full-stack-developer/"><img src="https://img.shields.io/badge/linkedin-%230064e7.svg?&style=for-the-badge&logo=linkedin&logoColor=white" height=30 width=90 alt="Linkedin badge"></a> <a href="mailto:cjaramilloportilla@gmail.com"><img src="https://img.shields.io/badge/gmail-%23fd1745.svg?&style=for-the-badge&logo=gmail&logoColor=white" height=30 width=90 alt="Gmail badge"></a> <a href="https://github.com/Carlosaj18"><img src="https://img.shields.io/badge/github-%23ff8e44.svg?&style=for-the-badge&logo=github&logoColor=white" height=30 width=90 alt="Github badge"></a></p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Carlosaj18/Legal-App/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/Carlosaj18/Legal-App/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Carlosaj18/Legal-App/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/carlos-jaramillo-full-stack-developer/
[product-screenshot]: https://user-images.githubusercontent.com/62365628/213933933-376cf361-be21-481e-a876-93f794866c4c.jpg
[product-screenshot2]: https://user-images.githubusercontent.com/62365628/214895567-c305eda7-4195-48f6-ad85-2212b550ee9a.jpeg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
