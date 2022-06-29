import wixData from 'wix-data';


let dataName = 'filtro_do_filtro';

$w.onReady(async function () {


	let workOptions = [];
	
	await wixData.aggregate(dataName).group('work').run().then((res) => {
		
		res._items.map( i => {
			workOptions.push( { label: i.work, value: i.work } )
		})

	})

	$w('#ddWorkOptions').options = workOptions


	filter()

	$w('#btSearch').onClick(() => {
		filter()
	})

});

async function getPessoas () {

	let query = await wixData.query(dataName)

	if($w('#inName').value) {
		query = query.contains('name', $w('#inName').value)
	}
	if($w('#ddWorkOptions').value) {
		query = query.eq('work', $w('#ddWorkOptions').value)
	}
	
	// quer adicionar mais filtros além dos de cima, faça o mesmo procedimento
	if(inclua aqui o valor do carma em questão, isso valida se o campo tem um valor ou não, se tiver executa) { // isso é uma validação
		query = query.eq('work', $w('#ddWorkOptions').value)
		// o query é nossa variavel que inicialmente tem o começo da nossa chamado ao banco e depois ela é preenchida conforme as requisições
		// no valor de query adicione ela mesma somada ao filtro que deseja incluir
		// no link abaixo você encontra as opções de filtros que são possíveis
		// https://www.wix.com/velo/reference/wix-data/wixdatafilter
	}

	return query.find().then(res => { return res.items })

}

function viewPessoas (data) {

	$w('#repPessoas').data = data
	$w('#repPessoas').onItemReady( ($item, itemData) => {

		$item('#img').src = itemData.image
		$item('#txtName').text = itemData.name
		$item('#txtWork').text = itemData.work

	})

}

function filter () {

	getPessoas().then((res) => {

		viewPessoas(res)

	})

}
