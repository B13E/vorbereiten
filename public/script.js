async function saveData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch('/add-user', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert("Gespeichert!");
        loadData();
    } else {
        alert("Fehler beim Speichern!");
    }
}

async function loadData() {
    const response = await fetch('/users');
    const users = await response.json();
    
    const list = document.getElementById("data-list");
    list.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        list.appendChild(li);
    });
}

loadData();  // Lädt Daten beim Start
