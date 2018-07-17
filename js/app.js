// JavaScript Document

(function() {
	"use strict";
	//onsole.log("SEAF Fired");
	//variables
var results;

var i;
var httpRequest;
var filterLinks = document.querySelectorAll(".color a");
var cardSelection = document.querySelector("#cardSelection");
var allSelect = document.querySelector('#all-filter');
var gradeFilter = document.querySelectorAll('.grade a');
var title = document.querySelector('#topOfScroll');


var gradePoint = ["n/a","A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F","Build Around A+","Build Around A","Build Around A-","Build Around B+","Build Around B","Build Around B-","Build Around C+","Build Around C","Build Around C-","Build Around D+","Build Around D","Build Around D-","Build Around F","S&#47;B A+","S&#47;B A","S&#47;B A-","S&#47;B B+","S&#47;B B","S&#47;B B-","S&#47;B C+","S&#47;B C","S&#47;B C-","S&#47;B D+","S&#47;B D","S&#47;B D-","S&#47;B F"];

var helpLink = document.querySelector("#build");

var submitButton = document.querySelector("#submitButton");

// var historicButton = document.querySelector("#historic");

var mainSet = "m19";
var setOne = "m19";
var setTwo = "";

var blue = [];
var red = [];
var black = [];
var green = [];
var white = [];

var firstSetDatabase = [];
var secondSetDatabase = [];
var filter = [];

var selectedCards = [];
var selectedCardsNumber = [];
var selectedCards2 = [];
var selectedCardsNumber2 = [];

// functions

$(document).ready(function(){
  $('#loaderOverlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
  $.ajax
      ({
        url: 'admin/phpscripts/ajaxQuery.php',
        type: 'GET',
        data: { genre: mainSet }
      })
      .done(function(data)
      {
        if(data && data !=="null")
        {
          data = JSON.parse(data)
          var set = firstSetDatabase;
          if(setTwo){
            var set = secondSetDatabase;
          }
          for(i=0;i<data.length;i++){
            set.push(data[i]);
          }
          populateContent(set);
        }else{
          console.log('something is wrong with your query!');
        }
      })
      .fail(function(ajaxCall, error, status){
        console.log('error');
        console.dir(ajaxCall);
    });
});

function populateContent(set){
  cardSelection.innerHTML = "";
  for(i=0 ; i<set.length ; i++){
    cardSelection.innerHTML += "<div><div class=\"image fit\"><img src=\"images/"+mainSet+"-card/"+set[i][""+mainSet+"_img"]+".png\" alt=\""+set[i][""+mainSet+"_name"]+"\" width=\"270\"/><h2>"+set[i][""+mainSet+"_name"]+"</h2><h3>Grade: "+gradePoint[set[i][""+mainSet+"_grade"]]+"</h3></div></div>";
  }
}

function filterLinksClicked(e){
  var dataFilter = this.getAttribute("data-filter-type");
  var set = firstSetDatabase;
  filter = [];
  if(setTwo){
    var set = secondSetDatabase;
  }
  if(this.id == 'all-filter'){
    populateContent(set);
  }else{
    for(i=0;i<set.length;i++){
        if(set[i][""+mainSet+"_"+dataFilter+""] == 1){
          filter.push(set[i]);
        }
      }
    populateFilteredContent();
  }
}

function populateFilteredContent(){
  cardSelection.innerHTML = "";
  for(i=0 ; i<filter.length ; i++){
		cardSelection.innerHTML += "<div><div class=\"image fit\"><img src=\"images/"+mainSet+"-card/"+filter[i][""+mainSet+"_img"]+".png\" alt=\""+filter[i][""+mainSet+"_name"]+"\" width=\"270\"/><h2>"+filter[i][""+mainSet+"_name"]+"</h2><h3>Grade: "+gradePoint[filter[i][""+mainSet+"_grade"]]+"</h3></div></div>";
	}
}

function gradeFilterLinksClicked(e){
  var dataFilter = this.getAttribute("data-filter-type");
  var set = firstSetDatabase;
  filter = [];
  if(setTwo){
    var set = secondSetDatabase;
  }
  if(dataFilter == 1){
    for(i=0;i<set.length;i++){
      if(set[i][""+mainSet+"_grade"]<4 && set[i][""+mainSet+"_grade"]>0){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<17 && set[i][""+mainSet+"_grade"]>13){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<30 && set[i][""+mainSet+"_grade"]>26){
        filter.push(set[i]);
      }
    }
  }else if(dataFilter == 2){
    for(i=0;i<set.length;i++){
      if(set[i][""+mainSet+"_grade"]<7 && set[i][""+mainSet+"_grade"]>3){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<20 && set[i][""+mainSet+"_grade"]>16){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<33 && set[i][""+mainSet+"_grade"]>29){
        filter.push(set[i]);
      }
    }
  }else if(dataFilter == 3){
    for(i=0;i<set.length;i++){
      if(set[i][""+mainSet+"_grade"]<10 && set[i][""+mainSet+"_grade"]>6){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<23 && set[i][""+mainSet+"_grade"]>19){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<36 && set[i][""+mainSet+"_grade"]>32){
        filter.push(set[i]);
      }
    }
  }else if(dataFilter == 4){
    for(i=0;i<set.length;i++){
      if(set[i][""+mainSet+"_grade"]<13 && set[i][""+mainSet+"_grade"]>9){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<26 && set[i][""+mainSet+"_grade"]>22){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]<39 && set[i][""+mainSet+"_grade"]>35){
        filter.push(set[i]);
      }
    }
  }else{
    for(i=0;i<set.length;i++){
      if(set[i][""+mainSet+"_grade"]==13){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]==26){
        filter.push(set[i]);
      }if(set[i][""+mainSet+"_grade"]==39){
        filter.push(set[i]);
      }
    }
  }
  populateFilteredContent();
}

function buildClicked(){
    $('#loaderOverlay').fadeIn('fast');
    $('#loaderOverlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
  if(setTwo){
    firstSetDatabase = [];
    $.ajax
    ({
      url: 'admin/phpscripts/ajaxQuery.php',
      type: 'GET',
      data: { genre: setOne }
    })

    .done(function(data)
    {
      if(data && data !=="null")
      {
        data = JSON.parse(data)
        for(i=0;i<data.length;i++){
          firstSetDatabase.push(data[i]);
        }
        populateBuild();
      }
      else
      {
        console.log('something is wrong with your query!');
      }
    })

    .fail(function(ajaxCall, error, status)
    {
      console.log('error');
      console.dir(ajaxCall);
    });
  }else{
    populateBuild();
  }
}

function populateBuild(){
  cardSelection.innerHTML = "";

  if(setTwo){
    cardSelection.innerHTML += "<section class=\"wrapper style3\" id=\"setOne\"><div class=\"inner\"><div><div class=\"box\"><div class=\"content\"><header class=\"align-center\"><img src=\"images/"+setOne+"-card/ixl-fav.png\"><h2>Ixalan</h2></header></div></div></div></div></section>";
  }

  for(i=0 ; i<firstSetDatabase.length ; i++){
    cardSelection.innerHTML += '<div class="number-wrap"><input class="image fit inputBuild firstSet number" style="background:none;" type="number" name="'+firstSetDatabase[i][""+setOne+"_id"]+'" value="0" min="0" step="1"><img class="topImgInput" src="images/'+setOne+'-card/build/'+firstSetDatabase[i][""+setOne+"_img"]+'.png" alt="'+firstSetDatabase[i][""+setOne+"_name"]+'"></div>';

		// This is the image code
		// <img class="topImgInput" src="images'+setOne+'-card/top'+firstSetDatabase[i][""+setOne+"_img"]+'.png" alt="'+firstSetDatabase[i][""+setOne+"_name"]+'">
  }

  if(setTwo){

    cardSelection.innerHTML += "<section class=\"wrapper style3\" id=\"setTwo\"><div class=\"inner\"><div><div class=\"box\"><div class=\"content\"><header class=\"align-center\"><img src=\"images/"+setTwo+"-card/rix-fav.png\"><h2>Rivals of Ixalan</h2></header></div></div></div></div></section>";

    for(i=0 ; i<secondSetDatabase.length ; i++){
      cardSelection.innerHTML += "<div class=\"number-wrap\"><div class=\"input\"><input class=\"image fit inputBuild secondSet number\" style=\"background:none;\" type=\"number\" name=\""+secondSetDatabase[i][""+setTwo+"_id"]+"\" value=\"0\" min=\"0\" step=\"1\"></div><img class=\"topImgInput\" src=\"images/"+setTwo+"-card/top/"+secondSetDatabase[i][""+setTwo+"_img"]+".png\" alt=\""+secondSetDatabase[i][""+setTwo+"_name"]+"\"></div>";
    }
  }

  $(function(){
    $('input.number').each(function(){
      $(this).before('<span class="fa fa-plus-circle up arrow"></span>').after('<span class="fa fa-minus-circle down arrow"></span>')
    });
    $('.number-wrap').on('click', '.arrow', function(e){
      var input = $(this).parents('div.number-wrap').children('input');
      var value = parseInt(input.attr('value'));
      var min = parseInt(input.attr('min'));
      var max = parseInt(input.attr('max'));
      if ($(this).hasClass('up')) { var op = +1;} else {var op = -1;}
      if (!(min==value && op == -1) && !(max==value && op == +1)) {
          input.attr('value', value + op)
      }
    })
  });
}

function checkedItems(){

  var selectedCards = [];
  var selectedCardsNumber = [];
  var selectedCards2 = [];
  var selectedCardsNumber2 = [];

  if(submitButton.classList.contains('hidden')){}else{submitButton.classList.add('hidden')};

  var selected_items = $('.image.fit').filter(function(index, value, className, name) {
    return (($(this).val())>0);
  }).toArray();

  for(i=0;i<selected_items.length;i++){
    if(selected_items[i].className=='image fit inputBuild firstSet number'){
      selectedCards.push(selected_items[i].name);
      selectedCardsNumber.push(selected_items[i].value);
    }
    if(selected_items[i].className=='image fit inputBuild secondSet number'){
      selectedCards2.push(selected_items[i].name);
      selectedCardsNumber2.push(selected_items[i].value);
    }
  }
  buildColor(selectedCards,selectedCardsNumber,selectedCards2,selectedCardsNumber2);
}

function buildColor(selectedCards,selectedCardsNumber,selectedCards2,selectedCardsNumber2){
  var blue = [];
  var red = [];
  var black = [];
  var green = [];
  var white = [];
  var a = 0;


  /*Filtering all the Grade B or higher cards*/
  for(i=0;i<selectedCards.length;i++){
    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<=6 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_blue"] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber[i];a++){
        blue.push(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]);
      }
    }
    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<=6 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_red"] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber[i];a++){
        red.push(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]);
      }
    }
    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<=6 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_green"] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber[i];a++){
        green.push(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]);
      }
    }
    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<=6 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_white"] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber[i];a++){
        white.push(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]);
      }
    }
    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<=6 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_black"] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber[i];a++){
        black.push(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]);
      }
    }
  }

  for(i=0;i<selectedCards2.length;i++){
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<=6 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_blue"] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber2[i];a++){
        blue.push(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_id"]);
      }
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<=6 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_red"] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber2[i];a++){
        red.push(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_id"]);
      }
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<=6 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_green"] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber2[i];a++){
        green.push(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_id"]);
      }
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<=6 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_white"] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber2[i];a++){
        white.push(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_id"]);
      }
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<=6 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_black"] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1){
      for(a=0;a<selectedCardsNumber2[i];a++){
        black.push(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_id"]);
      }
    }
  }

  /*Taking each color array and seeing which are the two best colors*/

  var numberOfGoodCards = blue.length+red.length+black.length+green.length+white.length;
  var colorNumbers = [blue.length,red.length,black.length,green.length,white.length];
  var sortedColors = colorNumbers.sort(function(a, b){return b-a});
  var twoBestColors=[];

  if(sortedColors[0] == blue.length){
      twoBestColors.push("blue");
  }
  if(sortedColors[0] == red.length){
      twoBestColors.push("red");
  }
  if(sortedColors[0] == black.length){
      twoBestColors.push("black");
  }
  if(sortedColors[0] == white.length){
      twoBestColors.push("white");
  }
  if(sortedColors[0] == green.length){
      twoBestColors.push("green");
  }

  if(sortedColors[1] == blue.length){
      twoBestColors.push("blue");
  }
  if(sortedColors[1] == red.length){
      twoBestColors.push("red");
  }
  if(sortedColors[1] == black.length){
      twoBestColors.push("black");
  }
  if(sortedColors[1] == white.length){
      twoBestColors.push("white");
  }
  if(sortedColors[1] == green.length){
      twoBestColors.push("green");
  }
  if(sortedColors[2] == blue.length){
      twoBestColors.push("blue");
  }
  if(sortedColors[2] == red.length){
      twoBestColors.push("red");
  }
  if(sortedColors[2] == black.length){
      twoBestColors.push("black");
  }
  if(sortedColors[2] == white.length){
      twoBestColors.push("white");
  }
  if(sortedColors[2] == green.length){
      twoBestColors.push("green");
  }

