package service

import (
	"project/client"
	"project/dto"
	"project/model"
)

type servicioService struct{}

type servicioServiceInterface interface {
	GetServicioById(id int) (dto.ServicioDto, error)
	GetServicios() (dto.ServiciosDto, error)
	DeleteServicioById(id int) error
}

var ServicioService servicioServiceInterface

func init() {
	ServicioService = &servicioService{}
}

func (s *servicioService) GetServicioById(id int) (dto.ServicioDto, error) {
	var servicio model.Servicio

	servicio, err := client.GetServicioById(id)
	if err != nil {
		return dto.ServicioDto{}, err
	}

	servicioDto := dto.ServicioDto{
		Id:   servicio.Id,
		NameTech: servicio.NameTech,
		// Agregar otros campos según la estructura del servicio en el modelo
	}

	return servicioDto, nil
}

func (s *servicioService) GetServicios() (dto.ServiciosDto, error) {
	var servicios model.Servicios

	servicios, err := client.GetServicios()
	if err != nil {
		return nil, err
	}

	var serviciosDto dto.ServiciosDto
	for _, servicio := range servicios {
		servicioDto := dto.ServicioDto{
			Id:   servicio.Id,
			NameTech: servicio.NameTech,
			// Agregar otros campos según la estructura del servicio en el modelo
		}
		serviciosDto = append(serviciosDto, servicioDto)
	}

	return serviciosDto, nil
}

func (s *servicioService) DeleteServicioById(id int) error {
	err := client.DeleteServicioById(id)
	if err != nil {
		return err
	}
	return nil
}
