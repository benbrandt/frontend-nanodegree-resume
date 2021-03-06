var bio = {
  "name" : "Ben Brandt",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "benjamin.j.brandt@gmail.com",
    "mobile" : "559-859-9790",
    "github" : "benbrandt",
    "twitter" : "@benjaminbrandt",
    "blog" : "http://benjaminbrandt.com",
    "location" : "Los Angeles"
  },
  "picture" : "images/profile.jpg",
  "welcomeMessage" : "Welcome! Take a look around and let me know if you want to work together on something!",
  "skills" : ["HTML", "CSS", "JavaScript", "PHP", "SASS", "Python", "WordPress"]
};

var work = {
  "jobs" : [
    {
      "employer" : "Freelance",
      "title" : "Web Developer",
      "location" : "Los Angeles, CA",
      "dates" : "2010-Present",
      "description" : "Work with a variety of clients to deliver sites based on their needs and budgets."
    },
    {
      "employer" : "Fuller Theological Seminary",
      "title" : "Video Editor",
      "location" : "Pasadena, CA",
      "dates" : "2013-Present",
      "description" : "Produce, shoot, and edit marketing videos for the school, including: commercials, short documentaries, interviews, and lecture recordings."
    },
    {
      "employer" : "Biola University",
      "title" : "Web and Technical Specialist",
      "location" : "La Mirada, CA",
      "dates" : "2013-2014",
      "description" : "Implemented a redesign of the account dashboard for registration, payments, and account information. Oversaw creation and setup of WordPress site for content marketing pieces."
    },
    {
      "employer" : "DreamWorks Animation",
      "title" : "Production Coordinator",
      "location" : "Redwood City, CA",
      "dates" : "2011-2013",
      "description" : "Spearheaded documentation and communication for Generics and interdepartmental breakdowns. Managed staffing and tracking for hundreds of shots and assets flowing through the layout department each day."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "TimelessWeb.com",
      "dates" : "2015",
      "description" : "Developed custom WordPress theme and plugins for content marketing and documentation sites.",
      "images" : []
    },
    {
      "title" : "EyeRadio.org",
      "dates" : "2014",
      "description" : "Took client's design and converted it to a custom WordPress theme. Created custom widgets and plugins to facilitate ease of updating content for client. Created several custom post types for their schedule and presenter lineups.",
      "images" : []
    },
    {
      "title" : "Swipemarket.com",
      "dates" : "2014",
      "description" : "Customized base theme for client's needs, including custom portfolio views. Assisted in server setup and site migration. Created taxonomy architecture based on client needs.",
      "images" : []
    },
    {
      "title" : "AlexisJewelryLA.com",
      "dates" : "2014",
      "description" : "Setup e-commerce store and initial inventory for client using WooCommerce. Made theme customizations to better highlight their products.",
      "images" : []
    },
    {
      "title" : "DubacanoWines.com",
      "dates" : "2012",
      "description" : "WordPress site setup and theme customization. Server setup via SSH and continual server management and maintenance.",
      "images" : []
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Biola University",
      "dates" : "2007-2011",
      "location" : "La Mirada, CA",
      "degree" : "B.A.",
      "major" : "Cinema and Media Arts",
      "url" : "http://biola.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Intro to Computer Science",
      "school" : "Udacity",
      "dates" : "Jan '15 - Mar '15",
      "url" : "https://www.udacity.com/course/cs101"
    },
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "dates" : "Mar '15",
      "url" : "https://www.udacity.com/course/ud304"
    },
    {
      "title" : "Intro to the Design of Everyday Things",
      "school" : "Udacity",
      "dates" : "Mar '15",
      "url" : "https://www.udacity.com/course/design101"
    },
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "dates" : "Mar '15 - Present",
      "url" : "https://www.udacity.com/course/ud804"
    },
    {
      "title" : "Intro to Statistics",
      "school" : "Udacity",
      "dates" : "Mar '15 - Present",
      "url" : "https://www.udacity.com/course/st101"
    }
  ]
};

bio.display = function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  // var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  // $("#topContacts").append(formattedBlog);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

  var formattedImg = HTMLbioPic.replace("%data%", bio.picture);
  $("#header").append(formattedImg);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDesc;
      $(".work-entry:last").append(formattedWork);
    }
  }
};

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    var formattedProject = formattedTitle + formattedDates + formattedDesc;
    $(".project-entry:last").append(formattedProject);

    if (projects.projects[project].images.length > 0) {
      for (var img in projects.projects[project].images) {
        var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);

        $(".project-entry:last").append(formattedImg);
      }
    }
  }
};

education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
    $(".education-entry:last").append(formattedSchool);
  }

  $("#education").append(HTMLonlineClasses);
  for (var course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSite = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    var formattedCourse = formattedTitle + formattedSite + formattedDate + formattedURL;
    $(".education-entry:last").append(formattedCourse);
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
