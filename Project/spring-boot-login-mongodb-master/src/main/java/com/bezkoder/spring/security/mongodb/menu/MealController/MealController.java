 package com.bezkoder.spring.security.mongodb.menu.MealController;

 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.security.mongodb.menu.MealModel.Meal;
import com.bezkoder.spring.security.mongodb.menu.service.MealService;




 @RestController
 @CrossOrigin(origins = "http://localhost:3000")
 @RequestMapping("/api/meals")
 public class MealController {

     @Autowired
     private MealService mealService;

     @GetMapping
     public List<Meal> getAllMeals() {
         return mealService.getAllMeals();
     }

     @GetMapping("/{id}")
     public Meal getMealById(@PathVariable String id) {
         return mealService.getMealById(id);
     }

     @PostMapping
     public Meal createMeal(@RequestBody Meal meal) {
         return mealService.createMeal(meal);
     }

     @PutMapping("/{id}")
     public Meal updateMeal(@PathVariable String id, @RequestBody Meal meal) {
         return mealService.updateMeal(id, meal);
     }

     @DeleteMapping("/{id}")
     public void deleteMeal(@PathVariable String id) {
         mealService.deleteMeal(id);
     }
 }



//  package com.bezkoder.spring.security.mongodb.menu.MealController;

//  import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.bezkoder.spring.security.mongodb.menu.MealModel.Meal;
// import com.bezkoder.spring.security.mongodb.menu.service.MealService;




// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// @RequestMapping("/api/meals")
// public class MealController {

//     @Autowired
//     private MealService mealService;

//     @GetMapping
//     public List<Meal> getAllMeals() {
//         return mealService.getAllMeals();
//     }

//     @GetMapping("/{id}")
//     public Meal getMealById(@PathVariable String id) {
//         return mealService.getMealById(id);
//     }

//     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//     @PostMapping
//     public Meal createMeal(@RequestBody Meal meal) {
//         return mealService.createMeal(meal);
//     }

//     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//     @PutMapping("/{id}")
//     public Meal updateMeal(@PathVariable String id, @RequestBody Meal meal) {
//         return mealService.updateMeal(id, meal);
//     }

//     @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//     @DeleteMapping("/{id}")
//     public void deleteMeal(@PathVariable String id) {
//         mealService.deleteMeal(id);
//     }
// }

