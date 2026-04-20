from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('aluno', 'Aluno'),
        ('professor', 'Professor'),
        ('responsavel', 'Responsável'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    matricula = models.CharField(max_length=20, unique=True, null=True, blank=True)

    def __str__(self):
        return self.username