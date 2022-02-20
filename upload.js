// Colocar a função dentro do $w.onReady(function () { aqui }) que já vem nas página do wix

$w('#repeater1').data = []; // Limpa o repetidor

$w("#btnEnviar").fileType = "Image"; // Define o tipo de arquivo de upload
$w("#btnEnviar").fileLimit = 10; // Define quantos arquivos poderão ser upados por vez, o máximo é 10

$w('#btnEnviar').onChange((event) => { // A função executa quando o valor do botão for alterado

    // O botão de upload retorna um array, portanto: 

    if ($w("#btnEnviar").value.length > 0) { // Se o valor retornado tiver pelo menos um item

        $w("#btnEnviar").uploadFiles().then(async(arquivos) => { // Executa a função de upload,  retornando um array como "arquivos"

            await arquivos.map((arq) => { // Uso esse map para formatar a url para usar no repetidor,pois no retorno a função não vem uma url https para ser usada

                arq._id = String(Math.random()).replace('.', '') // adiciona um _id pois o repetidor so preenche se tiver ele
                arq.imageUrl = 'https://static.wixstatic.com/media/' + String(arq.fileName) // formata url

                return arq
            })

            setTimeout(() => { // Espero 5 segundos para preencher o repetidor
                $w('#repeater1').data = arquivos

                $w('#repeater1').onItemReady(async($item, itemData) => {

                    $item('#imageX1').src = itemData.imageUrl

                })

                $w('#repeater1').expand()
            }, 5000)

        }).catch((erro) => {
            console.log(erro.description)
        })

    }

})