// ===== AC COMPETENCES & TOOLTIPS =====
const acDefinitions = {
    "33.01": "Exprimer - Adopter et justifier une démarche originale et personnelle dans ses productions",
    "33.02": "Exprimer - Concevoir un design system et en produire les éléments visuels, graphiques ou sonores",
    "33.03": "Exprimer - Maitriser les étapes de production d'un projet multimédia",
    "33.04": "Exprimer - Produire les éléments pour une expérience sophistiquée (notamment immersive, en réalité virtuelle, augmentée...)",
    "33.05": "Exprimer - Apprehender les enjeux liés à la direction artistique",
    "35.01": "Entreprendre - Piloter un produit, un service ou une équipe",
    "35.02": "Entreprendre - Maîtriser la qualité en projet Web ou multimédia",
    "35.03": "Entreprendre - Concevoir un projet d'entreprise innovante en définissant le nom, l'identité, la forme juridique et le ton de la marque",
    "35.04": "Entreprendre - Défendre un projet de manière convaincante",
    "11.01": "Comprendre - Présenter une organisation, ses activités et son environnement (économique, sociologique, culturel, juridique, technologique, communicationnel et médiatique)",
    "11.02": "Comprendre - Évaluer un site web, un produit multimédia ou un dispositif interactif existant en s'appuyant sur des guides de bonnes pratiques",
    "11.03": "Comprendre - Produire des analyses statistiques descriptives et les interpréter pour évaluer un contexte socio-économique",
    "11.04": "Comprendre - Analyser des formes médiatiques et leur sémiotique",
    "11.05": "Comprendre - Identifier les cibles (critères socio-économiques, démographiques, géographiques, culturels ...)",
    "11.06": "Comprendre - Réaliser des entretiens utilisateurs pour construire des personae et des récits utilisateurs (user stories)",
    "21.01": "Comprendre - Analyser la stratégie de communication ou marketing d'un acteur, d'une organisation au regard d'un secteur ou d'un marché",
    "21.02": "Comprendre - Auditer un site web, une marque ou un service, en termes de trafic et de référencement",
    "21.03": "Comprendre - Traiter des données avec des outils statistiques pour faciliter leur analyse et leur exploitation",
    "21.04": "Comprendre - Identifier et décrire les parcours client à partir d'enquêtes de terrain",
    "21.05": "Comprendre - Cartographier les expériences utilisateur : points de contact, points de friction et de satisfaction",
    "12.01": "Comprendre - Concevoir un produit ou un service en terme d'usage et de fonctionnalité",
    "12.02": "Concevoir - Construire la proposition de valeur d'un produit ou d'un service",
    "12.03": "Concevoir - Proposer une recommandation marketing (cibles, objectifs, points de contact)",
    "12.04": "Concevoir - Proposer une stratégie de communication",
    "22.01": "Concevoir - Co-concevoir un produit ou un service (proposition de valeur, fonctionnalités...)",
    "22.02": "Concevoir - Produire une recommandation ergonomique à partir des tests utilisateurs",
    "22.03": "Concevoir - Co-construire une recommandation stratégique (en structurant un plan d'action)",
    "22.04": "Concevoir - Optimiser le référencement d'un site web, d'un produit ou d'un service",
    "22.05": "Concevoir - Mettre en place une présence sur les réseaux sociaux",
    "13.01": "Exprimer - Ecrire pour les médias numériques",
    "13.02": "Exprimer - Produire des pistes graphiques et des planches d'inspiration",
    "13.03": "Exprimer - Créer, composer et retoucher des visuels",
    "13.04": "Exprimer - Tourner et monter une vidéo (scénario, captation image et son...)",
    "13.05": "Exprimer - Designer une interface web (wireframes, UI)",
    "13.06": "Exprimer - Optimiser les médias en fonction de leurs usages et supports de diffusion",
    "23.01": "Exprimer - Produire un écrit journalistique sourcé et documenté",
    "23.02": "Exprimer - Définir une iconographie (illustrations, photographies, vidéos)",
    "23.03": "Exprimer - Créer et décliner une identité visuelle (charte graphique)",
    "23.04": "Exprimer - Imaginer, écrire et scénariser en vue d'une communication multimédia ou transmédia",
    "23.05": "Exprimer - Réaliser, composer et produire pour une communication plurimédia",
    "23.06": "Exprimer - Élaborer et produire des animations, des designs sonores, des effets spéciaux, de la visualisation de données ou de la 3D",
    "14.01": "Développer - Exploiter de manière autonome un environnement de développement efficace et productif",
    "14.02": "Développer - Produire des pages Web fluides incluant un balisage sémantique efficace et des interactions simples",
    "14.03": "Développer - Générer des pages Web à partir de données structurées",
    "14.04": "Développer - Mettre en ligne une application Web en utilisant une solution d'hébergement standard",
    "14.05": "Développer - Modéliser les données d'une application Web",
    "14.06": "Développer - Déployer et personnaliser une application Web en utilisant un CMS ou un framework MVC",
    "24.01": "Développer - Produire des pages et applications Web responsives",
    "24.02": "Développer - Mettre en place ou développer un back office",
    "24.03": "Développer - Intégrer, produire ou développer des interactions riches ou des dispositifs interactifs",
    "24.04": "Développer - Modéliser les traitements d'une application Web",
    "24.05": "Développer - Optimiser une application web en termes de référencement et de temps de chargement",
    "24.06": "Développer - Configurer une solution d'hébergement adaptée aux besoins",
    "15.01": "Entreprendre - Gérer un projet avec une méthode classique",
    "15.02": "Entreprendre - Budgéter un projet et suivre sa rentabilité",
    "15.03": "Entreprendre - Découvrir les écosystèmes d'innovation numérique (fab labs, living labs, tiers-lieux, incubateurs…)",
    "15.04": "Entreprendre - Analyser un produit ou un service innovant en identifiant les propositions de valeurs",
    "15.05": "Entreprendre - Construire une présence en ligne professionnelle (personal branding)",
    "15.06": "Entreprendre - Interagir au sein des organisations",
    "15.07": "Entreprendre - Produire un message écrit ou oral professionnel",
    "25.01": "Entreprendre - Gérer un projet avec une méthode d'amélioration continue par exemple une méthode agile",
    "25.02": "Entreprendre - Cartographier un écosystème (identification des acteurs, synthèse des propositions de valeur)",
    "25.03": "Entreprendre - Initier la constitution d'un réseau professionnel",
    "25.04": "Entreprendre - Collaborer au sein des organisations",
    "25.05": "Entreprendre - Maitriser les codes des productions écrites et orales professionnelles",
    "25.06": "Entreprendre - Prendre en compte les contraintes juridiques"
};

