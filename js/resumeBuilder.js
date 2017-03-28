var bio = {
    name: "Amar",
    role: "Web UI Designer",
    welcomeMessage: "Life is short, but Art lives forever",
    biopic: "images/me.png",
    contacts: {
        mobile: "+91 9900032331",
        email: "amr.000@hotmail.com",
        website: "www.amr000.com",
        twitter: "@Amr0000333",
        github: "github.com/amr000s",
        location: "WhiteField, BLR"
    },
    skills: ["Sketching", "Web Designing & Developing", "UI Designing", "Animation"]
};


bio.display= function() {
    
    var myName = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(myName);
    $("#name").append(role);

    var mobileTag = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(mobileTag);

    var emailTag = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(emailTag);

    var addgitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(addgitHub);

    var twitterTag = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(twitterTag);

    var websiteTag = HTMLblog.replace("%data%", bio.contacts.website);
    $("#topContacts").append(websiteTag);

    var locationb = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(locationb);


    $("#footerContacts").append(mobileTag);
    $("#footerContacts").append(emailTag);
    $("#footerContacts").append(addgitHub);
    $("#footerContacts").append(twitterTag);
    $("#footerContacts").append(locationb);
    

    var profilepic = HTMLbioPic.replace("%data%", bio.biopic);


    $("#header").append(profilepic);
    $("#header").append(HTMLskillsStart);  
    
    bio.skills.forEach(function(skill){
        addskills = HTMLskills.replace("%data%", skill);
        $("#skills").append(addskills);
        
        });
//    if (HTMLskillsStart.length > 0) {
//        $("#header").append(HTMLskillsStart);
//        addskills = HTMLskills.replace("%data%", bio.skills[0]);
//        $("#skills").append(addskills);
//        addskills = HTMLskills.replace("%data%", bio.skills[1]);
//        $("#skills").append(addskills);
//        addskills = HTMLskills.replace("%data%", bio.skills[2]);
//        $("#skills").append(addskills);
//        addskills = HTMLskills.replace("%data%", bio.skills[3]);
//        $("#skills").append(addskills);
//    }

    var welmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welmsg);
};




var work = {
    jobs: [{
        employer: "IDrive software",
        title: "UI Designer",
        dates: "June 2013 to future",
        location: "Bangalore",
        description: "Creating & enhancing the UI/graphics /icons/help video. Design the interface simple and easy to use & direct the visual appearance of all new features. <br />Create wireframes/sketch, mockup, prototype and User Interface for various mobile app & desktop API. <br />Design more website/weblayout templates as well as web Ad banner, emailer to understand the product/goal for user by using Photoshop, illustrator, image/video edition etc. <br /> Designed/developed the icons/or feature graphics by core-meaning of content. <br />Coordinate with UI Programmer/Android team, iOs team & other to design and execute user interfaces."
    }, {
        employer: "Technicolor",
        title: "Graphics esigner",
        dates: "Jan 2012 to feb 28th, 2013",
        location: "Mumbai",
        description: "Role : Create a Realistic BG/Prop or texturing by using photoshop & Maya."
    }, {
        employer: "Prana Studio",
        title: "Texturing Artist",
        dates: "Dec 2010 to Dec 2011",
        location: "Mumbai",
        description: "Role : Worked as a 3D Texturing, Lighting and Com-positing Artist for Patented Product Animation . <br />Software - Photoshop, Maya, Digital Fusion."
    }, {
        employer: "TATA Elxsi Ltd., Mumbai, India.",
        title: "CG (Computer Graphics) artist",
        dates: "OCT 03, 2007 TO DEC 20, 2009",
        location: "Anderi(E), Mumbai",
        description: "Role : Worked as a 3D Texturing, BG Matte painting and Graphics artist for Patented Product Animation."
    }, {
        employer: "SGK Design (Advertising Agency) Precision Prints, Pune",
        title: "Graphics Designer",
        dates: "SEPT 10, 2005 TO AUG 30, 2007",
        location: "MG Road, Pune",
        description: "Role : Create a printing and web graphics for web site, poster, brochure & Ad banner etc."
    }]
};


work.display = function() {
    for (var jobs = 0; jobs < work.jobs.length; jobs++) {
        $("#workExperience").append(HTMLworkStart);
        var a = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
        var b = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
        var c = b + " " + a;
        $(".work-entry:last").append(c);
        var d = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
        $(".work-entry:last").append(d);
        var e = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
        $(".work-entry:last").append(e);
        var f = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
        $(".work-entry:last").append(f);
    }
};


