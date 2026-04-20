# Arquitetura do Sistema

## Modelo geral

Frontend (React) → Backend (Django REST) → Banco (PostgreSQL)

## Autenticação
JWT com controle de acesso por tipo de usuário (RBAC)

## Usuários
- Aluno
- Professor
- Responsável

## Módulos
- Autenticação
- Acadêmico (notas, frequência)
- Financeiro
- Perfil