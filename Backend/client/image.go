package client

import (
	log "github.com/sirupsen/logrus"
	"project/model"
)

func InsertImage(image model.Image) model.Image {

	result := Db.Create(&image)

	if result.Error != nil {
		log.Error("Failed to insert image.")
		return image
	}

	log.Debug("Image created:", image.Id)
	return image
}

func InsertImages(images model.Images) model.Images {

	for i := range images {
		result := Db.Create(&images[i])

		if result.Error != nil {
			log.Error("Failed to insert image.")
			return images
		}

		id := images[i].Id
		Db.First(&images[i], id)
	}

	return images
}

func GetImageById(id int) model.Image {
	var image model.Image

	Db.Where("id = ?", id).First(&image)
	log.Debug("Image: ", image)

	return image
}

func GetImages() model.Images {
	var images model.Images
	Db.Find(&images)

	log.Debug("Images: ", images)

	return images
}

func GetImagesByHotelId(hotelId int) model.Images {
	var images model.Images

	Db.Where("hotel_id = ?", hotelId).Find(&images)
	log.Debug("Images: ", images)

	return images
}
