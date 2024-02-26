package initializers

import (
	"github.com/joho/godotenv"
	"log"
)

func LoadEnVAriables() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
