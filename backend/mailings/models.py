from django.db import models
from users.models import User


# Create your models here.
class UserActivationMailing(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username}'
