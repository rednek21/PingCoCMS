from rest_framework import serializers
from users.models import User

from djoser.serializers import UserSerializer as US


class UserSerializer(US):

    class Meta:
        model = User
        fields = ("id", "first_name", "last_name", "username", "email", "is_active")
