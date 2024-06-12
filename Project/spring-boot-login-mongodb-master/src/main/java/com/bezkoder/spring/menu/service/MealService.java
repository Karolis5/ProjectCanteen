 package com.bezkoder.spring.menu.service;

 import com.bezkoder.spring.menu.MealModel.Meal;

 import java.util.List;



 public interface MealService {
     List<Meal> getAllMeals();
     Meal getMealById(String id);
     Meal createMeal(Meal meal);
     Meal updateMeal(String id, Meal meal);
     void deleteMeal(String id);
 }

