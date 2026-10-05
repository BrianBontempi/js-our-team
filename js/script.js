// ! recupero gli elementi in pagina
const teamInfoElement = document.getElementById("teamInfo");

// creo l'array di oggetti
const teamMembers = [
    {name: "Wayne Barnett", role: "Founder & CEO", photo: "wayne-barnett-founder-ceo.jpg"},
    {name: "Angela Caroll", role: "Chief Editor", photo: "angela-caroll-chief-editor.jpg"},
    {name: "Walter Gordon", role: "Office Manager", photo: "walter-gordon-office-manager.jpg"},
    {name: "Angela Lopez", role: "Social Media Manager", photo: "angela-lopez-social-media-manager.jpg"},
    {name: "Scott Estrada", role: "Developer", photo: "scott-estrada-developer.jpg"},
    {name: "Barbara Ramos", role: "Graphic Designer", photo: "barbara-ramos-graphic-designer.jpg"},
]

// stampo in console le informazioni di nome ruolo e foto
for (let i = 0; i < teamMembers.length; i++) {
    console.log("Nome:", teamMembers[i].name);
    console.log("Ruolo:", teamMembers[i].role);
    console.log("Foto:", teamMembers[i].photo);
}

// stampo le stesse info sul DOM sotto forma di card

// costruisco le card
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    // Crea la card con foto, nome e ruolo del membro del team
    const memberCard = `
    <div class="col">
        <div class="card h-100 text-center">
            <img src="img/${member.photo}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
            </div>
        </div>
    </div>`;

    // Aggiungo la card all'elemento nel DOM
    teamInfoElement.innerHTML += memberCard;
}
