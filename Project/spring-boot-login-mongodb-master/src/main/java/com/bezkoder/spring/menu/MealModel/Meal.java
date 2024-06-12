 package com.bezkoder.spring.menu.MealModel;


 import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

 @Document(collection ="meals")
 public class Meal {

     @Id
     private String id;
     private String name;
     private String description;
     private double price;
     private String picture;
     private int quantity;
     private String category;

     public String getId() {
         return id;
     }

     public void setId(String id) {
         this.id = id;
     }

     public String getName() {
         return name;
     }

     public void setName(String name) {
         this.name = name;
     }

     public String getDescription() {
         return description;
     }

     public void setDescription(String description) {
         this.description = description;
     }

     public double getPrice() {
         return price;
     }

     public void setPrice(double price) {
         this.price = price;
     }

     public String getPicture() {
         return picture;
     }

     public void setPicture(String picture) {
         this.picture = picture;
     }

     public int getQuantity() {
         return quantity;
     }

     public void setQuantity(int quantity) {
         this.quantity = quantity;
     }

     public String getCategory() {
         return category;
     }

     public void setCategory(String category) {
         this.category = category;
     }
 }
