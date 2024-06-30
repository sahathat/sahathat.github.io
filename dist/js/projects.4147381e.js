"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[597],{2226:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var i=a(641);const r={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function n(e,t,a,n,o,l){const s=(0,i.g2)("ContactForm"),d=(0,i.g2)("ContactDetails");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(s),(0,i.bF)(d,{contacts:e.contacts},null,8,["contacts"])])}var o=a(9911),l=a.n(o);const s={class:"w-full md:w-1/2"},d={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},c=(0,i.Lk)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),g={action:"#",class:"font-general-regular space-y-7"};function m(e,t,a,r,n,o){const l=(0,i.g2)("FormInput"),m=(0,i.g2)("FormTextarea"),p=(0,i.g2)("Button");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.Lk)("div",d,[c,(0,i.Lk)("form",g,[(0,i.bF)(l,{label:"Full Name",inputIdentifier:"name"}),(0,i.bF)(l,{label:"Email",inputIdentifier:"email",inputType:"email"}),(0,i.bF)(l,{label:"Subject",inputIdentifier:"subject"}),(0,i.bF)(m,{label:"Message",textareaIdentifier:"message"}),(0,i.Lk)("div",null,[(0,i.bF)(p,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])])])])}var p=a(6416),u=a(33);const h=["for"],f=["id","name","placeholder","aria-label","value","type"];function b(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:a.label},(0,u.v_)(a.label),9,h),(0,i.Lk)("input",(0,i.v6)({class:"w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:a.inputIdentifier,name:a.inputIdentifier,placeholder:a.label,"aria-label":a.inputIdentifier,value:a.val,type:a.inputType},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),required:""}),null,16,f)])}var y={props:{label:{type:String,default:""},inputIdentifier:{type:String,default:""},val:{type:[String,Number],default:""},inputType:{type:String,default:"text"}}},k=a(6262);const x=(0,k.A)(y,[["render",b]]);var j=x;const v=["for"],P=["id","name","aria-label","placeholder"];function I(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:a.textareaIdentifier},(0,u.v_)(a.label),9,v),(0,i.Lk)("textarea",(0,i.v6)({class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:a.textareaIdentifier,name:a.textareaIdentifier,"aria-label":a.textareaIdentifier,placeholder:a.label},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),cols:"14",rows:"6"}),null,16,P)])}var w={props:{label:{type:String,default:""},textareaIdentifier:{type:String,default:""},val:{type:[String,Number],default:""}}};const L=(0,k.A)(w,[["render",I]]);var S=L,C={components:{Button:p.A,FormInput:j,FormTextarea:S}};const D=(0,k.A)(C,[["render",m]]);var H=D;const T={class:"w-full md:w-1/2"},A={class:"text-left max-w-xl px-6"},F=(0,i.Lk)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),E={class:"font-general-regular"},M=["data-feather"];function X(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",T,[(0,i.Lk)("div",A,[F,(0,i.Lk)("ul",E,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.contacts,(e=>((0,i.uX)(),(0,i.CE)("li",{class:"flex",key:e.id},[(0,i.Lk)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,M),(0,i.Lk)("a",{href:"#",class:(0,u.C4)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,u.v_)(e.name),3)])))),128))])])])}var _={props:["contacts"]};const R=(0,k.A)(_,[["render",X]]);var O=R,G={components:{ContactForm:H,ContactDetails:O},data:()=>({contacts:[{id:1,name:"Samaedam, Bangkok, Thailand",icon:"map-pin"},{id:2,name:"sahathat.yingsa44@gmail.com",icon:"mail"},{id:3,name:"092 771 6621",icon:"phone"}]}),mounted(){l().replace()},updated(){l().replace()},methods:{}};const N=(0,k.A)(G,[["render",n]]);var U=N},5503:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var i=a(641);const r={class:"container mx-auto"};function n(e,t,a,n,o,l){const s=(0,i.g2)("ProjectsGrid");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(s)])}var o=a(9481),l={name:"Projects",components:{ProjectsGrid:o.A}},s=a(6262);const d=(0,s.A)(l,[["render",n]]);var c=d},5085:function(e,t,a){a.r(t),a.d(t,{default:function(){return ue}});var i=a(641);const r={class:"container mx-auto mt-10 sm:mt-20"};function n(e,t,a,n,o,l){const s=(0,i.g2)("ProjectHeader"),d=(0,i.g2)("ProjectGallery"),c=(0,i.g2)("ProjectInfo"),g=(0,i.g2)("ProjectRelatedProjects");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(s,{singleProjectHeader:e.data[e.id-1].singleProjectHeader},null,8,["singleProjectHeader"]),(0,i.bF)(d,{projectImages:e.data[e.id-1].projectImages},null,8,["projectImages"]),(0,i.bF)(c,{projectInfo:e.data[e.id-1].projectInfo},null,8,["projectInfo"]),(0,i.bF)(g,{relatedProject:e.data[e.id-1].relatedProject},null,8,["relatedProject"])])}var o=a(9911),l=a.n(o),s=a(33);const d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},g={class:"flex items-center mr-10"},m=(0,i.Lk)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},u={class:"flex items-center"},h=(0,i.Lk)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),f={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function b(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("p",d,(0,s.v_)(a.singleProjectHeader.singleProjectTitle),1),(0,i.Lk)("div",c,[(0,i.Lk)("div",g,[m,(0,i.Lk)("span",p,(0,s.v_)(a.singleProjectHeader.singleProjectDate),1)]),(0,i.Lk)("div",u,[h,(0,i.Lk)("span",f,(0,s.v_)(a.singleProjectHeader.singleProjectTag),1)])])])}var y={props:["singleProjectHeader"]},k=a(6262);const x=(0,k.A)(y,[["render",b]]);var j=x;const v={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},P=["src"];function I(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",v,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.projectImages,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,i.Lk)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,P)])))),128))])}var w={props:["projectImages"]};const L=(0,k.A)(w,[["render",I]]);var S=L;const C={class:"block sm:flex gap-0 sm:gap-10 mt-14"},D={class:"w-full sm:w-1/3 text-left"},H={class:"mb-7"},T={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},A={class:"leading-loose"},F={key:0,type:"button",class:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"},E=["href"],M=(0,i.Lk)("i",{"data-feather":"external-link"},null,-1),X={key:1},_={class:"mb-7"},R={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},O={class:"font-general-regular text-primary-dark dark:text-ternary-light"},G={class:"mb-7"},N={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},U={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},W={class:"flex items-center gap-3 mt-5"},z=["href"],K=["data-feather"],B={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},q={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function Y(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",C,[(0,i.Lk)("div",D,[(0,i.Lk)("div",H,[(0,i.Lk)("p",T,(0,s.v_)(a.projectInfo.clientHeading),1),(0,i.Lk)("ul",A,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.projectInfo.companyInfos,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,i.Lk)("span",null,[(0,i.eW)((0,s.v_)(e.title)+": ",1),"Website"==e.title||"Phone"==e.title?((0,i.uX)(),(0,i.CE)("button",F,[(0,i.Lk)("a",{href:e.details,class:"hover:underline cursor-pointer items-center","aria-label":"Project Website and Phone"},[(0,i.eW)(" Link"),M],8,E)])):((0,i.uX)(),(0,i.CE)("span",X,(0,s.v_)(e.details),1))])])))),128))])]),(0,i.Lk)("div",_,[(0,i.Lk)("p",R,(0,s.v_)(a.projectInfo.objectivesHeading),1),(0,i.Lk)("p",O,(0,s.v_)(a.projectInfo.objectivesDetails),1)]),(0,i.Lk)("div",G,[(0,i.Lk)("p",N,(0,s.v_)(a.projectInfo.technologies[0].title),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.projectInfo.technologies[0].techs,((e,t)=>((0,i.uX)(),(0,i.CE)("ul",{key:t,class:"list-disc ml-2 font-general-regular text-primary-dark dark:text-ternary-light"},[(0,i.Lk)("li",null,[(0,i.Lk)("p",null,(0,s.v_)(e),1)])])))),128))]),(0,i.Lk)("div",null,[(0,i.Lk)("p",U,(0,s.v_)(a.projectInfo.socialSharingsHeading),1),(0,i.Lk)("div",W,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.projectInfo.socialSharings,(e=>((0,i.uX)(),(0,i.CE)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,i.Lk)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,K)],8,z)))),128))])])]),(0,i.Lk)("div",B,[(0,i.Lk)("p",q,(0,s.v_)(a.projectInfo.projectDetailsHeading),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.projectInfo.projectDetails,(e=>((0,i.uX)(),(0,i.CE)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,s.v_)(e.details),1)))),128))])])}var V={props:["projectInfo"],mounted(){l().replace()},updated(){l().replace()}};const $=(0,k.A)(V,[["render",Y]]);var J=$;const Q={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},Z={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},ee={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},te=["src","alt"],ae={class:"font-general-regular text-ternary-dark dark:text-ternary-light"};function ie(e,t,a,r,n,o){return(0,i.uX)(),(0,i.CE)("div",Q,[(0,i.Lk)("p",Z,(0,s.v_)(a.relatedProject.relatedProjectsHeading),1),(0,i.Lk)("div",ee,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.relatedProject.relatedProjects,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id},[(0,i.Lk)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,te),(0,i.eW)(),(0,i.Lk)("p",ae,(0,s.v_)(e.title),1)])))),128))])])}var re={props:["relatedProject"]};const ne=(0,k.A)(re,[["render",ie]]);var oe=ne,le=a(7196);const se=e=>{let t=e.length;while(0!=t){let a=Math.floor(Math.random()*t);t--,[e[t],e[a]]=[e[a],e[t]]}return e},de=[{id:1,singleProjectHeader:{singleProjectTitle:"Leafy",singleProjectDate:"8 Aug, 2023 - 29 Apr, 2024",singleProjectTag:"Web Application / Machine Learning / Backend Development / Database Administrator"},projectImages:[{id:1,title:"Shop Page",img:a(3511)},{id:2,title:"Product Detail Page",img:a(7793)},{id:3,title:"Review & Recommender Page",img:a(6682)},{id:4,title:"Order Page",img:a(787)},{id:5,title:"Profile Page",img:a(4540)},{id:6,title:"Gallery Content Page",img:a(6805)},{id:7,title:"Gallery List Page",img:a(4702)},{id:8,title:"Product Creation Page",img:a(7191)},{id:9,title:"Supplier Order Page",img:a(2448)}],projectInfo:{clientHeading:"Project Info",companyInfos:[{id:1,title:"Company Name/University",details:"KMUTT"},{id:2,title:"Responsibility",details:"Fullstack Development, Recommender System, Infrastructure"},{id:3,title:"Website",details:"https://capstone23.sit.kmutt.ac.th/pl4/"}],objectivesHeading:"Objective",objectivesDetails:"Leafy is a Web Application for online trading of gardening and gardening products, which facilitates the general public who likes and is interested in planting trees and gardening design. look like Shopee platform",technologies:[{title:"Tools & Technologies",techs:["Vue.js","CSS","Node.js (Express.js)","Prisma.js","MySQL","Minio","Docker","Git","Nginx"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Made features recommender system to recommend products who like or interest with user, product and rating review by using content-based filtering like weight ranking model on Node.js."},{id:2,details:"Made product customization with item in each SKU. Make sure seller can refill stock and change price in each SKU and detail."},{id:3,details:"Made product list who can filter, sort data and made into pagination list before response into dynamic web browser."},{id:4,details:"Made cart and order list with multiple store who can add item on cart in each group store or place on order with item and address. check status in each order in store before paid, prepared package, transited, received item and reviewed with optional."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Instagram",icon:"instagram",url:"https://instagram.com/"},{id:2,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:3,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:4,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:se(le.A.filter((e=>1!==e.id))).slice(0,4)}},{id:2,singleProjectHeader:{singleProjectTitle:"IT Help Desk",singleProjectDate:"31 May 2023 - 4 Aug, 2023",singleProjectTag:"Web Application / Dashboard / Full-stack development / Database Administrator"},projectImages:[{id:1,title:"Issue & Trouble Shooting Page",img:a(8752)},{id:2,title:"Admin Issue Page",img:a(5598)},{id:3,title:"Home Page",img:a(2325)},{id:4,title:"Issue Summarization Page",img:a(700)},{id:5,title:"Admin Dashboard Page",img:a(99)}],projectInfo:{clientHeading:"Project Info",companyInfos:[{id:1,title:"Company Name/University",details:"Moral center (Public Organization)"},{id:2,title:"Responsibility",details:"Fullstack Development, Power BI, IT Support"}],objectivesHeading:"Objective",objectivesDetails:"Moral IT Helpdesk is web application who use to notify or request issue about hardware trouble shooting and media. When admin has requested from notification system, they fix issue and response to user and organization. So every user who get fix the data on dashboard that summarize for understand about issue and resolution about organization",technologies:[{title:"Tools & Technologies",techs:["Vue.js","Tailwind CSS","Node.js (Express.js)","mysql 2","MySQL","Google Firebase","Power BI","Power Automate","Docker","Git","Nginx"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Made notification system for user request in Admin service."},{id:2,details:"Use Power BI for summarize user admin data by auto refresh and Show on admin page."},{id:3,details:"Made recommendation articles service with upload file in each session, and show sequence data."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Instagram",icon:"instagram",url:"https://instagram.com/"},{id:2,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:3,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:4,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:se(le.A.filter((e=>2!==e.id))).slice(0,4)}},{id:3,singleProjectHeader:{singleProjectTitle:"Google Certificate Salifort Motors Company - Why employee left?",singleProjectDate:"August, 2023 - December, 2023",singleProjectTag:"Explorational Data Analysis / Dashboard / Machine Learning / Hypothesis testing"},projectImages:[{id:1,title:"Excutive summary",img:a(1090)},{id:2,title:"EDA",img:a(7792)},{id:3,title:"Dashboard",img:a(6123)}],projectInfo:{clientHeading:"Project Info",companyInfos:[{id:1,title:"Company Name/University",details:"Google Certificate program by KMUTT and AIS data team"},{id:2,title:"Responsibility",details:"Data insight, Excutive summary report, Dashboard, Hypothesis testing, Predict left employee"},{id:3,title:"Website",details:"https://github.com/sahathat/GoogleCertADA"}],objectivesHeading:"Objective",objectivesDetails:"Moral IT Helpdesk is web application who use to notify or request issue about hardware trouble shooting and media. When admin has requested from notification system, they fix issue and response to user and organization. So every user who get fix the data on dashboard that summarize for understand about issue and resolution about organization",technologies:[{title:"Tools & Technologies",techs:["Tableau","Jupyter lab","Tensorflow"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Found optimize result when predict class left employee with each model assumption and use feature engineering in detail."},{id:2,details:"In model use follow by Logistic regression, Decision tree, Random forest tree and Artificial neural network"},{id:3,details:"Used Tableau for describing and summarizing why employee saliforted left?"},{id:4,details:"Implement the insight data for storytelling and improving decision in organization"}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Instagram",icon:"instagram",url:"https://instagram.com/"},{id:2,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:3,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:4,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:se(le.A.filter((e=>3!==e.id))).slice(0,4)}},{id:4,singleProjectHeader:{singleProjectTitle:"OASIP (Online Appointment Scheduling System For Integrated Project Clinics)",singleProjectDate:"April, 2022 - December, 2022",singleProjectTag:"Frontend web development/ Backend web development"},projectImages:[{id:1,title:"Home Page",img:a(2939)},{id:2,title:"login Page",img:a(7629)},{id:3,title:"Reservation Page",img:a(5862)},{id:4,title:"Reservation Detail Page",img:a(9663)}],projectInfo:{clientHeading:"Project Info",companyInfos:[{id:1,title:"Company Name/University",details:"KMUTT"},{id:2,title:"Responsibility",details:"Backend development, Dev Ops with intregation"},{id:3,title:"Website",details:"https://github.com/sahathat/OASIP-AT-3"}],objectivesHeading:"Objective",objectivesDetails:"OASIP (Online Appointment Scheduling System For Integrated Project Clinics) is web application for reservation lecturer who need to consult the issue and solving the problem",technologies:[{title:"Tools & Technologies",techs:["Vue.js","BootStrap","Java (Spring Boot)","MySQL","Docker","Git","Nginx"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Validated time non-overlap"},{id:2,details:"Used spring security implement to authentication and authorization in each role such as student, lecturer and admin"}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Instagram",icon:"instagram",url:"https://instagram.com/"},{id:2,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:3,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:4,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:se(le.A.filter((e=>4!==e.id))).slice(0,4)}},{id:5,singleProjectHeader:{singleProjectTitle:"CSGO winner classification",singleProjectDate:"November, 2023 - December, 2023",singleProjectTag:"Machine Learning, Simple Report"},projectImages:[],projectInfo:{clientHeading:"Project Info",companyInfos:[{id:1,title:"Company Name/University",details:"Google Certificate program by KMUTT and AIS data team"},{id:2,title:"Responsibility",details:"Machine Learning"},{id:3,title:"Website",details:"https://github.com/sahathat/dataSci/blob/main/Bigdata/projects/Group9_Report-Group9.pdf"}],objectivesHeading:"Objective",objectivesDetails:"Predict wining team by using some features have the most important in each sample round for predict class team and evaluation scoring by compared accuracy and time with normal python and pyspark",technologies:[{title:"Tools & Technologies",techs:["Jupyter lab","PySpark"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Used python and pyspark to consistency."},{id:2,details:"Used Neural Network like Multi layer perceptron to predict wining class and evaluation metric"}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Instagram",icon:"instagram",url:"https://instagram.com/"},{id:2,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:3,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:4,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:se(le.A.filter((e=>5!==e.id))).slice(0,4)}}];var ce=de,ge=a(5220),me={name:"Projects",components:{ProjectHeader:j,ProjectGallery:S,ProjectInfo:J,ProjectRelatedProjects:oe},data:()=>{const e=(0,ge.lq)();return{id:e.params.id,data:ce}},mounted(){l().replace()},updated(){l().replace()},methods:{}};const pe=(0,k.A)(me,[["render",n]]);var ue=pe},7793:function(e,t,a){e.exports=a.p+"img/1-Leafy-1.5ddcd2df.png"},6682:function(e,t,a){e.exports=a.p+"img/1-Leafy-2.ff5f2010.png"},787:function(e,t,a){e.exports=a.p+"img/1-Leafy-3.7adf33cd.png"},4540:function(e,t,a){e.exports=a.p+"img/1-Leafy-4.c8151aab.png"},6805:function(e,t,a){e.exports=a.p+"img/1-Leafy-5.64426247.png"},4702:function(e,t,a){e.exports=a.p+"img/1-Leafy-6.92a340ad.png"},7191:function(e,t,a){e.exports=a.p+"img/1-Leafy-7.0bf004a2.png"},2448:function(e,t,a){e.exports=a.p+"img/1-Leafy-8.364692e0.png"},5598:function(e,t,a){e.exports=a.p+"img/2-ITHelpDesk-1.1081883b.png"},2325:function(e,t,a){e.exports=a.p+"img/2-ITHelpDesk-2.ac1eb4db.png"},700:function(e,t,a){e.exports=a.p+"img/2-ITHelpDesk-3.cca2e1c0.png"},99:function(e,t,a){e.exports=a.p+"img/2-ITHelpDesk-4.00a16c42.png"},7792:function(e,t,a){e.exports=a.p+"img/3-SalifortMotors-1.7d94766c.png"},6123:function(e,t,a){e.exports=a.p+"img/3-SalifortMotors-2.b00b4569.png"},7629:function(e,t,a){e.exports=a.p+"img/4-OASIP-1.755091ae.png"},5862:function(e,t,a){e.exports=a.p+"img/4-OASIP-2.b2d5adf9.png"},9663:function(e,t,a){e.exports=a.p+"img/4-OASIP-3.09e5a7ec.png"}}]);
//# sourceMappingURL=projects.4147381e.js.map