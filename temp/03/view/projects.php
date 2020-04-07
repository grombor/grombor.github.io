<header>
    <article id="projects">
        <div class="row">
            <div class="col-sm-12">
                <div class="card my-3">
                    <img class="card-img" src="/src/img/workshop.png" alt="My Workshop" id="top">
                    <div class="card-body">
                        <h5 class="card-title">Stay awhile and <strike>listen</strike> glance ...</h5>
                        <p class="card-text">This is a place, where you can see my projects. In the blink of an eye -
                            search, filter and examine. Try the smart searchbar!</p>
                        <p><input type="text" placeholder="try me!" ng-model="search"></p>
                        <p class="card-text"><small class="text-muted">You can use searchbox to easy find a project.</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card-deck">
                <div class="col-sm-6 col-lg-4 mb-3" ng-repeat="x in projects | filter : search">
                    <div class="card">
                        <img class="card-img-top" ng-src="{{x.href}}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{x.title}}</h5>
                            <p class="card-text">Project status: {{x.status}} <br>Author: K. Marchel</p>
                            <a ng-href="{{x.link}}" class="btn btn-warning lg" target="_blank">See more.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</header>