from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    desc = models.TextField()

    def __str__(self):
        return self.title

class CustomUser(AbstractUser):
    fav_color = models.CharField(max_length=120)
