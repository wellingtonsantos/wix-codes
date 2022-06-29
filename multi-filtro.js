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
