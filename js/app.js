const content = document.getElementById("content");

async function loadPage(page) {
    const response = await fetch(`components/${page}.html`);
    const html = await response.text();

    content.innerHTML = html;
}

document.querySelectorAll("[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        loadPage(link.dataset.page);
    });
});

loadPage("home");