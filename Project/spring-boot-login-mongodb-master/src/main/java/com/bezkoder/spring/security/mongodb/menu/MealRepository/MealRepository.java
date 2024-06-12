 package com.bezkoder.spring.security.mongodb.menu.MealRepository;



 import com.bezkoder.spring.security.mongodb.menu.MealModel.Meal;
 import org.springframework.data.mongodb.repository.MongoRepository;

 public interface MealRepository extends MongoRepository<Meal, String> {
 }
