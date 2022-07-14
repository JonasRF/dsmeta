package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repostories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	

	public List<Sale> findSales() {
		List<Sale> list = saleRepository.findAll();
		return list;
	}
}
