import{d as B,a as M,r as n,o as U,b as _,_ as F,e as L,f as i,g as a,j as h,h as e,k as V,l as j,u as z,i as r,v as g,s as C,m as N,x as b,p as T,q as E}from"./index-DgN9BqVy.js";const q=B({components:{Footer:M},setup(){const t=n([]),s=n(!1),y=n("All"),w=n(""),k=n(!1),u=n(!1),p=n(""),o=n(""),f=n("Animation"),x=n("Movie"),S=n(""),A=n(""),I=()=>{s.value=!0,console.log("huh");const d=localStorage.getItem("token");_.post("http://www.chrisouboter.com/api/content/create",{title:p.value,description:o.value,genre:f.value,content:x.value,length:A.value,episodes:S.value},{headers:{Authorization:`Bearer ${d}`}}).then(c=>{console.log(c),s.value=!1,m()})},$=d=>{console.log(d),u.value=!0;const v=localStorage.getItem("token");_.post("http://www.chrisouboter.com/api/content/delete",{content_id:d},{headers:{Authorization:`Bearer ${v}`}}).then(D=>{console.log(D.data.data),t.value=D.data.data,console.log(t),m()})},m=()=>{s.value=!0,console.log("loaded");const d=localStorage.getItem("token");_.post("http://www.chrisouboter.com/api/content/all",{},{headers:{Authorization:`Bearer ${d}`}}).then(c=>{console.log(c.data.data),t.value=c.data.data,u.value=!1,s.value=!1})};return U(m),{data:t,loading:s,selected:y,search:w,alfa:k,title:p,description:o,genre:f,content:x,episodes:S,length:A,handleSubmit:I,handleClick:$,LoadingDelete:u}}}),l=t=>(T("data-v-a49a9980"),t=t(),E(),t),G={key:0,class:"flex m-auto w-full"},H=l(()=>e("i",{class:"fa-solid fa-spinner fa-spin-pulse fa-xl text-black dark:text-white"},null,-1)),R=[H],J={key:1,class:"Films flex"},K={class:"w-2/4"},O={class:"table-auto w-full text-white"},P=l(()=>e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2"},"ID"),e("th",{class:"px-4 py-2"},"Title"),e("th",{class:"px-4 py-2"},"Genre"),e("th",{class:"px-4 py-2"},"Actions")])],-1)),Q={class:"border px-4 py-2"},W={class:"border px-4 py-2"},X={class:"border px-4 py-2"},Y={class:"border px-4 py-2"},Z=["onClick"],ee={key:0},te=l(()=>e("i",{class:"fa-solid fa-spinner fa-spin-pulse fa-xl text-black dark:text-white"},null,-1)),oe=[te],se={key:1},le={class:"w-2/4 p-2 fixed right-0"},ne=l(()=>e("div",{class:"flex items-center justify-between"},null,-1)),ie={class:"mt-2"},ae={class:"mt-2"},de={class:"mt-2"},re=l(()=>e("option",null,"Animation",-1)),ce=l(()=>e("option",null,"Action",-1)),ue=l(()=>e("option",null,"Adventure",-1)),pe=l(()=>e("option",null,"Horror",-1)),he=l(()=>e("option",null,"Drama",-1)),ge=l(()=>e("option",null,"Romance",-1)),fe=[re,ce,ue,pe,he,ge],me={class:"mt-2"},ve=l(()=>e("option",null,"Movie",-1)),_e=l(()=>e("option",null,"Serie",-1)),be=[ve,_e],ye={class:"mt-2"},we={class:"mt-2"},ke={type:"submit",class:"flex shadow-xl w-full justify-center rounded-md bg-violet-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-xl hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},xe={key:0,class:"text-white"},Se={key:1,class:"loading-screen"},Ae=l(()=>e("i",{class:"fa-solid fa-spinner fa-spin-pulse fa-xl text-white"},null,-1)),De=[Ae];function Ve(t,s,y,w,k,u){const p=L("Footer");return i(),a(V,null,[t.loading?(i(),a("div",G,R)):h("",!0),t.loading?h("",!0):(i(),a("div",J,[e("div",K,[e("table",O,[P,e("tbody",null,[(i(!0),a(V,null,j(t.data,o=>(i(),a("tr",{key:o.id},[e("td",Q,b(o.id),1),e("td",W,b(o.title),1),e("td",X,b(o.genre),1),e("td",Y,[e("button",{onClick:f=>t.handleClick(o.id),class:"bg-red-500 p-12 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"},[t.LoadingDelete?(i(),a("p",ee,oe)):(i(),a("p",se,"Delete"))],8,Z)])]))),128))])])]),e("div",le,[e("form",{class:"space-y-6",onSubmit:s[6]||(s[6]=z((...o)=>t.handleSubmit&&t.handleSubmit(...o),["prevent"]))},[e("div",null,[ne,e("div",ie,[r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.title=o),placeholder:"Title",class:"p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"},null,512),[[g,t.title]])])]),e("div",null,[e("div",ae,[r(e("textarea",{placeholder:"Description","onUpdate:modelValue":s[1]||(s[1]=o=>t.description=o),class:"p-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6",rows:"2"},null,512),[[g,t.description]])])]),e("div",null,[e("div",de,[r(e("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.genre=o),class:"w-full p-2 rounded-full bg-gray-200"},fe,512),[[C,t.genre]])])]),e("div",null,[e("div",me,[r(e("select",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.content=o),class:"w-full p-2 rounded-full bg-gray-200"},be,512),[[C,t.content]])])]),e("div",null,[e("div",ye,[r(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>t.episodes=o),placeholder:"Episodes",class:"p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"},null,512),[[g,t.episodes]])])]),e("div",null,[e("div",we,[r(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.length=o),placeholder:"Length (minutes)",class:"p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-400 sm:text-sm sm:leading-6"},null,512),[[g,t.length]])])]),e("div",null,[e("button",ke,[t.loading?h("",!0):(i(),a("div",xe,"Create")),t.loading?(i(),a("div",Se,De)):h("",!0)])])],32)])])),N(p)],64)}const Ie=F(q,[["render",Ve],["__scopeId","data-v-a49a9980"]]);export{Ie as default};
