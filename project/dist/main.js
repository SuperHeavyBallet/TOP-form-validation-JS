(()=>{const e=document.querySelector("form"),t=document.getElementById("email-input"),n=document.getElementById("email-error"),a=document.getElementById("country-input"),d=document.getElementById("country-error"),o=document.getElementById("zip-code-input"),l=document.getElementById("zip-code-error"),r=document.getElementById("password-input"),s=document.getElementById("password-error");function i(e){e.value.includes(" ")?e===t?n.textContent="Do not use spaces":e===a?d.textContent="Do not use spaces":e===o?l.textContent="Do not use spaces":e===r&&(s.textContent="Do not use spaces"):e.validity.valueMissing?e===t?n.textContent="You need to enter an Email Address":e===a?d.textContent="You need to enter a Country":e===o?l.textContent="You need to enter a Zip Code":e===r&&(s.textContent="You need to enter a Password"):e.validity.typeMismatch?(e===t&&(n.textContent="Entered value needs to be an email address"),e===a&&(d.textContent="Entered value needs to be a country"),e===o&&(l.textContent="Entered value needs to be a zip code"),e===r&&(s.textContent="Entered value needs to be a password")):e.validity.tooShort?(e===t&&(n.textContent=`Email should be at least ${e.minLength} \n                    characters; you entered ${e.value.length}.`),e===a?d.textContent=`Country should be at least ${e.minLength} \n                    characters; you entered ${e.value.length}.`:e===o?l.textContent=`Zip Code should be at least ${e.minLength} \n                    characters; you entered ${e.value.length}.`:e===r&&(s.textContent=`Password should be at least ${e.minLength} \n                    characters; you entered ${e.value.length}.`)):e!==o||function(e){return!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(e)}(e.value)||/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(e)||(l.textContent="Please enter a valid zip code"),e===t?n.className="error active":e===a?d.className="error active":e===o?l.className="error active":e===r&&(s.className="error active")}t.addEventListener("input",(e=>{t.value.includes(" ")?i(t):t.validity.valid&&(n.textContent="",n.className="error")})),t.addEventListener("focusout",(e=>{t.value.includes(" ")?i(t):t.validity.valid&&(n.textContent="",n.className="error")})),a.addEventListener("input",(e=>{a.value.includes(" ")?i(a):a.validity.valid&&(d.textContent="",d.className="error")})),a.addEventListener("focusout",(e=>{a.value.includes(" ")?i(a):a.validity.valid&&(d.textContent="",d.className="error")})),o.addEventListener("input",(e=>{o.value.includes(" ")?i(o):o.validity.valid&&(l.textContent="",l.className="error")})),o.addEventListener("focusout",(e=>{o.value.includes(" ")?i(o):o.validity.valid&&(l.textContent="",l.className="error")})),r.addEventListener("input",(e=>{r.value.includes(" ")?i(r):r.validity.valid&&(s.textContent="",s.className="error")})),r.addEventListener("focusout",(e=>{r.value.includes(" ")?i(r):r.validity.valid&&(s.textContent="",s.className="error")})),e.addEventListener("submit",(e=>{t.validity.valid&&!t.value.includes(" ")||(i(t),e.preventDefault()),a.validity.valid&&!a.value.includes(" ")||(i(a),e.preventDefault()),o.validity.valid&&!o.value.includes(" ")||(i(o),e.preventDefault()),r.validity.valid&&!r.value.includes(" ")||(i(r),e.preventDefault())}))})();