"use strict";(self.webpackChunkresults_system=self.webpackChunkresults_system||[]).push([[56],{35621:function(e,t,n){n.d(t,{eH:function(){return c},vu:function(){return l},zk:function(){return s}});var r=n(74165),a=n(15861),o=n(74569),i=n.n(o),u="http://localhost:8000",s=(i().create({baseURL:"".concat(u,"/assigned_course"),timeout:1e4,headers:{"Content-Type":"application/json"}}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(u,"/assigned_course/").concat(t),method:"GET"});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(u,"/assigned_course/all/").concat(t),method:"GET"});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(u,"/assigned_course"),method:"POST",data:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},19895:function(e,t,n){n.d(t,{A:function(){return m},Hf:function(){return p},V3:function(){return l},bq:function(){return d},jN:function(){return c}});var r=n(74165),a=n(15861),o=n(74569),i=n.n(o),u="http://localhost:8000",s=i().create({baseURL:"".concat(u,"/course"),timeout:1e4,headers:{"Content-Type":"application/json"}}),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get();case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(u,"/course"),method:"GET",params:{programme:t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(u,"/course"),method:"POST",data:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(u,"/course"),method:"PUT",data:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"string"!==typeof t){e.next=6;break}return e.next=4,i()({baseURL:"".concat(u,"/course"),method:"DELETE",params:{id:t}});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:if("object"!==typeof t){e.next=10;break}return o=[],t.map(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({baseURL:"".concat(u,"/course"),method:"DELETE",params:{id:t}});case 2:n=e.sent,o.push(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",o);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},19873:function(e,t,n){n.d(t,{$B:function(){return m},ek:function(){return p},jl:function(){return c},r0:function(){return d}});var r=n(74165),a=n(15861),o=n(74569),i=n.n(o),u=n(92810),s="http://localhost:8000",l=i().create({baseURL:"".concat(s,"/lecturer"),timeout:1e4,headers:{"Content-Type":"application/json"}}),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.get();case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("profile",t.profile),n.append("professionalID",t.professionalID),n.append("fullname",t.fullname),n.append("gender",t.gender),n.append("dob",t.dob),n.append("email",t.email),n.append("address",t.address),n.append("telephoneNo",t.telephoneNo),n.append("department",t.department),e.prev=10,e.next=13,i()({baseURL:"".concat(s,"/lecturer"),method:"POST",data:n,headers:{"Content-Type":"multipart/form-data"},params:{_up:(0,u.Z)()}});case 13:return a=e.sent,e.abrupt("return",a.data);case 17:throw e.prev=17,e.t0=e.catch(10),console.log(e.t0.response.data),e.t0.response.data;case 21:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({baseURL:"".concat(s,"/lecturer"),method:"PUT",data:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"string"!==typeof t){e.next=6;break}return e.next=4,i()({baseURL:"".concat(s,"/lecturer"),method:"DELETE",params:{id:t}});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:if("object"!==typeof t){e.next=10;break}return o=[],t.map(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()({baseURL:"".concat(s,"/lecturer"),method:"DELETE",params:{id:t}});case 2:n=e.sent,o.push(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",o);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.log(e.t0.response.data),e.t0.response.data;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},60502:function(e,t,n){n.d(t,{Sf:function(){return i},dc:function(){return l},lU:function(){return s},pu:function(){return u},xS:function(){return c}});var r=n(60220),a=n(85771),o=n(80184),i=[{title:"ID",field:"_id",hidden:!0},{title:"Username",field:"username"},{title:"Role",field:"role"},{title:"Account",field:"active",render:function(e){return(0,o.jsx)(a.Z,{size:"small",label:e.active?"Active":"Disabled",color:e.active?"success":"error"})}}],u=[{title:"ID",field:"_id",hidden:!0},{title:"Department",field:"department",width:"95%"}],s=[{title:"ID",field:"_id"},{title:"Programme",field:"programme"},{title:"Department",field:"department"}],l=[{title:"ID",field:"_id",hidden:!0},{title:"Course Code",field:"code"},{title:"Course",field:"course"},{title:"Programme",field:"programme"},{title:"Department",field:"department",hidden:!0}],c=[{title:"ID",field:"id",hidden:!0},{title:"Professional ID",field:"professionalID"},{title:"Profile",field:"profileImg",render:function(e){return(0,o.jsx)(r.Z,{src:""===e.profile||void 0===e.profile||null===e.profile?null:"".concat("http://localhost:8000","/images/").concat(e.profile)})}},{title:"Fullname",field:"fullname"},{title:"Gender",field:"gender"},{title:"DOB",field:"dob",hidden:!0},{title:"Email",field:"email",width:"100px"},{title:"Telephone No.",field:"telephoneNo",hidden:!0},{title:"Department",field:"department",hidden:!0}]},45289:function(e,t,n){n.d(t,{Z:function(){return pe}});var r=n(74165),a=n(15861),o=n(93433),i=n(1413),u=n(29439),s=n(72791),l=n(15617),c=n.n(l),d=n(44059),p=n(13967),m=n(64554),f=n(53767),h=n(74223),v=n(80184),x=(0,h.Z)((0,v.jsx)("path",{d:"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"DisabledByDefaultSharp"),Z=n(81639),g=n(38820),b=n(4208),j=n(89712),S=n(4799),C=n.n(S),D=n(5574),E=n(65661),y=n(4899),w=n(93006),k=n(77386),z=n(5849),T=n(763),P=n.n(T),L=n(12258),A=n(92506),I=n(81724),R=n(64130),q=n(91933),_=n(98274),B=n(99873);var M=function(e){var t=e.open,n=e.setOpen,r=(0,s.useContext)(B.D).customState,a=(0,s.useState)(""),o=(0,u.Z)(a,2),i=o[0],l=o[1],c=(0,s.useState)(""),d=(0,u.Z)(c,2),p=d[0],m=d[1];(0,s.useEffect)((function(){var e,t;P().isEmpty(r.departmentEditData)||(l(null===r||void 0===r||null===(e=r.departmentEditData)||void 0===e?void 0:e._id),m(null===r||void 0===r||null===(t=r.departmentEditData)||void 0===t?void 0:t.department))}),[r.departmentEditData]);var h=I.Ry().shape({department:I.Z_().trim().required()}),x=(0,q.useMutation)(_.j4);return(0,v.jsxs)(D.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:function(){return n(!1)},children:[(0,v.jsxs)(E.Z,{title:"Add Department",children:[(0,v.jsx)(R.Z,{}),"Edit Department"]}),(0,v.jsx)(A.J9,{initialValues:{id:i,department:p},validationSchema:h,onSubmit:function(e,t){t.setSubmitting(!0),x.mutateAsync(e,{onSuccess:function(e){alert("Data updated"),console.log(e)},onError:function(e,t,n){console.log(t)},onSettled:function(){t.setSubmitting(!1)}})},enableReinitialize:!0,children:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.Z,{children:(0,v.jsx)(f.Z,{paddingTop:2,children:(0,v.jsx)(w.Z,{variant:"filled",label:"Department",size:"sm",fullWidth:!0,value:void 0===e.values.department?"":e.values.department,onChange:function(e){return m(e.currentTarget.value)},onBlur:e.handleBlur("department"),error:e.touched.department&&e.errors.department,helperText:e.errors.department})})}),(0,v.jsxs)(k.Z,{children:[(0,v.jsx)(L.Z,{variant:"contained",loading:e.isSubmitting,onClick:e.handleSubmit,children:"Save Changes"}),(0,v.jsx)(z.Z,{variant:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})}})]})},W=n(90038),N=n(10477),O=n(19895),H=n(46314);var U=function(e){var t=e.open,n=e.setOpen,r=(0,s.useContext)(B.D).customState,a=(0,s.useState)([]),o=(0,u.Z)(a,2),l=o[0],c=o[1],d=(0,s.useState)(""),p=(0,u.Z)(d,2),m=p[0],h=p[1],x=(0,s.useState)(null),Z=(0,u.Z)(x,2),g=Z[0],b=Z[1],j=(0,s.useState)(""),S=(0,u.Z)(j,2),C=S[0],T=S[1];(0,s.useEffect)((function(){var e=[];r.departmentOptions.forEach((function(t,n){e.push(t.department)})),c(e)}),[r.departmentOptions]),(0,s.useEffect)((function(){var e,t,n;P().isEmpty(r.programmeEditData)||(h(null===r||void 0===r||null===(e=r.programmeEditData)||void 0===e?void 0:e._id),T(null===r||void 0===r||null===(t=r.programmeEditData)||void 0===t?void 0:t.programme),b(null===r||void 0===r||null===(n=r.programmeEditData)||void 0===n?void 0:n.department))}),[r.programmeEditData]);var R=I.Ry().shape({department:I.Z_().trim().required().nullable(!0),programme:I.Z_().trim().required()}),_=(0,q.useMutation)(N.J6);return(0,v.jsxs)(D.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:function(){return n(!1)},children:[(0,v.jsx)(E.Z,{title:"Add Department",children:"Edit Programme"}),(0,v.jsx)(A.J9,{initialValues:{id:m,programme:C,department:g},validationSchema:R,onSubmit:function(e,t){t.setSubmitting(!0),_.mutateAsync(e,{onSuccess:function(e){alert("Changes Saved")},onError:function(e,t,n){console.log(t)},onSettled:function(){t.setSubmitting(!1)}})},enableReinitialize:!0,children:function(e){var t=e.isSubmitting,r=e.values,a=e.errors,o=e.touched,u=(e.handleChange,e.handleSubmit);e.handleBlur;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.Z,{children:(0,v.jsxs)(f.Z,{paddingTop:2,rowGap:3,children:[(0,v.jsx)(H.Z,{id:"department",disablePortal:!0,size:"small",options:l,value:g,onChange:function(e,t){return b(t)},renderInput:function(e){return(0,v.jsx)(w.Z,(0,i.Z)((0,i.Z)({variant:"filled",label:"Select Department",size:"small",placeholder:"Select Department",fullWidth:!0},e),{},{error:Boolean(o.department&&a.department),helperText:a.department}))}}),(0,v.jsx)(w.Z,{variant:"filled",label:"Programme",size:"small",fullWidth:!0,id:"programe",placeholder:"Enter Programme here",value:void 0===r.programme?"":r.programme,onChange:function(e,t){return T(e.currentTarget.value)},error:Boolean(o.programme&&a.programme),helperText:a.programme})]})}),(0,v.jsxs)(k.Z,{children:[(0,v.jsx)(L.Z,{loading:t,onClick:u,variant:"contained",children:"Save Changes"}),(0,v.jsx)(z.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})}})]})},F=n(41992);var V=function(e){var t=e.open,n=e.setOpen,r=(0,s.useContext)(B.D).customState,a=(0,s.useState)([]),o=(0,u.Z)(a,2),l=o[0],c=o[1],d=(0,s.useState)(""),p=(0,u.Z)(d,2),m=p[0],h=p[1],x=(0,s.useState)(null),Z=(0,u.Z)(x,2),g=Z[0],b=Z[1],j=(0,s.useState)(""),S=(0,u.Z)(j,2),C=S[0],T=S[1],R=(0,s.useState)(""),_=(0,u.Z)(R,2),M=_[0],W=_[1];(0,s.useEffect)((function(){var e=[];r.programmeOptions.forEach((function(t,n){e.push(t.programme)})),c(e)}),[r.programmeOptions]),(0,s.useEffect)((function(){var e,t,n,a;P().isEmpty(r.courseEditData)||(h(null===r||void 0===r||null===(e=r.courseEditData)||void 0===e?void 0:e._id),b(null===r||void 0===r||null===(t=r.courseEditData)||void 0===t?void 0:t.programme),T(null===r||void 0===r||null===(n=r.courseEditData)||void 0===n?void 0:n.code),W(null===r||void 0===r||null===(a=r.courseEditData)||void 0===a?void 0:a.course))}),[r.courseEditData]);var N=I.Ry().shape({programme:I.Z_().trim().required().nullable(!0),code:I.Z_().trim().required(),course:I.Z_().trim().required()}),U=(0,q.useMutation)(O.Hf);return(0,v.jsxs)(D.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:function(){return n(!1)},children:[(0,v.jsxs)(E.Z,{title:"Add New Course",children:[(0,v.jsx)(F.Z,{}),"Add New Course"]}),(0,v.jsx)(A.J9,{initialValues:{id:m,programme:g,code:C,course:M},validationSchema:N,onSubmit:function(e,t){t.setSubmitting(!0),U.mutateAsync(e,{onSuccess:function(e){alert("Data Saved")},onError:function(e,t,n){console.log(t)},onSettled:function(){t.setSubmitting(!1)}})},enableReinitialize:!0,children:function(e){var t=e.isSubmitting,r=e.values,a=e.errors,o=e.touched,u=e.handleSubmit;e.handleBlur;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.Z,{children:(0,v.jsxs)(f.Z,{paddingTop:2,rowGap:2,children:[(0,v.jsx)(H.Z,{id:"programme",disablePortal:!0,size:"small",options:l,value:g,onChange:function(e,t){return b(t)},renderInput:function(e){return(0,v.jsx)(w.Z,(0,i.Z)((0,i.Z)({variant:"filled",label:"Select Programme",size:"small",placeholder:"Select Programme",fullWidth:!0},e),{},{error:Boolean(o.programme&&a.programme),helperText:a.programme}))}}),(0,v.jsx)(w.Z,{variant:"filled",label:"Code Course",id:"code",size:"small",placeholder:"Enter Course Code here",fullWidth:!0,value:r.code,onChange:function(e,t){return T(e.currentTarget.value)},error:Boolean(o.code&&a.code),helperText:a.code}),(0,v.jsx)(w.Z,{variant:"filled",label:"Course",id:"course",size:"small",placeholder:"Enter Course here",fullWidth:!0,value:r.course,onChange:function(e,t){return W(e.currentTarget.value)},error:Boolean(o.course&&a.course),helperText:a.course})]})}),(0,v.jsxs)(k.Z,{children:[(0,v.jsx)(L.Z,{variant:"contained",loading:t,onClick:u,children:"Save"}),(0,v.jsx)(z.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})}})]})},Q=n(73767),G=n(27321),J=n(19873),Y=n(35621);var $=function(e){var t=e.open,n=e.setOpen,r=(0,p.Z)().palette,a=(0,q.useQueryClient)(),o=(0,s.useContext)(B.D).customState,l=(0,s.useState)([]),c=(0,u.Z)(l,2),d=c[0],m=c[1],h=(0,s.useState)([]),x=(0,u.Z)(h,2),Z=x[0],g=x[1],b=(0,s.useState)(null===o||void 0===o?void 0:o.lecturerID),j=(0,u.Z)(b,2),S=j[0],T=j[1],P=(0,s.useState)(null),R=(0,u.Z)(P,2),_=R[0],M=R[1],W=(0,s.useState)(null),U=(0,u.Z)(W,2),V=U[0],Q=U[1];(0,q.useQuery)(["programme"],N.Sc,{onSuccess:function(e){var t=e.map((function(e){return e.programme}));m(t)}}),(0,q.useQuery)(["selected-courses",_],(function(){return(0,O.jN)(_)}),{enabled:!!_,onSuccess:function(e){console.log(e),Q(null);var t=e.map((function(e){return{id:e.code,label:e.course}}));g(t)}}),(0,s.useEffect)((function(){T(null===o||void 0===o?void 0:o.lecturerID)}),[o.lecturerID]);var G={professionalID:S,programme:_,course:V},J=I.Ry().shape({programme:I.Z_().trim().required().nullable(!0),course:I.Ry().required().nullable(!0)}),$=(0,q.useMutation)(Y.eH);return(0,v.jsxs)(D.Z,{fullWidth:!0,maxWidth:"sm",open:t,onClose:function(){return n(!1)},children:[(0,v.jsxs)(E.Z,{title:"Add New Course",children:[(0,v.jsx)(F.Z,{}),"Assign Course"]}),(0,v.jsx)(A.J9,{initialValues:G,validationSchema:J,onSubmit:function(e,t){t.setSubmitting(!0),$.mutateAsync(e,{onSuccess:function(e){C().fire({icon:"success",iconColor:r.primary.main,title:"Success",text:"New Course assiged!!!",confirmButtonColor:r.primary.main}),a.invalidateQueries(["assigned-course"])},onError:function(e,t,n){console.log(t)},onSettled:function(){t.setSubmitting(!1)}})},enableReinitialize:!0,children:function(e){var t=e.isSubmitting,r=(e.values,e.errors),a=e.touched,o=e.handleSubmit;e.handleBlur;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.Z,{children:(0,v.jsxs)(f.Z,{paddingTop:2,rowGap:2,children:[(0,v.jsx)(H.Z,{id:"programme",size:"small",isOptionEqualToValue:function(e,t){return e.id===t.id},options:d,value:_,onChange:function(e,t){return M(t)},renderInput:function(e){return(0,v.jsx)(w.Z,(0,i.Z)((0,i.Z)({variant:"filled",label:"Select Programme",size:"small",placeholder:"Select Programme",fullWidth:!0},e),{},{error:Boolean(a.programme&&r.programme),helperText:r.programme}))}}),(0,v.jsx)(H.Z,{id:"course",size:"small",options:Z,isOptionEqualToValue:function(e,t){return e.id===t.id},value:V,onChange:function(e,t){return Q(t)},renderInput:function(e){return(0,v.jsx)(w.Z,(0,i.Z)((0,i.Z)({variant:"filled",label:"Select Course",size:"small",placeholder:"Select Course",fullWidth:!0},e),{},{error:Boolean(a.course&&r.course),helperText:r.course}))}})]})}),(0,v.jsxs)(k.Z,{children:[(0,v.jsx)(L.Z,{variant:"contained",loading:t,onClick:o,children:"Save"}),(0,v.jsx)(z.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})}})]})},K=n(60220),X=n(4567),ee=n(94721),te=n(81153),ne=n(65639),re=n(88970),ae=n(25801),oe=n(45363),ie=n(17133),ue=n(92810),se=n(43992),le=n(41286);var ce=function(e){var t=e.open,n=e.setOpen,r=(0,p.Z)().palette,a=(0,q.useQueryClient)(),o=(0,s.useContext)(B.D).customState,l=(0,s.useState)(""),c=(0,u.Z)(l,2),d=c[0],f=c[1],h=(0,s.useState)(null),x=(0,u.Z)(h,2),Z=x[0],g=x[1],b=(0,s.useState)(""),j=(0,u.Z)(b,2),S=j[0],T=j[1],R=(0,s.useState)("Male"),M=(0,u.Z)(R,2),W=M[0],N=M[1],O=(0,s.useState)(""),U=(0,u.Z)(O,2),F=U[0],V=U[1],Q=(0,s.useState)(""),G=(0,u.Z)(Q,2),Y=G[0],$=G[1],ce=(0,s.useState)(""),de=(0,u.Z)(ce,2),pe=de[0],me=de[1],fe=(0,s.useState)(""),he=(0,u.Z)(fe,2),ve=he[0],xe=he[1],Ze=(0,s.useState)(null),ge=(0,u.Z)(Ze,2),be=ge[0],je=ge[1],Se=(0,s.useState)([]),Ce=(0,u.Z)(Se,2),De=Ce[0],Ee=Ce[1];(0,s.useEffect)((function(){var e,t,n,r,a,i,u,s,l;P().isEmpty(o.lecturerEditData)||(f(null===o||void 0===o||null===(e=o.lecturerEditData)||void 0===e?void 0:e._id),g(null===o||void 0===o||null===(t=o.lecturerEditData)||void 0===t?void 0:t.profile),T(null===o||void 0===o||null===(n=o.lecturerEditData)||void 0===n?void 0:n.fullname),N(null===o||void 0===o||null===(r=o.lecturerEditData)||void 0===r?void 0:r.gender),V(null===o||void 0===o||null===(a=o.lecturerEditData)||void 0===a?void 0:a.dob),$(null===o||void 0===o||null===(i=o.lecturerEditData)||void 0===i?void 0:i.email),me(null===o||void 0===o||null===(u=o.lecturerEditData)||void 0===u?void 0:u.address),xe(null===o||void 0===o||null===(s=o.lecturerEditData)||void 0===s?void 0:s.telephoneNo),je(null===o||void 0===o||null===(l=o.lecturerEditData)||void 0===l?void 0:l.department))}),[o.lecturerEditData]),(0,q.useQuery)(["department"],_.Sj,{onSuccess:function(e){var t=e.map((function(e){return e.department}));Ee(t)}});var ye={id:d,profile:Z,fullname:S,gender:W,dob:F,email:Y,address:pe,telephoneNo:ve,department:be},we=(0,I.Ry)().shape({fullname:(0,I.Z_)().trim().required("required*"),gender:(0,I.Z_)().trim().required("required*"),dob:(0,I.hT)().required("required*"),email:(0,I.Z_)().trim().required("required").email("Invalid email address"),address:(0,I.Z_)().trim().required("required"),telephoneNo:(0,I.Rx)().required("required*"),department:(0,I.Z_)().trim().required("required*").nullable(!0)}),ke=(0,q.useMutation)(J.ek);return(0,v.jsxs)(D.Z,{maxWidth:"md",fullWidth:!0,open:t,onClose:function(){return n(!1)},children:[(0,v.jsxs)(E.Z,{title:"Add Lecturer",borderBottom:"1px solid #5aa7a7",children:[(0,v.jsx)(se.Z,{})," Edit Lecturer Info"]}),(0,v.jsx)(A.J9,{initialValues:ye,validationSchema:we,onSubmit:function(e,t){t.setSubmitting(!0),e.professionalID="LEC".concat((0,ue.Z)().split("-")[0]),ke.mutateAsync(e,{onSuccess:function(e){C().fire({icon:"success",iconColor:r.primary.main,title:"Success",text:"Lecturer info updated",confirmButtonColor:"#5aa7a7"}),t.resetForm()},onError:function(e){console.log(e)},onSettled:function(){t.setSubmitting(!1),a.invalidateQueries(["lecturer"])}})},enableReinitialize:!0,children:function(e){var t=e.isSubmitting,r=e.values,a=e.errors,u=e.touched,s=e.handleSubmit;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(y.Z,{children:[(0,v.jsxs)(m.Z,{sx:{width:120,height:120,backgroundColor:"#fff",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",marginTop:2},children:[(0,v.jsx)(K.Z,{src:""===o.lecturerEditData.profile||void 0===o.lecturerEditData.profile||null===o.lecturerEditData.profile?null:"".concat("http://localhost:8000","/images/").concat(o.lecturerEditData.profile),sx:{width:100,height:100,position:"relative"}}),(0,v.jsx)(ie.Z,{htmlFor:"profile",title:"Attach Your Photo",sx:{width:"30px",height:"30px",borderRadius:"50%",padding:"5px",display:"flex",alignItems:"center",position:"absolute",top:0,right:0,backgroundColor:"#5aa7a7"},children:(0,v.jsx)(le.Z,{sx:{width:16,color:"#fff"}})}),(0,v.jsx)("input",{type:"file",hidden:!0,id:"profile",onChange:function(e){return g(e.target.files[0])}})]}),(0,v.jsx)(X.Z,{children:"1.Personal Information"}),(0,v.jsx)(ee.Z,{}),(0,v.jsxs)(te.ZP,{container:!0,spacing:3,paddingY:2,children:[(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(w.Z,{variant:"filled",label:"FullName",placeholder:"FullName here",id:"fullname",fullWidth:!0,size:"small",value:S,error:Boolean(u.fullname&&a.fullname),helperText:a.fullname,onChange:function(e){return T(e.currentTarget.value)},required:!0})}),(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(w.Z,{variant:"filled",label:"Date of birth",placeholder:"",type:"date",fullWidth:!0,size:"small",value:r.dob,error:Boolean(u.dob&&a.dob),helperText:a.dob,onChange:function(e,t){return V(e.currentTarget.value)},required:!0})}),(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(oe.Z,{children:[(0,v.jsx)(ie.Z,{id:"gender-group",children:"Gender"}),(0,v.jsxs)(re.Z,{"aria-labelledby":"gender-group",name:"gender-group",row:!0,value:W,onChange:function(e,t){return N(t)},children:[(0,v.jsx)(ae.Z,{value:"Male",control:(0,v.jsx)(ne.Z,{}),label:"Male"}),(0,v.jsx)(ae.Z,{value:"Female",control:(0,v.jsx)(ne.Z,{}),label:"Female"})]})]})})]}),(0,v.jsx)(X.Z,{children:"2.Contact Information"}),(0,v.jsx)(ee.Z,{}),(0,v.jsxs)(te.ZP,{container:!0,spacing:3,paddingY:2,children:[(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(w.Z,{variant:"filled",label:"Email Address",placeholder:"Email Address here",fullWidth:!0,size:"small",value:Y,error:Boolean(u.email&&a.email),helperText:a.email,onChange:function(e){return $(e.currentTarget.value)},required:!0})}),(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(w.Z,{variant:"filled",label:"Telephone",placeholder:"Telephone here",fullWidth:!0,size:"small",value:ve,error:Boolean(u.telephoneNo&&a.telephoneNo),helperText:a.telephoneNo,onChange:function(e,t){return xe(e.currentTarget.value)}})}),(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(w.Z,{variant:"filled",label:"Address",placeholder:"Address here",multiline:!0,maxRows:4,fullWidth:!0,size:"small",value:pe,error:Boolean(u.address&&a.address),helperText:a.address,onChange:function(e){return me(e.currentTarget.value)}})})]}),(0,v.jsx)(X.Z,{children:"3.Academic Information"}),(0,v.jsx)(ee.Z,{}),(0,v.jsx)(te.ZP,{container:!0,spacing:3,paddingY:2,children:(0,v.jsx)(te.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(H.Z,{options:De,value:be,onChange:function(e,t){return je(t)},renderInput:function(e){return(0,v.jsx)(w.Z,(0,i.Z)((0,i.Z)({variant:"filled"},e),{},{label:"Department",fullWidth:!0,size:"small",error:Boolean(u.department&&a.department),helperText:a.department}))}})})})]}),(0,v.jsxs)(k.Z,{children:[(0,v.jsx)(L.Z,{sx:{minWidth:100},variant:"contained",onClick:s,loading:t,children:"Save Changes"}),(0,v.jsx)(z.Z,{color:"secondary",onClick:function(){return n(!1)},children:"Close"})]})]})}})]})};function de(e){var t=e.heading,n=e.isLoading,l=e.columns,h=e.data,S=e.refresh,D=e.showDisableButton,E=(0,p.Z)().palette,y=(0,s.useContext)(B.D).customDispatch,w=(0,q.useQueryClient)(),k=(0,s.useState)(!1),z=(0,u.Z)(k,2),T=z[0],P=z[1],L=(0,s.useState)(!1),A=(0,u.Z)(L,2),I=A[0],R=A[1],H=(0,s.useState)(!1),F=(0,u.Z)(H,2),Y=F[0],K=F[1],X=(0,s.useState)(!1),ee=(0,u.Z)(X,2),te=ee[0],ne=ee[1],re=(0,s.useState)(!1),ae=(0,u.Z)(re,2),oe=ae[0],ie=ae[1],ue=(0,q.useMutation)(_.If),se=(0,q.useMutation)(N.qm),le=(0,q.useMutation)(O.A),de=(0,q.useMutation)(J.$B),pe=(0,q.useMutation)(G.NZ);function me(){C().fire({icon:"success",iconColor:E.primary.main,title:"Success",text:"Data Reemoved!!!",confirmButtonColor:"#5aa7a7"})}function fe(e){switch(t){case"Department":ue.mutateAsync(e,{onSuccess:function(e){me()}});break;case"Lecturers":de.mutateAsync(e,{onSuccess:function(e){me()}});break;case"Programme":se.mutateAsync(e,{onSuccess:function(e){me()}});break;case"Course":le.mutateAsync(e,{onSuccess:function(e){me()}});break;default:return null}}var he=l.map((function(e){return(0,i.Z)({},e)}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Z,{sx:{paddingY:2},children:(0,v.jsx)(c(),{icons:W.P,title:t,isLoading:n,style:{borderTop:"solid 2px #5aa7a7",fontSize:"13px",boxShadow:"0px 0px 13px 0px rgb(82 63 105 / 10%)",borderRadius:"10px"},options:{pageSizeOptions:[5,10,20,50,100],selection:!0,exportButton:!0,exportMenu:[{label:"Export PDF",exportFunc:function(e,n){return(0,d.oK)(e,n,t)}},{label:"Export CSV",exportFunc:function(e,n){return(0,d.b6)(e,n,t)}}]},columns:[].concat((0,o.Z)(he),[{title:"Options",sorting:!1,render:function(e){return(0,v.jsxs)(Q.v2,{style:{zIndex:101},children:[(0,v.jsx)(Q.j2,{style:{backgroundColor:"transparent",outline:"none",border:"none"},children:(0,v.jsx)(Z.Z,{})}),(0,v.jsxs)(Q.qy,{children:["Lecturers"===t&&(0,v.jsx)(Q.sN,{onSelect:(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y({type:"assignLecturerID",payload:e.professionalID});case 2:ie(!0);case 3:case"end":return t.stop()}}),t)}))),children:"Assign New Course"}),D&&(0,v.jsxs)(Q.sN,{onSelect:function(){return function(e){var t={id:e._id,active:!e.active};pe.mutateAsync(t,{onSettled:function(){w.invalidateQueries("user")},onSuccess:function(e){w.invalidateQueries("user"),alert(e)},onError:function(e){console.log(e)}})}(e)},children:[(0,v.jsx)(x,{fontSize:"32px"}),(0,v.jsx)("span",{children:!0===e.active?"Disable Account":"Enable Account"})]}),(0,v.jsx)(Q.sN,{onSelect:(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y({type:t,payload:e});case 2:n.t0=t,n.next="Department"===n.t0?5:"Programme"===n.t0?7:"Course"===n.t0?9:"Lecturers"===n.t0?11:13;break;case 5:return R(!0),n.abrupt("break",14);case 7:return K(!0),n.abrupt("break",14);case 9:return ne(!0),n.abrupt("break",14);case 11:return P(!0),n.abrupt("break",14);case 13:return n.abrupt("return",null);case 14:case"end":return n.stop()}}),n)}))),children:(0,v.jsxs)(f.Z,{direction:"row",children:[(0,v.jsx)(g.Z,{fontSize:"32px"}),(0,v.jsx)("span",{children:"Edit"})]})}),(0,v.jsxs)(Q.sN,{onSelect:function(){fe(e._id)},children:[(0,v.jsx)(b.Z,{fontSize:"32px"}),(0,v.jsx)("span",{children:"Delete"})]})]})]})}}]),data:h,actions:[{position:"toolbar",tooltip:"Refresh",icon:function(){return(0,v.jsx)(j.Z,{})},isFreeAction:!0,onClick:function(){S()}},{position:"auto",tooltip:"Edit Info",icon:function(){return(0,v.jsx)(g.Z,{})},onClick:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({type:t,payload:a});case 2:e.t0=t,e.next="Department"===e.t0?5:"Programme"===e.t0?7:"Course"===e.t0?9:11;break;case 5:return R(!0),e.abrupt("break",12);case 7:return K(!0),e.abrupt("break",12);case 9:return ne(!0),e.abrupt("break",12);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{position:"auto",tooltip:"Delete Info",icon:function(){return(0,v.jsx)(b.Z,{})},onClick:function(e,t){var n=[];t.map((function(e){return n.push(e._id)})),fe(n)}}]})}),(0,v.jsx)(M,{open:I,setOpen:R}),(0,v.jsx)(ce,{open:T,setOpen:P}),(0,v.jsx)(U,{open:Y,setOpen:K}),(0,v.jsx)(V,{open:te,setOpen:ne}),(0,v.jsx)($,{open:oe,setOpen:ie})]})}var pe=s.memo(de)},64130:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 12h3L12 3 2 12h3v8h2v-2h10v2h2v-8zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69 14.57 8zM7 16v-2h10v2H7z"}),"HouseSiding");t.Z=i},41992:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");t.Z=i},4208:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteSharp")},38820:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},43992:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd")}}]);
//# sourceMappingURL=56.71a20005.chunk.js.map