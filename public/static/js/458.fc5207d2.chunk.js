"use strict";(self.webpackChunkresults_system=self.webpackChunkresults_system||[]).push([[458],{35621:function(e,r,n){n.d(r,{vu:function(){return a},zk:function(){return d}});var t,s=n(74165),i=n(15861),l=n(74569),o=n.n(l);t="https://aamusted-results.herokuapp.com";o().create({baseURL:"".concat(t,"/assigned_course"),timeout:1e4,headers:{"Content-Type":"application/json"}});var d=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o()({baseURL:"".concat(t,"/assigned_course/").concat(r),method:"GET"});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),a=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o()({baseURL:"".concat(t,"/assigned_course/all/").concat(r),method:"GET"});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},40077:function(e,r,n){n.d(r,{v:function(){return t}});var t=function(e){switch(e){case"A":return 12;case"B+":return 10.5;case"B":return 9;case"C+":return 7.5;case"C":return 6;case"D+":return 4.5;case"D":return 3;case"E":return 1.5;case"F":return 0;default:return""}}},62458:function(e,r,n){n.r(r),n.d(r,{default:function(){return me}});var t,s=n(29439),i=n(72791),l=n(5849),o=n(61474),d=n(83449),a=n(47283),c=n(2249),u=n(64554),x=n(60220),h=n(53767),m=n(4567),j=n(90977),p=n(17133),f=n(4841),v=n(38820),Z=n(80184);t="https://aamusted-results.herokuapp.com";var g=function(e){var r=e.studentData,n={fontSize:"13px"};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(u.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},gap:5,paddingTop:5},children:[(0,Z.jsxs)(u.Z,{sx:{position:"relative"},children:[(0,Z.jsx)(x.Z,{src:""===(null===r||void 0===r?void 0:r.profile)||void 0===(null===r||void 0===r?void 0:r.profile)?null:"".concat(t,"/images/").concat(null===r||void 0===r?void 0:r.profile),alt:"profile",sx:{maxWidth:150,width:150,height:150}}),(0,Z.jsxs)(h.Z,{alignItems:"center",justifyContent:"center",paddingBottom:3,children:[(0,Z.jsx)(m.Z,{variant:"h6",children:null===r||void 0===r?void 0:r.fullname}),(0,Z.jsx)(m.Z,{children:null===r||void 0===r?void 0:r.indexNumber})]}),(0,Z.jsx)(j.Z,{sx:{position:"absolute",top:-5,right:-5,backgroundColor:"primary.main"},children:(0,Z.jsx)(p.Z,{htmlFor:"profile ",children:(0,Z.jsx)(v.Z,{sx:{color:"#fff"}})})}),(0,Z.jsx)("input",{type:"file",id:"profile",hidden:!0})]}),(0,Z.jsx)(f.Z,{sx:{padding:3,borderTop:"2px solid #8C1438"},children:(0,Z.jsxs)("table",{width:"100%",children:[(0,Z.jsx)("thead",{children:(0,Z.jsx)("tr",{children:(0,Z.jsx)("th",{colSpan:"2",style:{textAlign:"left",padding:"8px 0"},children:(0,Z.jsx)(m.Z,{variant:"body1",color:"primary",children:"Personal Info."})})})}),(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Index Number"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.indexNumber})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Full Name"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.fullname})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Date of Birth"}),(0,Z.jsx)("td",{style:n,children:new Date(null===r||void 0===r?void 0:r.dob).toLocaleDateString()})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Gender"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.gender})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Email Address"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.email})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Telephone Number"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.telephoneNo})]})]}),(0,Z.jsx)("thead",{children:(0,Z.jsx)("tr",{children:(0,Z.jsx)("th",{colSpan:"2",style:{textAlign:"left",padding:"16px 0"},children:(0,Z.jsx)(m.Z,{variant:"body1",color:"primary",children:"Additional Info"})})})}),(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Department"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.department})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Programme"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.programme})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:n,children:"Current Level"}),(0,Z.jsx)("td",{style:n,children:null===r||void 0===r?void 0:r.level})]})]})]})})]})})},y=n(13967),b=n(94721),C=n(74223),S=(0,C.Z)((0,Z.jsx)("path",{d:"M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"DescriptionSharp"),I=n(16871),w=n(40077),P=n(763),k=n.n(P);function z(e){var r=e.studentResult,n=(e.studentId,(0,y.Z)().palette),t=(0,I.s0)(),s=[],o=[];var d=null===r||void 0===r?void 0:r.map((function(e,r){return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)("div",{children:(0,Z.jsxs)(u.Z,{sx:{backgroundColor:n.primary.main,color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},children:[(0,Z.jsxs)("p",{style:{fontSize:"12px"},children:[e.year," ACADEMIC YEAR"]}),(0,Z.jsxs)("p",{style:{fontSize:"12px"},children:["LEVEL ",e.level]}),(0,Z.jsxs)("p",{style:{fontSize:"12px"},children:[e.semester," SEMESTER"]})]})}),(0,Z.jsxs)("table",{cellPadding:"10px",children:[(0,Z.jsx)("thead",{style:{backgroundColor:n.secondary.main,color:"#fff",textAlign:"left"},children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:"Code"}),(0,Z.jsx)("th",{children:"Course"}),(0,Z.jsx)("th",{children:"Credit Hours"}),(0,Z.jsx)("th",{children:"Score"}),(0,Z.jsx)("th",{children:"Grade"}),(0,Z.jsx)("th",{children:"Grade Point"})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"whitesmoke"},children:e.results.map((function(e,r){var n=(0,w.v)(e.grade);return s.push(Number(e.creditHours)),o.push(Number(n)),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:e.course.id}),(0,Z.jsx)("td",{children:e.course.label}),(0,Z.jsx)("td",{children:e.creditHours}),(0,Z.jsx)("td",{children:e.score}),(0,Z.jsx)("td",{children:e.grade}),(0,Z.jsx)("td",{children:(0,w.v)(e.grade)})]},e.course.id)}))}),(0,Z.jsx)("tfoot",{style:{paddingBottom:"200px"},children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsx)("td",{}),(0,Z.jsxs)("td",{style:{backgroundColor:"#8C1438",color:"#fff"},children:["GPA-",(k().sum(o)/k().sum(s)).toFixed(2)]})]})})]})]},r)}));return(0,Z.jsxs)(u.Z,{children:[(0,Z.jsxs)(h.Z,{paddingBottom:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,Z.jsx)(m.Z,{paddingBottom:1,children:"Academic Records"}),(0,Z.jsx)(l.Z,{variant:"contained",color:"secondary",disabled:0===r.length,onClick:function(){t("/info/preview",{replace:!0})},children:"Preview"})]}),(0,Z.jsx)(b.Z,{}),(0,Z.jsx)(h.Z,{paddingY:5,rowGap:1,children:0===r.length?(0,Z.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingY:8,gap:2},children:[(0,Z.jsx)(S,{sx:{width:72,height:72}}),(0,Z.jsx)(m.Z,{variant:"h4",children:"No Records Available"})]}):d})]})}var E=i.memo(z),R=n(91933),B=n(43504),D=(0,C.Z)((0,Z.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonSharp"),A=(0,C.Z)((0,Z.jsx)("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"}),"Report"),H=(0,C.Z)((0,Z.jsx)("path",{d:"m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z"}),"NoteSharp"),T=n(28713),L=n(61820),N=n(90110),M=n(76385),Y=n(99873),q=[{id:1,indexNumber:"501253066",year:2021,programme:"Management",level:200,semester:1,courses:[{course:{id:"CIT214",label:"Biology"},creditHours:3},{course:{id:"CIT234",label:"Biology"},creditHours:3}]},{id:2,indexNumber:"501253066",year:2021,programme:"Management",level:200,semester:2,courses:[{course:{id:"CIT456",label:"Zoo"},creditHours:3},{course:{id:"CIT111",label:"Latin"},creditHours:3}]}];var V=function(){var e,r=(0,y.Z)().palette,n=(0,i.useContext)(Y.D).customState,t=null===n||void 0===n||null===(e=n.studentCourse)||void 0===e?void 0:e.map((function(e,n){return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)("div",{children:(0,Z.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},children:[(0,Z.jsxs)("p",{children:["LEVEL ",e.level]}),(0,Z.jsxs)("p",{children:[e.semester," SEMESTER"]})]})}),(0,Z.jsxs)("table",{cellPadding:"10px",children:[(0,Z.jsx)("thead",{style:{backgroundColor:r.secondary.main,color:"#fff",textAlign:"left"},children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:"Code"}),(0,Z.jsx)("th",{children:"Course"}),(0,Z.jsx)("th",{children:"Credit Hours"})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"whitesmoke"},children:e.courses.map((function(e,r){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{width:"20%",children:e.id}),(0,Z.jsxs)("td",{width:"50%",children:[" ",e.label]}),(0,Z.jsx)("td",{width:"15%",children:e.creditHours})]},r)}))}),(0,Z.jsx)("tfoot",{style:{paddingBottom:"200px"},children:(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{children:"End"})})})]})]},e._id)}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(u.Z,{sx:{margin:"auto",marginTop:2},children:(0,Z.jsx)(h.Z,{paddingY:3,rowGap:1,children:0===q.length?(0,Z.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingY:8,gap:2},children:[(0,Z.jsx)(S,{sx:{width:72,height:72}}),(0,Z.jsx)(m.Z,{variant:"h4",children:"No Registered Courses"})]}):t})})})},_=n(1413),F=n(93433),G=n(12258),W=n(5574),Q=n(65661),U=n(4899),O=n(63515),J=n(81153),X=n(46314),K=n(93006),$=n(77386),ee=n(4799),re=n.n(ee),ne=n(92506),te=n(85771),se=function(e){var r=e.course,n=e.handleRemove,t=e.hrs;return(0,Z.jsx)(te.Z,{color:"primary",avatar:(0,Z.jsx)(x.Z,{children:t}),sx:{color:"#fff"},label:r.label,onDelete:function(){return n(r.id)}})},ie=i.memo(se),le=n(99544),oe=n(81724),de=n(85175),ae=n(35621);var ce=function(e){var r,n,t=e.open,o=e.setOpen,d=(0,R.useQueryClient)(),a=(0,i.useContext)(Y.D).customState,c=(0,y.Z)().palette,u=(0,i.useState)(["2021","2022"]),x=(0,s.Z)(u,1)[0],p=(0,i.useState)([null===a||void 0===a||null===(r=a.studentInfo)||void 0===r?void 0:r.programme]),f=(0,s.Z)(p,1)[0],v=(0,i.useState)(["100","200","300","400"]),g=(0,s.Z)(v,1)[0],C=(0,i.useState)(["1","2"]),S=(0,s.Z)(C,1)[0],I=(0,i.useState)([]),w=(0,s.Z)(I,2),P=w[0],z=w[1],E=(0,i.useState)(null),B=(0,s.Z)(E,2),D=B[0],A=B[1],H=(0,i.useState)(null),T=(0,s.Z)(H,2),L=T[0],N=T[1],M=(0,i.useState)(null),q=(0,s.Z)(M,2),V=q[0],ee=q[1],te=(0,i.useState)(null),se=(0,s.Z)(te,2),ce=se[0],ue=se[1],xe=(0,i.useState)(null),he=(0,s.Z)(xe,2),me=he[0],je=he[1],pe=(0,i.useState)(0),fe=(0,s.Z)(pe,2),ve=fe[0],Ze=fe[1],ge=(0,i.useState)([]),ye=(0,s.Z)(ge,2),be=ye[0],Ce=ye[1],Se=(0,i.useState)({severity:"",msg:""}),Ie=(0,s.Z)(Se,2),we=Ie[0],Pe=Ie[1],ke=(0,i.useState)(""),ze=(0,s.Z)(ke,2),Ee=ze[0],Re=ze[1];(0,R.useQuery)(["allCoursesByProgramme",V],(function(){return(0,ae.vu)(V)}),{enabled:!!V,onSuccess:function(e){var r=e.map((function(e){return{id:e.course.id,label:e.course.label,professionalID:e.professionalID}}));Re(""),z(r)},onError:function(e){Re(e)}});var Be={indexNumber:null===a||void 0===a||null===(n=a.studentInfo)||void 0===n?void 0:n.indexNumber,academicYear:D,programme:V,level:ce,semester:L,courses:be},De=(0,oe.Ry)().shape({academicYear:(0,oe.Z_)().required().nullable(!0),semester:(0,oe.Z_)().required().nullable(!0),programme:(0,oe.Z_)().required().nullable(!0),level:(0,oe.Z_)().required().nullable(!0),courses:(0,oe.IX)().required().min(1,"Courses cannot be empty")}),Ae=(0,R.useMutation)(de.rY),He=(0,i.useCallback)((function(){Pe({severity:"",msg:""}),be.find((function(e){return e.course.id===me.id}))?Pe({severity:"error",msg:"Course already exists"}):(Pe({severity:"",msg:""}),Ce([].concat((0,F.Z)(be),[{course:me,creditHours:ve}])))}),[be,me,ve]),Te=function(e){var r=be.filter((function(r){return r.course.id!==e}));Ce(r)},Le=function(){o(!1),Pe({severity:"",msg:""})};return(0,Z.jsxs)(W.Z,{open:t,onClose:Le,fullWidth:!0,maxWidth:"sm",children:[(0,Z.jsxs)(Q.Z,{display:"flex",justifyContent:"space-between",children:[(0,Z.jsx)(m.Z,{children:"Student Course Registration"}),(0,Z.jsx)(j.Z,{onClick:Le,children:(0,Z.jsx)(le.Z,{})})]}),(0,Z.jsx)(ne.J9,{initialValues:Be,onSubmit:function(e,r){Pe({severity:"",msg:""}),k().isEmpty(e)?Pe({severity:"info",msg:"Please select a course to register!!!"}):(r.setSubmitting(!0),Ae.mutateAsync(e,{onSettled:function(){d.invalidateQueries(["studentCourse"]),r.setSubmitting(!1)},onSuccess:function(e){re().fire({icon:"success",iconColor:c.primary.main,title:"Success",text:"Course registration successful !!!",confirmButtonColor:c.primary.main}),Pe({severity:"success",msg:"Course registration successful !!!"})},onError:function(e){re().fire({icon:"error",iconColor:c.primary.main,title:"Error",text:"Error registering courses.Please try again",confirmButtonColor:c.primary.main})}}))},enableReinitialize:!0,validationSchema:De,children:function(e){e.values;var r=e.errors,n=e.touched,t=e.handleSubmit,s=(e.handleChange,e.isSubmitting);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(U.Z,{children:[we.msg&&(0,Z.jsx)(O.Z,{severity:we.severity,onClose:function(){return Pe({severity:"",msg:""})},children:we.msg}),(0,Z.jsx)(m.Z,{children:"1.Academic Information"}),(0,Z.jsx)(b.Z,{}),(0,Z.jsxs)(J.ZP,{container:!0,spacing:3,paddingY:4,children:[(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:x,value:D,onChange:function(e,r){return A(r)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Academic Year",fullWidth:!0,size:"small",error:Boolean(n.academicYear&&r.academicYear),helperText:r.academicYear}))}})}),(0,Z.jsxs)(J.ZP,{item:!0,xs:12,md:6,children:[(0,Z.jsx)(X.Z,{disablePortal:!0,options:f,value:V,onChange:function(e,r){return ee(r)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Programme",fullWidth:!0,size:"small",error:Boolean(n.programme&&r.programme),helperText:r.programme}))}}),(0,Z.jsx)("small",{style:{color:"red"},children:Ee})]}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:g,value:ce,onChange:function(e,r){return ue(r)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Level",fullWidth:!0,size:"small",error:Boolean(n.level&&r.level),helperText:r.level}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:S,value:L,onChange:function(e,r){return N(r)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Semester",fullWidth:!0,size:"small",error:Boolean(n.semester&&r.semester),helperText:r.semester}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(X.Z,{disablePortal:!0,options:P,value:me,isOptionEqualToValue:function(e,r){return e.label===r.label},onChange:function(e,r){return je(r)},renderInput:function(e){return(0,Z.jsx)(K.Z,(0,_.Z)((0,_.Z)({required:!0},e),{},{label:"Course",fullWidth:!0,size:"small",error:Boolean(n.courses&&r.courses),helperText:r.courses}))}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(K.Z,{required:!0,label:"Credit Hours",fullWidth:!0,size:"small",type:"number",value:ve,onChange:function(e){return Ze(e.currentTarget.value)}})}),(0,Z.jsx)(J.ZP,{item:!0,xs:12,md:6,children:(0,Z.jsx)(l.Z,{variant:"contained",disabled:null===me||Boolean(null===ve||0===ve),onClick:He,children:"Add Course"})})]}),(0,Z.jsx)(m.Z,{children:"2.Selected Courses"}),(0,Z.jsx)(b.Z,{}),(0,Z.jsx)(h.Z,{direction:"row",spacing:2,paddingY:2,children:be.map((function(e,r){return(0,Z.jsx)(ie,{course:e.course,hrs:e.creditHours,handleRemove:Te},r)}))})]}),(0,Z.jsxs)($.Z,{children:[(0,Z.jsx)(G.Z,{loading:s,variant:"contained",onClick:t,children:"Register Courses"}),(0,Z.jsx)(l.Z,{color:"secondary",onClick:function(){return o(!1)},children:"Cancel"})]})]})}})]})};var ue=function(){var e=(0,i.useState)(!1),r=(0,s.Z)(e,2),n=r[0],t=r[1];return(0,i.useContext)(Y.D).customState,(0,Z.jsxs)("section",{children:[(0,Z.jsx)(h.Z,{paddingBottom:1,direction:"row",justifyContent:"space-between",alignItems:"center",children:(0,Z.jsx)(m.Z,{children:"Registered Courses"})}),(0,Z.jsx)(b.Z,{}),(0,Z.jsx)(V,{}),(0,Z.jsx)(ce,{open:n,setOpen:t})]})},xe=n(6907);function he(){var e=(0,i.useContext)(Y.D),r=e.customState,n=e.customDispatch,t=(0,i.useState)("1"),u=(0,s.Z)(t,2),x=u[0],h=u[1],m=(0,i.useState)(null===r||void 0===r?void 0:r.currentStudentIndexNumber),j=(0,s.Z)(m,2),p=j[0],f=j[1];(0,i.useEffect)((function(){var e=localStorage.getItem("indexNumber");null!==e&&f(e)}),[]);var v=(0,R.useQuery)(["studentInfo",p],(function(){return(0,N.u6)(p)}),{enabled:!!p,onSuccess:function(e){n({type:"studentInfo",payload:e})}}),y=(0,R.useQuery)(["studentRecord",p],(function(){return(0,M.Sg)(p)}),{enabled:!!p,onSuccess:function(e){n({type:"studentRecord",payload:e})}});return(0,R.useQuery)(["studentCourse",p],(function(){return(0,de.BR)(p)}),{enabled:!!p,onSuccess:function(e){n({type:"studentCourse",payload:e})}}),(0,Z.jsxs)("section",{className:"-container",children:[(0,Z.jsx)(xe.ql,{children:(0,Z.jsx)("title",{children:"AAMUSTED Results System | Student Info"})}),(0,Z.jsxs)(L.Z,{children:["student"!==r.user.role&&(0,Z.jsx)(B.rU,{to:"/info/student",children:(0,Z.jsx)(l.Z,{variant:"contained",color:"secondary",startIcon:(0,Z.jsx)(T.Z,{}),children:"Go Back"})}),(0,Z.jsxs)(d.ZP,{value:x,children:[(0,Z.jsxs)(a.Z,{onChange:function(e,r){return h(r)},"aria-label":"Student Information",centered:!0,children:[(0,Z.jsx)(o.Z,{value:"1",label:"Personal Information",icon:(0,Z.jsx)(D,{}),iconPosition:"start"}),(0,Z.jsx)(o.Z,{value:"2",label:"Course Registration",icon:(0,Z.jsx)(A,{}),iconPosition:"start"}),(0,Z.jsx)(o.Z,{value:"3",label:"Academic Records",icon:(0,Z.jsx)(H,{}),iconPosition:"start"})]}),(0,Z.jsx)(c.Z,{value:"1",children:(0,Z.jsx)(g,{studentData:v.data})}),(0,Z.jsx)(c.Z,{value:"2",children:(0,Z.jsx)(ue,{})}),(0,Z.jsx)(c.Z,{value:"3",children:(0,Z.jsx)(E,{studentResult:y.data?y.data:[]})})]})]})]})}var me=i.memo(he)},28713:function(e,r,n){var t=n(74223),s=n(80184);r.Z=(0,t.Z)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackSharp")},38820:function(e,r,n){var t=n(74223),s=n(80184);r.Z=(0,t.Z)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);
//# sourceMappingURL=458.fc5207d2.chunk.js.map