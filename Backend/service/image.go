package service

import (
	"errors"
	"project/client"
	"project/dto"
	"project/model"
)

type imageService struct{}

type imageServiceInterface interface {
	InsertImages(imagesDto dto.ImagesDto) (dto.ImagesDto, error)
	GetImageById(id int) (dto.ImageDto, error)
}

var ImageService imageServiceInterface

func init() {
	ImageService = &imageService{}
}

func (s *imageService) InsertImages(imagesDto dto.ImagesDto) (dto.ImagesDto, error) {

	var images model.Images

	for _, imageDto := range imagesDto {
		var image model.Image

		image.Path = imageDto.Path
		image.HotelId = imageDto.HotelId

		images = append(images, image)
	}

	images = client.InsertImages(images)

	if len(images) != len(imagesDto) {
		return imagesDto, errors.New("failed to insert images")
	}

	for i, image := range images {
		if image.Id == 0 {
			return imagesDto, errors.New("failed to insert images")
		}

		imagesDto[i].Id = image.Id
	}

	return imagesDto, nil
}

func (s *imageService) GetImageById(id int) (dto.ImageDto, error) {
	var image model.Image
	var imageDto dto.ImageDto

	image = client.GetImageById(id)

	if image.Id == 0 {
		return imageDto, errors.New("image not found")
	}

	imageDto.Id = image.Id
	imageDto.Path = image.Path
	imageDto.HotelId = image.HotelId

	return imageDto, nil
}
