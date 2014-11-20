var bio = {
	"name": "Adam Kendal",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile" : "647-802-6755",
		"email": "kendal.adam@gmail.com",
		"github": "Kendalab",
		"twitter": "Kendalab",
		"location": "Toronto, Ontario"
	},
	"pictureURL": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10403571_10202745620315741_8553441052524735893_n.jpg?oh=a99fefbab1fac54b388caed506e6c8e2&oe=54E1D402&__gda__=1424062845_2a9dab8ecf8a23aeb8f5b44532f0ecd7",
	"welcome": "Welcome to my resume",
	"skills": ["HTML5", "CSS3", "JavaScript"]
};

var work = {
	"jobs": [
		{
			"employer": "Douglas Mental Health Hospital",
			"title": "Graduate Student Researcher",
			"location": "Montreal, Quebec",
			"dates": "2012-2014",
			"description": "Performed neuropsychological research relating to guilt, depression and suicide."
		},
		{
			"employer": "Rotman Research Institute at Baycrest",
			"title": "Summer Student Researcher",
			"location": "Toronto, Ontario",
			"dates": "Summer 2012",
			"description": "Performed neuropsychological research relating to vision, audition and ageing. Designed stimuli and experiment using MATLAB and Presentation."
		},
		{
			"employer": "Turner Fliescher Architects Inc.",
			"title": "Architectual Technician",
			"location": "Toronto, Ontario",
			"dates": "Summer 2010",
			"description": "Designed site plans for various commercial clients."
		}
	]
};

var education = {
	"schools": [
		{
			"name": "McMaster University",
			"city": "Hamilton, Ontario",
			"degree": "B.Sc. Hon.",
			"major": "Psychology, Behaviour & Neuroscience",
			"minor": "None",
			"graduation": 2012
		},
		{
			"name": "McGill University",
			"city": "Montreal, Quebec",
			"degree": "M.Sc.",
			"major": "Integrated Program in Neuroscience",
			"minor": "None",
			"graduation": 2014
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"degree": "Front-End Web Developer Nanodegree"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": 9,
			"dates": 9,
			"description": 9,
			"images": 9
		},
				{
			"title": 9,
			"dates": 9,
			"description": 9,
			"images": 9
		},
				{
			"title": 9,
			"dates": 9,
			"description": 9,
			"images": 9
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedSkills)
$("#header").prepend(formattedWelcome)
$("#header").prepend(formattedPicture)
$("#header").prepend(formattedEmail)
$("#header").prepend(formattedMobile)
$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0])
	$("#skills").append(formattedSkills);
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[1])
	$("#skills").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[2])
	$("#skills").append(formattedSkills);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();


//My way of solving the quiz
//function inName(name) {
//	var splName = name.trim().split(" ");
//	var firstName = splName[0];
//	firstName = firstName[0].toUpperCase() + firstName.slice(1); 
//
//	var lastName = splName[1];
//	lastName =lastName.toUpperCase()
//	return firstName + " " + lastName;
//}

//Proper way to solve the quiz
function inName(name) {
	var name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);








