//This window will start upon the first opening of the app to sign up
var mainWin = Ti.UI.createWindow({
	backgroundColor: "F8F162",
	barColor: "F8F162",
	statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
});
//this window will start if you already have an account so you can login
/*
var loginWin = Ti.UI.createWindow({
	backgroundColor: "F8F162",
	barColor: "F8F162",
	statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
});
var loginLabel = Titanium.UI.createLabel({
    color:'black',
    text:'Email Address',
    top:100,
    left:32,
    width: 250,
    height:'auto'
});
 
var loginField = Titanium.UI.createTextField({
    hintText:'Enter your email address',
    height:35,
    top:125,
    left:30,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var loginLabel2 = Titanium.UI.createLabel({
    color:'black',
    passwordMask: true,
    text:'Password',
    top:165,
    left:32,
    width:250,
    height:'auto'
});
 
var loginField2 = Titanium.UI.createTextField({
    hintText:'Enter your password',
    height:35,
    top:190,
    left:30,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
    
});
 var monsterImage = Ti.UI.createImageView({
 	image: "water.png",
 	top: 300
 });
*/
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;


var margin = pHeight - 200;

//main logo image
var logoImage1 = Ti.UI.createImageView({
	image: "imonster.png",
	width: pWidth,
	height: margin,
	top: 0
});
//navigation window
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	
});
//the first button to sign up upon intial startup of the app
var signInButton = Ti.UI.createButton({
	width: 200,
	height: 75,
	top: 400,
	style: Titanium.UI.iPhone.SystemButtonStyle
});
var signInText = Ti.UI.createLabel({
	text: "Sign Up",
	color: "black", 
	font:{fontSize:45,fontFamily:'Helvetica Neue Bold Italic'},
	
});

signInButton.add(signInText);
//The second window is the fill out a form window very simple and to the point
var formWin = Ti.UI.createWindow({
	backgroundColor: "F8F162",
	barColor: "F8F162",
	statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

var scrollView = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 0,
    bottom: 0,
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: true
});
 

 
 //The following are all of the input fields
var contactUs = Titanium.UI.createLabel({
    color:'#999',
    text:"",
    top:10,
    left:10,
    width:300,
    font:{fontSize:12,fontFamily:'Helvetica Neue'},
    height:'auto'
});
 
var contactName = Titanium.UI.createLabel({
    color:'black',
    text:'What do you want to be called?',
    top:20,
    left:32,
    width: 250,
    height:'auto'
});
 
