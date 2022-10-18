# dataindo-api
Source Code Mini Project Data Indo API

Cara menjalankan :
npm install
npm run start

Port yang dipakai : https://localhost:3000

- show all categories

	endpoint	: /categories

- show a spesific categories and its sub categories
	
	endpoint	: /categories
	parameter	: category id (id)
	example	: /categories/1

- show all sub categories
	
	endpoint	: /subcategories
  
- show a spesific sub categories
	
	endpoint	: /subcategories
	parameter	: subcategory id (id)
	example	: /subcategories/1

- show all contents

	endpoint	: /contents

- show n contents

	endpoint	: /contents
	query		: limit
	example	: /contents?limit=5

- show n trend/popular contents

	endpoint	: /contents
	query		: trend
	example	: /contents?trend=3  	

- show n recent contents

	endpoint	: /contents
	query		: recent
	example	: /contents?recent=3
