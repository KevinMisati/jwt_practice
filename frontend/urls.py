from django.urls import path
from .views import index_view

urlpatterns = [
    path('',index_view),
    path(r'^.*/$', index_view)
]