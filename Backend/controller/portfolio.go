package controller

import (
	"net/http"
	"project/dto"
	"project/service"
	"strconv"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

func GetPortfolioById(c *gin.Context){


	id, _ := strconv.Atoi(c.Param("id"))

	var portfolioDto dto.PortfolioDto

	portfolioDto, err := service.PortfolioService.GetPortfolioById(id)
    
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
	}
	c.JSON(http.StatusOK, portfolioDto)

}

func GetPortfolios(c *gin.Context){
	var portfoliosDto dto.PortfoliosDto

	portfoliosDto, err := service.PortfolioService.GetPortfolios()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	c.JSON(http.StatusOK, portfoliosDto)
}

func DeletePortfolioByID (c *gin.Context){
	_, err := strconv.Atoi(c.Param("id"))

	log.Debug("[controller] id de portfolio a borrar: " + c.Param("id"))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No se pudo eliminar el portfolio"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "El portfolio fue eliminado correctamente"})
}