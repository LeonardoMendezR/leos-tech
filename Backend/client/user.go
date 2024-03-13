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

func UpdateUser(user model.User) error {
	// Obtener el usuario existente de la base de datos por su ID
	var existingUser model.User
	result := Db.First(&existingUser, user.Id)
	if result.Error != nil {
		log.Error("Failed to find user:", result.Error)
		return result.Error
	}

	// Actualizar los campos del usuario existente con los datos del usuario pasado como argumento
	existingUser.Name = user.Name
	existingUser.LastName = user.LastName
	existingUser.Dni = user.Dni
	existingUser.Email = user.Email
	existingUser.Password = user.Password
	existingUser.Role = user.Role

	// Guardar los cambios en la base de datos
	result = Db.Save(&existingUser)
	if result.Error != nil {
		log.Error("Failed to update user:", result.Error)
		return result.Error
	}

	log.Debug("User updated:", existingUser.Id)
	return nil
}

func GetUserById(id int) model.User {
	var user model.User

	result := Db.Where("id = ?", id).First(&user)
	if result.Error != nil {
		log.Debug("failed to find user ", id)
	} else {
		log.Debug("User: ", user)
	}

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
