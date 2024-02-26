package model

type Image struct {
	Id      int    `gorm:"primaryKey"`
	Path    string `gorm:"type:varchar(300); not null"`
	PortfolioId int    `gorm:"foreignkey:PortfolioId"`
}

type Images []Image
