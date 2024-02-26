package controller

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"io"
	"net/http"
	"os"
	"path"
	"project/dto"
	"project/service"
	"strconv"
)

func InsertImages(c *gin.Context) {
	var imagesDto dto.ImagesDto

	id, _ := strconv.Atoi(c.Param("id"))

	form, _ := c.MultipartForm()
	files := form.File["images"]

	for i, file := range files {

		fileExt := path.Ext(file.Filename)

		//Filename as [hotel_id]-[image_number].[file_extension]
		fileName := fmt.Sprintf("%d-%d%s", id, i+1, fileExt)

		if err := c.SaveUploadedFile(file, "Images/"+fileName); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file"})
			return
		}

		imageDTO := dto.ImageDto{
			HotelId: id,
			Path:    "Images/" + fileName,
		}
		imagesDto = append(imagesDto, imageDTO)
	}

	imagesDto, err := service.ImageService.InsertImages(imagesDto)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, imagesDto)
}

func GetImageById(c *gin.Context) {
	var imageDto dto.ImageDto
	id, _ := strconv.Atoi(c.Param("id"))

	imageDto, err := service.ImageService.GetImageById(id)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	filePath := imageDto.Path

	file, err := os.Open(filePath)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	defer file.Close()

	c.Header("Content-Type", "image/jpg")

	_, err = io.Copy(c.Writer, file)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
}
