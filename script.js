//--Navigating & Animations--//

//function for scroll when click Title to sections
const navMap = {
        "goOverview": "overview",
        "about-title": "about",
        "education-title": "education", 
        "skills-title": "skill",
        "projects-title": "project",
        "downloads-title": "downloads",
        "publications-title": "publications",
        "contact-title": "contact"
};

Object.entries(navMap).forEach(([buttonId, sectionId]) => {
        document.getElementById(buttonId).addEventListener("click",()=> goTo(sectionId));
});


//function for scroll from header butons to sections
function goTo(sectionId){
        document.getElementById(sectionId).scrollIntoView({
                behavior:"smooth"
        });
}


//--Project & Publication Section--Dropdown//
const cards = document.querySelectorAll(".publication-card , .project-card");

cards.forEach(card =>{
card.addEventListener("click", () => {

        // Close others (optional)
        cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
        });    
        
        // Toggle clicked one
        card.classList.toggle("active");
})
});