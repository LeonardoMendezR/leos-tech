package client


import (
	"project/model"

	log "github.com/sirupsen/logrus"
)



func GetPortfolioById(id int) model.Portfolio{
	var portfolio model.Portfolio

	Db.Where("id = ?", id).First(&portfolio)
	log.Debug("User: ", portfolio)

	return portfolio
}

func GetPortfolios() model.Portfolios{
	var portfolios model.Portfolios
	Db.Find(&portfolios)

	log.Debug("Users: ", portfolios)

	return portfolios
}

func DeletePortfolioByID(id int) error{
	var portfolio model.Portfolio
	result := Db.Where("id=?", id).Delete(&portfolio)
	if result.Error != nil {
		log.Error("Failed to delete user.")
		return result.Error
	}
	log.Debug("User deleted:", id)
	return nil

}