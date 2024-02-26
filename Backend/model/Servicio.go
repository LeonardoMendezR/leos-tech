package model

type Servicio struct {
	Id       int    `gorm:"primaryKey"`
	NameTech string `gorm:"type:varchar(300); not null"`
	Area     string `gorm:"type:varchar(300); not null"`
}

type Servicios []Servicio
