/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

class Solution {
    #visitedUrls = new Map<string, boolean>()
    /**
     * @param {string} startUrl
     * @param {HtmlParser} htmlParser
     * @return {string[]}
     */
    crawl(startUrl: string, htmlParser: HtmlParser): string[] {
        this.#visitedUrls.set(startUrl, true);
        const startUrlHostname = new URL(startUrl).hostname;
        const urls = htmlParser.getUrls(startUrl);
        for (const url of urls) {
            const curHostname = new URL(url).hostname;
            if (!this.#visitedUrls.has(url) && curHostname === startUrlHostname) {
                this.crawl(url, htmlParser);
            }
        }

        return [...this.#visitedUrls.keys()];
    }
}
