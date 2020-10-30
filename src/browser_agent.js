import { reactive, computed, toRefs } from '@vue/composition-api';

export function useBrowserAgentRelated( root ) {
    const event = reactive({
      browserAgent: computed(()=> {
        var inBrowser = typeof window !== "undefined";
        var browser_UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var browser_isIE = browser_UA && /msie|trident/.test(browser_UA);
        var browser_isIE11 = browser_isIE && browser_UA.indexOf('11.0') > 0;
        var browser_isEdge = browser_UA && browser_UA.indexOf('edge/') > 0;
        var browser_isAndroid = browser_UA && browser_UA.indexOf('android') > 0;
        var browser_isIOS = browser_UA && /iphone|ipad|ipod|ios/.test(browser_UA);
        var browser_isChrome = browser_UA && /chrome\/\d+/.test(browser_UA) && !browser_isEdge;
        var browser_isGoogleChrome = browser_isChrome && !!window.googleapis;
        var browser_isChromeDerivate = browser_isChrome && !browser_isGoogleChrome;
        var browser_isFirefox = browser_UA && !!browser_UA.indexOf("firefox/");
  
        //ANOTHER:
        // var browser_FFversion = browser_isFirefox && browser_UA.match(/firefox\/(\d+)/)[1];
        // FF version then stored in array[1]
        
  
        return { 
          isIE: browser_isIE, 
          isIE11: browser_isIE11,
          isEdge: browser_isEdge,
          isAndroid: browser_isAndroid,
          isIOS: browser_isIOS,
          isChrome: browser_isChrome,
          isGoogleChrome: browser_isGoogleChrome,
          isChromeDerivate: browser_isChromeDerivate,
          isFirefox: browser_isFirefox
        }    
      }) 
    })
    
    
    return { ...toRefs(event) }
  }