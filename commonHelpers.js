import{a as w,S,i as a}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function m(e,r=1){const i=new URLSearchParams({key:"35791759-f811f161bd6e8c93b24d24d20",q:e,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await w.get(`https://pixabay.com/api/?${i}`)).data}catch(s){throw console.error("Error fetching images:",s),s}}const q=document.querySelector(".images-container");let g;function y(e){const r=e.map(i=>`<li class="gallery-item">
      <a class="gallery-link" href="${i.largeImageURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${i.webformatURL}" 
          alt="${i.tags}" 
          />

      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${i.likes}</li>
      <li><strong>Views</strong> ${i.views}</li>
      <li><strong>Comments</strong> ${i.comments}</li>
      <li><strong>Downloads</strong> ${i.downloads}</li>
      </ul>
    </li>`).join("");q.insertAdjacentHTML("beforeend",r)}function h(){g=new S(".images-container a",{captionsData:"alt",captionDelay:250})}function p(){g?g.refresh():h()}const u=document.querySelector(".form"),$=document.querySelector(".images-container"),l=document.querySelector(".loader"),c=document.querySelector(".load-more");let n="",d=1;u.addEventListener("submit",async e=>{if(e.preventDefault(),$.innerHTML="",c.style.display="none",d=1,n=e.target.elements.query.value.trim(),!n){a.error({message:"Search field is empty",position:"topRight"});return}L("initial");try{const r=await m(n,d);r.hits.length?(y(r.hits),h(),p(),r.hits.length===15&&(c.style.display="block")):a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch{a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{b("initial")}u.reset()});c.addEventListener("click",async()=>{d+=1,L("more");try{const e=await m(n,d);e.hits.length&&(y(e.hits),p(),e.hits.length<15&&(c.style.display="none"))}catch{a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{b("more")}});function L(e){(e==="initial"||e==="more")&&(l.style.display="block")}function b(e){(e==="initial"||e==="more")&&(l.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
