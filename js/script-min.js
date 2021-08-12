!function(){const t=document.querySelector("input"),a=document.querySelector(".code--catalog"),e=document.querySelector(".code--globals"),n=["# Vanilla","# Templated Config\n\nbucket: s3://mybucket","# Pattern Matching\n\nbucket: s3://mybucket","# Jinja Templating\n\nbucket: s3://mybucket"],s=["# Vanilla\n\ndata_accounts:\n\ttype: pandas.CSVDataSet\n\tfilepath: s3://bucket/data/accounts.csv\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true\n\t\ndata_calls:\n\ttype: pandas.CSVDataSet\n\tfilepath: s3://bucket/data/calls.csv\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true\n\ndata_disputes:\n\ttype: pandas.CSVDataSet\n\tfilepath: s3://bucket/data/disputes.csv\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true\n\t\ndata_users:\n\ttype: pandas.CSVDataSet\n\tfilepath: s3://bucket/data/users.csv\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true","# Templated Config\n\n_common_data: &_common_data\n\ttype: pandas.CSVDataSet\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true\n\ndata_accounts:\n\tfilepath: {{ bucket }}/data/accounts.csv\n\t<<: *_common-data\n\t\ndata_calls:\n\tfilepath: {{ bucket }}/data/calls.csv\n\t<<: *_common-data\n\ndata_disputes:\n\tfilepath: {{ bucket }}/data/disputes.csv\n\t<<: *_common-data\n\t\ndata_users:\n\tfilepath: {{ bucket }}/data/users.csv\n\t<<: *_common-data","# Pattern Matching\n\ndata_{type}:\n\ttype: pandas.CSVDataSet\n\tfilepath: {bucket}/data/{type}.csv\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true\n\nmodel_{name}:\n\ttype: parquet\n\tfilepath: {bucket}/models/{name}.parquet\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tmode: overwrite","# Jinja Templating\n\n{% for type in ['accounts', 'calls', 'disputes', 'users'] %}\n\ndata_{{ type }}:\n\ttype: pandas.CSVDataSet\n\tfilepath: {{ bucket }}/data/{{ type }}.csv\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tindex: true\n\n{% endfor %}\n\nmodel_input_table:\n\ttype: parquet\n\tfilepath: {{ bucket }}/model/input_table.parquet\n\tload_args:\n\t\theader: true\n\tsave_args:\n\t\tmode: overwrite"];function d(){e.innerHTML=n[t.value],a.innerHTML=s[t.value],Prism.highlightAll()}t.addEventListener("input",(function(t){d(),t.preventDefault()})),d()}();