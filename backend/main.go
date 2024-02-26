package main

import (
	"leos-tech/backend/controllers"
	"leos-tech/backend/initializers"
	"os"

	"github.com/gofiber/fiber/v2"
)

func init() {
	initializers.LoadEnVAriables()
	initializers.ConnectToDatabase()
	initializers.SyncDB()
}

func main() {
	//Setup app
	app := fiber.New()

	//Routes
	app.Get("/", controllers.PostIndex())

	//start app
	app.Listen(":" + os.Getenv("PORT"))
}
