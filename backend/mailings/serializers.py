from rest_framework import serializers

from mailings.models import UserActivationMailing


class UserActivationMailingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivationMailing
        fields = ['user', 'verified']