// Populate the Deck from the selection

  title.innerHTML = "<div class=\"inner\"><div><div class=\"content\"><header class=\"align-center\"><h2>Your two best colors were: "+twoBestColors[0].toUpperCase()+" and "+twoBestColors[1].toUpperCase()+".</h2></header></div></div></div>";

  cardSelection.innerHTML = "";

	//loop through the selection
  for(i=0 ; i<selectedCards.length ; i++){
		// Main deck.
		// There are seperate functions for single colored cards and multicolored
		// because otherwise it will select cards that are multicolored but have colors
		// outside of the 2 best colors

		for(a=0 ; a<selectedCardsNumber[i] ; a++){
			// This selects all the non-multicolored cards that are from the 2 best colors that are B- or higher
	    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_colorless"] == 1){
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<10){
	        cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
	      }
	    }
			// This selects all the multicolored cards that have the 2 best colors only
	    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1){
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<10){
	        cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
	      }
	    }

			// Build Around Cards
			// This selects the non-multicolored cards that are build around B- or higher
			if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_colorless"] == 1){
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<23 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>13){
	      	cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
	    }
			// This selects the multicolored cards that are build around B- or higher
	    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1){
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<23 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>13){
	      	cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
	    }

	    // sideboard cards
			// non multicolored cards that are Sideboard B- or higher
	    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_colorless"] == 1){
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<36 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>26){
	      	cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
	    }
			// multicolored cards that are sideboard B- or higher
	    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1){
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<36 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>26){
	        cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
	    }
		}
	}

  /*Second Set*/
	// We do the exact same steps as the first set

  for(i=0 ; i<selectedCards2.length ; i++){
		var cardGalleryTwo = cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setTwo+'-card/'+secondSetDatabase[(selectedCards[i])-1][''+setTwo+'_img']+'.png" alt=""></a><h2>'+secondSetDatabase[(selectedCards[i])-1][''+setTwo+'_name']+'</h2><h3>Grade: '+gradePoint[secondSetDatabase[(selectedCards[i])-1][''+setTwo+'_grade']]+'</h3></div></div>';

    /*Main Cards*/

    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[0]+""] == 1 || secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[1]+""] == 1 || secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_colorless"] == 1){
      if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<10){
        cardGalleryTwo;
			}
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[0]+""] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[1]+""] == 1){
      if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<10){
        cardGalleryTwo;
			}
    }

    /*Side Board Cards*/

    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[0]+""] == 1 || secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[1]+""] == 1 || secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_colorless"] == 1){
      if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<23 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]>13){
        cardGalleryTwo;
			}
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[0]+""] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[1]+""] == 1){
      if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<23 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]>13){
        cardGalleryTwo;
			}
    }

    /*Build Around Cards*/

    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[0]+""] == 1 || secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[1]+""] == 1 || secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_colorless"] == 1){
      if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_multi"] != 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<36 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]>26){
        cardGalleryTwo;
			}
    }
    if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[0]+""] == 1 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_"+twoBestColors[1]+""] == 1){
      if(secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]<36 && secondSetDatabase[(selectedCards2[i])-1][""+setTwo+"_grade"]>26){
        cardGalleryTwo;
			}
    }
  }

	// This shows the third best color which the user can choose to add or not
	// so this will be below and seperate to make it obvious
	cardSelection.innerHTML += "<section class=\"wrapper style3\"><div class=\"inner\"><div><div class=\"content\"><header class=\"align-center\"><h2>Your 3rd best color was: "+twoBestColors[2].toUpperCase()+"<br>with "+sortedColors[2]+" B- or higher cards</h2></header></div></div></div></section><div class=\"hidden\"></div>";

	for(i=0 ; i<selectedCards.length ; i++){
		// This checks for the 3rd best color
    if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[2]+""] == 1){
			for(a=0 ; a<selectedCardsNumber[i] ; a++){
				// This checks for non-multicolored cards
	      if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<10){
	        cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
				// This checks for cards of the third color that share a color with the 2 best colors
				if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1){
					if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<10){
			      cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
					}
	      }

	// Build Around
				// This checks for non-multicolored cards that are Buid Around B- or higher
				if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<23 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>13){
	        cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
				// This checks for multicolored cards that are Build Around B- or higher
				if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1){
					if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<23 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>13){
			      cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
					}
	      }

	// sideboard
				// This checks for cards that are Sideboard B- or higher
				if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_multi"] != 1 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<36 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>26){
	        cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
				}
				// This checks for multicolored cards that are Sideboard B- or higher
				if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[0]+""] == 1 || firstSetDatabase[(selectedCards[i])-1][""+setOne+"_"+twoBestColors[1]+""] == 1){
					if(firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]<36 && firstSetDatabase[(selectedCards[i])-1][""+setOne+"_grade"]>26){
			      cardSelection.innerHTML += '<div><div class="image fit"><a href=""><img src="images/'+setOne+'-card/'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_img']+'.png" alt=""></a><h2>'+firstSetDatabase[(selectedCards[i])-1][''+setOne+'_name']+'</h2><h3>Grade: '+gradePoint[firstSetDatabase[(selectedCards[i])-1][''+setOne+'_grade']]+'</h3></div></div>';;
					}
	      }
			}
    }
	}
}

for(i=0 ; i<filterLinks.length ; i++){
  filterLinks[i].addEventListener("click",filterLinksClicked,false);
}

for(i=0 ; i<gradeFilter.length ; i++){
  gradeFilter[i].addEventListener("click",gradeFilterLinksClicked,false);
}

allSelect.addEventListener("click",filterLinksClicked,false);
// historicButton.addEventListener("click",filterLinksClicked,false);

helpLink.addEventListener("click",buildClicked,false);

submitButton.addEventListener("click",checkedItems,false);
})();
