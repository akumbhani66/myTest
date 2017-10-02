# MyTest(APIs)

## Requirements

* Node 7.9+
* NPM 5.0.0 
* MongoDB 3.2+

## Development

#### How to Run ?

 * Change database name in `db.js` file accordingly.
 * Set appropriate secret key in `config` file.
 * `npm i` to install dependencies.
 * `npm start` to start server. Set PORT environment variable to set PORT ot by default it will  run on 3000.

 ## API documentation

 >> `api/auth/register`

 * To register new user.
 	1. name
	2. email
	3. password
	4. usernmae
	5. image
	6. company_name
	7. company_contact
	8. company_add

>> `api/auth/login`
 * To login
	1. username
	2. password

>> `api/auth/profile`

* to see profile of already registred user.