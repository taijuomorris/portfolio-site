
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function (event) {
    const aboutModal = document.getElementById("aboutModal");
    const workModal = document.getElementById("workModal");
    const contactModal = document.getElementById("contactModal");

    if (event.target === aboutModal) {
        closeModal("aboutModal");
    } else if (event.target === workModal) {
        closeModal("workModal");
    } else if (event.target === contactModal) {
        closeModal("contactModal");
    }

};

