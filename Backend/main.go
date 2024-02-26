package main

import (
	"project/app"
	"project/db"
	//Import App directory when created !
)

func main() {

	db.StartDbEngine()
	app.StartRoute()
}
