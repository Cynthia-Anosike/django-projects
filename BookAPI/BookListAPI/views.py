from django.shortcuts import render
# from django.db import IntegrityError
# from django.http import HttpResponse, JsonResponse
from .models import Book
from .serializers import BookSerializer
from rest_framework import generics
# from django.views.decorators.csrf import csrf_exempt
# from django.forms.models import model_to_dict

# Create your views here.

class BookView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class SingleBookView(generics.RetrieveUpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer