// $("#header").prepend(formattedRole)
// $("#header").prepend(formattedName)

var bio = {
	"name": "Adam Kendal",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile" : "647-802-6755",
		"email": "kendal.adam@gmail.com",
	},
	"pictureURL": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10403571_10202745620315741_8553441052524735893_n.jpg?oh=a99fefbab1fac54b388caed506e6c8e2&oe=54E1D402&__gda__=1424062845_2a9dab8ecf8a23aeb8f5b44532f0ecd7",
	"welcome": "Welcome to my resume",
	"skills": ["HTML5", "CSS3", "JavaScript"]
}

work.position = "Graduate Student Researcher";
work.employer = "Douglas Hospital";
work.yearsWorked = "2";
work.city = "Montreal";

education["lastSchool"] = "McGill";
education["years"] = "2";
education["city"] - "Montreal";
 

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedTitle = HTMLworkTitle.replace("%data%". work.position);
var formattedSchool = HTMLschoolName.replace("%data%", education.lastSchool);


//$("#header").prepent(formattedSchool)
//$("#header").prepend(formattedTitle)
$("#header").prepend(formattedSkills)
$("#header").prepend(formattedWelcome)
$("#header").prepend(formattedPicture)
$("#header").prepend(formattedEmail)
$("#header").prepend(formattedMobile)
$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)