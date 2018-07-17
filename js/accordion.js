(function() {
	"use strict";

var filter = document.querySelectorAll('.button-filter');
var i;
var allFilter = document.querySelector('#all-filter');
var colorFilter = document.querySelectorAll('.color a');
var gradeFilter = document.querySelectorAll('.grade a');
var buildFilter = document.querySelector('#build');
var colorLink = document.querySelector("#color-filter");
var gradeLink = document.querySelector('#grade-filter');
var submitButton = document.querySelector("#submitButton");

var title = document.querySelector('#topOfScroll');

var menuClose = document.querySelector('#header a');

var menu = document.querySelector('#menu');

var top = document.querySelector('#three');

var buildMenu = document.querySelector('#buildIconMenu');
var buildMenuSets = document.querySelectorAll('.buildScrollIcon');

var setNumber = 1;

// All button is clicked in dropdown menu
function allClicked(){
		// Changes the title to "All"
    title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">ALL</h2></header></div>";

    var filterTab = document.querySelector('.color');

    if(filterTab.classList.contains('hidden')){}else{filterTab.classList.add('hidden')};

    menu.classList.remove('visible');

    TweenMax.to(window,1,{scrollTo:{y:"#topOfScroll", autoKill:false}, ease: Elastic.easeOut.config(0.5, 1)});

    if(submitButton.classList.contains('hidden')){}else{submitButton.classList.add('hidden')};

    if(buildMenu.classList.contains('hidden')){}else{buildMenu.classList.add('hidden')};
}

function colorClicked(){
    var filter = this.getAttribute("data-filter-type");

        if(filter === 'white'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">WHITE</h2></header></div>";
        }
        if(filter === 'blue'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">BLUE</h2></header></div>";
        }
        if(filter === 'green'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">GREEN</h2></header></div>";
        }
        if(filter === 'red'){
           title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">RED</h2></header></div>";
        }
        if(filter === 'black'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">BLACK</h2></header></div>";
        }
        if(filter === 'multi'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">MULTI-COLOR</h2></header></div>";
        }
        if(filter === 'colorless'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">COLORLESS</h2></header></div>";
        }
				if(filter === 'historic'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">HISTORIC</h2></header></div>";
        }

				var filterTab = document.querySelector('.color');

        if(filterTab.classList.contains('hidden')){}else{filterTab.classList.add('hidden')};

        if(submitButton.classList.contains('hidden')){}else{submitButton.classList.add('hidden')};

        if(buildMenu.classList.contains('hidden')){}else{buildMenu.classList.add('hidden')};

    menu.classList.remove('visible');

    TweenMax.to(window,1,{scrollTo:{y:"#topOfScroll", autoKill:false}, ease: Elastic.easeOut.config(0.5, 1)});

}

function gradeClicked(){
    var filter = this.getAttribute("data-filter-type");
    var filterTab = document.querySelector('.grade');

        if(filter === '1'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">GRADE: A</h2></header></div>";
        }
        if(filter === '2'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">GRADE: B</h2></header></div>";
        }
        if(filter === '3'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">GRADE: C</h2></header></div>";
        }
        if(filter === '4'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">GRADE: D</h2></header></div>";
        }
        if(filter === '5'){
            title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><p class=\"special\">Showing all cards filtered by:</p><h2 id=\"filter-header\">GRADE: F</h2></header></div>";
        }

    if(filterTab.classList.contains('hidden')){}else{filterTab.classList.add('hidden')};

    if(submitButton.classList.contains('hidden')){}else{submitButton.classList.add('hidden')};

    if(buildMenu.classList.contains('hidden')){}else{buildMenu.classList.add('hidden')};

    menu.classList.remove('visible');

    TweenMax.to(window,1,{scrollTo:{y:"#topOfScroll", autoKill:false}, ease: Elastic.easeOut.config(0.5, 1)});


}

function buildClicked(){
    title.innerHTML = "<div class=\"inner\"><header class=\"align-center\"><h2 id=\"filter-header\">BUILD</h2></header></div>";
    var filterTab = document.querySelector('.color');

    if(filterTab.classList.contains('hidden')){}else{filterTab.classList.add('hidden')};

    if(setNumber == 2){
        buildMenu.classList.remove('hidden');
    }

    menu.classList.remove('visible');

    TweenMax.to(window,1,{scrollTo:{y:"#topOfScroll", autoKill:false}, ease: Elastic.easeOut.config(0.5, 1)});

    submitButton.classList.remove('hidden');

}

function submitClicked(){
    TweenMax.to(window,1,{scrollTo:{y:"#topOfScroll"}, ease: Elastic.easeOut.config(0.5, 1)});
    $('#loaderOverlay').fadeIn('fast');
    $('#loaderOverlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
    if(setNumber == 2){
        if(buildMenu.classList.contains('hidden')){}else{buildMenu.classList.add('hidden')};
    }
}

function menuClicked(){
    var filterTab = document.querySelector('.color');

    if(filterTab.classList.contains('hidden')){}else{filterTab.classList.add('hidden')};
}

function setOneClicked(){
    TweenMax.to(window,1,{scrollTo:{y:"#setOne", autoKill:false}, ease: Elastic.easeOut.config(0.5, 1)});
}

function setTwoClicked(){
    TweenMax.to(window,1,{scrollTo:{y:"#setTwo", autoKill:false}, ease: Elastic.easeOut.config(0.5, 1)});
}

function colorLinkClicked(){
  var filterTab = document.querySelector('.color');

  filterTab.classList.toggle('hidden')
}

function gradeLinkClicked(){
  var filterTab = document.querySelector('.grade');

  filterTab.classList.toggle('hidden')
}

allFilter.addEventListener("click",allClicked,false);
buildFilter.addEventListener("click",buildClicked,false);

for(i=0;i<colorFilter.length;i++){
    colorFilter[i].addEventListener("click",colorClicked,false);
}

for(i=0;i<gradeFilter.length;i++){
    gradeFilter[i].addEventListener("click",gradeClicked,false);
}

menuClose.addEventListener("click",menuClicked,false);

buildMenuSets[0].addEventListener("click",setOneClicked,false);
buildMenuSets[1].addEventListener("click",setTwoClicked,false);
colorLink.addEventListener("click",colorLinkClicked,false);
gradeLink.addEventListener("click",gradeLinkClicked,false);
submitButton.addEventListener("click",submitClicked,false);

//In case historic becomes relevant again in future sets
// historic.addEventListener("click",colorClicked,false);


})();
