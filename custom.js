(function() {
    function replaceTrustNodeUrls() {
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url) {
            if (url.includes('trustnode.click')) {
                url = url.replace('trustnode.click', 'substack.com');
            }
            this._url = url;
            return originalOpen.apply(this, arguments);
        };

        const originalFetch = window.fetch;
        window.fetch = function (url, options) {
            if (typeof url === 'string' && url.includes('trustnode.click')) {
                url = url.replace('trustnode.click', 'substack.com');
            }
            return originalFetch.call(this, url, options);
        };
    }

    window.addEventListener('load', replaceTrustNodeUrls);
})();
