(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zaina\Portfolio-Website\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-list/project-list.component */ "VJqM");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 113, vars: 0, consts: [[1, "all-content"], ["id", "background"], ["id", "sideBarAnimation", 1, "sidebar"], [1, "side"], [1, "navBar"], ["href", "#intro"], ["href", "#aboutMe"], ["href", "#experience"], ["href", "#projects"], ["href", "#contact-me"], [1, "content"], ["id", "intro-section"], ["id", "aboutMe", "data-aos", "fade", 1, "About-Me"], [1, "sectionTitle"], [1, "gradientLine"], [1, "about-content"], ["id", "picOfMe", "src", "assets/zain.png", "alt", "Picture of Me", "data-aos", "fade-right"], ["id", "picText", "data-aos", "fade-left"], ["data-aos", "fade-up", "data-aos-anchor", "#picOfMe", 1, "skills"], [1, "secondTitle"], [1, "skillList"], ["data-aos", "fade-up", "data-aos-anchor", "#picOfMe", 1, "resume"], ["href", "assets/zain-resume.pdf", "download", "Resume", 1, "download"], ["id", "experience", "data-aos", "fade", "data-scroll-section", "", 1, "Experience"], [1, "experience-content"], ["data-aos", "fade-left", 1, "nze-content"], ["src", "assets/nzecanada.png", "alt", "Net Zero Energy Inc. Logo", 1, "nzeLogo"], ["id", "nzeText"], ["data-aos", "fade-right", 1, "abs-content"], ["src", "assets/abslogo.png", "alt", "Advanced Building Solutions Logo", 1, "absLogo"], ["id", "projects", 1, "Projects"], ["data-aos", "fade", 1, "sectionTitle"], ["data-aos", "fade", 1, "gradientLine"], [1, "contact-me"], ["id", "contact-me", "data-aos", "fade", 1, "Contact"], [1, "connectFour-links"], ["href", "https://www.linkedin.com/in/zainafzal0/", 1, "contact-links"], [1, "fa", "fa-linkedin", "fa-4x"], ["href", "mailto:zain.afzal@uwaterloo.ca", 1, "contact-links"], [1, "fa", "fa-envelope", "fa-4x"], ["href", "https://github.com/zainafzal0", 1, "contact-links"], [1, "fa", "fa-github", "fa-4x"], [1, "copyRight"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hi, my name is Zain and I am currently a first year Software Engineering student studying at the University of Waterloo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " I am passionate about creating and programming various softwares, whether that be websites, applications, or anything else. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Java | C++ | Python | C | C# | JavaScript | HTML | CSS | Angular | React ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Net Zero Energy Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Front-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Developed new website for a starting company, worked on front-end by using languages such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Designed and created the Homepage, About us, Services, and Projects/Featured Projects pages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Increased how much monthly projects the company gained by around 30% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Advanced Building Solutions Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Energy Modeller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Performed detailed energy modelling and evaluation of complex building systems on prestigious municipal projects, using in depth knowledge of simulation softwares such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "eQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "EE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Project examples include: Monaco (263 Hurontario Street), Upper Vista (7711 Green Vista Gate), East Junction (394 Symington Avenue). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Gained strong ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Auto CAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " skills by drawing complex zoning floorplans and performing excel take-off for various projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "app-project-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Created by Zain Afzal. \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__["ProjectListComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    margin-left: 200px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    top: 50%;\r\n    transition: 0.5s;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none; \r\n    padding:0;\r\n    color: #fff;\r\n    font-weight: 1000;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #fff;\r\n    margin:0;\r\n    position: fixed;\r\n    width:200px;\r\n    height:100%;\r\n    font-size: 2rem;\r\n    top: 0px;\r\n   \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:875px) {\r\n    .content[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]{\r\n        display: none  !important; \r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.navBar[_ngcontent-%COMP%]{\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.intro[_ngcontent-%COMP%]{\r\n    margin-left: 200px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.gradient[_ngcontent-%COMP%]{\r\n    \r\n    box-sizing: border-box;\r\n    width: auto;\r\n    height: 100vh;\r\n    color: #fff;\r\n    background: linear-gradient(-45deg, #EE7752,#E73C7E, #23A6D5, #23D5AB);\r\n    background-size: 400% 400%;\r\n    position: relative;\r\n    animation: change 10s ease-in-out infinite;\r\n    padding: 150px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.About-Me[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.about-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 100px;\r\n    justify-content: center;\r\n    margin-bottom: 75px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#picOfMe[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    max-width: 476px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#picText[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin:0px;\r\n    margin-left: 50px;\r\n    padding: 40px;\r\n    border: 3px solid #fff;\r\n    box-sizing: border-box;\r\n    width: 600px;\r\n    background-color: #fff;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.resume[_ngcontent-%COMP%]{\r\n    min-width: 220px;\r\n    padding: 5px;\r\n    background-color: black;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:1350px) {\r\n    .about-content[_ngcontent-%COMP%]{\r\n        flex-direction: column !important;\r\n        align-items:center;\r\n        margin-bottom: 25px;\r\n    }\r\n    #picText[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:600px) {\r\n    #picText[_ngcontent-%COMP%]{\r\n        width: auto ;\r\n        min-width: 300;\r\n        font-size: 1.75rem;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n    }\r\n    .skills[_ngcontent-%COMP%]{\r\n        font-size: 1.75rem !important;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:500px) {\r\n    \r\n    #picOfMe[_ngcontent-%COMP%]{\r\n        width: 400px;\r\n        margin: 20px;\r\n        height: 322px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:400px) {\r\n    \r\n    #picOfMe[_ngcontent-%COMP%]{\r\n        width: 320px;\r\n        margin: 20px;\r\n        height: 258px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:350px) {\r\n    \r\n    #picOfMe[_ngcontent-%COMP%]{\r\n        width: 300px;\r\n        margin: 20px;\r\n        height: 242px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Experience[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.skills[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    padding-top: 50px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.experience-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 50px;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.nze-content[_ngcontent-%COMP%]{\r\n    padding: 25px;\r\n    align-items: center;\r\n    margin-left: 200px;\r\n    box-sizing: border-box;\r\n    border: 2px solid rgb(255, 255, 255);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 50px;\r\n    width: 530px;\r\n    min-height: 620px;\r\n    margin-right: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.abs-content[_ngcontent-%COMP%]{\r\n    padding: 25px;\r\n    align-items: center;\r\n    margin-right: 200px;\r\n    box-sizing: border-box;\r\n    border: 2px solid rgb(255, 255, 255);\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 50px;\r\n    width: 530px;\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:1520px) {\r\n    .experience-content[_ngcontent-%COMP%]{\r\n        flex-direction: column ;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .nze-content[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n    }\r\n    .abs-content[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n        margin-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:550px) {\r\n    \r\n    .nze-content[_ngcontent-%COMP%]{\r\n        width: auto;\r\n        min-width: 330px;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n    }\r\n    .abs-content[_ngcontent-%COMP%]{\r\n        width: auto;\r\n        min-width: 330px;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.nzeLogo[_ngcontent-%COMP%]{\r\n    \r\n    max-width: 20%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#nzeText[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    list-style-type:circle;\r\n    padding:30px;\r\n    font-size: 1.75rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#nzeText[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.absLogo[_ngcontent-%COMP%]{\r\n    max-width: 14%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Projects[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.connectFour-links[_ngcontent-%COMP%]{\r\n    margin: 20px 0;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.connectFour-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    width: 100px;\r\n    height: 100px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color:  #000000;\r\n    font-size: 16px;\r\n    transition: 0.4s;\r\n    border-radius: 50%\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.connectFour-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: #000000;\r\n    color: white;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:1830px) {\r\n    .projectsGrid[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .streetFighter[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n        margin-top: 50px;\r\n    }\r\n    .connectFour[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n        \r\n    }\r\n    .connectFour-front[_ngcontent-%COMP%], .connectFour-back[_ngcontent-%COMP%], .streetFighter-front[_ngcontent-%COMP%], .streetFighter-back[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.Contact[_ngcontent-%COMP%]{\r\n    \r\n    height: 90vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.contact-links[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    justify-content: center;\r\n    align-items: center;\r\n   \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sectionTitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    \r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.gradientLine[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    box-sizing: border-box;\r\n    width: 90%;\r\n    height: 5px;\r\n    background: linear-gradient(-45deg, #000000, #000000,  #ffffff,  #ffffff, #000000, #000000);\r\n\tbackground-size: 400% 400%;\r\n    animation: change 5s ease-in-out infinite;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.skills[_ngcontent-%COMP%]{\r\n    padding-top: 25px;\r\n    margin: auto;\r\n    margin-top: 25px;\r\n    width: 70%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.secondTitle[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 3.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.skillList[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 2.75rem;\r\n    padding-bottom: 25px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.download[_ngcontent-%COMP%]{\r\n    \r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.resume[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    transition: 0.5s;\r\n    border-radius: 25px;\r\n    margin: auto;\r\n    width: 20%;\r\n    background-color: rgb(0, 0, 0);\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.resume[_ngcontent-%COMP%]:hover{\r\n    transform: scale(2);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.copyRight[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 1.2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.copyRight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 1.5rem;\r\n    padding: 20px;\r\n    padding-top: 0;\r\n    \r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 2.2rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding-top: 40px;\r\n    margin-top: 0px;\r\n    font-size: 5rem;\r\n    letter-spacing: 2px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding:5px;\r\n    font-size: 2.5rem;\r\n    letter-spacing: 2px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@keyframes change {\r\n    0%{\r\n        background-position: 0 50%;\r\n    }\r\n    50%{\r\n        background-position: 100% 50%;\r\n    }\r\n    100%{\r\n        background-position: 0 50%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7Ozs7Ozs7O0FBUXJGO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7Ozs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsZ0JBQWdCOztBQUVwQjs7Ozs7Ozs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7Ozs7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjs7QUFFckI7Ozs7Ozs7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFFBQVE7SUFDUixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsUUFBUTs7O0FBR1o7Ozs7Ozs7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7Ozs7Ozs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOzs7Ozs7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7Ozs7OztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxzRUFBc0U7SUFDdEUsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsY0FBYztBQUNsQjs7Ozs7Ozs7QUFPQTtJQUNJLGlCQUFpQjtBQUNyQjs7Ozs7Ozs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7Ozs7Ozs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDRFQUE0RTtBQUNoRjs7Ozs7Ozs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lB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QWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7Ozs7Ozs7O0FBSUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnNpZGViYXIgdWwgbGl7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zaWRlYmFyIHVsIGxpOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4uc2lkZWJhciB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxyXG4gICAgcGFkZGluZzowO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIFxyXG59XHJcbi5zaWRlYmFye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRvcDogMHB4O1xyXG4gICBcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo4NzVweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAgIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubmF2QmFye1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW50cm97XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuXHJcbi5ncmFkaWVudHtcclxuICAgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI0VFNzc1MiwjRTczQzdFLCAjMjNBNkQ1LCAjMjNENUFCKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2UgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgcGFkZGluZzogMTUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLkFib3V0LU1le1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5hYm91dC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxufVxyXG5cclxuI3BpY09mTWV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ3NnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuXHJcbiNwaWNUZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG5cclxufVxyXG5cclxuLnJlc3VtZXtcclxuICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTM1MHB4KSB7XHJcbiAgICAuYWJvdXQtY29udGVudHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAjcGljVGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgI3BpY1RleHR7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbGxze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xyXG4gICAgXHJcbiAgICAjcGljT2ZNZXtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KSB7XHJcbiAgICBcclxuICAgICNwaWNPZk1le1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNThweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDozNTBweCkge1xyXG4gICAgXHJcbiAgICAjcGljT2ZNZXtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjQycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLkV4cGVyaWVuY2V7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi5za2lsbHN7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLm56ZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA1MzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYWJzLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA1MzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxNTIwcHgpIHtcclxuICAgIC5leHBlcmllbmNlLWNvbnRlbnR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5uemUtY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuYWJzLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU1MHB4KSB7XHJcbiAgICBcclxuICAgIC5uemUtY29udGVudHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtaW4td2lkdGg6IDMzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5hYnMtY29udGVudHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtaW4td2lkdGg6IDMzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm56ZUxvZ297XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogMjAlO1xyXG59XHJcblxyXG4jbnplVGV4dHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOmNpcmNsZTtcclxuICAgIHBhZGRpbmc6MzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxufVxyXG5cclxuI256ZVRleHQgbGl7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5hYnNMb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxNCU7XHJcbn1cclxuXHJcbi5Qcm9qZWN0c3tcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4gIC5jb25uZWN0Rm91ci1saW5rc3tcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICAuY29ubmVjdEZvdXItbGlua3MgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAgIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcclxuICB9XHJcbiAgLmNvbm5lY3RGb3VyLWxpbmtzIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuIFxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDoxODMwcHgpIHtcclxuICAgIC5wcm9qZWN0c0dyaWR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnN0cmVldEZpZ2h0ZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29ubmVjdEZvdXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNvbm5lY3RGb3VyLWZyb250LC5jb25uZWN0Rm91ci1iYWNrLC5zdHJlZXRGaWdodGVyLWZyb250LC5zdHJlZXRGaWdodGVyLWJhY2t7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICBcclxuICBcclxuXHJcbi5Db250YWN0e1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtbGlua3N7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2VjdGlvblRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZ3JhZGllbnRMaW5le1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwMDAwMDAsICMwMDAwMDAsICAjZmZmZmZmLCAgI2ZmZmZmZiwgIzAwMDAwMCwgIzAwMDAwMCk7XHJcblx0YmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgICBhbmltYXRpb246IGNoYW5nZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNraWxsc3tcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uc2Vjb25kVGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG59XHJcbi5za2lsbExpc3R7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuXHJcbn1cclxuXHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kb3dubG9hZHtcclxuICAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ucmVzdW1le1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXN1bWU6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG59XHJcblxyXG4uY29weVJpZ2h0e1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmNvcHlSaWdodCBwe1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIFxyXG59XHJcbmgye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIFxyXG59XHJcbmgze1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBjaGFuZ2Uge1xyXG4gICAgMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "L/iQ":
/*!********************************************!*\
  !*** ./src/app/project-list/projects.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Hero Index\",\"skills\":[\"React\",\"Bootstrap\",\"Axios\",\"JavaScript\",\"HTML\",\"CSS\",\"Superhero API\"],\"imageSlides\":{\"pic1ID\":\"assets/heroIndexSlide1.png\",\"pic2ID\":\"assets/heroIndexSlide2.png\",\"pic3ID\":\"assets/heroIndexSlide3.png\"},\"picID\":\"assets/heroIndex2.png\",\"description\":\"Created a React app where the user can search up any hero and retrieve information on them like: biography, appearance, powerstats, etc. This is done by using Axios to fetch a json object from Superhero API containing all the results matching the query. Once the user searchs up a name the first time, the site will then lead to the result page where you can view all the results and also including a live search where the user can search any name and the results will update with it\",\"githubLink\":\"https://zainafzal0.github.io/hero-index\"},{\"name\":\"Street Brawlers\",\"skills\":[\"Java\",\"Java AWT\",\"OOP\"],\"imageSlides\":{\"pic1ID\":\"assets/streetFighterSlide1.png\",\"pic2ID\":\"assets/streetFighterSlide2.png\",\"pic3ID\":\"assets/streetFighterSlide3.png\"},\"picID\":\"assets/streetFighter.png\",\"description\":\"This project was developed solely with Java and Java AWT as an experience to become more proficient with the language. At the start the user is given four different selection of maps to choose from. The game includes only two characters and is meant for two players. Various different animations were used to produce a nostalgic and clean UI. The project ultilized all 4 pillars of Object Oriented programming. \",\"githubLink\":\"https://github.com/zainafzal0/Street-Brawler\"},{\"name\":\"Connect Four\",\"skills\":[\"Java\",\"Android Studio\"],\"imageSlides\":{\"pic1ID\":\"assets/connectFourSlide1.png\",\"pic2ID\":\"assets/connectFourSlide2.png\",\"pic3ID\":\"assets/connectFourSlide3.png\"},\"picID\":\"assets/connectFour.png\",\"description\":\"This Connect Four app was developed using Java and Android Studio. The game requires two players to play. A clean user interface was designed and multiple different animations were used such as: dropping a piece and flashing pieces if four connected and user won. Currently I am working on adding a single player mode by implementing the minimax algorithm. \",\"githubLink\":\"https://github.com/zainafzal0/ConnectFour\"}]");

/***/ }),

