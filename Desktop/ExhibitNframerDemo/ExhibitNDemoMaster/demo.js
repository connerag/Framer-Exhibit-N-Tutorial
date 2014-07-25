var position = 1;
var myLayers;
var canClick = false;

var makeWelcomeButton = function() {
myLayers = Framer.Importer.load("imported/exhibitnmainscreen") 
myLayers.Home.bringToFront();
myLayers.HomeBlur1.bringToFront();
myLayers.HomeBlur2.bringToFront();
		welcome = new Layer({
  			x: 15,
  			y: 150,
  			width: 930,
  			height: 330,
  			scale: 1,
  			borderRadius: "60px",
  			backgroundColor: "#33b5e5",
  			opacity: 0
		});

		welcome.html = '<br><br><br>Welcome to the Exhibit-N Tutorial! The full functionality of Exhibit-N has been frozen to emphasize specific features of the app. The guide bubbles will help explain the main features of Exhibit-N and how to use them. Tap anywhere on the screen to advance through the tutorial. ';

    welcome.classList.add('framer-bubble');
    welcome.classList.add('framer-big-bubble');
		welcome.style = {
 			fontFamily: 'Calibri',
  			fontSize: '30px',
  			textAlign: 'center',
          color: 'white',

 			lineHeight: '30px'
		};

 		welcome.animate({
  			properties: {
    			scale: 1,
    			opacity: 1
  			},
		}); 

		welcome.states.add({
  			stateA: {
    			opacity: 0,
   				scale: 0
  			}
		}); 

		mainClickable.bringToFront();
}

var addCaseButton = function() {

	myLayers.Home.sendToBack();
	myLayers.HomeBlur2.sendToBack();
	welcome.states.next();
	
	addCaseDescription = new Layer({
  		x: 400,
 		  y: 105,
  		width: 300,
  		height: 105,
  		opacity: 0,
  		scale: 1
	});

	Utils.labelLayer(addCaseDescription, "The Add case button will help you get started using Exhibit-N! Add Case starts a new blank case and lets you begin to collect evidence.");
  setBubbleStyle(addCaseDescription);
	addCaseDescription.placeBehind(welcome);

	addCaseDescription.states.add({
  		stateA: {
    		opacity:1,
    		scale: 1,
 		},
  		stateB: {
    		opacity: 0
  		}
	}); 

	addCaseDescription.states.next();
	mainClickable.bringToFront();
}	

var statusDetails = function() { 
	addCaseDescription.states.next();
	myLayers.HomeBlur2.bringToFront();
	myLayers.HomeBlur1.sendToBack();


	statusDetails = new Layer({
  		x: 480,
 		  y: 430,
  		width: 270,
  		height: 105,  
  		opacity: 0,
  		scale: 1
	});

	Utils.labelLayer(statusDetails, "Exhibit-N syncs all of its cases with a secure cloud server so that every member of the team has access to the information.");
  setBubbleStyle(statusDetails);
	statusDetails.placeBehind(addCaseDescription);

	statusDetails.states.add({
  		stateA: {
    		opacity:1,
    		scale: 1
  		},
  		stateB: {
    		opacity: 0
  		}
	}); 

	statusDetails.states.next();
	welcome.destroy();
}

var statusDetails2 = function() { 
  statusDetails.states.next();


  statusDetails2 = new Layer({
      x: 480,
      y: 435,
      width: 300,
      height: 120,
      opacity: 0,
      scale: 1
  });

  Utils.labelLayer(statusDetails2, "These icons allow the investigator to see if a case has been synced and also shows whether he or she has permission to edit the information.");
  setBubbleStyle(statusDetails2);
  statusDetails2.placeBehind(addCaseDescription);

  statusDetails2.states.add({
      stateA: {
        opacity:1,
        scale: 1
      },
      stateB: {
        opacity: 0
      }
  }); 

  statusDetails2.states.next();
  welcome.destroy();
}