// Initialize AC tooltips
function initializeACTooltips() {
    document.querySelectorAll('.ac-link').forEach(link => {
        const acCode = link.getAttribute('data-ac');
        const definition = acDefinitions[acCode];
        
        if (definition) {
            const tooltip = document.createElement('span');
            tooltip.className = 'ac-tooltip';
            tooltip.textContent = definition;
            link.appendChild(tooltip);
        }
    });
}

// ===== LIGHTBOX WITH ZOOM & DRAG =====
class Lightbox {
    constructor() {
        this.modal = document.getElementById('lightboxModal');
        this.image = document.getElementById('lightboxImage');
        this.closeBtn = document.getElementById('lightboxClose');
        this.prevBtn = document.getElementById('lightboxPrev');
        this.nextBtn = document.getElementById('lightboxNext');
        this.container = document.getElementById('lightboxImageContainer');
        this.zoomInBtn = document.getElementById('zoomIn');
        this.zoomOutBtn = document.getElementById('zoomOut');
        this.zoomLevel = document.getElementById('zoomLevel');
        
        this.currentZoom = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.minZoom = 1;
        this.maxZoom = 3;
        this.zoomStep = 0.2;
        this.isDragging = false;
        
        // Pour la navigation entre images du même conteneur
        this.currentImageIndex = -1;
        this.imagesInContainer = [];
        this.parentContainer = null;

        this.init();
    }

    init() {
        this.setupImageListeners();
        this.setupZoomListeners();
        this.setupDragListeners();
        this.setupCloseListeners();
        this.setupNavigationListeners();
        this.setupKeyboardListeners();
    }

