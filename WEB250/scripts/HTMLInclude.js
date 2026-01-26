


// Simple HTML include loader that watches the DOM and injects files from ../components/
// Usage: <div data-include="header.html"></div> or <div data-include="header"></div>

(function () {
    const scriptSrc = (document.currentScript && document.currentScript.src) ||
        (Array.from(document.getElementsByTagName('script')).pop() || {}).src || location.href;
    const componentsBase = new URL('../components/', scriptSrc).href;

    async function fetchHtml(url) {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        return await res.text();
    }

    function executeScripts(container, baseUrl) {
        const scripts = Array.from(container.querySelectorAll('script'));
        scripts.forEach(orig => {
            const s = document.createElement('script');
            // copy attributes
            for (let i = 0; i < orig.attributes.length; i++) {
                const a = orig.attributes[i];
                if (a.name === 'src') {
                    const srcUrl = new URL(a.value, baseUrl).href;
                    s.src = srcUrl;
                } else {
                    s.setAttribute(a.name, a.value);
                }  
            }
            s.text = orig.text;
            orig.parentNode.replaceChild(s, orig);
        });
    }
})();
