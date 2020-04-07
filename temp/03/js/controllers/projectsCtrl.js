app.controller("projectsCtrl", function($scope){
    $scope.title = "Projects";
    $scope.projects = [
        {"title": "template 02", "href": "/view/projects/02_small.jpg", "link": "/view/projects/02/index.html", "status": "Finished. Used: HTML + CSS + BootStrap + Firebase"},
        {"title": "Angular7 SPA test", "href": "/view/projects/ng7_small.jpg", "link": "https://my-portfolio-2f6a5.firebaseapp.com/", "status": "Finished. Used: Angular + HTML + CSS"},
        {"title": "template 01", "href": "/view/projects/01_small.jpg", "link": "/view/projects/01/index.html", "status": "Finished. Used: HTML + CSS"},
        {"title": "Wok! No. 1 Restaurant!", "href": "/view/projects/wok_small.jpg", "link": "/view/projects/wok1/index.htm", "status": "Finished. Used: HTML + CSS + BootStrap"},
        {"title": "Vanilla Beauty Room", "href": "/view/projects/vanillia_small.jpg", "link": "/view/projects/vanillia/index.html", "status": "Finished. Used: HTML + CSS + BootStrap"},
        {"title": "My Olde ePortfolio", "href": "/view/projects/eportfolio_small.jpg", "link": "/view/projects/olde/index.html", "status": "Finished. Used: HTML + CSS + BootStrap"},
        {"title": "Todo List", "href": "/view/projects/todolist_small.jpg", "link": "/view/projects/todolist.html", "status": "Finished. Used: jQuery + HTML + CSS + BootStrap"},
    ];
});