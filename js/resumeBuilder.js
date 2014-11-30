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
	"skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
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
			"location": "Hamilton, Ontario",
			"degree": "B.Sc. Hon.",
			"major": "Psychology, Behaviour & Neuroscience",
			"minor": "None",
			"graduation": 2012
		},
		{
			"name": "McGill University",
			"location": "Montreal, Quebec",
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
			"title": "Maple-a-Month",
			"dates": "2014",
			"description": "Maple-a-Month is a service in which a different bottle of %100 pure Canadian maple syrup is delivered to your door every month",
			"images": ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1069789_300255893509689_6246938587965157788_n.jpg?oh=56c5f8811bd285c6eab254c95b0d0f65&oe=54E49BDC"]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);


$("#header").prepend(formattedWelcome)
$("#header").prepend(formattedPicture)
$("#header").prepend(formattedEmail)
$("#header").prepend(formattedMobile)
$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (x in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[x])
		$("#skills").append(formattedSkills);
	};
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


// Encapsulated function within the projects object to population the projects section of the page
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjTitle);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjDates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjDescription);
		
		if (projects.projects[project].images.length > 0) {
			console.log(projects.projects[project].images);
			for (image in projects.projects[project].images){
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjImage);
				console.log("Hello");
			}
		}

	}

};

projects.display();



$("#mapDiv").append(googleMap);

$(document).ready(function() {
	$('img').click(function(){
		$(this).effect('bounce', 'slow');
	});		
});



