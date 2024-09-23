from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer
    permission_classes = [AllowAny]


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


def index(request):
    return render(request, 'index.html')