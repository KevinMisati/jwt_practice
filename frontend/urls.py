from django import urls
from django.conf.urls import url
from django.urls import path
from django.urls.conf import re_path
from .views import index_view

urlpatterns = [
    path('',index_view),
    path('login/', index_view),
    path('signup/', index_view),
]