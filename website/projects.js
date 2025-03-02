// Configuration from config.json
const GITHUB_USERNAME = "abdullah-elbedwehy";
const maxProjects = 6; // From config.json projects.maxProjects

// Function to get Devicon class for a language
function getDeviconClass(language) {
    if (!language) return "devicon-github-plain"; // fallback icon

    const langLower = language.toLowerCase();

    // Special cases and common mappings
    const specialCases = {
        "c++": "devicon-cplusplus-plain",
        "c#": "devicon-csharp-plain",
        "jupyter notebook": "devicon-jupyter-plain",
        "objective-c": "devicon-objectivec-plain",
        vue: "devicon-vuejs-plain",
        typescript: "devicon-typescript-plain",
        javascript: "devicon-javascript-plain",
        python: "devicon-python-plain",
        java: "devicon-java-plain",
        html: "devicon-html5-plain",
        css: "devicon-css3-plain",
        ruby: "devicon-ruby-plain",
        php: "devicon-php-plain",
        swift: "devicon-swift-plain",
        go: "devicon-go-plain",
        rust: "devicon-rust-plain",
        kotlin: "devicon-kotlin-plain",
        dart: "devicon-dart-plain",
        shell: "devicon-bash-plain",
        powershell: "devicon-bash-plain",
        dockerfile: "devicon-docker-plain",
        scala: "devicon-scala-plain",
        elixir: "devicon-elixir-plain",
        clojure: "devicon-clojure-plain",
        haskell: "devicon-haskell-plain",
    };

    // Fixed fallback chain
    return specialCases[langLower] || `devicon-${langLower}-plain` || "devicon-github-plain";
}

// Function to fetch public repositories to avoid rate limiting
async function fetchPinnedRepos() {
    if (!GITHUB_USERNAME) {
        throw new Error("GitHub username not configured");
    }

    try {
        // Using public API to fetch user repos (no token needed)
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${maxProjects}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`GitHub API Error: ${errorData.message || response.statusText}`);
        }

        const repos = await response.json();

        // Transform the data to match our existing format
        const pinnedRepos = repos.map((repo) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            stargazers_count: repo.stargazers_count,
            updated_at: repo.updated_at,
            languages: [repo.language].filter(Boolean), // Convert single language to array
            owner: {
                login: repo.owner.login,
            },
        }));

        return pinnedRepos;
    } catch (error) {
        console.error("Error fetching repos:", error);
        throw error;
    }
}

// Function to initialize projects with better error handling
async function initializeProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    const projectsSection = document.getElementById("projects");
    const projectsNavLink = document.querySelector('a[href="#projects"]');

    if (!projectsGrid || !projectsSection) {
        console.error("Required DOM elements not found");
        return;
    }

    try {
        // Show loading state
        projectsGrid.innerHTML = `
            <div class="loading-projects">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading projects...</p>
            </div>
        `;

        const pinnedRepos = await fetchPinnedRepos();

        if (!pinnedRepos || pinnedRepos.length === 0) {
            // Hide entire section and remove from navigation
            projectsSection.style.display = 'none';
            if (projectsNavLink) {
                projectsNavLink.style.display = 'none';
            }
            return;
        }

        // Clear loading state and add projects
        projectsGrid.innerHTML = pinnedRepos
            .map((project) => createProjectCard(project))
            .join("");
    } catch (error) {
        console.error("Error initializing projects:", error);
        projectsGrid.innerHTML = `
            <div class="loading-projects">
                <i class="fas fa-exclamation-circle"></i>
                <p>Error: ${error.message || "Failed to load projects. Please try again later."}</p>
            </div>
        `;
    }
}

// Function to create project card HTML
function createProjectCard(project) {
    const hasHomepage = project.homepage && project.homepage !== "";
    const defaultImage = `https://opengraph.githubassets.com/2a/${project.owner.login}/${project.name}`;

    // Get language icons HTML
    const languageIconsHTML = project.languages
        .slice(0, 3)
        .map((lang) => {
            const iconClass = getDeviconClass(lang);
            return `<i class="${iconClass}" title="${lang}"></i>`;
        })
        .join("");

    // Format the date
    const updatedAt = new Date(project.updated_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return `
        <div class="project-card">
            <div class="project-image-container">
                <img
                    src="${defaultImage}"
                    alt="${project.name}"
                    class="project-image"
                    loading="lazy"
                />
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <div class="project-languages">
                    ${languageIconsHTML}
                </div>
                <p class="project-description">
                    ${project.description || "No description available"}
                </p>
                <div class="project-meta">
                    <span class="project-date">Updated: ${updatedAt}</span>
                </div>
                <div class="project-links">
                    ${hasHomepage
                        ? `<a href="${project.homepage}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>`
                        : ""}
                    <a href="${project.html_url}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeProjects);
