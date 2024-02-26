package client

import (
	"project/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func InsertUser(user model.User) model.User {

	result := Db.Create(&user)

	if result.Error != nil {
		log.Error("Failed to insert user.")
		return user
	}

	log.Debug("User created:", user.Id)
	return user
}


func DeleteUserById(id int) error {
	var user model.User
	result := Db.Where("id=?", id).Delete(&user)
	if result.Error != nil {
		log.Error("Failed to delete user.")
		return result.Error
	}
	log.Debug("User deleted:", id)
	return nil
}

func GetUserById(id int) model.User {
	var user model.User

	Db.Where("id = ?", id).First(&user)
	log.Debug("User: ", user)

	return user
}

func GetUserByEmail(email string) model.User {
	var user model.User

	Db.Where("email = ?", email).First(&user)
	log.Debug("User: ", user)

	return user
}

func GetUsers() model.Users {
	var users model.Users
	Db.Find(&users)

	log.Debug("Users: ", users)

	return users
}
