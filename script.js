// ===== DATA =====
let projectsData = [];
let currentFilter = 'all';

// ===== FETCH & INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
    initializeEventListeners();
});

async function fetchProjects() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        projectsData = data.projects;
        renderProjects(projectsData);
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
    }
}

function initializeEventListeners() {
    // Event listeners pour les filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleFilterClick(e);
        });
    });

    // Active nav link
    updateActiveNavLink();

    // Burger menu toggle
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Event listeners pour la navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && (href.startsWith('#projects') || href.startsWith('#home'))) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if current link matches current page
        if (href.includes(currentPage) || (currentPage === '' && href.includes('index'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        
        // Also check for hash when on same page
        if (window.location.hash && href.includes(window.location.hash)) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// Update active link when scrolling
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('hashchange', updateActiveNavLink);

// ===== FILTER HANDLING =====
function handleFilterClick(e) {
    const filterValue = e.target.getAttribute('data-filter');
    currentFilter = filterValue;

    // Mettre à jour les styles des boutons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Filtrer et afficher les projets
    filterProjects(filterValue);
}

function filterProjects(competence) {
    let filtered = projectsData;

    if (competence !== 'all') {
        filtered = projectsData.filter(project => 
            project.competences.includes(competence)
        );
    }

    // Trier par année (3, 2, 1)
    filtered.sort((a, b) => {
        return b.yearNumber - a.yearNumber;
    });

    renderProjects(filtered);
}

// ===== RENDERING =====
function renderProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    
    // Vérifier si c'est une pépine de projets liés
    const relatedIds = grid.getAttribute('data-related-ids');
    let filteredProjects = projects;
    
    if (relatedIds) {
        const ids = relatedIds.split(',').map(id => id.trim());
        filteredProjects = projects.filter(p => ids.includes(p.id));
    }
    
    // Animation de sortie
    grid.querySelectorAll('.project-card').forEach(card => {
        card.style.animation = 'popOut 0.3s ease-out forwards';
    });

    setTimeout(() => {
        grid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
        
        // Animation d'entrée
        grid.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 300);
}

function createProjectCard(project) {
    const domainClass = getDomainClass(project.domainType);
    const yearClass = `year-${project.yearNumber}`;

    const tagsHTML = project.tags
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join('');

    const link = project.link || '#';

    return `
        <a class="project-card-link" href="${link}">
            <div class="project-card ${domainClass} ${yearClass}">
                <div class="project-image-wrapper">
                    <div class="project-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;">
                    </div>
                    <span class="project-category">${project.domain}</span>
                </div>
                <div class="project-content">
                    <div class="project-title-row">
                        <h3 class="project-title">${project.title}</h3>
                        <span class="project-year">${project.year}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        </a>
    `;
}

function getDomainClass(domainType) {
    switch(domainType) {
        case 'dev':
            return 'domain-dev';
        case 'creation':
            return 'domain-creation';
        case 'communication':
            return 'domain-communication';
        default:
            return '';
    }
}

// ===== ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes popOut {
        from {
            transform: scale(1);
            opacity: 1;
        }
        to {
            transform: scale(0.8);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL ENHANCEMENT =====
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== SCROLL EFFECTS =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Comportement supplémentaire si nécessaire
    }
});