var projects = {
    projects: [{
        title: "Talq UI Designing",
        dates: "June 2014",
        description: "Lorem Ipsum has been the industry's standard",
        images: ['images/TalqUI.png', 'images/TalqUI02.png']
    }, {
        title: "HR dashboard UI Prototype",
        dates: "June 2015",
        description: "A platform for HR and Employee...connect",
        images: ['images/TalqUI.png', 'images/TalqUI02.png']
    }, {
        title: "ID logo- remaking",
        dates: "June 2016",
        description: "Lorem Ipsum has been the industry's standard",
        images: ['images/TalqUI.png', 'images/TalqUI02.png']
    }, {
        title: "ID logo- remaking",
        dates: "June 2016",
        description: "Lorem Ipsum has been the industry's standard",
        images: ['images/TalqUI.png', 'images/TalqUI02.png']
    }]
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var a = 0; a < projects.projects.length; a++) {
        var b = '<div id="project-entry' + a + '" class="project-contain"></div>';
        $(".project-entry").append(b);
        var c = HTMLprojectTitle.replace("%data%", projects.projects[a].title);
        $("#project-entry" + a + ":last").append(c);
        var d = HTMLprojectDates.replace("%data%", projects.projects[a].dates);
        $("#project-entry" + a + ":last").append(d);
        var e = HTMLprojectDescription.replace("%data%", projects.projects[a].description);
        $("#project-entry" + a + ":last").append(e);
        
         projects.projects[a].images.forEach(function(image){
            var f = HTMLprojectImage.replace("%data%", image);
             console.log(f);
             $("#project-entry" + a + ":last").append(f);
            
        });
        
//        var f = HTMLprojectImage.replace("%data%", projects.project[a].images[0]);
//        $("#project-entry" + a + ":last").append(f);
//        var g = HTMLprojectImage.replace("%data%", projects.project[a].images[1]);
//        $("#project-entry" + a + ":last").append(g);
    };
   
    
};


var education = {
    schools: [{
        name: "Karnataka State University",
        degree: "Bachelor of Fine Arts",
        location: "KSOU, Mysore",
        degreedates: "June 2016",
        url: "images",
        majors: ["Management", " accounting"]
    }, {
        name: "Kolhapur University",
        degree: "Bachelor of commerce",
        location: "Kolhapur",
        degreedates: "June 2004",
        url: ['images/certificate.png'],
        majors: ["Realistic Art", " Portait"]
    }, {
        name: "Arena Multimedia Institute",
        degree: "Diploma in animation",
        location: "Arena, Pune",
        dates: "Dec 2002",
        url: ['images/certificate.png'],
        majors: ["Modeling", " Texturing", " Lighting", " Render"]
    }],
    onlineCourses: [{
        title: "Certification in Information Technology",
        school: "CMC Institute",
        dates: "2004",
        url: "cmc.com"
    }, {
        title: "Google Nano-Degree",
        school: "Udacity",
        dates: "August2016",
        url: "https://udacity.com"
    }]
};


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var a = 0; a < education.schools.length; a++) {
        var b = HTMLschoolName.replace("%data%", education.schools[a].name);
        var c = HTMLschoolDegree.replace("%data%", education.schools[a].degree);
        var d = b + c;
        $(".education-entry").append(d);
        var e = HTMLschoolDates.replace("%data%", education.schools[a]["dates"]);
        $(".education-entry:last").append(e);
        var f = HTMLschoolLocation.replace("%data%", education.schools[a]["location"]);
        $(".education-entry:last").append(f);
        var g = HTMLschoolMajor.replace("%data%", education.schools[a]["majors"]);
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[a]["majors"]));
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (var h = 0; h < education.onlineCourses.length; h++) {
        
        var i = HTMLonlineTitle.replace("%data%", education.onlineCourses[h].title);
        var j = HTMLonlineSchool.replace("%data%", education.onlineCourses[h].school);
        var k = i + j;
        $(".education-entry:last").append(k);
        var l = HTMLschoolDates.replace("%data%", education.onlineCourses[h].dates);
        $(".education-entry:last").append(l);
        var m = HTMLonlineURL.replace("%data%", education.onlineCourses[h]["url"]);
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[h].url));
    }
};



bio.display();
work.display();
projects.display();
education.display();



$(document).click(function(a) {
    var b = a.pageX;
    var c = a.pageY;
    logClicks(b, c);
});

$("#mapDiv").append(googleMap);

initializeMap();