    setupImageListeners() {
        const prodImages = document.querySelectorAll('.prod-image');
        
        prodImages.forEach(image => {
            if (image.classList.contains('youtube-thumbnail')) {
                image.addEventListener('click', () => this.openYouTubeVideo(image.dataset.videoId));
                image.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        this.openYouTubeVideo(image.dataset.videoId);
                    }
                });
            } else {
                image.addEventListener('click', () => this.openImage(image));
            }
        });
    }

    openImage(imageElement) {
        const img = imageElement.querySelector('img');
        if (img) {
            // Récupérer le conteneur parent (le div avec les images)
            this.parentContainer = imageElement.closest('div[style*="display"]') || imageElement.parentElement;
            
            // Récupérer toutes les images du même conteneur
            this.imagesInContainer = Array.from(this.parentContainer.querySelectorAll('.prod-image')).filter(el => !el.classList.contains('youtube-thumbnail'));
            
            // Trouver l'index de l'image cliquée
            this.currentImageIndex = this.imagesInContainer.indexOf(imageElement);
            
            this.displayImage();
            this.updateNavigation();
            document.querySelector('.lightbox-controls').style.display = 'flex';
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    displayImage() {
        if (this.currentImageIndex >= 0 && this.currentImageIndex < this.imagesInContainer.length) {
            const imageElement = this.imagesInContainer[this.currentImageIndex];
            const img = imageElement.querySelector('img');
            
            this.container.innerHTML = '';
            this.image.src = img.src;
            this.image.alt = img.alt;
            this.currentZoom = this.minZoom;
            this.offsetX = 0;
            this.offsetY = 0;
            this.updateTransform();
            this.container.appendChild(this.image);
        }
    }

    updateNavigation() {
        // Montrer/cacher les boutons prev/next
        if (this.imagesInContainer.length > 1) {
            this.prevBtn.style.display = this.currentImageIndex > 0 ? 'block' : 'block';
            this.nextBtn.style.display = this.currentImageIndex < this.imagesInContainer.length - 1 ? 'block' : 'block';
            
            // Désactiver le bouton prev si première image
            this.prevBtn.disabled = this.currentImageIndex === 0;
            // Désactiver le bouton next si dernière image
            this.nextBtn.disabled = this.currentImageIndex === this.imagesInContainer.length - 1;
        } else {
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
        }
    }

    prevImage() {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            this.displayImage();
            this.updateNavigation();
        }
    }

    nextImage() {
        if (this.currentImageIndex < this.imagesInContainer.length - 1) {
            this.currentImageIndex++;
            this.displayImage();
            this.updateNavigation();
        }
    }

    openYouTubeVideo(videoId) {
        if (videoId) {
            this.container.innerHTML = '';
            
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframe.title = 'Vidéo YouTube';
            iframe.frameborder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.classList.add('lightbox-video');
            
            this.container.appendChild(iframe);
            document.querySelector('.lightbox-controls').style.display = 'none';
            
            // Cacher les boutons de navigation pour les vidéos
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
            
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    setupNavigationListeners() {
        this.prevBtn.addEventListener('click', () => this.prevImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());
    }

    setupZoomListeners() {
        this.zoomInBtn.addEventListener('click', () => this.zoom(this.zoomStep));
        this.zoomOutBtn.addEventListener('click', () => this.zoom(-this.zoomStep));
        
        this.container.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.zoom(e.deltaY < 0 ? this.zoomStep : -this.zoomStep);
        }, { passive: false });
    }

    zoom(amount) {
        const newZoom = this.currentZoom + amount;
        if (newZoom >= this.minZoom && newZoom <= this.maxZoom) {
            this.currentZoom = newZoom;
            this.constrainOffset();
            this.updateTransform();
        }
    }

    setupDragListeners() {
        this.container.addEventListener('mousedown', (e) => {
            if (this.currentZoom > this.minZoom) {
                this.isDragging = true;
                this.container.classList.add('dragging');
                this.dragStart = { x: e.pageX, y: e.pageY };
                this.dragOffset = { x: this.offsetX, y: this.offsetY };
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const deltaX = (e.pageX - this.dragStart.x) / this.currentZoom;
            const deltaY = (e.pageY - this.dragStart.y) / this.currentZoom;
            this.offsetX = this.dragOffset.x - deltaX;
            this.offsetY = this.dragOffset.y - deltaY;
            this.constrainOffset();
            this.updateTransform();
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.container.classList.remove('dragging');
        });
    }

    setupCloseListeners() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    setupKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevImage();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextImage();
            } else if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                this.zoom(this.zoomStep);
            } else if (e.key === '-') {
                e.preventDefault();
                this.zoom(-this.zoomStep);
            } else if (e.key === '0') {
                e.preventDefault();
                this.currentZoom = this.minZoom;
                this.offsetX = 0;
                this.offsetY = 0;
                this.updateTransform();
            } else if (e.key === 'Escape') {
                this.close();
            }
        });
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.currentZoom = this.minZoom;
        this.offsetX = 0;
        this.offsetY = 0;
        this.container.innerHTML = '';
        this.container.appendChild(this.image);
        document.querySelector('.lightbox-controls').style.display = 'flex';
        this.currentImageIndex = -1;
        this.imagesInContainer = [];
    }

    updateTransform() {
        this.image.style.transform = `scale(${this.currentZoom}) translate(${this.offsetX}px, ${this.offsetY}px)`;
        this.zoomLevel.textContent = Math.round(this.currentZoom * 100) + '%';
        this.zoomOutBtn.disabled = this.currentZoom <= this.minZoom;
        this.zoomInBtn.disabled = this.currentZoom >= this.maxZoom;
    }

    getMaxOffset() {
        const containerWidth = this.container.clientWidth;
        const containerHeight = this.container.clientHeight;
        const imageWidth = this.image.offsetWidth;
        const imageHeight = this.image.offsetHeight;
        const scaledWidth = imageWidth * this.currentZoom;
        const scaledHeight = imageHeight * this.currentZoom;
        
        const maxOffsetX = (scaledWidth - containerWidth) / (2 * this.currentZoom);
        const maxOffsetY = (scaledHeight - containerHeight) / (2 * this.currentZoom);
        
        return {
            x: Math.max(0, maxOffsetX),
            y: Math.max(0, maxOffsetY)
        };
    }

    constrainOffset() {
        const max = this.getMaxOffset();
        this.offsetX = Math.max(-max.x, Math.min(max.x, this.offsetX));
        this.offsetY = Math.max(-max.y, Math.min(max.y, this.offsetY));
    }
}

// Initialize everything when DOM is ready
function initializeKusama() {
    initializeACTooltips();
    new Lightbox();
}

// Check if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeKusama);
} else {
    // DOM is already loaded
    initializeKusama();
}
