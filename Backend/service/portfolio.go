package service

import (
	"errors"
	"project/client"
	"project/dto"
	"project/model"
)

type portfolioService struct{}

type portfolioServiceInterface interface {
	GetPortfolioById(id int) (dto.PortfolioDto, error)
	GetPortfolios() (dto.PortfoliosDto, error)
	DeletePortfolioByID(id int) error
}

var PortfolioService portfolioServiceInterface

func init() {
	PortfolioService = &portfolioService{}
}
func (s *portfolioService) GetPortfolioById(id int) (dto.PortfolioDto, error) {

	var Portfolio model.Portfolio = client.GetPortfolioById(id)

	var PortfolioDto dto.PortfolioDto

	if Portfolio.Id == 0 {
		return PortfolioDto, errors.New("user not found")
	}

	return PortfolioDto, nil
}

func (s *portfolioService) GetPortfolios() (dto.PortfoliosDto, error) {
	var portfolios model.Portfolios = client.GetPortfolios()
	var portfoliosDto dto.PortfoliosDto

	for _, portfolio := range portfolios {
		var portfolioDto dto.PortfolioDto
		portfolioDto.Id = portfolio.Id
		portfolioDto.Link = portfolio.Link
		portfolioDto.Name = portfolio.Name
		portfolioDto.Description = portfolio.Description
		portfolioDto.Type = portfolio.Type

		portfoliosDto = append(portfoliosDto, portfolioDto)
	}

	return portfoliosDto, nil
}
func (s *portfolioService) DeletePortfolioByID(id int) error {
	err := client.DeletePortfolioByID(id)
	if err != nil {
		return err
	}
	return nil
}
