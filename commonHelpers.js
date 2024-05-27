import{a as b,i as m,S as w}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",S="44085947-f129bb4457b00ce47b6639669";async function g(r,s,i){return(await b.get(q,{params:{key:S,q:r,image_type:"photo",per_page:i,page:s,safesearch:!0,orientation:"horizontal"}})).data}function h(r){const s=document.querySelector(".gallery"),i=r.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" download=false>
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" width=360 onclick="return false" data-source="${t.largeImageURL}">
                <ul class="description">
                    <li>
                        <p>Likes</p>
                        <p class="description-value">${t.likes}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p class="description-value">${t.views}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p class="description-value">${t.comments}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `).join("");s.insertAdjacentHTML("beforeend",i)}function u(r){m.show({message:r})}function L(){document.querySelector(".loader").classList.remove("visually-hidden")}function p(){document.querySelector(".loader").classList.add("visually-hidden")}const f=document.querySelector(".form"),P=document.querySelector('input[name="query"]'),$=document.querySelector(".gallery"),l=document.querySelector(".load-more");m.settings({messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let v=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c="",n=1;const y=15;let a;f.addEventListener("submit",async r=>{if(r.preventDefault(),c=P.value.trim(),c===""){u("Please enter a search query.");return}l.classList.add("visually-hidden"),$.innerHTML="",n=1,L();try{if(a=await g(c,n,y),a.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!"),p(),console.log("🚀 ~ form.addEventListener ~ images.hits.length:",a.hits.length);return}a.hits.length<15?l.classList.add("visually-hidden"):l.classList.remove("visually-hidden"),h(a.hits),v.refresh()}catch(s){console.log(s)}finally{p(),f.reset()}});l.addEventListener("click",async()=>{n+=1;try{l.classList.add("visually-hidden"),L(),a=await g(c,n,y),h(a.hits),v.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:s*2,behavior:"smooth"}),a.total<=Math.ceil(n*y)){l.classList.add("visually-hidden"),u("We're sorry, but you've reached the end of search results.");return}l.classList.remove("visually-hidden")}catch(r){console.log(r)}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
