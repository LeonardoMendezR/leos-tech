package service

import (
	"errors"
	"golang.org/x/crypto/bcrypt"
	"project/client"
	"project/dto"
	"project/model"
)

type userService struct{}

type userServiceInterface interface {
	InsertUser(userDto dto.UserDto) (dto.UserDto, error)
	UpdateUser(userDto dto.UserDto, id int) (dto.UserDto, error)
	GetUserById(id int) (dto.UserDto, error)
	GetUsers() (dto.UsersDto, error)
	UserLogin(loginDto dto.UserDto) (dto.UserDto, error)
}

var UserService userServiceInterface

func init() {
	UserService = &userService{}
}

func (s *userService) InsertUser(userDto dto.UserDto) (dto.UserDto, error) {
	var user model.User

	encryptedPassword, err := bcrypt.GenerateFromPassword([]byte(userDto.Password), bcrypt.DefaultCost)

	if err != nil {
		return userDto, err
	}

	user.Name = userDto.Name
	user.LastName = userDto.LastName
	user.Dni = userDto.Dni
	user.Email = userDto.Email
	user.Password = string(encryptedPassword)
	user.Role = userDto.Role

	user = client.InsertUser(user)

	userDto.Id = user.Id
	userDto.Password = user.Password

	if user.Id == 0 {
		return userDto, errors.New("error creating user")
	}

	return userDto, nil
}
func (s *userService) UpdateUser(userDto dto.UserDto, id int) (dto.UserDto, error) {
	// Obtener el usuario existente de la base de datos por su ID
	user := client.GetUserById(id)

	// Actualizar los campos del usuario con los datos proporcionados en el UserDto
	user.Name = userDto.Name
	user.LastName = userDto.LastName
	user.Dni = userDto.Dni
	user.Email = userDto.Email
	// Actualizar la contraseña solo si se proporciona una nueva contraseña
	if userDto.Password != "" {
		// Encriptar la nueva contraseña
		encryptedPassword, err := bcrypt.GenerateFromPassword([]byte(userDto.Password), bcrypt.DefaultCost)
		if err != nil {
			return dto.UserDto{}, err
		}
		user.Password = string(encryptedPassword)
	}
	user.Role = userDto.Role

	// Guardar los cambios en la base de datos
	err := client.UpdateUser(user)
	if err != nil {
		return dto.UserDto{}, err
	}

	// Convertir el usuario actualizado de nuevo a un UserDto y devolverlo
	updatedUserDto := dto.UserDto{
		Id:       user.Id,
		Name:     user.Name,
		LastName: user.LastName,
		Dni:      user.Dni,
		Email:    user.Email,
		Role:     user.Role,
		// No es recomendable devolver la contraseña en el DTO
	}
	return updatedUserDto, nil
}

func (s *userService) GetUserById(id int) (dto.UserDto, error) {

	var user = client.GetUserById(id)

	var userDto dto.UserDto

	if user.Id == 0 {
		return userDto, errors.New("user not found")
	}

	userDto.Id = user.Id
	userDto.Name = user.Name
	userDto.LastName = user.LastName
	userDto.Dni = user.Dni
	userDto.Email = user.Email
	userDto.Role = user.Role

	return userDto, nil
}

func (s *userService) GetUsers() (dto.UsersDto, error) {
	var users model.Users = client.GetUsers()
	var usersDto dto.UsersDto

	for _, user := range users {
		var userDto dto.UserDto
		userDto.Id = user.Id
		userDto.Name = user.Name
		userDto.LastName = user.LastName
		userDto.Dni = user.Dni
		userDto.Email = user.Email
		userDto.Role = user.Role

		usersDto = append(usersDto, userDto)
	}

	return usersDto, nil
}

func (s *userService) UserLogin(loginDto dto.UserDto) (dto.UserDto, error) {

	var user = client.GetUserByEmail(loginDto.Email)

	if user.Id == 0 {
		return loginDto, errors.New("user not registered")
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginDto.Password))
	if err != nil {
		// Passwords don't match
		return loginDto, errors.New("incorrect password")
	}

	var userDto dto.UserDto

	userDto.Id = user.Id
	userDto.Name = user.Name
	userDto.LastName = user.LastName
	userDto.Dni = user.Dni
	userDto.Email = user.Email
	userDto.Role = user.Role
	return userDto, nil
}
