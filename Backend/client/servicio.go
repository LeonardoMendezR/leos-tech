package client

import (
	"project/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func GetServicioById(id int) (model.Servicio, error) {
	var servicio model.Servicio

	err := Db.Where("id = ?", id).First(&servicio).Error
	if err != nil {
		log.Error("Failed to get service by ID:", err)
		return model.Servicio{}, err
	}

	return servicio, nil
}

func GetServicios() (model.Servicios, error) {
	var servicios model.Servicios

	err := Db.Find(&servicios).Error
	if err != nil {
		log.Error("Failed to get services:", err)
		return nil, err
	}

	return servicios, nil
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
