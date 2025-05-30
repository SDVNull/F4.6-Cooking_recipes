from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Dish(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    ingredients = models.TextField()
    instructions = models.TextField()
    cooking_time = models.PositiveIntegerField()
