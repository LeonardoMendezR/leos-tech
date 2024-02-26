package initializers

import (
	"fmt"
	"leos-tech/backend/models"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDatabase() {
	var err error

	dsn := os.Getenv("DB_URL")

	DB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println("failed to connect to db")
	}
}

func SyncDB() {

	DB.AutoMigrate(&models.Post{})

}
