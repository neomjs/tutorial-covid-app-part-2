(self["webpackChunkcovid"] = self["webpackChunkcovid"] || []).push([["src/main/addon/HighlightJS-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stylesheet.mjs */ "./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs");




/**
 * Required for the docs app which uses highlight.js for the source views
 * @class Neo.main.addon.HighlightJS
 * @extends Neo.core.Base
 * @singleton
 */
class HighlightJS extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.HighlightJS'
         * @protected
         */
        className: 'Neo.main.addon.HighlightJS',
        /**
         * @member {String} highlightJsPath='./resources/highlight/highlight.pack.js'
         * @protected
         */
        highlightJsPath: './resources/highlight/highlight.pack.js',
        /**
         * @member {String} highlightJsLineNumbersPath=Neo.config.basePath + 'node_modules/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js'
         * @protected
         */
        highlightJsLineNumbersPath: Neo.config.basePath + 'node_modules/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js',
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'scrollIntoView',
                'syntaxHighlight',
                'syntaxHighlightInit',
                'syntaxHighlightLine'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} themePath='./resources/highlightjs-custom-github-theme.css'
         * @protected
         */
        themePath: './resources/highlightjs-custom-github-theme.css'
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.loadScript(me.highlightJsPath).then(() => {
            _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.addScript({src: me.highlightJsLineNumbersPath});
        });

        _Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_2__.default.createStyleSheet(null, 'hljs-theme', me.themePath);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.text
     * @param {String} data.vnodeId
     * @protected
     */
    scrollIntoView(data) {
        let parentEl = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getElement(data.vnodeId),
            el       = parentEl.querySelector('[data-list-header="' + data.text + '"]');

        if (el) {
            el.previousSibling.scrollIntoView({
                behavior: 'smooth',
                block   : 'start',
                inline  : 'nearest'
            });
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.vnodeId
     */
    syntaxHighlight(data) {
        if (hljs) {
            let node = document.getElementById(data.vnodeId);

            hljs.highlightBlock(node);
            hljs.lineNumbersBlock(node);
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     */
    syntaxHighlightInit(data) {
        if (hljs) {
            let blocks = document.querySelectorAll('pre code:not(.hljs)');
            Array.prototype.forEach.call(blocks, hljs.highlightBlock);
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.addLine
     * @param {String} data.vnodeId
     * @param {Number} data.removeLine
     */
    syntaxHighlightLine(data) {
        let parentEl = document.getElementById(data.vnodeId),
            cls      = 'neo-highlighted-line',
            el;

        if (Neo.isNumber(data.addLine)) {
            el = parentEl.querySelector('[data-line-number="' + data.addLine + '"]');

            if (el) {
                el.parentNode.classList.add(cls);

                el.parentNode.scrollIntoView({
                    behavior: 'smooth',
                    block   : 'start',
                    inline  : 'nearest'
                });
            }
        }

        if (Neo.isNumber(data.removeLine)) {
            el = parentEl.querySelector('[data-line-number="' + data.removeLine + '"]');

            if (el) {
                el.parentNode.classList.remove(cls);
            }
        }
    }
}

Neo.applyClassConfig(HighlightJS);

let instance = Neo.create(HighlightJS);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to work with stylesheets, e.g. apply & switch Neo based themes
 * main.addon.HighlightJS requires this file
 * @class Neo.main.addon.Stylesheet
 * @extends Neo.core.Base
 * @singleton
 */
class Stylesheet extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.Stylesheet'
         * @protected
         */
        className: 'Neo.main.addon.Stylesheet',
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'addThemeFiles',
                'createStyleSheet',
                'insertCssRules',
                'swapStyleSheet'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        if (Neo.config.useFontAwesome) {
            this.createStyleSheet(null, null, Neo.config.basePath + 'node_modules/@fortawesome/fontawesome-free/css/all.min.css');
        }

        if (Neo.config.themes.length > 0 && Neo.config.themes[0] !== '') {
            this.addGlobalCss();
            // this.insertTheme();
        }
    }

    /**
     *
     */
    addGlobalCss() {
        let config  = Neo.config,
            themes  = config.themes,
            folders = config.useCssVars ? ['src', ...themes] : [themes[0]],
            env     = config.environment,
            path    = env.startsWith('dist/') ? env : ('dist/' + env);

        document.body.classList.add(themes[0]);

        folders.forEach(folder => {
            if (folder.startsWith('neo-')) {
                folder = folder.substring(4);
            }

            this.createStyleSheet(
                null,
                null,
                `${config.basePath}${path}/css${config.useCssVars ? '' : '-no-vars'}/${folder}/Global.css`
            );
        });
    }

    /**
     * @param {Object} data
     * @param {String} data.className
     * @param {String[]} data.folders
     */
    addThemeFiles(data) {
        let className = data.className,
            config    = Neo.config,
            env       = config.environment,
            path      = env.startsWith('dist/') ? env : ('dist/' + env);

        if (className.startsWith('Neo.')) {
            className = className.substring(4);
        }

        className = className.split('.').join('/');

        data.folders.forEach(folder => {
            if (
                folder === 'src' && config.useCssVars || folder.includes('theme-') && (
                     config.useCssVars && config.themes.includes(`neo-${folder}`) ||
                    !config.useCssVars && config.themes[0] === `neo-${folder}`
                )
            ) {
                this.createStyleSheet(
                    null,
                    null,
                    `${config.basePath}${path}/css${config.useCssVars ? '' : '-no-vars'}/${folder}/${className}.css`
                );
            }
        });
    }

    /**
     * Use either name for a neo theme (e.g. 'neo-theme-dark.css') or pass a href
     * @param {String} [name]
     * @param {String} [id]
     * @param {String} [href]
     */
    createStyleSheet(name, id, href) {
        if (!name && !href) {
            throw new Error('createStyleSheet: you need to either pass a name or a href');
        }

        const link = document.createElement('link'),
              env  = Neo.config.environment,
              path = env.startsWith('dist/') ? env : ('dist/' + env),
              url  = href ? href : Neo.config.basePath + path + '/' + name;

        Object.assign(link, {
            href: url,
            rel : 'stylesheet',
            type: 'text/css'
        });

        if (id) {
            link.id = id;
        }

        document.head.appendChild(link);
    }

    /**
     *
     * @param {String} token
     * @returns {Boolean}
     */
    hasStyleSheet(token) {
        let i   = 0,
            len = document.styleSheets.length,
            sheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];
            if (sheet.href && sheet.href.includes(token)) {
                return true;
            }
        }

        return false;
    }

    /**
     *
     * @param {Object} data
     * @param {Array} data.rules
     * @protected
     */
    insertCssRules(data) {
        let styleEl = document.getElementById('neoDynamicStyleSheet'),
            i     = 0,
            len   = data.rules.length,
            styleSheet;

        if (!styleEl) {
            styleEl = document.createElement('style');

            styleEl.id = 'neoDynamicStyleSheet';
            document.head.appendChild(styleEl);
        }

        styleSheet = styleEl.sheet;

        for (; i < len; i++) {
            styleSheet.insertRule(data.rules[i], styleSheet.cssRules.length);
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {String[]} opts.included
     * @param {String[]} opts.excluded
     */
    removeStyleSheets(opts) {
        let i        = 0,
            len      = document.styleSheets.length,
            included = opts.included || [],
            excluded = opts.included || [],
            sheet, removeSheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];

            removeSheet = true;

            if (sheet.href) {
                excluded.forEach(name => {
                    if (sheet.href.includes(name)) {
                        removeSheet = false;
                    }
                });

                if (removeSheet) {
                    included.forEach(name => {
                        if (!sheet.href.includes(name)) {
                            removeSheet = false;
                        }
                    });

                    if (removeSheet) {
                        sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
                    }
                }
            }
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.href
     * @param {String} data.id
     */
    swapStyleSheet(data) {
        document.getElementById(data.id).setAttribute('href', data.href);
    }
}

Neo.applyClassConfig(Stylesheet);

let instance = Neo.create(Stylesheet);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0hpZ2hsaWdodEpTLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1N0eWxlc2hlZXQubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSDtBQUNEOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQUk7QUFDOUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTyxTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsOERBQW9CO0FBQzVCLFlBQVksNkRBQW1CLEVBQUUsbUNBQW1DO0FBQ3BFLFNBQVM7O0FBRVQsUUFBUSxxRUFBMkI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBb0I7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtB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Q0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFFBQVEsRSIsImZpbGUiOiJjaHVua3MvbWFpbi9zcmMvbWFpbi9hZGRvbi9IaWdobGlnaHRKUy1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBEb21BY2Nlc3MgIGZyb20gJy4uL0RvbUFjY2Vzcy5tanMnO1xuaW1wb3J0IFN0eWxlc2hlZXQgZnJvbSAnLi9TdHlsZXNoZWV0Lm1qcydcblxuLyoqXG4gKiBSZXF1aXJlZCBmb3IgdGhlIGRvY3MgYXBwIHdoaWNoIHVzZXMgaGlnaGxpZ2h0LmpzIGZvciB0aGUgc291cmNlIHZpZXdzXG4gKiBAY2xhc3MgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSGlnaGxpZ2h0SlMgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaGlnaGxpZ2h0SnNQYXRoPScuL3Jlc291cmNlcy9oaWdobGlnaHQvaGlnaGxpZ2h0LnBhY2suanMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodEpzUGF0aDogJy4vcmVzb3VyY2VzL2hpZ2hsaWdodC9oaWdobGlnaHQucGFjay5qcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGhpZ2hsaWdodEpzTGluZU51bWJlcnNQYXRoPU5lby5jb25maWcuYmFzZVBhdGggKyAnbm9kZV9tb2R1bGVzL2hpZ2hsaWdodGpzLWxpbmUtbnVtYmVycy5qcy9kaXN0L2hpZ2hsaWdodGpzLWxpbmUtbnVtYmVycy5taW4uanMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodEpzTGluZU51bWJlcnNQYXRoOiBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ25vZGVfbW9kdWxlcy9oaWdobGlnaHRqcy1saW5lLW51bWJlcnMuanMvZGlzdC9oaWdobGlnaHRqcy1saW5lLW51bWJlcnMubWluLmpzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ3Njcm9sbEludG9WaWV3JyxcbiAgICAgICAgICAgICAgICAnc3ludGF4SGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgICAnc3ludGF4SGlnaGxpZ2h0SW5pdCcsXG4gICAgICAgICAgICAgICAgJ3N5bnRheEhpZ2hsaWdodExpbmUnXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRoZW1lUGF0aD0nLi9yZXNvdXJjZXMvaGlnaGxpZ2h0anMtY3VzdG9tLWdpdGh1Yi10aGVtZS5jc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoZW1lUGF0aDogJy4vcmVzb3VyY2VzL2hpZ2hsaWdodGpzLWN1c3RvbS1naXRodWItdGhlbWUuY3NzJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBEb21BY2Nlc3MubG9hZFNjcmlwdChtZS5oaWdobGlnaHRKc1BhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRG9tQWNjZXNzLmFkZFNjcmlwdCh7c3JjOiBtZS5oaWdobGlnaHRKc0xpbmVOdW1iZXJzUGF0aH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBTdHlsZXNoZWV0LmNyZWF0ZVN0eWxlU2hlZXQobnVsbCwgJ2hsanMtdGhlbWUnLCBtZS50aGVtZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS50ZXh0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudm5vZGVJZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldyhkYXRhKSB7XG4gICAgICAgIGxldCBwYXJlbnRFbCA9IERvbUFjY2Vzcy5nZXRFbGVtZW50KGRhdGEudm5vZGVJZCksXG4gICAgICAgICAgICBlbCAgICAgICA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3QtaGVhZGVyPVwiJyArIGRhdGEudGV4dCArICdcIl0nKTtcblxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnByZXZpb3VzU2libGluZy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIGJsb2NrICAgOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgIGlubGluZSAgOiAnbmVhcmVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZub2RlSWRcbiAgICAgKi9cbiAgICBzeW50YXhIaWdobGlnaHQoZGF0YSkge1xuICAgICAgICBpZiAoaGxqcykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnZub2RlSWQpO1xuXG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKG5vZGUpO1xuICAgICAgICAgICAgaGxqcy5saW5lTnVtYmVyc0Jsb2NrKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaGlnaGxpZ2h0LmpzIGlzIG5vdCBpbmNsdWRlZCBpbnNpZGUgdGhlIG1haW4gdGhyZWFkLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHN5bnRheEhpZ2hsaWdodEluaXQoZGF0YSkge1xuICAgICAgICBpZiAoaGxqcykge1xuICAgICAgICAgICAgbGV0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlOm5vdCguaGxqcyknKTtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYmxvY2tzLCBobGpzLmhpZ2hsaWdodEJsb2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2hpZ2hsaWdodC5qcyBpcyBub3QgaW5jbHVkZWQgaW5zaWRlIHRoZSBtYWluIHRocmVhZC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5hZGRMaW5lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudm5vZGVJZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnJlbW92ZUxpbmVcbiAgICAgKi9cbiAgICBzeW50YXhIaWdobGlnaHRMaW5lKGRhdGEpIHtcbiAgICAgICAgbGV0IHBhcmVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS52bm9kZUlkKSxcbiAgICAgICAgICAgIGNscyAgICAgID0gJ25lby1oaWdobGlnaHRlZC1saW5lJyxcbiAgICAgICAgICAgIGVsO1xuXG4gICAgICAgIGlmIChOZW8uaXNOdW1iZXIoZGF0YS5hZGRMaW5lKSkge1xuICAgICAgICAgICAgZWwgPSBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saW5lLW51bWJlcj1cIicgKyBkYXRhLmFkZExpbmUgKyAnXCJdJyk7XG5cbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuXG4gICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgICA6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgICAgIGlubGluZSAgOiAnbmVhcmVzdCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNOdW1iZXIoZGF0YS5yZW1vdmVMaW5lKSkge1xuICAgICAgICAgICAgZWwgPSBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saW5lLW51bWJlcj1cIicgKyBkYXRhLnJlbW92ZUxpbmUgKyAnXCJdJyk7XG5cbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaWdobGlnaHRKUyk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSGlnaGxpZ2h0SlMpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogTG9naWMgdG8gd29yayB3aXRoIHN0eWxlc2hlZXRzLCBlLmcuIGFwcGx5ICYgc3dpdGNoIE5lbyBiYXNlZCB0aGVtZXNcbiAqIG1haW4uYWRkb24uSGlnaGxpZ2h0SlMgcmVxdWlyZXMgdGhpcyBmaWxlXG4gKiBAY2xhc3MgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBTdHlsZXNoZWV0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLmFkZG9uLlN0eWxlc2hlZXQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLmFkZG9uLlN0eWxlc2hlZXQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWy8vLi4uXX1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnYWRkVGhlbWVGaWxlcycsXG4gICAgICAgICAgICAgICAgJ2NyZWF0ZVN0eWxlU2hlZXQnLFxuICAgICAgICAgICAgICAgICdpbnNlcnRDc3NSdWxlcycsXG4gICAgICAgICAgICAgICAgJ3N3YXBTdHlsZVNoZWV0J1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VGb250QXdlc29tZSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdHlsZVNoZWV0KG51bGwsIG51bGwsIE5lby5jb25maWcuYmFzZVBhdGggKyAnbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudGhlbWVzLmxlbmd0aCA+IDAgJiYgTmVvLmNvbmZpZy50aGVtZXNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEdsb2JhbENzcygpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbnNlcnRUaGVtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRHbG9iYWxDc3MoKSB7XG4gICAgICAgIGxldCBjb25maWcgID0gTmVvLmNvbmZpZyxcbiAgICAgICAgICAgIHRoZW1lcyAgPSBjb25maWcudGhlbWVzLFxuICAgICAgICAgICAgZm9sZGVycyA9IGNvbmZpZy51c2VDc3NWYXJzID8gWydzcmMnLCAuLi50aGVtZXNdIDogW3RoZW1lc1swXV0sXG4gICAgICAgICAgICBlbnYgICAgID0gY29uZmlnLmVudmlyb25tZW50LFxuICAgICAgICAgICAgcGF0aCAgICA9IGVudi5zdGFydHNXaXRoKCdkaXN0LycpID8gZW52IDogKCdkaXN0LycgKyBlbnYpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGVtZXNbMF0pO1xuXG4gICAgICAgIGZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGZvbGRlci5zdGFydHNXaXRoKCduZW8tJykpIHtcbiAgICAgICAgICAgICAgICBmb2xkZXIgPSBmb2xkZXIuc3Vic3RyaW5nKDQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlU2hlZXQoXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGAke2NvbmZpZy5iYXNlUGF0aH0ke3BhdGh9L2NzcyR7Y29uZmlnLnVzZUNzc1ZhcnMgPyAnJyA6ICctbm8tdmFycyd9LyR7Zm9sZGVyfS9HbG9iYWwuY3NzYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5jbGFzc05hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmZvbGRlcnNcbiAgICAgKi9cbiAgICBhZGRUaGVtZUZpbGVzKGRhdGEpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGRhdGEuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY29uZmlnICAgID0gTmVvLmNvbmZpZyxcbiAgICAgICAgICAgIGVudiAgICAgICA9IGNvbmZpZy5lbnZpcm9ubWVudCxcbiAgICAgICAgICAgIHBhdGggICAgICA9IGVudi5zdGFydHNXaXRoKCdkaXN0LycpID8gZW52IDogKCdkaXN0LycgKyBlbnYpO1xuXG4gICAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aCgnTmVvLicpKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuc3Vic3RyaW5nKDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNwbGl0KCcuJykuam9pbignLycpO1xuXG4gICAgICAgIGRhdGEuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZm9sZGVyID09PSAnc3JjJyAmJiBjb25maWcudXNlQ3NzVmFycyB8fCBmb2xkZXIuaW5jbHVkZXMoJ3RoZW1lLScpICYmIChcbiAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy51c2VDc3NWYXJzICYmIGNvbmZpZy50aGVtZXMuaW5jbHVkZXMoYG5lby0ke2ZvbGRlcn1gKSB8fFxuICAgICAgICAgICAgICAgICAgICAhY29uZmlnLnVzZUNzc1ZhcnMgJiYgY29uZmlnLnRoZW1lc1swXSA9PT0gYG5lby0ke2ZvbGRlcn1gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTdHlsZVNoZWV0KFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBgJHtjb25maWcuYmFzZVBhdGh9JHtwYXRofS9jc3Mke2NvbmZpZy51c2VDc3NWYXJzID8gJycgOiAnLW5vLXZhcnMnfS8ke2ZvbGRlcn0vJHtjbGFzc05hbWV9LmNzc2BcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgZWl0aGVyIG5hbWUgZm9yIGEgbmVvIHRoZW1lIChlLmcuICduZW8tdGhlbWUtZGFyay5jc3MnKSBvciBwYXNzIGEgaHJlZlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2lkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbaHJlZl1cbiAgICAgKi9cbiAgICBjcmVhdGVTdHlsZVNoZWV0KG5hbWUsIGlkLCBocmVmKSB7XG4gICAgICAgIGlmICghbmFtZSAmJiAhaHJlZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHlsZVNoZWV0OiB5b3UgbmVlZCB0byBlaXRoZXIgcGFzcyBhIG5hbWUgb3IgYSBocmVmJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpLFxuICAgICAgICAgICAgICBlbnYgID0gTmVvLmNvbmZpZy5lbnZpcm9ubWVudCxcbiAgICAgICAgICAgICAgcGF0aCA9IGVudi5zdGFydHNXaXRoKCdkaXN0LycpID8gZW52IDogKCdkaXN0LycgKyBlbnYpLFxuICAgICAgICAgICAgICB1cmwgID0gaHJlZiA/IGhyZWYgOiBOZW8uY29uZmlnLmJhc2VQYXRoICsgcGF0aCArICcvJyArIG5hbWU7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5rLCB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICByZWwgOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICB0eXBlOiAndGV4dC9jc3MnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlblxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc1N0eWxlU2hlZXQodG9rZW4pIHtcbiAgICAgICAgbGV0IGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGgsXG4gICAgICAgICAgICBzaGVldDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYgJiYgc2hlZXQuaHJlZi5pbmNsdWRlcyh0b2tlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YS5ydWxlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpbnNlcnRDc3NSdWxlcyhkYXRhKSB7XG4gICAgICAgIGxldCBzdHlsZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25lb0R5bmFtaWNTdHlsZVNoZWV0JyksXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IGRhdGEucnVsZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3R5bGVTaGVldDtcblxuICAgICAgICBpZiAoIXN0eWxlRWwpIHtcbiAgICAgICAgICAgIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgICAgICAgICBzdHlsZUVsLmlkID0gJ25lb0R5bmFtaWNTdHlsZVNoZWV0JztcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZVNoZWV0ID0gc3R5bGVFbC5zaGVldDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoZGF0YS5ydWxlc1tpXSwgc3R5bGVTaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IG9wdHMuaW5jbHVkZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBvcHRzLmV4Y2x1ZGVkXG4gICAgICovXG4gICAgcmVtb3ZlU3R5bGVTaGVldHMob3B0cykge1xuICAgICAgICBsZXQgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgPSBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGgsXG4gICAgICAgICAgICBpbmNsdWRlZCA9IG9wdHMuaW5jbHVkZWQgfHwgW10sXG4gICAgICAgICAgICBleGNsdWRlZCA9IG9wdHMuaW5jbHVkZWQgfHwgW10sXG4gICAgICAgICAgICBzaGVldCwgcmVtb3ZlU2hlZXQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcblxuICAgICAgICAgICAgcmVtb3ZlU2hlZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoc2hlZXQuaHJlZikge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVkLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGVldC5ocmVmLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTaGVldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWQuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hlZXQuaHJlZi5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNoZWV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXQub3duZXJOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2hlZXQub3duZXJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ocmVmXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKi9cbiAgICBzd2FwU3R5bGVTaGVldChkYXRhKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGRhdGEuaHJlZik7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTdHlsZXNoZWV0KTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShTdHlsZXNoZWV0KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=