 package com.bezkoder.spring.security.mongodb.menu.service;


 import java.util.List;

 import com.bezkoder.spring.resource.ResourceNotFoundException;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.bezkoder.spring.security.mongodb.menu.MealModel.Meal;
import com.bezkoder.spring.security.mongodb.menu.MealRepository.MealRepository;

 @Service
 public class MealServiceImpl implements MealService {

     @Autowired
     private MealRepository mealRepository;

     @Override
     public List<Meal> getAllMeals() {
         return mealRepository.findAll();
     }

     @Override
     public Meal getMealById(String id) {
         return mealRepository.findById(id).orElse(null);
     }

     @Override
     public Meal createMeal(Meal meal) {
         return mealRepository.save(meal);
     }


     @Override
     public void deleteMeal(String id) {
         mealRepository.deleteById(id);
     }

     @Override
 public Meal updateMeal(String id, Meal mealDetails) {
     Meal meal = mealRepository.findById(id)
       .orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id :" + id));
    
     meal.setName(mealDetails.getName());
     meal.setDescription(mealDetails.getDescription());
     meal.setPrice(mealDetails.getPrice());
     meal.setPicture(mealDetails.getPicture());
     meal.setQuantity(mealDetails.getQuantity());
     meal.setCategory(mealDetails.getCategory());

     Meal updatedMeal = mealRepository.save(meal);
     return updatedMeal;
 }

 }

