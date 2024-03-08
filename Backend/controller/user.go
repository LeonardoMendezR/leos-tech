package controller

import (
	"net/http"
	"project/dto"
	"project/service"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

func InsertUser(c *gin.Context) {
	var userDto dto.UserDto
	err := c.BindJSON(&userDto)

	if err != nil {
		log.Error(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userDto, er := service.UserService.InsertUser(userDto)

	if er != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": er.Error()})
		return
	}

	c.JSON(http.StatusCreated, userDto)
}

func GetUserById(c *gin.Context) {

	id, _ := strconv.Atoi(c.Param("id"))
	var userDto dto.UserDto

	userDto, err := service.UserService.GetUserById(id)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, userDto)
}

func GetUsers(c *gin.Context) {

	var usersDto dto.UsersDto

	usersDto, err := service.UserService.GetUsers()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, usersDto)
}

func UserLogin(c *gin.Context) {
	var loginDto dto.UserDto

	err := c.BindJSON(&loginDto)
	if err != nil {
		log.Error(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	loginDto, er := service.UserService.UserLogin(loginDto)
	if er != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": er.Error()})
		return
	}

	token, err := generateToken(loginDto)
	if err != nil {
		log.Error(err.Error())
		c.JSON(http.StatusInternalServerError, "Failed to generate token")
		return
	}

	response := struct {
		Token string      `json:"token"`
		User  dto.UserDto `json:"user"`
	}{
		Token: token,
		User:  loginDto,
	}

	c.JSON(http.StatusAccepted, response)
}

func generateToken(loginDto dto.UserDto) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = loginDto.Id
	claims["role"] = loginDto.Role
	claims["expiration"] = time.Now().Add(time.Hour * 24).Unix()

	tokenString, err := token.SignedString([]byte("your-secret-key"))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
