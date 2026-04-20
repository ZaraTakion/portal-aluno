from rest_framework.permissions import BasePermission

class IsAluno(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'aluno'

class IsProfessor(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'professor'

class IsResponsavel(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'responsavel'