(function(){

	const slider = document.querySelector("input");
	const catalog = document.querySelector(".code--catalog");
	// const nodes = document.querySelector(".code--nodes");
	const globals = document.querySelector(".code--globals");

	const globalsEntries = [
		`# Vanilla`,

		`# Templated Config

bucket: s3://mybucket`,

		`# Pattern Matching

bucket: s3://mybucket`,

		`# Jinja Templating

bucket: s3://mybucket`
	];

	const catalogEntries = [
		`# Vanilla

data_accounts:
	type: pandas.CSVDataSet
	filepath: s3://bucket/data/accounts.csv
	load_args:
		header: true
	save_args:
		index: true
	
data_calls:
	type: pandas.CSVDataSet
	filepath: s3://bucket/data/calls.csv
	load_args:
		header: true
	save_args:
		index: true

data_disputes:
	type: pandas.CSVDataSet
	filepath: s3://bucket/data/disputes.csv
	load_args:
		header: true
	save_args:
		index: true
	
data_users:
	type: pandas.CSVDataSet
	filepath: s3://bucket/data/users.csv
	load_args:
		header: true
	save_args:
		index: true`,

		`# Templated Config

_common_data: &_common_data
	type: pandas.CSVDataSet
	load_args:
		header: true
	save_args:
		index: true

data_accounts:
	filepath: {{ bucket }}/data/accounts.csv
	<<: *_common-data
	
data_calls:
	filepath: {{ bucket }}/data/calls.csv
	<<: *_common-data

data_disputes:
	filepath: {{ bucket }}/data/disputes.csv
	<<: *_common-data
	
data_users:
	filepath: {{ bucket }}/data/users.csv
	<<: *_common-data`,

		`# Pattern Matching

data_{type}:
	type: pandas.CSVDataSet
	filepath: {bucket}/data/{type}.csv
	load_args:
		header: true
	save_args:
		index: true

model_{name}:
	type: parquet
	filepath: {bucket}/models/{name}.parquet
	load_args:
		header: true
	save_args:
		mode: overwrite`,

		`# Jinja Templating

{% for type in ['accounts', 'calls', 'disputes', 'users'] %}

data_{{ type }}:
	type: pandas.CSVDataSet
	filepath: {{ bucket }}/data/{{ type }}.csv
	load_args:
		header: true
	save_args:
		index: true

{% endfor %}

model_input_table:
	type: parquet
	filepath: {{ bucket }}/model/input_table.parquet
	load_args:
		header: true
	save_args:
		mode: overwrite`
	];

	function triggerChange() {
		globals.innerHTML = globalsEntries[slider.value];
		catalog.innerHTML = catalogEntries[slider.value];
		// nodes.innerHTML = nodesEntries[slider.value];
		Prism.highlightAll();
	}

	slider.addEventListener("input", function(event){
		triggerChange();
		event.preventDefault();
	});

	triggerChange();

})();