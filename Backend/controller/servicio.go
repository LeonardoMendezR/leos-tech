package controller

import (
    "net/http"
    "project/dto"
    "project/service"

    "github.com/gin-gonic/gin"
)
// Función para manejar la solicitud de obtener todos los servicios
func GetServicios(c *gin.Context) {
    // Llamar al servicio para obtener todos los servicios
    servicios, err := service.ServicioService.GetServicios()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    // Devolver los servicios obtenidos como respuesta JSON
    c.JSON(http.StatusOK, servicios)
}

// Función para manejar la solicitud de obtener un servicio por su ID
func GetServicioById(c *gin.Context) {
    // Obtener el ID del servicio de los parámetros de la URL
    servicioID := c.Param("Id")

    // Llamar al servicio para obtener el servicio por su ID
    servicio, err := service.ServicioService.GetServicioByid(servicioID)
    if err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
        return
    }

    // Devolver el servicio obtenido como respuesta JSON
    c.JSON(http.StatusOK, servicio)
}

// Función para manejar la solicitud de eliminar un servicio por su ID
func DeleteServicioById(c *gin.Context) {
    // Obtener el ID del servicio de los parámetros de la URL
    servicioID := c.Param("id")

    // Llamar al servicio para eliminar el servicio por su ID
    err := service.ServicioService.DeleteServicioById(servicioID)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    // Devolver una respuesta exitosa
    c.JSON(http.StatusOK, gin.H{"message": "Servicio eliminado correctamente"})
}
