from django.conf import settings
from django.http import HttpResponseNotFound

from djoser import email
from rest_framework import permissions
from rest_framework.generics import get_object_or_404, UpdateAPIView

from rest_framework.views import APIView

from mailings.models import UserActivationMailing
from mailings.serializers import UserActivationMailingSerializer


from django.contrib.auth.tokens import default_token_generator
from djoser import utils

from django.utils import timezone

from users.models import User

from rest_framework.response import Response
from rest_framework import status


class UserActivationEmail(email.ActivationEmail):
    template_name = 'mailings/user_activation.html'
    user = None

    def send(self, to, *args, **kwargs):
        try:
            self.user = User.objects.get(email=str(to[0]))
            UserActivationMailing.objects.create(user=self.user, created_at=timezone.now(), verified=False)
            super().send(to, *args, **kwargs)
        except User.DoesNotExist:
            return HttpResponseNotFound("User not found")


class UserActivationMailingVerifyAPIView(UpdateAPIView):
    queryset = UserActivationMailing.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserActivationMailingSerializer

    def get_object(self):
        user_id = self.request.data.get('user')

        mailing = get_object_or_404(UserActivationMailing, user_id)
        return mailing
