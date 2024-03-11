package dto

type UserDto struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	LastName string `json:"last_name"`
	Dni      int    `json:"dni"`
	Email    string `json:"email"`
	Password string `json:"password,omitempty"`
	Role     bool   `json:"role"`
}

type UsersDto []UserDto
