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

// stampo le stesse info sul DOM

// costruisco le stringhe
for (let i = 0; i < teamMembers.length; i++) {
    // Crea una stringa con le informazioni del membro del team
    const memberInfoString = "Nome: " + teamMembers[i].name + "<br>" +
                           "Ruolo: " + teamMembers[i].role + "<br>" +
                           "Foto: " + teamMembers[i].photo + "<br><br>";

    // Aggiungo la stringa all'elemento nel DOM
    teamInfoElement.innerHTML += memberInfoString;
}