import test, { chromium, webkit,} from '@playwright/test';

                //-----Edge browser----//



test("Load RedBus: Edge and Flipkart: webkit", async()=>{
    //launching the browser

    const edgebrowser = await chromium.launch({channel:'msedge', headless:false});
    // opening a window
    const edgecontext = await edgebrowser.newContext();
    // opening a new page
    const edgepage = await edgecontext.newPage();
    //navigating to the url
    await edgepage.goto("https://www.redbus.in/");
    
    const edgeTitle = await edgepage.title();
    console.log(edgeTitle);     
    const edgeUrl = await edgepage.url();
    console.log(edgeUrl);


             //-----Webkit Browser -----//  
    
  


     await edgebrowser.close();
    

})

test("Load Flipkart: webkit", async()=>{

      const webkitBrowser = await webkit.launch({ headless:false});
    // opening a window
    const webkitContext = await webkitBrowser.newContext();
    // opening a new page
    const webkitPage = await webkitContext.newPage();
    //navigating to the url
    await webkitPage.goto("https://www.flipkart.com/");
    
    const webkitTitle = await webkitPage.title();
    console.log(webkitTitle);
    const webkitUrl = await webkitPage.url();
    console.log(webkitUrl);
 await webkitBrowser.close()
})