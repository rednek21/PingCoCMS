from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)

    class Meta:
        db_table = "user"
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        # ordering =

    def __str__(self):
        # return f'{self.last_name} {self.first_name}'
        return f'{self.username}'
