package model

type User struct {
	Id       int    `gorm:"primaryKey"`
	Name     string `gorm:"type:varchar(300); not null"`
	LastName string `gorm:"type:varchar(300); not null"`
	Dni      int    `gorm:"type:int; not null"`
	Email    string `gorm:"type:varchar(300); unique"`
	Password string `gorm:"type:varchar(300); not null"`
	Role     bool   `gorm:"type:boolean; not null"`
}

type Users []User
