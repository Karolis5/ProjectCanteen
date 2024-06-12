 package com.bezkoder.spring.menu.MealRepository;


 import com.bezkoder.spring.menu.MealModel.Meal;
 import org.springframework.data.mongodb.repository.MongoRepository;

 public interface MealRepository extends MongoRepository<Meal, String> {
 }