var tapCaseButton = function() {
	statusDetails2.states.next();
	myLayers.HomeBlur1.bringToFront();
	myLayers.HomeBlur2.bringToFront();
	myLayers.Home.bringToFront();

	tapCase = new Layer({
  		x: 15,
 	 	y: 443,
  		width: 930,
  		height: 115,
  		borderRadius: "24px",
  		scale: 1,
  		opacity: 0
	});

	Utils.labelLayer(tapCase, "Tap on this case to enter it!");

	tapCase.style = {
  		fontFamily: 'Calibri',
  		fontSize: '30px',
  		textAlign: 'center',
  		lineHeight: '110px'
	};

	tapCase.placeBehind(statusDetails);


	tapCase.states.add({
  
  		stateA: {
    		opacity:1,
    		scale: 1
  		},
  		stateB: {
  			scale: 0,
    		opacity: 0
  		}
	}); 

	addCaseDescription.destroy();
	tapCase.states.next();
} 

var loadDashBoard = function() {
	tapCase.states.next();
	myLayers2 = Framer.Importer.load("imported/dashboardscreen1")
  setTimeout(func, 2000);

  function func() {
    myLayers.Home.destroy();
    myLayers.HomeBlur.destroy();
    myLayers.HomeBlur1.destroy();
    myLayers.HomeBlur2.destroy();
}


	dashboardIntro = new Layer({
  		x: 315,
  		y: 250,
  		width: 600,
  		height: 150,
  		scale: 1,
  		opacity: 0,
  
	});

	Utils.labelLayer(dashboardIntro, "<br><br><br>Welcome to the Dashboard. All gathered evidence is stored<br>here so it can be easily sorted and analyzed.");
  setBubbleStyle(dashboardIntro);

	dashboardIntro.states.add({
  		stateA: {
   			opacity:1,
   			scale: 1
  	}
	}); 

	dashboardIntro.states.next();
	mainClickable.bringToFront();
}

var timelineSpotlight = function() {

  myLayers2.Dashboard1.sendToBack();
  myLayersScroll = Framer.Importer.load("imported/photoscroll")
  myLayersScroll.PhotoScrollImage.placeBehind(myLayers2.DashboardBlur);

myLayersScroll.PhotoScrollImage.y = 100;

var timerScroll = setInterval(function(){
 myTimerScroll()
},2000);

  function myTimerScroll() {
    myLayersScroll.PhotoScrollImage.animate({
        properties: {
        y: -1550
        }, 
        time: 2.2
      
  });
  }
  

  dashboardIntro.states.next();
  tapCase.destroy();

timeLineDescription = new Layer({
  x: 285,
  y: 120,
  width: 300,
  height: 125,
  scale: 1,
  opacity: 0
  
});

Utils.labelLayer(timeLineDescription, " The left scroll menu is called the timeline. It shows all of the collected evidence and lists it chronologically to give the user a useful visual representation of the ordering of events.");
setBubbleStyle(timeLineDescription);

timeLineDescription.states.add({
  stateA: {
   opacity:1,
   scale: 1
  },
  stateB: {
    opacity:0
  }
}); 

timeLineDescription.states.next();
mainClickable.bringToFront();

}

var filterSpotlight = function() {
myLayersScroll.PhotoScrollImage.destroy();
timeLineDescription.states.next();
myLayers2.DashboardBlur.sendToBack();

infoFilter = new Layer({
  x: 15,
  y: 110,
  width: 300,
  height: 85,
  scale: 1,
  opacity: 0
  
});

Utils.labelLayer(infoFilter, "Above the timeline is a filter. Here you can isolate the evidence items in the timeline by category.");
 setBubbleStyle(infoFilter);



infoFilter.states.add({
  stateA: {
   opacity:1,
   scale: 1
  },
  stateB: {
    opacity:0
  }
}); 

infoFilter.states.next();
mainClickable.bringToFront();

}

var mapSpotlight = function() {


myLayers3 = Framer.Importer.load("imported/dashboardscreen2")

setTimeout(func2, 2000);

  function func2() {
  infoFilter.states.next();
  timeLineDescription.destroy();
  myLayers2.DashboardBlur.destroy();
  myLayers2.DashboardBlurFilter.destroy();
  myLayers2.Dashboard1.destroy();
}


infoMap = new Layer({
  x: 11,
  y: 110,
  width: 240,
  height: 135,
  scale: 1,
  opacity: 0
  
});

Utils.labelLayer(infoMap, "<br>All of the items listed in the timeline can be viewed by their location on the interactive map to the right of the timeline.");
 setBubbleStyle(infoMap);



infoMap.states.add({
  stateA: {
   opacity:1,
   scale: 1
  },

}); 

infoMap.states.next();
mainClickable.bringToFront();


}