/***/ "NgH1":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 2, vars: 0, template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-me works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");


class AppComponent {
    constructor() {
        this.title = 'Portfolio-Website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VJqM":
/*!********************************************************!*\
  !*** ./src/app/project-list/project-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.json */ "L/iQ");
var _projects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects.json */ "L/iQ", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");




function ProjectListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectListComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.setModalIndex(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projects_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", projects_r2.picID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](projects_r2.name);
} }
function ProjectListComponent_mat_chip_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skills_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skills_r6, " ");
} }
class ProjectListComponent {
    constructor() {
        this.projectList = _projects_json__WEBPACK_IMPORTED_MODULE_0__;
        this.showModal = false;
        this.modalIndex = 0;
    }
    ngOnInit() {
        this.showModal = false;
    }
    setModalIndex(index) {
        this.modalIndex = index;
    }
}
ProjectListComponent.ɵfac = function ProjectListComponent_Factory(t) { return new (t || ProjectListComponent)(); };
ProjectListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectListComponent, selectors: [["app-project-list"]], decls: 43, vars: 8, consts: [["data-aos", "zoom-in", 1, "container", "centerProject"], [1, "row"], ["class", "col-sm col-xxl-4", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", 4, "ngFor", "ngForOf"], ["id", "projectModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active", "carouselBtn"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "mx-auto", 3, "src"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "modalDescription"], [1, "container-modalEnd"], [1, "example-chip"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "modalLinks", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-link", "fa-4x"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", 1, "col-sm", "col-xxl-4"], ["data-bs-toggle", "modal", "data-bs-target", "#projectModal", 1, "card", 2, "width", "40rem", 3, "click"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], ["cdkDrag", "", 1, "example-box"]], template: function ProjectListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProjectListComponent_div_2_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-chip-list", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProjectListComponent_mat_chip_36_Template, 2, 1, "mat-chip", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projectList[ctx.modalIndex].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projectList[ctx.modalIndex].imageSlides.pic1ID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projectList[ctx.modalIndex].imageSlides.pic2ID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projectList[ctx.modalIndex].imageSlides.pic3ID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projectList[ctx.modalIndex].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectList[ctx.modalIndex].skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.projectList[ctx.modalIndex].githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"]], styles: [".centerProject[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    padding: 10px;\r\n    font-weight: 1000;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    transform: translate3D(0,-1px,0) scale(1.03);\r\n}\r\n\r\n.col-sm[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 25px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    \r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n    border-top: 2px grey;\r\n}\r\n\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    margin: 2px auto;\r\n    z-index: 1100 !important;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    \r\n}\r\n\r\n.modalImage[_ngcontent-%COMP%]{\r\n   margin: auto;\r\n}\r\n\r\n.modalDescription[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.modalLinks[_ngcontent-%COMP%]{\r\n    transform: rotate(90deg);\r\n    \r\n    padding-right: 10px;\r\n    color:  #000000;\r\n    font-size: 7px;\r\n    \r\n}\r\n\r\n.d-block[_ngcontent-%COMP%]{\r\n\r\n    max-height:450px ;\r\n}\r\n\r\n@media (max-width:991px) {\r\n    .d-block[_ngcontent-%COMP%]{\r\n        max-height:300px ;\r\n    }\r\n    .col-sm[_ngcontent-%COMP%]{\r\n        padding-left: 30px;\r\n        padding-right: 30px;\r\n    }\r\n}\r\n\r\n@media (max-width:550px) {\r\n    .d-block[_ngcontent-%COMP%]{\r\n        max-height:200px ;\r\n    }\r\n}\r\n\r\n.modalLinks[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    \r\n    color: rgb(92, 92, 92);\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n      font-size: 1.5rem;\r\n  }\r\n\r\n.bi.bi-link[_ngcontent-%COMP%]:hover{\r\n    fill: grey;\r\n}\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]{\r\n    height: 3px;\r\n}\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.699);  \r\n      border-top-width: 0;\r\n    border-bottom-width: 0;\r\n    background-color: rgb(0, 0, 0);\r\n    opacity: 1;\r\n    height: 3px;\r\n}\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n    background-color: rgb(150, 148, 148);\r\n}\r\n\r\n.carousel-control-prev-icon[_ngcontent-%COMP%]{margin-right: 30px;}\r\n\r\n.carousel-control-next-icon[_ngcontent-%COMP%] {margin-left: 30px;}\r\n\r\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  width: 100px;\r\n  outline: black;\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  \r\n  background-image: none;\r\n}\r\n\r\n.carousel-control-next-icon[_ngcontent-%COMP%]:after\r\n{\r\n  content: '>';\r\n  font-size: 55px;\r\n  color: rgb(0, 0, 0);\r\n  \r\n}\r\n\r\n.carousel-control-prev-icon[_ngcontent-%COMP%]:after {\r\n  content: '<';\r\n  font-size: 55px;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.mat-standard-chip[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\ncolor: rgb(0, 0, 0);\r\nbackground-color: rgba(199, 199, 199, 0.678);\r\n}\r\n\r\n.container-modalEnd[_ngcontent-%COMP%]{\r\n    padding: 25px;\r\n    padding-bottom: 15px;\r\n    padding-top: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEVBQTRFO0lBQzVFLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7QUFDQTtHQUNHLFlBQVk7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCOztJQUV4QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFJQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUNBOztJQUVJLHNCQUFzQjtFQUN4Qjs7QUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFRjtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUdJLGtEQUFrRDtNQUNoRCxtQkFBbUI7SUFDckIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBLDRCQUE0QixrQkFBa0IsQ0FBQzs7QUFDL0MsNkJBQTZCLGlCQUFpQixDQUFDOztBQUMvQzs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0Isa0JBQWtCOztFQUVsQixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIsbUJBQW1CO0FBQ25CLDRDQUE0QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InByb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmNlbnRlclByb2plY3R7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsLTFweCwwKSBzY2FsZSgxLjAzKTtcclxufVxyXG5cclxuLmNvbC1zbXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIFxyXG59XHJcblxyXG4ubW9kYWwtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBib3JkZXItdG9wOiAycHggZ3JleTtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgICB6LWluZGV4OiAxMTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbn1cclxuLm1vZGFsSW1hZ2V7XHJcbiAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1vZGFsRGVzY3JpcHRpb257XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubW9kYWxMaW5rc3tcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIFxyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAgIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5kLWJsb2Nre1xyXG5cclxuICAgIG1heC1oZWlnaHQ6NDUwcHggO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICAuZC1ibG9ja3tcclxuICAgICAgICBtYXgtaGVpZ2h0OjMwMHB4IDtcclxuICAgIH1cclxuICAgIC5jb2wtc217XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU1MHB4KSB7XHJcbiAgICAuZC1ibG9ja3tcclxuICAgICAgICBtYXgtaGVpZ2h0OjIwMHB4IDtcclxuICAgIH1cclxufVxyXG4ubW9kYWxMaW5rcyBpOmhvdmVye1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bntcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuLmJpLmJpLWxpbms6aG92ZXJ7XHJcbiAgICBmaWxsOiBncmV5O1xyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3Jze1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5OSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5OSk7ICBcclxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTQ4LCAxNDgpO1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbnttYXJnaW4tcmlnaHQ6IDMwcHg7fVxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge21hcmdpbi1sZWZ0OiAzMHB4O31cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG91dGxpbmU6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSwgMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uOmFmdGVyXHJcbntcclxuICBjb250ZW50OiAnPic7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbjphZnRlciB7XHJcbiAgY29udGVudDogJzwnO1xyXG4gIGZvbnQtc2l6ZTogNTVweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4ubWF0LXN0YW5kYXJkLWNoaXAge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbmNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTksIDE5OSwgMC42NzgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLW1vZGFsRW5ke1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-list/project-list.component */ "VJqM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_9__["ProjectListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map