var contactNameField = Titanium.UI.createTextField({
    hintText:'Create A Username',
    height:35,
    top:45,
    left:30,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var emailName = Titanium.UI.createLabel({
    color:'black',
    text:'What is your email address?',
    top:85,
    left:32,
    width:250,
    height:'auto'
});
 
var emailField = Titanium.UI.createTextField({
    hintText:'Create an Email Address',
    height:35,
    top: 110,
    left:30,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var password = Titanium.UI.createLabel({
    color:'black',
    text:'Password(6-18 characters)',
    top:150,
    left:32,
    width:250,
    height:'auto'
});
 
var passwordField = Titanium.UI.createTextField({
    hintText:"Create a Password",
    passwordMask: true,
    height:35,
    top:175,
    left:30,
    width:250,
    blur:true,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


//hitting this button will create your account
 var createAccount = Ti.UI.createButton({
 	//backgroundColor: "black",
 	top: 220,
 	width: 250,
 	left:30,
 	height: 40,
 	backgroundColor: "FAF6BC",
 	borderColor: "595959",
	borderRadius: 1,
 	
 });
 var createAccountText = Ti.UI.createLabel({
 	 text: "Create Account",
	 color: "black",
	 font:{fontSize:32,fontFamily:'Helvetica Neue Bold'},
 });
 
 //the third window upon intial startup will congratulate you upon succesful startup of the app
 //the first two windows will not show if you already have an account it will jump to the login screen
 var monsterWin = Ti.UI.createWindow({
 	backgroundColor: "F8F162",
	barColor: "F8F162",
	statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
 });
 //the login button and text
 var loginText = Ti.UI.createLabel({
 	text: "Login",
 	 color: "black",
	 font:{fontSize:32,fontFamily:'Helvetica Neue Bold'},
 });
 var login = Ti.UI.createButton({
 	width: 250,
 	left:30,
 	height: 40,
 	top: 235,
 	backgroundColor: "FAF6BC",
 	bordercolor: "595959",
 	borderWidth: 1
 });
 login.add(loginText);
 
 //The textfields for logging in with your email and password
var loginLabel = Titanium.UI.createLabel({
    color:'black',
    text:'Email Address',
    top:100,
    left:32,
    width: 250,
    height:'auto'
});
 
var loginField = Titanium.UI.createTextField({
    hintText:'Enter your email address',
    height:35,
    top:125,
    left:30,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var loginLabel2 = Titanium.UI.createLabel({
    color:'black',
   
    text:'Password',
    top:165,
    left:32,
    width:250,
    height:'auto'
});
 
var loginField2 = Titanium.UI.createTextField({
    hintText:'Enter your password',
    passwordMask: true,
    height:35,
    top:190,
    left:30,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
//The text at the top of the screen for when you made an account
var congrats = Ti.UI.createLabel({
	text: "Congratulations!",
	color: "black",
	font:{fontSize:38,fontFamily:'Helvetica Neue Bold'},
	top:2
});
var done = Ti.UI.createLabel({
	text: "Now just login to get started",
	color: "black",
	font:{fontSize:20,fontFamily:'Helvetica Neue Bold'},
	top:50
});
 var monsterImage = Ti.UI.createImageView({
 	image: "water.png",
 	top: 300
 });
 var monsterImage2 = Ti.UI.createImageView({
 	image: "gator.png",
 	top: 300, 
 	height: 200
 });
 
 //This will reside as the home screen of the app upon logging in or creating an account
 var hubScreen = Ti.UI.createWindow({
 	backgroundColor: "F8F162",
	barColor: "F8F162",
	statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
 });
 var monsterPic = Ti.UI.createImageView({
 	image: "waterfox.png",
 	width: 230,
 	height: 175,
 	top: 5
 });
 
 //The four buttons on the main home screen that will take you to the different windows inside the app
 var navigation = Ti.UI.createButton ({
 	width: 320,
 	height:75,
 	top:180,
 	backgroundColor: "FCFADC",
 	borderColor: "595959",
 	borderWidth: 2,
 	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
 });
 var createMonster = Ti.UI.createLabel({
 	text: "Create A New Monster",
 	color: "595959",

	font:{fontSize:21,fontFamily:'Helvetica Neue'},
 });
 var navigation2 = Ti.UI.createButton({
 	width: 320,
 	height:75,
 	top:260,
 	backgroundColor: "FAF6BC",
 	borderColor: "595959",
 	borderWidth: 2,
 	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
 });
 var petButton = Ti.UI.createLabel({
 	text: "Monster Amie",
 	color: "595959",
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
 });
 
 var navigation3 = Ti.UI.createButton({
 	width: 320,
 	height:75,
 	top:340,
 	backgroundColor: "F7F188",
 	borderColor: "595959",
 	borderWidth: 2,
 	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
 });
 var games = Ti.UI.createLabel({
 	text: "Games",
 	color: "595959",
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	});
 var navigation4 = Ti.UI.createButton({
 	width: 320,
 	height:75,
 	top: 420,
 	backgroundColor: "FEF377",
 	borderColor: "595959",
 	borderWidth: 2,
 	borderStyle:Titanium.UI.BUTTON_BORDERSTYLE_ROUNDED
 });
 var about = Ti.UI.createLabel({
		text: "About iMonster",
		color: "595959",
	font:{fontSize:21,fontFamily:'Helvetica Neue'},
	});

 //The event listeners
 signInButton.addEventListener('click', function() {
 	navWin.openWindow(formWin, {animated:true});
});
createAccount.addEventListener('click', function() {
	navWin.openWindow(monsterWin, {animated:true});
});
login.addEventListener('click', function() {
	navWin.openWindow(hubScreen, {animated:true});
});
//the .adds
createAccount.add(createAccountText);
 
formWin.add(scrollView);
scrollView.add(contactUs);
scrollView.add(contactName);
scrollView.add(contactNameField);
scrollView.add(emailName);
scrollView.add(emailField);
scrollView.add(password);
scrollView.add(passwordField);
scrollView.add(createAccount);
monsterWin.add(login);

formWin.add(monsterImage2);
hubScreen.add(alert);
hubScreen.add(monsterPic);
hubScreen.add(navigation, navigation2, navigation3, navigation4);
navigation.add(createMonster);
navigation2.add(petButton);
navigation3.add(games);
navigation4.add(about);
monsterWin.add(congrats);
monsterWin.add(done);
monsterWin.add(loginLabel,loginField, loginLabel2, loginField2);
monsterWin.add(monsterImage);
mainWin.add(logoImage1);
mainWin.add(signInButton);

//The open windows

mainWin.open();
navWin.open();

