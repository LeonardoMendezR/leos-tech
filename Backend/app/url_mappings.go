package app

import (
	"project/controller"

	log "github.com/sirupsen/logrus"
)

func mapUrls() {

	// Add all methods and its mappings
	router.POST("/user", controller.InsertUser)
	router.GET("/user/:id", controller.GetUserById)
	router.GET("/user", controller.GetUsers)
	router.DELETE("/user:id", controller.DeleteUserById)

	router.GET("/image/:id", controller.GetImageById)

	router.POST("/login", controller.UserLogin)

	router.GET("/servicio", controller.GetServicios)
	router.GET("/servicio/:id", controller.GetServicioById)
	router.DELETE("/service/:id", controller.DeleteServicioById)


	
	log.Info("Finishing mappings configurations")
}
