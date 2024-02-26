package dto

type ImageDto struct {
	Id      int    `json:"id"`
	Path    string `json:"path" validate:"required"`
	HotelId int    `json:"hotel_id" validate:"required"`
}

type ImagesDto []ImageDto
