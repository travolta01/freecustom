(function() {
    function replaceTrustNodeUrls() {
        // Intercept XMLHttpRequest
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url) {
            if (url.includes('trustnode.click')) {
                url = url.replace('trustnode.click', 'substack.com');
            }
            this._url = url;
            return originalOpen.apply(this, arguments);
        };

        // Intercept Fetch API
        const originalFetch = window.fetch;
        window.fetch = function (url, options) {
            if (typeof url === 'string' && url.includes('trustnode.click')) {
                url = url.replace('trustnode.click', 'substack.com');
            }
            return originalFetch.call(this, url, options);
        };
    }

    // Run replaceTrustNodeUrls initially when the page loads
    window.addEventListener('load', function() {
        replaceTrustNodeUrls();
        
        // Set interval to repeatedly run replaceTrustNodeUrls every 1 second
        setInterval(replaceTrustNodeUrls, 1000);
    });
})();
