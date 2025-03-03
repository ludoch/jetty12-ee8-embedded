var selfLocation = window.location; 

/* JavaScript Date Update */

var timerJs = $.timer(function() {
    $("#timeJsDate").text(new Date().toLocaleTimeString());
});
timerJs.set({ time : 1000, autostart : true });

/* Servlet Update */

var urlServlet = window.location.toString().replace('/index.html','/') + "time";

var timerServlet = $.timer(function() {
    $.get(urlServlet, function(responseText) {
        $('#timeServlet').text(responseText);
    })
    .fail(function(jqXHR, textStatus){
        timerServlet.stop();
        $('#timeServlet').text(textStatus);
    });
});
timerServlet.set({ time : 1000, autostart : true });



