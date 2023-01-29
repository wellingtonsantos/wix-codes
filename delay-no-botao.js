$w.onReady(function () {

    let aparecerBotao = setInterval(() => {
        if( $w('#cole o ID do video aqui').isPlaying ) {
            if( $w('#cole o ID do video aqui').currentTime > 10 ) { // MUDE O "10" PARA O TEMPO DE DESEJA
                $w('#cole o ID do botao aqui').show('fade')
                clearInterval(aparecerBotao)
            }
        }
    }, 1000)

});
