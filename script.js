document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "scale(1.05)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
        });
    });

    const lazyLoadSections = document.querySelectorAll('.lazy-load');

    const lazyLoad = () => {
        lazyLoadSections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('loaded');
            }
        });
    };

    window.addEventListener('scroll', lazyLoad);
    lazyLoad();

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    const workExperience = [
        { title: "Java Full Stack Developer at UPS", date: "Aug 2023 - Present", details: "Details about your work experience..." },
        { title: "Java Developer Intern at RFRIT LLC", date: "Feb 2023 - May 2023", details: "Details about your work experience..." },
        { title: "Application Development Associate at Accenture", date: "Dec 2020 - Jun 2021", details: "Details about your work experience..." }
    ];

    const projects = [
        { title: "Movie Review Application", details: "Details about your projects..." },
        { title: "Property Exchange Web Platform", details: "Details about your projects..." }
    ];

    const activities = [
        { title: "Orchestrated 'Signal Hunt' event", details: "Details about your activities..." },
        { title: "Participated in a workshop focused on 'Sensor Control Robot'", details: "Details about your activities..." }
    ];

    const appendTimelineItems = (items, containerId) => {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.details}</p>
                <h3>${item.date}</h3>
            `;
            container.appendChild(timelineItem);
        });
    };

    appendTimelineItems(workExperience, 'work-experience');
    appendTimelineItems(projects, 'projects');
    appendTimelineItems(activities, 'activities');

    const data = {
        labels: ['Java', 'JavaScript', 'Python', 'C'],
        datasets: [{
            label: 'Proficiency',
            data: [90, 80, 85, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    var ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, config);

    // Modal functionality
    const modal = document.getElementById("modal");
    const span = document.querySelector(".close");

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
