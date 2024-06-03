import{a as b,S,i as n}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();async function m(e,r=1){const o=new URLSearchParams({key:"35791759-f811f161bd6e8c93b24d24d20",q:e,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const s=await b.get(`https://pixabay.com/api/?${o}`);return console.log(s),s.data}catch(s){throw console.error("Error fetching images:",s),s}}const q=document.querySelector(".images-container");let u;function h(e){const r=e.map(o=>`<li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${o.webformatURL}" 
          alt="${o.tags}" 
          />

      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${o.likes}</li>
      <li><strong>Views</strong> ${o.views}</li>
      <li><strong>Comments</strong> ${o.comments}</li>
      <li><strong>Downloads</strong> ${o.downloads}</li>
      </ul>
    </li>`).join("");q.insertAdjacentHTML("beforeend",r)}function y(){u=new S(".images-container a",{captionsData:"alt",captionDelay:250})}function p(){u?u.refresh():y()}const f=document.querySelector(".form"),$=document.querySelector(".images-container"),l=document.querySelector(".loader"),c=document.querySelector(".load-more");let a="",d=1;f.addEventListener("submit",async e=>{if(e.preventDefault(),$.innerHTML="",c.style.display="none",d=1,a=e.target.elements.query.value.trim(),!a){n.error({message:"Search field is empty",position:"topRight"});return}L("initial");try{const r=await m(a,d);r.hits.length?(h(r.hits),y(),p(),r.hits.length===15&&(c.style.display="block")):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch{n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{w("initial")}f.reset()});c.addEventListener("click",async()=>{d+=1,L("more");try{const e=await m(a,d);e.hits.length&&(h(e.hits),p(),e.hits.length<15&&(c.style.display="none"));const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:o,behavior:"smooth"})}catch{n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{w("more")}});function L(e){(e==="initial"||e==="more")&&(l.style.display="block")}function w(e){(e==="initial"||e==="more")&&(l.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
