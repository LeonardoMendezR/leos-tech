package model


type Portfolio struct {
	Id       int    `gorm:"primaryKey"`
	Name     string `gorm:"type:varchar(300); not null"`
	Type 	string  `gorm:"type:varchar(300); not null"`
	Description string `gorm:"type:varchar(300); not null"`
	Link    string  `gorm:"type:varchar(300); not null"`
}

type Portfolios []Portfolio
