// Récupération du body
const body = document.body;
body.style.height = '100vh';
body.style.background = '#333';
body.style.color = '#fff'
body.style.fontFamily = 'Arial, sans-serif';

// Création du container principal
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.style.width = '100%';
container.style.height = '100%';
container.style.display = 'flex';
container.style.flexDirection = 'row';
body.appendChild(container);

// Création de la section formulaire
const sectionFormulaire = document.createElement('section');
sectionFormulaire.setAttribute('class', 'sectionFormulaire');
sectionFormulaire.style.width = '50%';
sectionFormulaire.style.minWidth = '320px';
sectionFormulaire.style.height = '100%';
sectionFormulaire.style.borderRight = '1px solid #fff';
sectionFormulaire.style.padding = '15px';
sectionFormulaire.style.backgroundImage = 'url(ressources/fond.jpg)';
sectionFormulaire.style.backgroundRepeat = 'no-repeat';
sectionFormulaire.style.backgroundSize = 'cover';
container.appendChild(sectionFormulaire);

    // Création du formulaire
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '');
    form.style.width = '100%';
    form.style.height = '100%';
    form.style.display = 'grid';
    form.style.gridTemplateRows = '80px 100px 1fr 80px';
    sectionFormulaire.appendChild(form);

    // Création du titre
    const titre = document.createElement('h1');
    titre.innerHTML = 'Mon Nouveau Blog'
    titre.style.width = '100%';
    titre.style.textAlign = 'center';
    titre.style.fontSize = '3rem';
    titre.style.borderBottom = '1px dashed #fff';
    titre.style.webkitFilter = 'drop-shadow(0px 0px 2px #000)';
    form.appendChild(titre);

    // Création de l'auteur
    const groupeAutheur = document.createElement('fieldset');
    
    const labelAutheur = document.createElement('label');
    labelAutheur.setAttribute('for', 'autheur');
    labelAutheur.innerHTML = "Nom d'utilisateur";

    const autheur = document.createElement('input');
    autheur.setAttribute('type', 'text');
    autheur.setAttribute('name', 'autheur');
    autheur.setAttribute('id', 'autheur');
    autheur.style.paddingLeft = '15px';
    autheur.style.width = '90%';
    autheur.style.minWidth = '280px';
    autheur.style.height = '50px';
    autheur.style.borderRadius = '10px';
    autheur.style.outline = 'none';
    autheur.style.fontSize = '1.5rem';
    autheur.style.border = '3px inset #000';
    
    groupeAutheur.appendChild(labelAutheur);
    groupeAutheur.appendChild(autheur);
    form.appendChild(groupeAutheur);

    // Création de la zone de texte
    const groupeMessage = document.createElement('fieldset');

    const labelMessage = document.createElement('label');
    labelMessage.setAttribute('for', 'message');
    labelMessage.innerHTML = 'Message';

    const message = document.createElement('textarea');
    message.setAttribute('id', 'message');
    message.setAttribute('name', 'message');
    message.style.padding = '15px';
    message.style.width = '90%';
    message.style.minWidth = '280px';
    message.style.height = '80%';
    message.style.borderRadius = '10px';
    message.style.outline = 'none';
    message.style.fontSize = '1.5rem';
    message.style.resize = 'none';
    message.style.border = '3px inset #000';

    groupeMessage.appendChild(labelMessage);
    groupeMessage.appendChild(message);
    form.appendChild(groupeMessage);

    // Création du bouton d'envoie
    const btn = document.createElement('button');
    btn.innerHTML = 'Envoyer';
    btn.style.width = '90%';
    btn.style.minWidth = '280px';
    btn.style.margin = '0 auto';
    btn.style.fontSize = '1.5rem';
    btn.style.borderRadius = '10px';
    btn.style.border = '3px inset #000';
    btn.style.background = 'gray';
    btn.style.boxShadow = 'inset 0px 0px 10px #000'
    btn.style.cursor = 'pointer';

    form.appendChild(btn);

    btn.addEventListener('mouseenter', () =>
    {
        btn.style.background = 'yellowgreen';
        btn.style.position = 'relative';
        btn.style.top = '2px';
    })

    btn.addEventListener('mouseleave', () =>
    {
        btn.style.background = 'green';
        btn.style.position = 'initial';
        btn.style.top = '0px';
    })

    // Mise en forme formulaire
    const fieldsets = document.querySelectorAll('fieldset');
    const labels = document.querySelectorAll('label');

    fieldsets.forEach(fieldset =>
    {
        fieldset.style.width = '100%';
        fieldset.style.display = 'flex';
        fieldset.style.flexDirection = 'column';
        fieldset.style.alignItems = 'center';
        fieldset.style.border = 'none';
    });

    labels.forEach(label =>
    {
        label.style.width = '90%';
        label.style.textAlign = 'center';
        label.style.fontSize = '1.5rem';
        label.style.margin = '5px 0';
        label.style.webkitFilter = 'drop-shadow(0px 0px 2px #000)';
    })

    // Création de la section blog
    const sectionBlog = document.createElement('section');
    sectionBlog.setAttribute('class', 'sectionBlog');
    sectionBlog.style.width = '50%';
    sectionBlog.style.minWidth = '280px';
    sectionBlog.style.height = '100%';
    sectionBlog.style.padding = '15px';
    container.appendChild(sectionBlog);
