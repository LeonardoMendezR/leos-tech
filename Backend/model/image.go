package model

type Image struct {
	Id      int    `gorm:"primaryKey"`
	Path    string `gorm:"type:varchar(300); not null"`
	HotelId int    `gorm:"foreignkey:HotelId"`
}

type Images []Image
