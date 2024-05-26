import{i as d,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="44085947-f129bb4457b00ce47b6639669";function y(o){return fetch(`${p}?key=${m}&q=${o}&image_type=photo&per_page=15&safesearch=true&orientation=horizontal`).then(s=>{if(!s.ok)throw new Error(response.statusText);return s.json()})}function g(o){const s=document.querySelector(".gallery"),l=o.hits.map(r=>`
           <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}" download=false>
                <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" width=360  onclick="return false" data-source="${r.largeImageURL}">
                <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="description-value">${r.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="description-value">${r.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="description-value">${r.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="description-value">${r.downloads}</p>
                    </li>
                </ul>
            </a>
            </li>
            `).join("");s.innerHTML=l}function i(o){d.show({message:o})}function h(){document.querySelector(".loader").classList.remove("visually-hidden")}function L(){document.querySelector(".loader").classList.add("visually-hidden")}const c=document.querySelector(".form"),u=document.querySelector('input[name="query"]'),b=document.querySelector(".gallery");d.settings({messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let n;c.addEventListener("submit",o=>{if(o.preventDefault(),u.value.trim()===""){i("Please enter a search query.");return}b.innerHTML="",h(),y(u.value.trim()).then(l=>{if(l.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}else g(l);n?n.refresh():n=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(l=>{console.log(l)}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
