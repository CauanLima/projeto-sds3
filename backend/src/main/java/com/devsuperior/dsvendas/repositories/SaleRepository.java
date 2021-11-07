package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.SaleSuccessDTO;
import com.devsuperior.dsvendas.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sales;


public interface SaleRepository extends JpaRepository<Sales, Long> {
	@Query("Select new com.devsuperior.dsvendas.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sales AS obj GROUP BY obj.seller" )
	List<SaleSumDTO> amountGroupBySeller();
	
	@Query("Select new com.devsuperior.dsvendas.SaleSuccessDTO(obj.seller, SUM(obj.visited),SUM(obj.deals)) "
			+ " FROM Sales AS obj GROUP BY obj.seller" )
	List<SaleSuccessDTO> successGroupBySeller();
}
