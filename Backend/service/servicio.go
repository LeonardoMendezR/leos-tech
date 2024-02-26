package service

import (
	"errors"
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
	var servicio model.Servicio = client.GetServicioById(id)

	var servicioDto dto.ServicioDto

	if servicio.Id == 0 {
		return servicioDto, errors.New("servicio not found")
	}

	servicioDto.Id = servicio.Id
	servicioDto.Area = servicio.Area
	servicioDto.NameTech = servicio.NameTech

	return servicioDto, nil
}

func (s *servicioService) GetServicios() (dto.ServiciosDto, error) {
	var servicios model.Servicios = client.GetServicios()
	var serviciosDto dto.ServiciosDto

	for _, servicio := range servicios {
		var servicioDto dto.ServicioDto
		servicioDto.Id = servicio.Id
		servicioDto.Area = servicio.Area
		servicioDto.NameTech = servicio.NameTech

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
