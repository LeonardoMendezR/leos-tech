package controller

import (
	"net/http"
	"project/dto"
	"project/service"
	"strconv"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

func GetServicioById(c *gin.Context) {

	id, _ := strconv.Atoi(c.Param("id"))

	var servicioDto dto.ServicioDto

	servicioDto, err := service.ServicioService.GetServicioById(id)
    
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
	}
	c.JSON(http.StatusOK, servicioDto)

}

func GetServicios(c *gin.Context) {
	var serviciosDto dto.ServiciosDto

	serviciosDto, err := service.ServicioService.GetServicios()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	c.JSON(http.StatusOK, serviciosDto)
}

func DeleteServicioById(c *gin.Context) {

	_, err := strconv.Atoi(c.Param("id"))

	log.Debug("[controller] id de servicio a borrar: " + c.Param("id"))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No se pudo eliminar el servicio"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "El servicio fue eliminado correctamente"})

}
