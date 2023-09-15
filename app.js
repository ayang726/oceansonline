/*
 * Organization: Awesome Present
 * Project: oceanschurch-online
 *
 * File: app.js
 * Created: 09/15/2023
 * Author: Alex Yang
 *
 * Oceans Church Online Moderating Helper files
 */

/*=== Domain redirect Begin ===*/
/* 
Due to the fact that multiple domains were purchased 
for the purpose of building out oceans church online 
moderating functions www.theoceanschurch.online domain 
will not be renewed on October 17, 2023. */

/*
===========================================================================
    Due to the fact that multiple domains were purchased for the purpose 
    of building out oceans church online moderating functions 
    www.theoceanschurch.online domain will not be renewed on October 17, 
    2023. Therefore moderators.theoceanschurch.online will cease to 
    function
    The alternative oceanschurchonline.com will continue to be used to 
    serve any online moderating or other funtions.
===========================================================================
*/

const Notion_Static_Link =
    "https://simple-mice-12f.notion.site/online-moderating-content-6d0ab6c906444f559d1de9a587388f88";
const Old_Link = "http://moderators.theoceanschurch.online";
const New_Link = "http://moderators.oceanschurchonline.com";
const Alt_Link = "http://oceanschurchonline.com";
// window.location.href = Old_Link;
// window.location.href = Alt_Link;
// window.location.href = Old_Link;
// axios
//     .get(New_Link)
//     .then(function (response) {
//         // handle success
//         console.log("success");
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed
//     });
function reqListener() {
    console.log("test");
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", New_Link);
req.send();
/*=== Domain redirect End ===*/
