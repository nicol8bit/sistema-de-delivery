# Sistema de Delivery

[![GitHub](https://img.shields.io/badge/GitHub-nicol8bit%2Fsistema--de--delivery-blue?style=for-the-badge&logo=github)](https://github.com/nicol8bit/sistema-de-delivery.git)

## 📝 Descrição do Sistema

Este projeto consiste na **Documentação e Modelagem de um Sistema de Delivery** completo, aplicando os principais conceitos e artefatos da disciplina de Engenharia de Software. O sistema visa simular as funcionalidades essenciais de plataformas de entrega de comida, como iFood e UberEats, abrangendo as perspectivas do Cliente, Restaurante e Entregador.

O objetivo principal foi criar um conjunto robusto de artefatos de engenharia de software, desde a fase de levantamento de requisitos até a modelagem estrutural e comportamental, além de uma implementação parcial da interface.

## 🚀 Tecnologias Utilizadas

A stack tecnológica foi definida para garantir **escalabilidade, manutenibilidade e alto desempenho**, utilizando ferramentas maduras e amplamente suportadas pela comunidade.

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Linguagem** | PHP | Linguagem madura e amplamente utilizada no desenvolvimento web. |
| **Backend** | Laravel | Framework MVC que impõe uma arquitetura limpa e organizada, acelerando o desenvolvimento com recursos nativos. |
| **Frontend** | HTML5, CSS3, JavaScript | Padrões universais para a construção de interfaces web, garantindo portabilidade e compatibilidade. |
| **Banco de Dados** | MySQL | SGBD relacional de código aberto, conhecido por sua confiabilidade, alta performance e integração otimizada com PHP/Laravel. |

## ⚙️ Como Executar o Projeto

Embora o projeto contenha uma implementação parcial (`/codigos`), a execução completa do sistema requer a configuração do ambiente de desenvolvimento.

### Pré-requisitos

Para rodar o projeto, você precisará dos seguintes componentes:

*   **Servidor Local:** XAMPP (ou WAMP/MAMP)
*   **Ambiente de Execução:** PHP
*   **Banco de Dados:** MySQL
*   **Gerenciador de Dependências:** Composer

### Passos para Instalação e Configuração

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/nicol8bit/sistema-de-delivery.git
    cd sistema-de-delivery
    ```

2.  **Configurar o Servidor Local:**
    *   Instale e inicie o **XAMPP** (ou similar).
    *   Mova o conteúdo do repositório para a pasta `htdocs` (ou `www`) do seu servidor local.

3.  **Instalar Dependências (Laravel):**
    *   Navegue até a pasta raiz do projeto no terminal.
    *   Execute o Composer para instalar as dependências do Laravel (assumindo que a estrutura completa do Laravel será adicionada posteriormente):
    ```bash
    composer install
    ```

4.  **Configurar o Banco de Dados:**
    *   Crie um banco de dados MySQL (ex: `sistema_delivery`).
    *   Configure o arquivo de ambiente (`.env`) do Laravel com as credenciais do seu banco de dados.

5.  **Executar a Aplicação:**
    *   Inicie o servidor de desenvolvimento do Laravel (se a estrutura completa estiver presente):
    ```bash
    php artisan serve
    ```
    *   Alternativamente, acesse a pasta `/codigos` via seu navegador (ex: `http://localhost/sistema-de-delivery/codigos/index.html`) para visualizar a implementação parcial da interface.

## 📂 Estrutura de Pastas

O repositório está organizado para separar claramente os artefatos de documentação da implementação do código.

```
sistema-de-delivery/
├── codigos/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── documentacao/
│   ├── Casos de Uso - Sistema de Delivery.md
│   ├── Casos de Uso Completo - Sistema de Delivery.png
│   ├── Cronograma de Desenvolvimento Semanal - Sistema de Delivery.md
│   ├── Diagrama de Classes de Dados - Sistema de Delivery.png
│   ├── Diagrama de Classes do Sistema - Sistema de Delivery.png
│   ├── Diagrama de Sequência - Realizar Pedido - Sistema de Delivery.png
│   ├── MER - Sistema de Delivery.png
│   ├── Necessidades Tecnológicas - Sistema de Delivery.md
│   ├── Requisitos - Sistema de Delivery.md
│   └── Tecnologias de Desenvolvimento - Sistema de Delivery.md
└── README.md
```

## 📑 Artefatos de Engenharia de Software

Todos os artefatos de documentação e modelagem exigidos pelo projeto estão disponíveis na pasta [`/documentacao`](./documentacao).

| Artefato | Descrição | Arquivo |
| :--- | :--- | :--- |
| **Requisitos** | Requisitos Funcionais e Não Funcionais do sistema. | [`Requisitos - Sistema de Delivery.md`](./documentacao/Requisitos%20-%20Sistema%20de%20Delivery.md) |
| **Casos de Uso** | Documentação e Diagrama Completo de Casos de Uso. | [`Casos de Uso - Sistema de Delivery.md`](./documentacao/Casos%20de%20Uso%20-%20Sistema%20de%20Delivery.md) |
| **Diagrama de Classes** | Diagrama de Classes de Dados (Modelo Lógico) e Diagrama de Classes do Sistema. | [`Diagrama de Classes de Dados - Sistema de Delivery.png`](./documentacao/Diagrama%20de%20Classes%20de%20Dados%20-%20Sistema%20de%20Delivery.png) |
| **MER** | Modelo Entidade-Relacionamento (MER) do banco de dados. | [`MER - Sistema de Delivery.png`](./documentacao/MER%20-%20Sistema%20de%20Delivery.png) |
| **Diagrama de Sequência** | Diagrama de Sequência para o fluxo de "Realizar Pedido". | [`Diagrama de Sequência - Realizar Pedido - Sistema de Delivery.png`](./documentacao/Diagrama%20de%20Sequ%C3%AAncia%20-%20Realizar%20Pedido%20-%20Sistema%20de%20Delivery.png) |
| **Cronograma** | Cronograma de Desenvolvimento Semanal. | [`Cronograma de Desenvolvimento Semanal - Sistema de Delivery.md`](./documentacao/Cronograma%20de%20Desenvolvimento%20Semanal%20-%20Sistema%20de%20Delivery.md) |
| **Necessidades Tecnológicas** | Detalhamento do ambiente de execução e requisitos de hardware. | [`Necessidades Tecnológicas - Sistema de Delivery.md`](./documentacao/Necessidades%20Tecnol%C3%B3gicas%20-%20Sistema%20de%20Delivery.md) |

---

*Desenvolvido como parte da disciplina de Engenharia de Software 1.*
