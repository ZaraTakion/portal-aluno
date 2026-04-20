from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .permissions import IsAluno

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAluno])
def perfil(request):
    user = request.user

    return Response({
        "username": user.username,
        "role": user.role
    })