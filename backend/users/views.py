from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, RetrieveUpdateAPIView

# from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

from users.models import User
from users.serializers import UserSerializer


# Create your views here.
class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    model = User
    serializer_class = UserSerializer

    # filterset_fields = ['id', 'username', 'is_active']
    # search_fields = ['username', 'email', 'first_name', 'last_name']

    # filter_backends = [
    #     DjangoFilterBackend,
    #     SearchFilter
    # ]

    permission_classes = [
        permissions.AllowAny
        # permissions.IsAuthenticated
    ]


class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [
        permissions.AllowAny
    ]


class UserDestroyAPIView(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [
        permissions.AllowAny
    ]


class UserRetrieveAPIView(RetrieveAPIView):
    # queryset = User.objects.filter(is_active=True)
    queryset = User.objects.all()
    model = User
    serializer_class = UserSerializer

    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]
