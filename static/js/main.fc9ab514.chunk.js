(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),EmployeeTable=function EmployeeTable(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.employees.results),_useState2=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),employees=_useState2[0],setEmployees=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState4=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),filteredEmployees=_useState4[0],setFilteredEmployees=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState6=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),searchName=_useState6[0],setSerachName=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState8=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),sortedField=_useState8[0],setSortedField=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(),_useState10=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState9,2),sortDirection=_useState10[0],setSortDirection=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({name:"none",country:"none",email:"none"}),_useState12=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState11,2),classBtnVal=_useState12[0],setClassBtnval=_useState12[1];Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){setFilteredEmployees(employees.filter((function(e){return e.name.last.toLowerCase().includes(searchName.toLowerCase())||e.name.first.toLowerCase().includes(searchName.toLowerCase())})))}),[searchName,employees]);var sortedEmployees=Object(_Users_kwelch_MERN_BOOT_CAMP_homework_19_Homework_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(filteredEmployees);return null!==sortedField&&(console.log(classBtnVal),sortedEmployees.sort((function(a,b){var p="a.".concat(sortedField," < b.").concat(sortedField),q="a.".concat(sortedField," > b.").concat(sortedField);return eval(p)?"ascending"===sortDirection?-1:1:eval(q)?"ascending"===sortDirection?1:-1:0}))),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Filter by Name: "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"text",placeholder:"Enter Filter Criteria",onChange:function(e){return setSerachName(e.target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table",{className:"employee-table pagination","data-pagecount":"4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",onClick:function(){setSortedField("name.last"),setSortDirection("ascending"===sortDirection?"descending":"ascending"),setClassBtnval({name:sortDirection,country:"none",email:"none"})},className:classBtnVal.name,children:"Name"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",onClick:function(){setSortedField("location.country"),setSortDirection("ascending"===sortDirection?"descending":"ascending"),setClassBtnval({name:"none",country:sortDirection,email:"none"})},className:classBtnVal.country,children:"Country"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button",onClick:function(){setSortedField("email"),setSortDirection("ascending"===sortDirection?"descending":"ascending"),setClassBtnval({name:"none",country:"none",email:sortDirection})},className:classBtnVal.email,children:"Email"})})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody",{children:sortedEmployees.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr",{className:"table-row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:e.picture.thumbnail,alt:"random thumbnail of person"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td",{children:[e.name.title," ",e.name.first," ",e.name.last]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:e.location.country}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:e.email})]},e.login.uuid)}))})]})]})};__webpack_exports__.a=EmployeeTable},26:function(e,_,t){},33:function(e,_,t){"use strict";t.r(_);var s=t(1),r=t.n(s),a=t(18),n=t.n(a),c=(t(26),t(8)),o=t(0),l=function(e){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{children:"The Employee Directory"}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(c.b,{to:"/",children:"Home"}),Object(o.jsx)(c.b,{to:"/about",children:"About"})]})]})},i=t(7),u=function(e){var _=Object(s.useState)(null),t=Object(i.a)(_,2),r=t[0],a=t[1],n=Object(s.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],u=Object(s.useState)(!0),O=Object(i.a)(u,2),d=O[0],m=O[1];return Object(s.useEffect)((function(){var _=new AbortController;return fetch(e,{signal:_.signal}).then((function(e){if(!e.ok)throw Error("Did not get valid for that resource");return e.json()})).then((function(e){a(e),m(!1),l(null)})).catch((function(e){console.log(e.message),"AbortError"===e.name?console.log("Fetch Aborted"):(l(e.message),m(!1))})),function(){return _.abort()}}),[e]),{data:r,isPending:d,isError:o}},O=t(20),d=function(){var e=u("https://randomuser.me/api/?results=200"),_=e.data,t=e.isPending,s=e.isError;return Object(o.jsxs)("div",{className:"home",children:[s&&Object(o.jsxs)("div",{children:["Scotty we have a problem ",s]}),t&&Object(o.jsx)("div",{children:"Data is Loading ..."}),_&&Object(o.jsx)(O.a,{employees:_,title:"List of Employees"})]})},m=function(){return Object(o.jsxs)("div",{className:"About",children:[Object(o.jsx)("h5",{children:"The Employee Directory application is a front end react application that creates a list of users from an opesoruce API that represents employees "}),Object(o.jsx)("h5",{children:"The user can search and filter the users by name."}),Object(o.jsx)(c.b,{to:"/",children:"Back to the home page"})]})},b=t(2),E=function(){return Object(o.jsxs)("div",{className:"notfound",children:[Object(o.jsx)("h2",{children:"Sorry"}),Object(o.jsx)("p",{children:"That page cannot be located."}),Object(o.jsx)(c.b,{to:"/",children:"Back to the home page"})]})};var j=function(){return Object(o.jsxs)(c.a,{children:[Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l,{})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(b.a,{exact:!0,path:"/Home",children:Object(o.jsx)(d,{})}),Object(o.jsx)(b.a,{exact:!0,path:"/About",children:Object(o.jsx)(m,{})}),Object(o.jsx)(b.a,{path:"*",children:Object(o.jsx)(E,{})})]})})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(_){var t=_.getCLS,s=_.getFID,r=_.getFCP,a=_.getLCP,n=_.getTTFB;t(e),s(e),r(e),a(e),n(e)}))};n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()}},[[33,1,2]]]);
//# sourceMappingURL=main.fc9ab514.chunk.js.map