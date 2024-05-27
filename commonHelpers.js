import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function g(s){const o="https://pixabay.com/api/",t=new URLSearchParams({key:"35791759-f811f161bd6e8c93b24d24d20",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${o}?${t}`;return fetch(i).then(e=>e.json())}const h=document.querySelector(".images-container");let l;function p(s){const o=s.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img 
          class="gallery-image" 
          width="360"
          src="${t.webformatURL}" 
          alt="${t.tags}" 
          />

      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${t.likes}</li>
      <li><strong>Views</strong> ${t.views}</li>
      <li><strong>Comments</strong> ${t.comments}</li>
      <li><strong>Downloads</strong> ${t.downloads}</li>
      </ul>
    </li>`).join("");h.innerHTML=o}function f(){l=new d(".images-container a",{captionsData:"alt",captionDelay:250})}function y(){l?l.refresh():f()}const u=document.querySelector(".form"),L=document.querySelector(".images-container"),m=document.querySelector(".loader");u.addEventListener("submit",s=>{s.preventDefault(),L.innerHTML="";const o=s.target.elements.query.value.trim();if(!o){c.error({message:"Search field is empty",position:"topRight"});return}b(),g(o).then(t=>{t.hits.length?setTimeout(()=>{p(t.hits),f(),y(),a()},2e3):(c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a())}).catch(t=>{a()}),u.reset()});function b(){m.style.display="block"}function a(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
