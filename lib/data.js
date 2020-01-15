const {WorkModel, BioModel, EducationModel, StackModel} = require('./models')

const bio = {
    full_name: "Samuel Njoroge Kanyi",
    display_name:"amshel kanyi",
    dob:"19/08/1993",
    about:"Hello guys. Sam here. I am a passionate web/mobile developer. My Hobbies include Japanese Anime and Manga, online gaming, cycling and swimming ",
}

const education = [
    {
        school:"Jomo Kenyatta University Of Agriculture and Development",
        year:"2012-2015",
        grade:"Bachelors of Science in Maths and Computer Science "
    },
    {
        school:"Kanunga High School ",
        year:"2008-2011",
        grade:"Mean Grade B+ "
    },
]

const work =[
    {
        location:"Mutall Data Managers",
        position:"Android Programmer",
        year:"2015-current"
    },

    {
        location:"Kiserian Digital Center",
        position:"Tutor",
        year:"2014-2015"
    },

    {
        location:"Kenya Institute of Curriculum development",
        position:"It Support intern",
        year:"2014-2015"
    },
]

const stack =[
    {
        title:"FrontEnd Deveopment",
        details:""
    },
    {
        title:"Backend Development",
        details:""
    },
    {
        title:"Mobile Application Programming",
        details:""
    },
    {
        title:"Linux System Administration",
        details:""
    }
]

const stack_items = [
    {
        title:"Mastery in server side using Object Oriented php",
        stackId: 1
    },
    {
        title:"I have Knowledge of MVC design pattern (with a frameworks of my own)",
        stackId: 1
    },
    {
        title:"Familiarity with popular php frameworks Laravel/cakephp/codeigniter",
        stackId: 1
    },
    {
        title:"Node-JS enthusiast using express framework and mongoose for database.",
        stackId: 1
    },
    {
        title:"Serve html using templating language ie handlebars/ejs/pub",
        stackId: 1
    },

    {
        title:"Able to interface front and back end using MEAN stack approach",
        stackId: 1
    },

    {
        title:"Adept knowledge of javascript(es5/es6) to manipulate the DOM",
        stackId: 2
    },
    {
        title:"Knowlede of React JS to build single page application, React router for routing and Redux for state management",
        stackId: 2
    },
    {
        title:"Familiarity in Angular and Ember js",
        stackId: 2
    },
    {
        title:"mastery of css3 an mobile responsive design",
        stackId: 2
    },
    {
        title:"Knowledge and usage of various css frameworks",
        stackId: 2
    },
    {
        title:"Bootstrap4/materialize/bulma/semantic-ui",
        stackId: 2
    },
    {
        title:"Full object oriented mobile development using Java",
        stackId: 3
    },
    {
        title:"Familiarity in Kotlin Programming language",
        stackId: 3
    },
    {
        title:"Build Beautiful UI using flutter and react native",
        stackId: 3
    },
    {
        title:"Server side programming Using Sqlite3",
        stackId: 3
    }

]

const contact = {
    box: "P.O. Box 194 Kiserian",
    mobile: "0716276879"
}

const email = [
    {
        title:"amshelkanyi@gmail.com",
        contactId: 1
        
    },
    {
        title:"amshel20@gmail.com",
        contactId: 1
    },
    {
        title:"amshelhack3r@gmail.com",
        contactId: 1
    },
]
const data = {
    bio,
    education,
    work,
    stack,
    stack_items, 
    contact,
    email
}

module.exports = data