var mapSpotlight2 = function() {

myLayers3.DashboardBlurMap1.destroy();
infoMap.states.next();
infoFilter.destroy();

infoMap2 = new Layer({
  x: 11,
  y: 110,
  width: 240,
  height: 150,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoMap2, "Exhibit-N allows the investigor to easily analize the evidence they collect. To select an evidence item, either tap on it in the time line or tap on the map marker that represents it.");
 setBubbleStyle(infoMap2);

infoMap2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoMap2.states.animationOptions = {
  curve: "spring",
  curveOptions: {
    tension: 200,
    friction: 12
  }
};

infoMap2.states.next();
mainClickable.bringToFront();

}

var mapSpotlight3 = function() {
myLayers3.DashboardBlurMap2.destroy();
infoMap2.states.next();
infoMap.destroy();

infoMap3 = new Layer({
  x: 11,
  y: 110,
  width: 240,
  height: 150,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoMap3, "<br>To view the distance between two points, start by taping the street sign icon in the menu at the bottom of the map.");
 setBubbleStyle(infoMap3);

infoMap3.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoMap3.states.animationOptions = {
  curve: "spring",
  curveOptions: {
    tension: 200,
    friction: 12
  }
};

infoMap3.states.next();
mainClickable.bringToFront();

}

var mapSpotlight4 = function() {

myLayers3.DashboardBlurMap3.destroy();
infoMap3.states.next();
infoMap2.destroy();

infoMap4 = new Layer({
  x: 11,
  y: 110,
  width: 240,
  height: 120,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoMap4, "<br>Tap on the grey map marker to display the distance between both locations.");
 setBubbleStyle(infoMap4);

infoMap4.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoMap4.states.animationOptions = {
  curve: "spring",
  curveOptions: {
    tension: 200,
    friction: 12
  }
};

  infoMap4.states.next();
mainClickable.bringToFront();
}

var mapSpotlight5 = function() {


myLayers4 = Framer.Importer.load("imported/dashboardscreen3")

setTimeout(func3, 2000);

  function func3() {
  myLayers3.DashboardBlurMap4.destroy();
  infoMap4.states.next();
  infoMap3.destroy();
  myLayers3.DashboardBlurMapMain.destroy();
}


myLayers4.DashboardBlurNavigate.sendToBack();

//TODO: fix photoshop file so evidence manager button doesn't show


infoMap5 = new Layer({
  x: 11,
  y: 110,
  width: 240,
  height: 200,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoMap5, "<br> As you can see, the closest distance between the two locations is shown at the bottom. To view the immediate threat radius, tap on the second option button at the bottom of the screen.");
 setBubbleStyle(infoMap5);

infoMap5.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoMap5.states.animationOptions = {
  curve: "spring",
  curveOptions: {
    tension: 200,
    friction: 12
  }
};

  infoMap5.states.next();
mainClickable.bringToFront();
}


var mapSpotlight6 = function() {

myLayers4.DashboardBlurMap5.destroy();
infoMap5.destroy();
infoMap4.destroy();

infoMap6 = new Layer({
  x: 11,
  y: 110,
  width: 240,
  height: 120,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoMap6, "<br>The threat radius can be used to indicate the probability that a suspect is in the shaded area. ");
 setBubbleStyle(infoMap6);

infoMap6.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoMap6.states.next();
mainClickable.bringToFront();

}

var evidenceManagerSpotlight = function() { 

myLayers4.DashboardBlurMap6.destroy();
infoMap6.states.next();
infoMap5.destroy();
myLayers4.DashboardBlurNavigate.bringToFront();

infoEvidenceManager1 = new Layer({
  x: 690,
  y: 60,
  width: 250,
  height: 60,
  scale: 1,
  opacity: 0,

});

Utils.labelLayer(infoEvidenceManager1, "The evidence manager is your portal to all evidence collection.");
 setBubbleStyle(infoEvidenceManager1);

infoEvidenceManager1.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoEvidenceManager1.states.next();
mainClickable.bringToFront();

}

var evidenceManagerSpotlight2 = function() { 

myLayers4.DashboardBlurNavigate.destroy();
infoEvidenceManager1.states.next();
infoMap6.destroy();

infoEvidenceManager2 = new Layer({
  x: 700,
  y: 107,
  width: 250,
  height: 85,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoEvidenceManager2, "The evidence menu manager split the app into two sections: evidence collection and organization.");
 setBubbleStyle(infoEvidenceManager2);


infoEvidenceManager2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoEvidenceManager2.states.next();
mainClickable.bringToFront();

}

var evidenceManagerSpotlight3 = function() {

infoEvidenceManager2.states.next();
infoEvidenceManager1.destroy();

  infoManagerCrimeScene = new Layer({
  x: 700,
  y: 173,
  width: 250,
  height: 65,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoManagerCrimeScene, "Tap the button labeled \"Crime Scenes\" to navigate to the crime scene section.");

 setBubbleStyle(infoManagerCrimeScene);


infoManagerCrimeScene.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

tapCrimeScene = new Layer({
  x: 272,
  y: 175,
  width: 415,
  height: 30,
  scale: 1,
  opacity: 0,
  backgroundColor: "#33b5e5",
  
});

tapCrimeScene.style = {
  fontFamily: 'Calibri',
  fontSize: '20px',
  textAlign: 'center',
  lineHeight: '20px',
  color: 'white',
  backgroundColor: "#33b5e5"
};


tapCrimeScene.states.add({
  stateA: {
   opacity: .25,
   scale: 1,
  }
}); 

infoManagerCrimeScene.states.next();
tapCrimeScene.states.next();
mainClickable.bringToFront();

}


var evidenceSections = function() {



myLayers5 = Framer.Importer.load("imported/sketchscreen")

setTimeout(func4, 2000);

  function func4() {
  
  infoManagerCrimeScene.states.next();
  infoEvidenceManager2.destroy();
  myLayers4.Dashboard5.destroy();
  myLayers4.DashboardBlurMap5.destroy();
  myLayers4.DashboardBlurMap6.destroy();
  myLayers4.DashboardBlurNavigate.destroy();
}

myLayers5.DemoCaseBlur.placeBehind(myLayers5.MenuSpotlight);

  evidenceSectionsInfo = new Layer({
  x: 165,
  y: 165,
  width: 250,
  height: 85,
  scale: 1,
  opacity: 0
});

//TODO: menu spotlight
Utils.labelLayer(evidenceSectionsInfo, " The menu to the left will let the user easily access all of the sections with a simple tap.");

 setBubbleStyle(evidenceSectionsInfo);


evidenceSectionsInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

infoManagerCrimeScene.states.next();
evidenceSectionsInfo.states.next();
tapCrimeScene.states.next();
mainClickable.bringToFront();

}


var crimeScenesMenuSpotlight = function() {

myLayers5.MenuSpotlight.destroy();
myLayers5.DemoCaseBlur.placeBehind(myLayers5.DemoCaseSketchButton);

  infoCaseSelect = new Layer({
  x: 155,
  y: 335,
  width: 350,
  height: 65,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoCaseSelect, "In the crime scene section, the user can create and view various crime scenes relevant to the case.");

 setBubbleStyle(infoCaseSelect);


infoCaseSelect.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

evidenceSectionsInfo.states.next();
infoCaseSelect.states.next();
mainClickable.bringToFront();

}


var sketchSpotlight = function() {

infoCaseSelect.states.next();
infoManagerCrimeScene.destroy();
myLayers5.DemoCase1.destroy();


  infoSketchSelect = new Layer({
  x: 695,
  y: 60,
  width: 260,
  height: 85,
  scale: 1,
  opacity: 0 
});

Utils.labelLayer(infoSketchSelect, "<br>This button will activate the Sketch Tool.");

 setBubbleStyle(infoSketchSelect);


infoSketchSelect.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 

evidenceSectionsInfo.destroy();

infoSketchSelect.states.next();
mainClickable.bringToFront();

}


var sketchScreen = function() {

infoCaseSelect.destroy();
infoSketchSelect.states.next();
myLayers5.DemoCaseSketchButton.destroy();
myLayers5.DemoCaseBlur.destroy();


  infoSketchScreen = new Layer({
  x: 10,
  y: 50,
  width: 340,
  height: 90,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoSketchScreen, "Here you can sketch the crime scene from scratch or add details to an image that is already stored on the device. Tap on the screen to draws.");

 setBubbleStyle(infoSketchScreen);


infoSketchScreen.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


infoSketchScreen.states.next();
mainClickable.bringToFront();

}

var sketchScreen2 = function() {

infoSketchSelect.destroy();
infoSketchScreen.destroy();
myLayers5.Sketch2.bringToFront();


  infoSketchScreen2 = new Layer({
  x: 10,
  y: 50,
  width: 340,
  height: 65,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoSketchScreen2, "Wow, nice sketch! Tap the save botton on the bottom right of the screen to save the sketch.");

 setBubbleStyle(infoSketchScreen2);


infoSketchScreen2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


infoSketchScreen2.states.next();
mainClickable.bringToFront();

}

var sketchScreen3 = function() {

infoSketchScreen2.destroy();
//myLayers.Sketch2.destroy();
myLayers5.Sketch3.bringToFront();


  infoSketchScreen3 = new Layer({
  x: 10,
  y: 50,
  width: 340,
  height: 45,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(infoSketchScreen3, "Tap save again and the sketch will be added to the crime scene list.");

 setBubbleStyle(infoSketchScreen3);


infoSketchScreen3.states.add({
  stateA: {
   opacity:1,

   scale: 1
  }
}); 


infoSketchScreen3.states.next();
mainClickable.bringToFront();

}

var crimeScenesMenuSpotlight2 = function() {

myLayers5.Sketch2.destroy();
infoSketchScreen3.destroy();
myLayers5.Sketch1.destroy();
myLayers5.Sketch3.destroy();


  crimeSceneMenuInfo2 = new Layer({
  x: 450,
  y: 333,
  width: 250,
  height: 105,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(crimeSceneMenuInfo2, "As can be seen on this screen the sketch of the crime scene has been added! Tap on the top crime scene to open it.");

 setBubbleStyle(crimeSceneMenuInfo2);


crimeSceneMenuInfo2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


crimeSceneMenuInfo2.states.next();
mainClickable.bringToFront();

}


var photoSphere = function() {

crimeSceneMenuInfo2.destroy();
myLayers5.DemoCase2.destroy();

myLayers6 = Framer.Importer.load("imported/caseviewscreen")

setTimeout(func5, 2000);

  function func5() {
  
  crimeSceneMenuInfo2.destroy();
myLayers5.DemoCase2.destroy();
}

myLayers6.CaseView1.bringToFront();


  photoSphereInfo = new Layer({
  x: 10,
  y: 10,
  width: 400,
  height: 145,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(photoSphereInfo, "<br>Here you can view a 360 photosphere of the crime scene. The blue dots represent detail items in the crime scene. You can add them by long tapping. Tap on one of the detail items.");

 setBubbleStyle(photoSphereInfo);


photoSphereInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


photoSphereInfo.states.next();
mainClickable.bringToFront();

}


var photoSphere2 = function() {

photoSphereInfo.states.next();
myLayers6.CaseView2.bringToFront();


  photoSphereInfo2 = new Layer({
  x: 315,
  y: 305,
  width: 180,
  height: 120,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(photoSphereInfo2, "<br>Tap the \"View/Edit Evidence Item\" button to go to the detail items menu.");
 setBubbleStyle(photoSphereInfo2);


photoSphereInfo2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


photoSphereInfo2.states.next();
mainClickable.bringToFront();

}


var detailItems1 = function() {

photoSphereInfo.destroy();
photoSphereInfo2.destroy();
// myLayers6.CaseView2.destroy();
// myLayers6.CaseView1.destroy();

myLayers6.CasePhotos.sendToBack();

  detailItemsMenu = new Layer({
  x: 10,
  y: 10,
  width: 300,
  height: 85,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(detailItemsMenu, " This is the the Item Detail Editor. Here the user has the ability to edit all of the evidence items in the crime scene.");

 setBubbleStyle(detailItemsMenu);


detailItemsMenu.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


detailItemsMenu.states.next();
mainClickable.bringToFront();

}


var detailItems2 = function() {

detailItemsMenu.states.next();

  detailItemsMenu2 = new Layer({
  x: 300,
  y: 100,
  width: 200,
  height: 85,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(detailItemsMenu2, "The title and description help identify the item throughout the app.");
 setBubbleStyle(detailItemsMenu2);


detailItemsMenu2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


detailItemsMenu2.states.next();
mainClickable.bringToFront();

}

var detailItems3 = function() {

detailItemsMenu2.states.next();
detailItemsMenu.destroy();

  detailItemsMenu3 = new Layer({
  x: 330,
  y: 190,
  width: 250,
  height: 160,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(detailItemsMenu3, "<br>The map shows the location at which the item was found. You can input an address or allow the device to find your current location.");
 setBubbleStyle(detailItemsMenu3);

detailItemsMenu3.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


detailItemsMenu3.states.next();
mainClickable.bringToFront();

}

var detailItems4 = function() {

detailItemsMenu3.states.next();
detailItemsMenu2.destroy();

  detailItemsMenu4 = new Layer({
  x: 200,
  y: 515,
  width: 400,
  height: 45,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(detailItemsMenu4, "The Barcode Reader allows the user to easily scan evidence tags.");
 setBubbleStyle(detailItemsMenu4);

detailItemsMenu4.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


detailItemsMenu4.states.next();
mainClickable.bringToFront();

}

var detailItemsList = function() {



myLayersScrollTwo = Framer.Importer.load("imported/photoscrolltwo")

    detailItemsMenu4.destroy();
    detailItemsMenu3.destroy();

    myLayers6.CaseView2.destroy();
    myLayers6.CaseViewBox.destroy();
    myLayers6.CaseView1.destroy();
//myLayers6.CaseView3.destroy();

    myLayers6.CasePhotos.bringToFront();
    myLayersScrollTwo.PhotoItemScroll.sendToBack();
    myLayers6.ComparePhotos.sendToBack();


detailItemsMenu4.destroy();
detailItemsMenu3.destroy();

myLayers6.CaseView2.destroy();
myLayers6.CaseViewBox.destroy();
myLayers6.CaseView1.destroy();
//myLayers6.CaseView3.destroy();

myLayers6.CasePhotos.bringToFront();
myLayersScrollTwo.PhotoItemScroll.placeBehind(myLayers6.CasePhotos);

myLayersScrollTwo.PhotoItemScroll.y = -975;
myLayersScrollTwo.PhotoItemScroll.x = 149;

var timerScrolltwo = setInterval(function(){
 myTimerScrolltwo()
},2000);

  function myTimerScrolltwo() {
    myLayersScrollTwo.PhotoItemScroll.animate({
        properties: {
        y: 90
        }, 
        time: 2.2
      
  });
  }


  detailItemsMenuListInfo = new Layer({
  x: 10,
  y: 10,
  width: 400,
  height: 60,
  scale: 1,
  opacity: 0,

});

Utils.labelLayer(detailItemsMenuListInfo, " This menu lists all of the detail items in the case where they can be accessed and edited.");
 setBubbleStyle(detailItemsMenuListInfo);

detailItemsMenuListInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


detailItemsMenuListInfo.states.next();
mainClickable.bringToFront();

}

var detailItemsCompareButtonSpotlight = function() {

//Photo compare spotlight button needed
detailItemsMenuListInfo.states.next();
myLayers6.ComparePhotos.bringToFront();
myLayersScrollTwo.PhotoItemScroll.destroy();


  detailItemsCompareButtonSpotlight = new Layer({
  x: 590,
  y: 10,
  width: 255,
  height: 60,
  scale: 1,
  opacity: 0 
});

Utils.labelLayer(detailItemsCompareButtonSpotlight, "The user can view two items side by side by tapping this button");
setBubbleStyle(detailItemsCompareButtonSpotlight);


detailItemsCompareButtonSpotlight.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


detailItemsCompareButtonSpotlight.states.next();
mainClickable.bringToFront();

}

var comparePhotos = function() {

//Photo compare spotlight button needed
myLayers7 = Framer.Importer.load("imported/otherevidencescreen")

setTimeout(func7, 2000);

  function func7() {

  myLayers6.ComparePhotos.destroy();
  detailItemsMenuListInfo.destroy();
  detailItemsCompareButtonSpotlight.destroy();
}


  ComparePhotosInfo = new Layer({
  x: 500,
  y: 5,
  width: 455,
  height: 85,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(ComparePhotosInfo, "Here two items of interest can be viewed side-by-side to allow easy visual comparison. Photos may be swapped by selecting the thumbnails at the bottom of the screen.");
 setBubbleStyle(ComparePhotosInfo);

ComparePhotosInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


ComparePhotosInfo.states.next();
mainClickable.bringToFront();

}

var Interview = function() {

myLayers7.PhotoCompare.destroy();
ComparePhotosInfo.states.next();

  InterviewInfo = new Layer({
  x: 590,
  y: 10,
  width: 355,
  height: 120,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(InterviewInfo, "<br>Interviews can be collected as well. To record an interview, the user has the option of using the Speech-to-Text option or typing the interview manually.");
 setBubbleStyle(InterviewInfo);

InterviewInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


InterviewInfo.states.next();
mainClickable.bringToFront();

}

var Interview2 = function() {


ComparePhotosInfo.destroy();
InterviewInfo.states.next();
myLayers7.Interview1.destroy();

  InterviewInfo2 = new Layer({
  x: 590,
  y: 10,
  width: 355,
  height: 120,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(InterviewInfo2, "<br><br>All of the information from the interview is collected and edited here.");
 setBubbleStyle(InterviewInfo2);


InterviewInfo2.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


InterviewInfo2.states.next();
mainClickable.bringToFront();

}

//Everything after here goes last 


var Interview3 = function() {


InterviewInfo.destroy();
InterviewInfo2.states.next();
myLayers7.Interview2.destroy();

  InterviewInfo3 = new Layer({
  x: 590,
  y: 10,
  width: 355,
  height: 100,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(InterviewInfo3, " The user can select an important line from the interview and save it as a statement. Statements are useful for analyzing important pieces of information.");
 setBubbleStyle(InterviewInfo3);


InterviewInfo3.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


InterviewInfo3.states.next();
mainClickable.bringToFront();

}


var Statements1 = function() {


InterviewInfo2.destroy();
InterviewInfo3.destroy();
myLayers7.Interview3.destroy();

  StatementInfo1 = new Layer({
  x: 330,
  y: 225,
  width: 355,
  height: 120,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(StatementInfo1, "<br><br>The statements are then saved here for easy access and edditing.");
 setBubbleStyle(StatementInfo1);

StatementInfo1.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


StatementInfo1.states.next();
mainClickable.bringToFront();

}

var Locations1 = function() {

myLayers8 = Framer.Importer.load("imported/otherevidencescreentwo")

setTimeout(func7, 2000);

  function func7() {
  myLayers7.Statements.destroy();
  StatementInfo1.destroy();

}


  LocationInfo = new Layer({
  x: 500,
  y: 5,
  width: 455,
  height: 105,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(LocationInfo, " Every evidence item has three tags that it can be sorted and analyzed by. The first tag is location. Here the user can make or find a location by using his or her current location or by typing in an address.");
 setBubbleStyle(LocationInfo);


LocationInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


LocationInfo.states.next();
mainClickable.bringToFront();

}

var Events1 = function() {

LocationInfo.destroy();
myLayers8.Location1.destroy();

  EventInfo = new Layer({
  x: 585,
  y: 250,
  width: 355,
  height: 85,
  scale: 1,
  opacity: 0
});

Utils.labelLayer(EventInfo, "<br>Events allow the evidence items to be sorted chronologically.");
 setBubbleStyle(EventInfo);

EventInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


EventInfo.states.next();
mainClickable.bringToFront();

}

var Categories1 = function() {

EventInfo.destroy();
myLayers8.Events.destroy();

  CategoryInfo = new Layer({
  x: 585,
  y: 215,
  width: 355,
  height: 105,
  scale: 1,
  opacity: 0,
  borderRadius: "15px",
  backgroundColor: "#33b5e5",
  
});

Utils.labelLayer(CategoryInfo, "<br>Categories allow the user to sort and analyze the data based off of any criteria specified by the user");
 setBubbleStyle(CategoryInfo);


CategoryInfo.states.add({
  stateA: {
   opacity:1,
   scale: 1
  }
}); 


CategoryInfo.states.next();
mainClickable.bringToFront();

}


var GoodbyeButton = function() {

CategoryInfo.destroy();

    goodByeInfo = new Layer({
        x: 15,
        y: 150,
        width: 930,
        height: 330,
        scale: 1,
        borderRadius: "60px",
        backgroundColor: "#33b5e5",
        opacity: 0
    });

    goodByeInfo.html = '<br><br><br><br>Thank you for using the Exhibit-N tutorial! We hope you found it helpful.';

    goodByeInfo.style = {
      fontFamily: 'Calibri',
        fontSize: '30px',
        textAlign: 'center',
          color: 'white',

      lineHeight: '30px'
    };

    goodByeInfo.animate({
        properties: {
          scale: 1,
          opacity: 1
        },
    }); 

    goodByeInfo.states.add({
        stateA: {
          opacity: 0,
          scale: 0
        }
    }); 

    mainClickable.bringToFront();
}

//Everything after here goes last 

var resetDemo = function() {

  goodByeInfo.destroy();
  ComparePhotosInfo.destroy();
  myLayers7.PhotoCompare.destroy();
  myLayers8.Categories.destroy();

layerFunctions[0]();
position = 0;

}



var layerFunctions = [makeWelcomeButton, addCaseButton, statusDetails, statusDetails2, tapCaseButton, loadDashBoard, timelineSpotlight, filterSpotlight, mapSpotlight,
 mapSpotlight2, mapSpotlight3, mapSpotlight4, mapSpotlight5, mapSpotlight6, evidenceManagerSpotlight, evidenceManagerSpotlight2, evidenceManagerSpotlight3, evidenceSections, crimeScenesMenuSpotlight,
 sketchSpotlight, sketchScreen, sketchScreen2, sketchScreen3, crimeScenesMenuSpotlight2, photoSphere, photoSphere2, detailItems1, detailItems2, detailItems3,
 detailItems4, detailItemsList, detailItemsCompareButtonSpotlight, comparePhotos, Interview, Interview2, Interview3, Statements1, Locations1, 
 Events1, Categories1, GoodbyeButton, resetDemo];

//layerFunctions[0]();


//layerFunctions[1]();

mainClickable = new Layer({
  			x: 0,
  			y: 0,
  			width: 960,
  			height: 600,
  			scale: 1,
  			backgroundColor: "#33b5e5",
  			opacity: 0
		});

mainClickable.bringToFront();

layerFunctions[0]();

  mainClickable.on(Events.Click, function() {

  //if(canClick == true) {

    layerFunctions[position]();
  	position++;
  	if (position > layerFunctions.length - 1) {
  		position = 0;
  	}
  	clearTimeout(timer);
  	timer = setInterval(function(){
		myTimer()
	},10000);

    canClick = false

 // }  

});


var timer = setInterval(function(){
	myTimer()
},10000);

function myTimer() {
    layerFunctions[position]();
    position++;
    if (position > layerFunctions.length - 1) {
  		position = 0;
  	}
}

var timerClickCount = setInterval(function(){
  myTimerClickCount()
},3000);

function myTimerClickCount() {
  canClick = true;
}

var setBubbleStyle = function(element) {
  element.style = {
    fontFamily: 'Calibri',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '20px',
    color: 'white',
    backgroundColor: "#33b5e5",
    borderRadius: "15px",
    backgroundColor: "#33b5e5",
  };

}

var setBigBubbleStyle = function(element) {
  element.style = {
    fontFamily: 'Calibri',
    fontSize: '30px',
    textAlign: 'center',
    color: 'white',
    lineHeight: '30px'
  };

}