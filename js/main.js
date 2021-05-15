const about = document.querySelector('#about')
const aboutContent = document.querySelector('#about-content')
const education = document.querySelector('#education')
const educationContent = document.querySelector('#education-content')
const skills = document.querySelector('#skills')
const skillsContent = document.querySelector('#skills-content')
const projects = document.querySelector('#projects')
const projectsContent = document.querySelector('#projects-content')

about.addEventListener('click',() => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '800px',
        height: '400px',
        //modal: true,
        top: '150',
        bottom: '50',
        right: '50',
        left: '50',
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})

education.addEventListener('click',() => {
    const educationBox = new WinBox({
        title: 'My education',
        background: '#00aa00',
        width: '750px',
        height: '400px',
        top: '200',
        bottom: '50',
        right: '50',
        left: '100',
        mount: educationContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})

skills.addEventListener('click',() => {
    const skillsBox = new WinBox({
        title: 'My skills',
        background: '#00aa00',
        width: '600px',
        height: '400px',
        top: '250',
        bottom: '50',
        right: '50',
        left: '150',
        mount: skillsContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})

projects.addEventListener('click',() => {
    const projectsBox = new WinBox({
        title: 'My Projects',
        background: '#00aa00',
        width: '620px',
        height: '400px',
        top: '300',
        bottom: '50',
        right: '50',
        left: '200',
        mount: projectsContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})