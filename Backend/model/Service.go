package model

type Service struct {
	Id       int    `gorm:"primaryKey"`
	NameTech     string `gorm:"type:varchar(300); not null"`
	Area 	string  `gorm:"type:varchar(300); not null"`
}

type Services []Services
