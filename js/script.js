(function(){

	const slider = document.querySelector("input");
	const catalog = document.querySelector(".code--catalog");
	// const nodes = document.querySelector(".code--nodes");
	const globals = document.querySelector(".code--globals");
	const show = document.querySelector(".show");
	const notes = document.querySelector("fieldset");

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

prm_accounts:
	type: pandas.CSVDataSet
	filepath: s3://bucket/prm/accounts.csv
	load_args:
		header: true
	save_args:
		index: true
	
prm_calls:
	type: pandas.CSVDataSet
	filepath: s3://bucket/prm/calls.csv
	load_args:
		header: true
	save_args:
		index: true

prm_disputes:
	type: pandas.CSVDataSet
	filepath: s3://bucket/prm/disputes.csv
	load_args:
		header: true
	save_args:
		index: true
	
prm_users:
	type: pandas.CSVDataSet
	filepath: s3://bucket/prm/users.csv
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

prm_accounts:
	filepath: {{ bucket }}/prm/accounts.csv
	<<: *_common_data
	
prm_calls:
	filepath: {{ bucket }}/prm/calls.csv
	<<: *_common_data

prm_disputes:
	filepath: {{ bucket }}/prm/disputes.csv
	<<: *_common_data
	
prm_users:
	filepath: {{ bucket }}/prm/users.csv
	<<: *_common_data`,

		`# Pattern Matching

prm_{placeholder}:
	type: pandas.CSVDataSet
	filepath: {bucket}/prm/{placeholder}.csv
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

{% for placeholder in ['accounts', 'calls', 'disputes', 'users'] %}

prm_{{ placeholder }}:
	type: pandas.CSVDataSet
	filepath: {{ bucket }}/data/{{ prm }}.csv
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

	const noteEntries = [
		"",
		"",
		"<ul><li>The syntax for this idea is still under development.</li><li>This idea focuses on reducing the complexity of catalog entries.</li><li>This idea assumes that projects adhere to a strict naming convention in their catalogs.</li></ul>",
		"<ul><li>This idea assumes that projects adhere to a strict naming convention in their catalogs.</li><li>The catalog will be generated at runtime.</li></ul>"
	];

	function triggerChange() {
		globals.innerHTML = globalsEntries[slider.value];
		catalog.innerHTML = catalogEntries[slider.value];
		notes.children[1].innerHTML = noteEntries[slider.value];
		Prism.highlightAll();
	}

	slider.addEventListener("input", function(event){
		triggerChange();
		show.classList = "show option-" + slider.value;
		notes.classList = "notes-" + slider.value;
		event.preventDefault();
	});

	triggerChange();

})();