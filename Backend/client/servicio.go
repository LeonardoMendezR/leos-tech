package client

import (
	"project/model"

	log "github.com/sirupsen/logrus"
)

func GetServicioById(id int) model.Servicio {
	var servicio model.Servicio

	Db.Where("id = ?", id).First(&servicio)
	log.Debug("servicio: ", servicio)

	return servicio
}

func GetServicios() model.Servicios {
	var servicios model.Servicios
	Db.Find(&servicios)

	log.Debug("Servicios: ", servicios)

	return servicios
}

func DeleteServicioById(id int) error {
	err := Db.Where("id = ?", id).Delete(&model.Servicio{}).Error
	if err != nil {
		log.Error("Failed to delete service by ID:", err)
		return err
	}

	log.Debug("Service deleted successfully:", id)
	return nil
}
