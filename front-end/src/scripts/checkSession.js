const fetch = require('./fetch');

/*
    TODO: 
        - Write fetch function to get check(true/false) from server
        - return boolean
        
*/
// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }


// module.exports = async function checkSession(url, body) {
//     const sessionID = getCookie("session");
//     if (sessionID) {
//         const url = "http://localhost:3000/sessions"
//         const body = {
//             "session": sessionID
//         }
//         const result = fetch(url, body);
//         return result;
//     } return false;
// }

module.exports = function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


