from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArticlesSerializer,MyTokenObtainPairSerializer,CustomUserSerializer
from .models import Articles
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView 
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
#
# Create your views here.

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()
    permission_classes =[IsAuthenticated,]
    


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class CustomUserCreate(APIView):
    permission_classes =[AllowAny,]
    authentication_classes = ()

    def post(self,request,format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = [AllowAny,]
    authentication_classes = ()

    def post(self,request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)