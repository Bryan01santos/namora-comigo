    function SIM(){
        alert("Eu te amo minha patinha  ❤️❤️❤️ ")
        alert("Você está oficialmente convidada para o meu casamento, vá vestida de branco, e convide sua família! 👰🏻‍♀️💗💕💗💕")
    }

    function desvia(t){
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.top = geraPosicao (10, 90);
        btn.style.right = geraPosicao (10, 90);
        console.log("opa, desviei...");
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + '%';
    }
