(()=>{"use strict";class t{constructor(t){this.title=t,this.tasks=[],this.id=Math.random().toString().split(".").join("")}}class e{constructor(t,e,n,d){this.title=t,this.description=e,this.date=n,this.priority=d,this.id=Math.random().toString().split(".").join(""),this.complete=!1}}let n,d;n=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):[{title:"Home",tasks:[{title:"Clean home",description:"Dust is everywhere",date:"",priority:"High",id:"04626473771948296"},{title:"Repair window",description:"Kids broke the window",date:"",priority:"Regular",id:"037213361870953765"}],id:"014149084609191154"}];const i=document.querySelector(".projects"),s=document.querySelector(".tasks");function l(){i.replaceChildren(),n.forEach((t=>{const e=document.createElement("div");e.classList.add("project"),e.setAttribute("id",t.id),e.addEventListener("click",(()=>{d=t,c(),document.querySelectorAll(".project").forEach((t=>t.classList.value="project")),e.classList.value.includes("active")||e.classList.add("active")}));const s=document.createElement("h3");s.classList.add("project-title"),s.textContent=t.title;const a=document.createElement("button");a.classList.add("delete-project"),a.textContent="X",a.addEventListener("click",(()=>{n=n.filter((e=>e.id!==t.id)),l(),o()})),e.appendChild(s),e.appendChild(a),i.appendChild(e)}))}function c(){s.replaceChildren(),d.tasks.forEach((t=>{const e=document.createElement("div");e.classList.add("task"),e.setAttribute("id",t.id);const n=document.createElement("h3");n.setAttribute("id","task-title"),n.textContent=t.title;const i=document.createElement("p");i.setAttribute("id","description"),i.textContent=t.description;const l=document.createElement("p");l.setAttribute("id","due"),l.textContent="Due: ";const a=document.createElement("span");a.setAttribute("id","task-date"),t.date?a.textContent=t.date:a.textContent="No deadline",l.appendChild(a);const r=document.createElement("p");r.setAttribute("id","priority-text"),r.textContent="Priority: ";const p=document.createElement("span");p.setAttribute("id","priority"),p.textContent=t.priority,r.appendChild(p);const u=document.createElement("div");u.classList.add("buttons");const m=document.createElement("button");m.classList.add("complete-btn"),m.textContent="Complete";const y=document.createElement("button");y.classList.add("edit-btn"),y.textContent="Edit";const E=document.createElement("button");E.classList.add("delete-btn"),E.textContent="Delete",u.appendChild(m),u.appendChild(y),u.appendChild(E),m.addEventListener("click",(()=>{t.complete?t.complete=!1:t.complete=!0,c(),o()})),t.complete?(e.classList.add("complete"),n.style.textDecoration="line-through"):(e.classList.remove("complete"),n.style.textDecoration="none"),y.addEventListener("click",(()=>{const e=document.querySelector(".task-edit-modal");e.style.display="flex",document.getElementById("close-edit-modal-btn").addEventListener("click",(()=>{e.style.display="none"})),document.getElementById("edit-task-btn").addEventListener("click",(n=>{n.preventDefault();const d=document.getElementById("task-title-edit"),i=document.getElementById("task-desc-edit"),s=document.getElementById("task-date-edit"),l=document.getElementById("task-priority-edit");t.title=d.value,t.description=i.value,t.date=s.value,t.priority=l.value,e.style.display="none",c(),o()}))})),E.addEventListener("click",(()=>{d.tasks=d.tasks.filter((e=>e.id!==t.id)),c(),o()})),e.appendChild(n),e.appendChild(i),e.appendChild(l),e.appendChild(r),e.appendChild(u),s.appendChild(e),o()}))}function o(){localStorage.setItem("projects",JSON.stringify(n))}const a=document.querySelector(".add-project-btn"),r=document.querySelector(".add-project-modal"),p=document.getElementById("add-project-form-btn"),u=document.getElementById("close-project-form-btn");a.addEventListener("click",(()=>{r.style.display="flex"})),p&&p.addEventListener("click",(e=>{e.preventDefault(),r.style.display="none";const d=document.getElementById("form-project-title"),i=new t(d.value);n.push(i),l(),o(),d.value=""})),u&&u.addEventListener("click",(()=>{r.style.display="none"}));const m=document.getElementById("add-task"),y=document.getElementById("add-task-btn"),E=document.querySelector(".task-add-modal"),h=document.getElementById("close-modal-btn");m.addEventListener("click",(()=>{E.style.display="flex"})),y.addEventListener("click",(t=>{t.preventDefault(),E.style.display="none";const n=document.getElementById("task-title-input"),i=document.getElementById("task-desc-input"),s=document.getElementById("task-date-input"),l=document.getElementById("task-priority-input"),a=new e(n.value,i.value,s.value,l.value);d.tasks.push(a),c(),o(),n.value="",i.value="",s.value="",l.value=""})),h.addEventListener("click",(()=>{E.style.display="none"})),l()})();