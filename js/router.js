const route = (event) => {
    //monitora o evento gerado

    event = event || window.event;
    //tira a propriedade padrao dele
    event.preventDefault();
    //adiciona uma entrada na pilha de historico do navegador
    //URL para onde a tag âncora aponta
    window.history.pushState({}, "", event.target.href);
    if((event.target.text == 'Próximo') && window.location.pathname == '/home' && !isValid('#form')){
        return alert('Preencha os campos em destaque!');
    }
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/login.html",
    "/home": "/pages/home.html",
    "/cadastro": "/pages/cadastro.html",
    "/favoritos": "/pages/favoritos.html",
    "/senha": "/pages/senha.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

